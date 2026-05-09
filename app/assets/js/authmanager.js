/**
 * AuthManager
 *
 * Anubis World is Supabase-account based. The launcher stores any number of
 * "offline" entries in its local auth-database whose UUID is derived from
 * the Minecraft nick — that's what the JVM launch flow consumes.
 *
 * On logout we drop the local entry. The Supabase session is shared across
 * all entries (one-session-per-app), so we only sign out of Supabase when
 * the LAST account is removed — otherwise the remaining entries would lose
 * their session even though the user only meant to drop one.
 *
 * @module authmanager
 */
const ConfigManager  = require('./configmanager')
const sb             = require('./supabaseclient')
const { LoggerUtil } = require('helios-core')

const log = LoggerUtil.getLogger('AuthManager')

/**
 * Remove an offline / Supabase-derived account from the local auth database.
 *
 * @param {string} uuid The UUID of the account to be removed.
 * @param {boolean} [isLastAccount] If this is the only account left, also
 *        clear the Supabase session so the next visit lands on the auth
 *        screen instead of a stale logged-in shell.
 * @returns {Promise.<void>}
 */
exports.removeOfflineAccount = async function(uuid, isLastAccount = false){
    try {
        ConfigManager.removeAuthAccount(uuid)
        ConfigManager.save()
        if(isLastAccount){
            try {
                await sb.auth.signOut()
            } catch (e){
                log.warn('Supabase signOut failed (non-fatal):', e?.message)
            }
        }
    } catch (err){
        log.error('Error while removing account', err)
        throw err
    }
}
