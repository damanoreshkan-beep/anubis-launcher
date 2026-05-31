/**
 * Battle Pass session tracking.
 *
 * Two parallel kinds:
 *   - 'lobby' — launcher window open with a signed-in user
 *   - 'game'  — Java process running
 *
 * Both go through Postgres RPC (play_session_start/ping/end), so timestamps
 * are server-authoritative — the client can't lie about elapsed seconds.
 * A 60s ping keeps the session alive; if the launcher crashes, the server
 * auto-closes any session older than 10 min on the next start call.
 */
'use strict'

const { LoggerUtil } = require('helios-core')
const sb = require('./supabaseclient')

const log = LoggerUtil.getLogger('%c[PlaySession]', 'color: #a78bfa; font-weight: bold')

const PING_INTERVAL_MS = 60_000
const state = { lobby: null, game: null }
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
 * Current "live" session — game wins over lobby if both are open. Used by the
 * HUD to drive the live timer. The startedAt is wall-clock from this process,
 * so it can drift a few ms from server-side started_at, but only affects the
 * displayed counter — credit is computed server-side at end().
 */
function currentSession() {
    return state.game ?? state.lobby ?? null
}

async function fetchProgress() {
    const { data: { session } } = await sb.auth.getSession()
    if (!session) return null
    const [progressRes, tiersRes, openRes, claimedRes] = await Promise.all([
        sb.from('play_progress').select('*').maybeSingle(),
        sb.from('play_tiers').select('level,code,reward_type,reward_payload,rarity').order('level'),
        // Server-side started_at for any open sessions — anchors live ticking
        // so a renderer reload doesn't reset the on-screen timer to zero.
        sb.from('play_sessions').select('kind,started_at').is('ended_at', null),
        sb.from('play_rewards_claimed').select('level,claimed_at'),
    ])
    if (progressRes.error) throw progressRes.error
    if (tiersRes.error) throw tiersRes.error
    if (openRes.error) throw openRes.error
    if (claimedRes.error) throw claimedRes.error
    const progress = progressRes.data ?? {
        game_seconds: 0, lobby_seconds: 0, effective_seconds: 0,
        level: 0, xp_in_level: 0, xp_per_level: 3600,
    }
    const openSessions = (openRes.data || []).map(s => ({
        kind: s.kind,
        startedAtMs: new Date(s.started_at).getTime(),
    }))
    const claimedLevels = new Set((claimedRes.data || []).map(r => r.level))
    return { progress, tiers: tiersRes.data, openSessions, claimedLevels }
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

// `_all` exposes both session slots so the HUD can sum live elapsed across
// lobby + game when projecting effective seconds. Not for outside use.
function _all() { return state }

module.exports = { start, end, claim, subscribe, currentSession, fetchProgress, _all }
