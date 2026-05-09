// Anubis World auth screen — thin shell around the shared `<anubis-auth>`
// Web Component (built from /anubis-auth-widget). The widget owns the full
// auth UI (Discord/email/OTP/password); this script only:
//   - exposes the legacy globals uibinder.js + settings.js still call into
//     (loginOptionsCancelEnabled, loginOptionsViewOn*),
//   - shows the v1.1 → v1.2 migration banner,
//   - listens for the widget's `anubis-auth-success` event to register the
//     offline account and route to the post-login view,
//   - handles the Settings → Add Account cancel button,
//   - mounts the widget element with the right Supabase + locale attributes.
//
// IMPORTANT: keep `loginOptionsCancelEnabled` defined BEFORE any require —
// uibinder.js calls it during boot and a require failure mid-script would
// otherwise leave the splash blocked.

let loginOptionsViewOnLoginSuccess
let loginOptionsViewOnLoginCancel
let loginOptionsViewOnCancel
let loginOptionsViewCancelHandler

const loginOptionsCancelContainer = document.getElementById('loginOptionCancelContainer')
const loginOptionsCancelButton    = document.getElementById('loginOptionCancelButton')

function loginOptionsCancelEnabled(val){
    if(val){
        $(loginOptionsCancelContainer).show()
    } else {
        $(loginOptionsCancelContainer).hide()
    }
}

if(loginOptionsCancelButton){
    loginOptionsCancelButton.onclick = () => {
        switchView(getCurrentView(), loginOptionsViewOnCancel, 500, 500, () => {
            if(loginOptionsViewCancelHandler != null){
                loginOptionsViewCancelHandler()
                loginOptionsViewCancelHandler = null
            }
        })
    }
}

// Renderer-global script scope is shared with uicore.js, so suffix any
// imports they already declare to avoid "Identifier already declared" errors.
const { LoggerUtil: LoggerUtil_loginOptions } = require('helios-core')
const ConfigManager_loginOptions = require('./assets/js/configmanager')
const sb_loginOptions = require('./assets/js/supabaseclient')

const logger_loginOptions = LoggerUtil_loginOptions.getLogger('LoginOptions')

// ── Migration banner — pre-fill with the v1.1 guest nick if present ─────────
const migrationBanner    = document.getElementById('migrationBanner')
const migrationNickValue = document.getElementById('migrationNickValue')
const pendingMigrationNick = ConfigManager_loginOptions.getPendingMigrationNick()
if(pendingMigrationNick){
    if(migrationBanner) migrationBanner.classList.remove('hidden')
    if(migrationNickValue) migrationNickValue.textContent = pendingMigrationNick
}

// ── Mount the widget ────────────────────────────────────────────────────────
// Map our locale ids (en_US, ru_RU, uk_UA, …) to the 2-char codes the widget
// understands (en, ru, uk, …).
const locale = ConfigManager_loginOptions.getCurrentLanguage() || 'en_US'
const widgetLang = locale.slice(0, 2).toLowerCase()

const mountEl = document.getElementById('authWidgetMount')

function createWidgetElement(){
    const widget = document.createElement('anubis-auth')
    widget.setAttribute('supabase-url', sb_loginOptions.SUPABASE_URL)
    widget.setAttribute('supabase-key', sb_loginOptions.SUPABASE_KEY)
    widget.setAttribute('lang', widgetLang)
    widget.setAttribute('launcher-protocol', 'anubisworld')
    widget.setAttribute('mode', 'launcher')
    return widget
}

if(mountEl && !mountEl.querySelector('anubis-auth')){
    mountEl.appendChild(createWidgetElement())
}

// Force the widget back to its fresh "start" screen — used when entering the
// loginOptions view from Settings → Add Account. Without this, a user who
// already authed once would re-mount with their previous session in
// localStorage and the widget would jump straight to the post-auth state
// (rendered as an empty box in launcher mode). Sign out tears down the
// Supabase session; replacing the element drops any in-memory React state
// (stage='email', a half-typed code, etc.).
window.resetAuthWidget = async () => {
    try { await sb_loginOptions.auth.signOut() } catch (_) { /* ignore */ }
    if(!mountEl) return
    mountEl.innerHTML = ''
    mountEl.appendChild(createWidgetElement())
}

// One-time bootstrap of the widget bundle. The ES module side-effect
// registers the `<anubis-auth>` custom element. Loading via dynamic import
// from the renderer keeps the bundle out of the synchronous boot path.
if(!window.__anubisAuthBundleLoaded){
    window.__anubisAuthBundleLoaded = true
    const s = document.createElement('script')
    s.type = 'module'
    s.src = './assets/js/vendor/anubis-auth.js'
    s.onerror = () => logger_loginOptions.error('Failed to load anubis-auth widget bundle')
    document.head.appendChild(s)
}

// ── Hand-off: widget signals success → register offline account + advance ──
async function finishAuth(nick){
    const authAcc = ConfigManager_loginOptions.addOfflineAuthAccount(nick)
    ConfigManager_loginOptions.save()
    if(typeof updateSelectedAccount === 'function'){
        updateSelectedAccount(authAcc)
    }
    if(loginOptionsViewOnLoginSuccess){
        switchView(getCurrentView(), loginOptionsViewOnLoginSuccess, 500, 500, async () => {
            if(loginOptionsViewOnLoginSuccess === '#settingsContainer' && typeof prepareSettings === 'function'){
                await prepareSettings()
            }
        })
    }
}

// Discord OAuth bridge — the widget can't redirect the renderer to Discord,
// so it hands us the Supabase OAuth URL and we round-trip it through a
// child BrowserWindow (`discord-auth-open` IPC). The IPC returns the
// access/refresh tokens; we hand them back to the widget which calls
// `setSession` on its own Supabase client.
document.addEventListener('anubis-auth-discord-request', async (e) => {
    const { url, onTokens, onError } = e.detail || {}
    if(!url || typeof onTokens !== 'function'){
        logger_loginOptions.warn('anubis-auth-discord-request missing url/onTokens', e.detail)
        return
    }
    try {
        const { ipcRenderer } = require('electron')
        const tokens = await ipcRenderer.invoke('discord-auth-open', url)
        // `null` = user closed the popup; treat as silent abort, the widget
        // will simply re-enable its button.
        await onTokens(tokens || null)
    } catch (err){
        logger_loginOptions.error('Discord OAuth bridge failed:', err)
        if(typeof onError === 'function') onError(String(err?.message || err))
    }
})

document.addEventListener('anubis-auth-success', async (e) => {
    const nick = e.detail?.nick
    if(!nick){
        logger_loginOptions.warn('anubis-auth-success without nick — ignoring', e.detail)
        return
    }
    logger_loginOptions.info('Widget reported successful auth, nick:', nick)
    try {
        await finishAuth(nick)
    } catch (err){
        logger_loginOptions.error('finishAuth failed:', err)
    }
})

// Sign-out: settings → Account → Logout calls AuthManager.removeOfflineAccount
// which clears the local entry; this also tears down the Supabase session so
// the next visit to loginOptions starts on the auth screen, not a stale shell.
window.signOutSupabase = async () => {
    try {
        await sb_loginOptions.auth.signOut()
        logger_loginOptions.info('Supabase session cleared.')
    } catch (e){
        logger_loginOptions.warn('Supabase signOut failed (non-fatal):', e?.message)
    }
}
