// Single Supabase client instance shared across the launcher (loginOptions
// screen, authmanager, future profile screens). Both code paths must
// reach the same client so persistSession + signOut behave consistently.

const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://ckfinpywlpllvhvzagnw.supabase.co'
const SUPABASE_KEY = 'sb_publishable_Bl6csDnCJ5LIJsIsCafMYQ_5zwLTgvR'

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
})

module.exports = sb
module.exports.SUPABASE_URL = SUPABASE_URL
module.exports.SUPABASE_KEY = SUPABASE_KEY
