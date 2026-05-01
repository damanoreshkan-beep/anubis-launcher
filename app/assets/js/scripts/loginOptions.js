// Anubis World native auth screen — Supabase email + password (Discord OAuth
// in a follow-up patch since it needs an Electron deep-link callback).
//
// IMPORTANT: keep the globals (`loginOptionsCancelEnabled`,
// `loginOptionsViewOnLoginSuccess`, ...) declared and bound BEFORE any
// `require` that could throw. uibinder.js and settings.js call into these
// during the boot sequence; if a require failure stops this script halfway,
// we'd block the splash screen. Failing soft is better.

// View routing globals (set by callers — settings.js, uibinder.js).
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

// Migration: v1.1 → v1.2 users had a guest "offline" account stored locally.
// We surface that nickname as a banner and pre-fill it in the Sign Up form so
// the player can keep their server-side progress (offline UUID is derived
// from the nick).

// `<script>` tags in this Electron renderer share one global scope, so we
// rename any imports that uicore.js / settings.js already declare to avoid
// "Identifier already declared" syntax errors.
const { LoggerUtil: LoggerUtil_loginOptions } = require('helios-core')
const ConfigManager_loginOptions = require('./assets/js/configmanager')
const Lang_loginOptions = require('./assets/js/langloader')

const logger_loginOptions = LoggerUtil_loginOptions.getLogger('LoginOptions')
const NICK_RE = /^[a-zA-Z0-9_]{3,16}$/

let sb_loginOptions
try {
    sb_loginOptions = require('./assets/js/supabaseclient')
} catch (err){
    logger_loginOptions.error('Failed to load Supabase client:', err)
}

const tabSignIn          = document.getElementById('loginTabSignIn')
const tabSignUp          = document.getElementById('loginTabSignUp')
const paneSignIn         = document.getElementById('signInPane')
const paneSignUp         = document.getElementById('signUpPane')
const signInEmail        = document.getElementById('signInEmail')
const signInPassword     = document.getElementById('signInPassword')
const signInSubmit       = document.getElementById('signInSubmit')
const signInError        = document.getElementById('signInError')
const signInForgot       = document.getElementById('signInForgot')
const signUpEmail        = document.getElementById('signUpEmail')
const signUpPassword     = document.getElementById('signUpPassword')
const signUpNick         = document.getElementById('signUpNick')
const signUpSubmit       = document.getElementById('signUpSubmit')
const signUpError        = document.getElementById('signUpError')
const migrationBanner    = document.getElementById('migrationBanner')
const migrationNickValue = document.getElementById('migrationNickValue')

// ── Migration: surface the saved guest nick as a banner + prefill ───────────
const pendingMigrationNick = ConfigManager_loginOptions.getPendingMigrationNick()
if(pendingMigrationNick){
    if(migrationBanner) migrationBanner.classList.remove('hidden')
    if(migrationNickValue) migrationNickValue.textContent = pendingMigrationNick
    if(signUpNick) signUpNick.value = pendingMigrationNick
}

// ── Tabs ────────────────────────────────────────────────────────────────────
function setActiveTab(name){
    [[tabSignIn, 'signin', paneSignIn], [tabSignUp, 'signup', paneSignUp]].forEach(([btn, id, pane]) => {
        const active = id === name
        btn.classList.toggle('active', active)
        pane.style.display = active ? '' : 'none'
    })
}
tabSignIn.onclick = () => setActiveTab('signin')
tabSignUp.onclick = () => setActiveTab('signup')
// Default to Sign Up if migrating (so the prefilled nick is visible),
// otherwise Sign In.
setActiveTab(pendingMigrationNick ? 'signup' : 'signin')

// ── Helpers ─────────────────────────────────────────────────────────────────
function setBusy(btn, busy){
    btn.disabled = busy
    btn.classList.toggle('busy', busy)
}

async function nickAvailable(nick){
    const { data } = await sb_loginOptions.from('profiles').select('id').eq('minecraft_nick', nick).maybeSingle()
    return !data
}

/**
 * Finalise an authenticated session: register the offline-mode account that
 * the launch flow expects (UUID is derived from the nick) and advance to the
 * post-login view.
 *
 * We append rather than replace — the launcher supports multiple offline
 * entries simultaneously so the user can switch between Minecraft nicks
 * from the settings → Account tab. The migration banner is informational
 * only; if the user no longer wants the old guest entry, they can remove it
 * via the Logout button on its card.
 */
async function finishAuth(nick){
    const authAcc = ConfigManager_loginOptions.addOfflineAuthAccount(nick)
    ConfigManager_loginOptions.save()
    if(typeof updateSelectedAccount === 'function'){
        updateSelectedAccount(authAcc)
    }
    if(loginOptionsViewOnLoginSuccess){
        // When returning to the settings view, re-render its account list so
        // the newly added entry appears (and can be selected).
        switchView(getCurrentView(), loginOptionsViewOnLoginSuccess, 500, 500, async () => {
            if(loginOptionsViewOnLoginSuccess === '#settingsContainer' && typeof prepareSettings === 'function'){
                await prepareSettings()
            }
        })
    }
}

// ── Sign In ─────────────────────────────────────────────────────────────────
paneSignIn.addEventListener('submit', async (e) => {
    e.preventDefault()
    signInError.textContent = ''
    setBusy(signInSubmit, true)
    try {
        const email = signInEmail.value.trim()
        const password = signInPassword.value
        const { data, error } = await sb_loginOptions.auth.signInWithPassword({ email, password })
        if(error){
            signInError.textContent = error.message
            return
        }
        // Fetch profile.minecraft_nick — it must exist, else send to set-nick.
        const { data: profile } = await sb_loginOptions.from('profiles').select('minecraft_nick').eq('id', data.user.id).maybeSingle()
        if(!profile?.minecraft_nick){
            // Edge case: account exists but has no nick (e.g. created via
            // OAuth on the website but never finalised). Switch to Sign Up
            // pane with the nick field empty so the user picks one — Supabase
            // sees the same user.id, the upsert will write it, and we then
            // proceed exactly as for a fresh registration.
            setActiveTab('signup')
            signUpEmail.value = email
            signUpPassword.value = password
            signUpError.textContent = Lang_loginOptions.queryJS('loginOptions.needNickname')
            return
        }
        logger_loginOptions.info('Sign in successful, nick:', profile.minecraft_nick)
        await finishAuth(profile.minecraft_nick)
    } catch (err){
        logger_loginOptions.error('Sign in failed', err)
        signInError.textContent = String(err?.message || err)
    } finally {
        setBusy(signInSubmit, false)
    }
})

if(signInForgot){
    signInForgot.onclick = async () => {
        const email = signInEmail.value.trim()
        if(!email){
            signInError.textContent = Lang_loginOptions.queryJS('loginOptions.forgotEmailFirst')
            return
        }
        signInError.textContent = ''
        const { error } = await sb_loginOptions.auth.resetPasswordForEmail(email)
        if(error){
            signInError.textContent = error.message
        } else {
            signInError.textContent = Lang_loginOptions.queryJS('loginOptions.forgotSent')
        }
    }
}

// ── Sign Up ─────────────────────────────────────────────────────────────────
paneSignUp.addEventListener('submit', async (e) => {
    e.preventDefault()
    signUpError.textContent = ''
    const email = signUpEmail.value.trim()
    const password = signUpPassword.value
    const nick = signUpNick.value.trim()
    if(!NICK_RE.test(nick)){
        signUpError.textContent = Lang_loginOptions.queryJS('loginOptions.nickFormatError')
        return
    }
    setBusy(signUpSubmit, true)
    try {
        if(!await nickAvailable(nick)){
            signUpError.textContent = Lang_loginOptions.queryJS('loginOptions.nickTakenError')
            return
        }
        const { data, error } = await sb_loginOptions.auth.signUp({ email, password })
        if(error){
            signUpError.textContent = error.message
            return
        }
        // No user (email confirmation required, but we have it disabled) → fall back to sign-in
        const userId = data.user?.id
        if(!userId){
            signUpError.textContent = Lang_loginOptions.queryJS('loginOptions.checkEmail')
            return
        }
        const { error: pErr } = await sb_loginOptions.from('profiles').upsert({ id: userId, minecraft_nick: nick })
        if(pErr){
            signUpError.textContent = pErr.message
            return
        }
        logger_loginOptions.info('Sign up successful, nick:', nick)
        await finishAuth(nick)
    } catch (err){
        logger_loginOptions.error('Sign up failed', err)
        signUpError.textContent = String(err?.message || err)
    } finally {
        setBusy(signUpSubmit, false)
    }
})

// ── Discord OAuth ───────────────────────────────────────────────────────────
const signInDiscord = document.getElementById('signInDiscord')
if(signInDiscord){
    signInDiscord.onclick = async () => {
        signInError.textContent = ''
        signInDiscord.disabled = true
        try {
            // Get the OAuth URL from Supabase without redirecting the renderer.
            const { data, error } = await sb_loginOptions.auth.signInWithOAuth({
                provider: 'discord',
                options: {
                    skipBrowserRedirect: true,
                    // Supabase still requires a redirectTo it can return to
                    // after the provider round-trip; the embedded window will
                    // intercept the URL before the page tries to load.
                    redirectTo: 'https://ckfinpywlpllvhvzagnw.supabase.co/auth/v1/callback',
                },
            })
            if(error || !data?.url){
                signInError.textContent = error?.message || 'Discord OAuth init failed'
                return
            }
            const { ipcRenderer } = require('electron')
            const tokens = await ipcRenderer.invoke('discord-auth-open', data.url)
            if(!tokens){
                // User closed the window — silent abort.
                return
            }
            const { error: setErr } = await sb_loginOptions.auth.setSession(tokens)
            if(setErr){
                signInError.textContent = setErr.message
                return
            }
            const { data: { user } } = await sb_loginOptions.auth.getUser()
            if(!user){
                signInError.textContent = 'No user returned from Discord auth'
                return
            }
            const { data: profile } = await sb_loginOptions.from('profiles').select('minecraft_nick').eq('id', user.id).maybeSingle()
            if(!profile?.minecraft_nick){
                // First-time Discord user — drop them into Sign Up with a pre-
                // filled nick suggestion (Discord username, sanitised) so they
                // only have to confirm.
                setActiveTab('signup')
                signUpEmail.value = user.email || ''
                signUpEmail.disabled = true
                const suggested = (user.user_metadata?.user_name || user.user_metadata?.preferred_username || '').replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 16)
                if(suggested && !signUpNick.value){
                    signUpNick.value = suggested
                }
                signUpError.textContent = Lang_loginOptions.queryJS('loginOptions.needNickname')
                return
            }
            logger_loginOptions.info('Discord sign in successful, nick:', profile.minecraft_nick)
            await finishAuth(profile.minecraft_nick)
        } catch (err){
            logger_loginOptions.error('Discord OAuth failed', err)
            signInError.textContent = String(err?.message || err)
        } finally {
            signInDiscord.disabled = false
        }
    }
}

// ── Cancel (when called from Settings → Add account) ─────────────────────────
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

// Sign-out is initiated from Settings → Account → Logout. The button there
// calls AuthManager.removeOfflineAccount which only clears the local entry;
// here we also tear down the Supabase session so the next visit lands on
// the auth screen instead of a stale logged-in shell.
window.signOutSupabase = async () => {
    try {
        await sb_loginOptions.auth.signOut()
        logger_loginOptions.info('Supabase session cleared.')
    } catch (e){
        logger_loginOptions.warn('Supabase signOut failed (non-fatal):', e?.message)
    }
}
