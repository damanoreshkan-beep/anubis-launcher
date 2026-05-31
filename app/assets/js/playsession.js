/**
 * Battle Pass session tracking — daily VIP quest.
 *
 * Only ONE kind is tracked: 'game' (the Java process running). Lobby time
 * is not counted. Goal: play >= 5h in-game per day (Kyiv midnight reset);
 * accumulate 28 qualifying days to unlock VIP.
 *
 * Sessions go through Postgres RPC (play_session_start/ping/end) so
 * timestamps are server-authoritative — the client can't lie about
 * elapsed seconds. A 60s ping keeps the session alive; if the launcher
 * crashes, the server auto-closes any session older than 10 min on the
 * next start call. Quest progress is computed by play_vip_progress().
 */
'use strict'

const { LoggerUtil } = require('helios-core')
const sb = require('./supabaseclient')

const log = LoggerUtil.getLogger('%c[PlaySession]', 'color: #a78bfa; font-weight: bold')

const PING_INTERVAL_MS = 60_000
const state = { game: null }
const listeners = new Set()

function getClientVersion() {
    try { return require('@electron/remote').app.getVersion() } catch (_) { return null }
}

function emit(event) {
    for (const fn of listeners) { try { fn(event) } catch (_) { /* swallow */ } }
}

/**
 * Subscribe to lifecycle events: { type: 'start'|'end', kind: 'lobby'|'game',
 * sessionId, at: epoch_ms, row?: stats_row }. Returns unsubscribe fn.
 */
function subscribe(fn) {
    listeners.add(fn)
    return () => listeners.delete(fn)
}

/**
 * Current live game session, or null. Used by the HUD to tick the daily
 * timer. startedAt is wall-clock from this process; credit is computed
 * server-side at end().
 */
function currentSession() {
    return state.game ?? null
}

/**
 * Daily VIP quest progress.
 *   vip            — the single VIP tier row (or null)
 *   daysCompleted  — qualifying days so far
 *   daysNeeded     — goal (28)
 *   todaySeconds   — game seconds counted toward today (server-side, Kyiv day)
 *   dailyGoalSecs  — 5h in seconds
 *   todayDone      — already hit 5h today
 *   openGameStartMs— server started_at of the open game session (or null),
 *                    so the HUD can extrapolate today's seconds live without
 *                    resetting on a renderer reload
 *   claimed        — VIP already claimed?
 */
async function fetchProgress() {
    const { data: { session } } = await sb.auth.getSession()
    if (!session) return null
    const [vipRes, tierRes, openRes, claimedRes] = await Promise.all([
        sb.rpc('play_vip_progress'),
        sb.from('play_tiers').select('level,code,reward_type,reward_payload,rarity').limit(1).maybeSingle(),
        sb.from('play_sessions').select('started_at,last_ping_at').eq('kind', 'game').is('ended_at', null).limit(1).maybeSingle(),
        sb.from('play_rewards_claimed').select('level,claimed_at'),
    ])
    if (vipRes.error) throw vipRes.error
    if (tierRes.error) throw tierRes.error
    if (openRes.error) throw openRes.error
    if (claimedRes.error) throw claimedRes.error

    const v = (Array.isArray(vipRes.data) ? vipRes.data[0] : vipRes.data) || {}
    const vip = tierRes.data

    // Only treat an open game session as "live" if it was pinged recently.
    // A stale ping (>90s) means a crashed/orphan session — the server caps
    // its time at last_ping, so the HUD must not keep ticking it either.
    let openGameStartMs = null
    if (openRes.data) {
        const lastPingMs = new Date(openRes.data.last_ping_at).getTime()
        if (Date.now() - lastPingMs < 90_000) {
            openGameStartMs = new Date(openRes.data.started_at).getTime()
        }
    }

    return {
        vip,
        daysCompleted: v.days_completed ?? 0,
        daysNeeded: v.days_needed ?? 28,
        todaySeconds: v.today_seconds ?? 0,
        dailyGoalSecs: v.daily_goal_secs ?? 5 * 3600,
        todayDone: v.today_done ?? false,
        openGameStartMs,
        claimed: vip ? new Set((claimedRes.data || []).map(r => r.level)).has(vip.level) : false,
    }
}

async function claim(level) {
    const { data, error } = await sb.rpc('play_session_claim', { p_level: level })
    if (error) throw error
    return data
}

async function start(kind) {
    if (state[kind]) return state[kind].id
    const { data: { session } } = await sb.auth.getSession()
    if (!session) {
        log.info(`skip ${kind} start — not signed in`)
        return null
    }
    try {
        const { data: id, error } = await sb.rpc('play_session_start', {
            p_kind: kind,
            p_client_version: getClientVersion(),
        })
        if (error) throw error

        const ping = setInterval(() => {
            sb.rpc('play_session_ping', { p_session_id: id }).then(({ error }) => {
                if (error) log.warn(`${kind} ping failed:`, error.message)
            })
        }, PING_INTERVAL_MS)

        const startedAt = Date.now()
        state[kind] = { id, ping, startedAt }
        log.info(`${kind} session ${id} started`)
        emit({ type: 'start', kind, sessionId: id, at: startedAt })
        return id
    } catch (e) {
        log.warn(`${kind} start failed:`, e.message)
        return null
    }
}

async function end(kind) {
    const cur = state[kind]
    if (!cur) return null
    clearInterval(cur.ping)
    state[kind] = null
    try {
        const { data, error } = await sb.rpc('play_session_end', { p_session_id: cur.id })
        if (error) throw error
        const row = Array.isArray(data) ? data[0] : data
        log.info(`${kind} session ended:`, row)
        emit({ type: 'end', kind, sessionId: cur.id, at: Date.now(), row })
        return row
    } catch (e) {
        log.warn(`${kind} end failed:`, e.message)
        emit({ type: 'end', kind, sessionId: cur.id, at: Date.now(), row: null })
        return null
    }
}

module.exports = { start, end, claim, subscribe, currentSession, fetchProgress }
