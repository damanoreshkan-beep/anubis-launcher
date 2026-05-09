// Single Supabase client instance shared across the launcher (loginOptions
// screen, authmanager, future profile screens). Both code paths must
// reach the same client so persistSession + signOut behave consistently.

const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://ckfinpywlpllvhvzagnw.supabase.co'
const SUPABASE_KEY = 'sb_publishable_Bl6csDnCJ5LIJsIsCafMYQ_5zwLTgvR'

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
})

// Hand our client to anyone embedded in the launcher that asks for one
// (auth widget, cabinet widget, future ones). Multiple clients on the
// same page race on refresh-token rotation — when one client refreshes
// the access token, the others' cached refresh tokens become invalid
// and their next getSession() returns null, which surfaces as widgets
// flickering between signed-in and signed-out. Sharing one client
// avoids the race.
if (typeof document !== 'undefined') {
    document.addEventListener('anubis-need-supabase', (e) => {
        if (e?.detail && !e.detail.client) e.detail.client = sb
    })
}

module.exports = sb
module.exports.SUPABASE_URL = SUPABASE_URL
module.exports.SUPABASE_KEY = SUPABASE_KEY
