/**
 * Titlebar language switcher.
 *
 * Changes persist to config and reload the renderer — language strings are
 * loaded once at startup (langloader caches them), so a reload is the clean
 * way to apply a new locale everywhere without per-element re-render logic.
 */
(function(){
    const ConfigManager_frameLang = require('./assets/js/configmanager')
    const LangLoader_frameLang = require('./assets/js/langloader')
    const select = document.getElementById('frameLangSelect')
    if(!select) return

    const current = ConfigManager_frameLang.getCurrentLanguage()
    for(const code of LangLoader_frameLang.SUPPORTED_LOCALES){
        const opt = document.createElement('option')
        opt.value = code
        opt.textContent = LangLoader_frameLang.queryJS(`frameLang.${code}`) || code
        if(code === current) opt.selected = true
        select.appendChild(opt)
    }

    select.addEventListener('change', () => {
        const next = select.value
        if(next === ConfigManager_frameLang.getCurrentLanguage()) return
        ConfigManager_frameLang.setCurrentLanguage(next)
        ConfigManager_frameLang.save()
        // Re-init with the new locale in-place without a renderer reload would
        // require re-rendering every EJS template + rebinding event handlers.
        // A reload is 1-line and guaranteed correct.
        window.location.reload()
    })
})()
