/**
 * Offline auth helper.
 *
 * Minecraft servers in online-mode=false trust any username the client sends,
 * but they identify the player by UUID for inventories, homes, balances, etc.
 * If we generate a random UUID every launch, the same nickname appears as a
 * *different* player each time — data is lost on every restart.
 *
 * Mojang's offline UUID scheme is deterministic: md5("OfflinePlayer:" + name),
 * coerced to UUID v3. Every client and server computes the same value, so the
 * player keeps their data across sessions. This is the scheme vanilla MC uses
 * when online-mode is disabled.
 *
 * The fix here is what was missing in the Python launcher (uuid1() regenerated
 * a time-based UUID on every launch, wiping the player's server state).
 */
const crypto = require('crypto')

function offlineUUID(username) {
    const hash = crypto.createHash('md5').update(`OfflinePlayer:${username}`).digest()
    hash[6] = (hash[6] & 0x0f) | 0x30  // version 3
    hash[8] = (hash[8] & 0x3f) | 0x80  // RFC 4122 variant
    const hex = hash.toString('hex')
    return [
        hex.slice(0, 8),
        hex.slice(8, 12),
        hex.slice(12, 16),
        hex.slice(16, 20),
        hex.slice(20, 32)
    ].join('-')
}

// Minecraft username rules: 3–16 chars, [a-zA-Z0-9_]
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,16}$/

function validateUsername(username) {
    if (!username || typeof username !== 'string') return false
    return USERNAME_REGEX.test(username.trim())
}

module.exports = {
    offlineUUID,
    validateUsername,
    USERNAME_REGEX
}
