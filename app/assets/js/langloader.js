const fs = require('fs-extra')
const path = require('path')
const toml = require('toml')
const merge = require('lodash.merge')

let lang

exports.loadLanguage = function(id){
    lang = merge(lang || {}, toml.parse(fs.readFileSync(path.join(__dirname, '..', 'lang', `${id}.toml`))) || {})
}

exports.query = function(id, placeHolders){
    let query = id.split('.')
    let res = lang
    for(let q of query){
        res = res[q]
    }
    let text = res === lang ? '' : res
    if (placeHolders) {
        Object.entries(placeHolders).forEach(([key, value]) => {
            text = text.replace(`{${key}}`, value)
        })
    }
    return text
}

exports.queryJS = function(id, placeHolders){
    return exports.query(`js.${id}`, placeHolders)
}

exports.queryEJS = function(id, placeHolders){
    return exports.query(`ejs.${id}`, placeHolders)
}

// Every locale supported by the launcher. `en_US` is the base/fallback — it is
// always loaded first so missing keys in a user locale silently fall through.
// Keep this list in sync with app/assets/lang/*.toml.
exports.SUPPORTED_LOCALES = ['en_US', 'ru_RU', 'uk_UA', 'de_DE', 'pl_PL']

exports.setupLanguage = function(locale){
    // Base English pack — fallback for keys missing in the user locale.
    exports.loadLanguage('en_US')

    // User locale overlay (skip if it's already English or unknown).
    if(locale && locale !== 'en_US' && exports.SUPPORTED_LOCALES.includes(locale)){
        try {
            exports.loadLanguage(locale)
        } catch (e) {
            // Locale file missing → silently stay on English.
        }
    }

    // Custom overlay for launcher customizer (brand strings).
    exports.loadLanguage('_custom')
}