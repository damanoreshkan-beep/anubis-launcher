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
const paneForgot = document.getElementById('forgotPane')
const tabsContainer = document.getElementById('loginOptionsTabs')
const loginDivider = document.querySelector('.loginDivider')
const loginDiscordButton = document.querySelector('.loginDiscordButton')

function setActiveTab(name){
    paneSignIn.style.display = name === 'signin' ? '' : 'none'
    paneSignUp.style.display = name === 'signup' ? '' : 'none'
    if(paneForgot) paneForgot.style.display = name === 'forgot' ? '' : 'none'
    tabSignIn.classList.toggle('active', name === 'signin')
    tabSignUp.classList.toggle('active', name === 'signup')
    // Tabs / Discord OAuth / divider only make sense on the canonical
    // sign-in & sign-up flows. Hide them while we're in the forgot-password
    // OTP exchange to keep the screen focused.
    const canonical = name === 'signin' || name === 'signup'
    if(tabsContainer)        tabsContainer.style.display       = canonical ? '' : 'none'
    if(loginDivider)         loginDivider.style.display        = canonical ? '' : 'none'
    if(loginDiscordButton)   loginDiscordButton.style.display  = canonical ? '' : 'none'
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

// ── Forgot password — OTP-based passwordless sign-in ───────────────────────
// Desktop launcher → email magic-link doesn't work cleanly. Instead we:
//   1. Send a one-time email containing a numeric code (Supabase OTP —
//      length is configured in the project, currently 8 digits).
//   2. User types the code; we verifyOtp({type:'email'}) → session restored.
//   3. From there, finishAuth runs exactly like a normal sign-in.
// User can change their password later via Settings → Profile.
const forgotEmail        = document.getElementById('forgotEmail')
const forgotSendCode     = document.getElementById('forgotSendCode')
const forgotCodeStep     = document.getElementById('forgotCodeStep')
const forgotEmailDisplay = document.getElementById('forgotEmailDisplay')
const forgotOtp          = document.getElementById('forgotOtp')
const forgotVerify       = document.getElementById('forgotVerify')
const forgotResend       = document.getElementById('forgotResend')
const forgotBack         = document.getElementById('forgotBack')
const forgotError        = document.getElementById('forgotError')

function forgotResetView(){
    forgotCodeStep.style.display = 'none'
    forgotSendCode.style.display = ''
    forgotEmail.disabled = false
    forgotOtp.value = ''
    forgotError.textContent = ''
}

if(signInForgot){
    signInForgot.onclick = () => {
        forgotResetView()
        forgotEmail.value = signInEmail.value.trim()
        setActiveTab('forgot')
    }
}

async function sendOtp(){
    const email = forgotEmail.value.trim()
    if(!email){
        forgotError.textContent = Lang_loginOptions.queryJS('loginOptions.forgotEmailFirst')
        return
    }
    forgotError.textContent = ''
    setBusy(forgotSendCode, true)
    try {
        const { error } = await sb_loginOptions.auth.signInWithOtp({
            email,
            options: { shouldCreateUser: false },
        })
        if(error){
            forgotError.textContent = error.message
            return
        }
        forgotEmailDisplay.textContent = email
        forgotEmail.disabled = true
        forgotCodeStep.style.display = ''
        forgotSendCode.style.display = 'none'
        forgotOtp.focus()
    } finally {
        setBusy(forgotSendCode, false)
    }
}
if(forgotSendCode) forgotSendCode.onclick = sendOtp
if(forgotResend) forgotResend.onclick = async () => {
    forgotEmail.disabled = false
    forgotCodeStep.style.display = 'none'
    forgotSendCode.style.display = ''
    await sendOtp()
}

if(forgotVerify){
    forgotVerify.onclick = async () => {
        forgotError.textContent = ''
        const email = forgotEmail.value.trim()
        const token = forgotOtp.value.trim()
        if(!/^\d{6,8}$/.test(token)){
            forgotError.textContent = Lang_loginOptions.queryJS('loginOptions.forgotInvalidCode')
            return
        }
        setBusy(forgotVerify, true)
        try {
            const { data, error } = await sb_loginOptions.auth.verifyOtp({ email, token, type: 'email' })
            if(error){
                forgotError.textContent = error.message
                return
            }
            const userId = data?.user?.id
            if(!userId){
                forgotError.textContent = 'No user'
                return
            }
            const { data: profile } = await sb_loginOptions.from('profiles').select('minecraft_nick').eq('id', userId).maybeSingle()
            if(!profile?.minecraft_nick){
                // Recovered into an account that has no nick yet — push to
                // sign-up pane to set one. Email is locked.
                setActiveTab('signup')
                signUpEmail.value = email
                signUpEmail.disabled = true
                signUpError.textContent = Lang_loginOptions.queryJS('loginOptions.needNickname')
                return
            }
            logger_loginOptions.info('OTP sign-in successful, nick:', profile.minecraft_nick)
            await finishAuth(profile.minecraft_nick)
        } catch (err){
            forgotError.textContent = String(err?.message || err)
        } finally {
            setBusy(forgotVerify, false)
        }
    }
}

if(forgotBack){
    forgotBack.onclick = () => {
        forgotResetView()
        setActiveTab('signin')
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
