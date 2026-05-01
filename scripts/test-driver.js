// Headed Playwright driver for debugging the auth flow without flying blind.
//
// Usage:
//   node scripts/test-driver.js [scenario] [--keep]
//     scenario  → optional scenario name (default: 'inspect')
//     --keep    → don't auto-quit; leaves the launcher window open so I can
//                 watch live behaviour after the script finishes its run.
//
// Output goes to stdout (read it with `tail` from chat) and screenshots
// land in /tmp/launcher-shots/. Read the PNGs with the Read tool — they
// render as images in chat.
//
// The script is intentionally chatty: every action prints `[STEP] …` so
// you can correlate screenshots with renderer console output.

const { _electron: electron } = require('playwright')
const path = require('path')
const fs = require('fs')

const SHOTS_DIR = '/tmp/launcher-shots'
fs.rmSync(SHOTS_DIR, { recursive: true, force: true })
fs.mkdirSync(SHOTS_DIR, { recursive: true })

const scenario = process.argv[2] || 'inspect'
const keep = process.argv.includes('--keep')

function ts(){ return new Date().toISOString().split('T')[1].slice(0, 12) }
function log(...a){ console.log(`[${ts()}]`, ...a) }

async function shot(window, name){
    const file = path.join(SHOTS_DIR, `${String(shot._n = (shot._n||0)+1).padStart(2,'0')}-${name}.png`)
    await window.screenshot({ path: file, fullPage: false })
    log('[SHOT]', file)
}

async function waitForViewVisible(window, viewSelector, timeout = 15000){
    return window.waitForFunction(
        (sel) => {
            const el = document.querySelector(sel)
            if(!el) return false
            const cs = getComputedStyle(el)
            return cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0.5
        },
        viewSelector,
        { timeout },
    )
}

async function dumpDom(window, sel){
    const html = await window.evaluate((s) => {
        const el = document.querySelector(s)
        return el ? el.outerHTML.slice(0, 2000) : null
    }, sel)
    log(`[DOM] ${sel} →`, html ? html : 'NOT FOUND')
}

;(async () => {
    log('[BOOT] launching electron…')
    const app = await electron.launch({
        args: ['.'],
        cwd: path.resolve(__dirname, '..'),
        // Surface every renderer console message in our stdout.
        env: { ...process.env, NODE_ENV: 'development' },
    })

    const window = await app.firstWindow()
    // Playwright's UtilityScript uses eval; uicore.js blocks it. addInitScript
    // applies on the *next* navigation, so we reload the window once after
    // setting it to flip uicore's eval block off for this test session.
    await window.addInitScript(() => { window.__PW_TEST__ = true })
    await window.reload({ waitUntil: 'domcontentloaded' })
    log('[BOOT] window ready, url=', window.url())

    window.on('console', msg => log(`[RENDERER:${msg.type()}]`, msg.text()))
    window.on('pageerror', err => log('[RENDERER:pageerror]', err.message, err.stack?.split('\n')[0]))
    window.on('crash', () => log('[RENDERER:crash]'))

    // Splash → main window swap can take ~1s; wait for either landing or
    // loginOptions to be visible before snapping the first frame.
    await window.waitForLoadState('domcontentloaded')
    await new Promise(r => setTimeout(r, 1500))
    await shot(window, 'boot')

    // Try to find which top-level view is on screen and report.
    const visibleView = await window.evaluate(() => {
        const ids = ['welcomeContainer', 'landingContainer', 'loginOptionsContainer', 'settingsContainer']
        for(const id of ids){
            const el = document.getElementById(id)
            if(el && getComputedStyle(el).display !== 'none' && parseFloat(getComputedStyle(el).opacity) > 0.5){
                return id
            }
        }
        return null
    })
    log('[STATE] visible view:', visibleView)

    async function clickButtonByText(label){
        const ok = await window.evaluate((lbl) => {
            const btns = Array.from(document.querySelectorAll('anubis-auth button'))
            const target = btns.find(b => b.textContent.trim().toLowerCase().includes(lbl.toLowerCase()))
            if(target){ target.click(); return true }
            return false
        }, label)
        if(!ok) log('[FAIL] button not found:', label)
        return ok
    }

    async function widgetButtons(){
        return window.evaluate(() => Array.from(document.querySelectorAll('anubis-auth button')).map(b => b.textContent.trim()).filter(Boolean))
    }

    if(scenario === 'styles'){
        // Verify the launcher's own .glass/.btn-glow/.gold-text classes are
        // still wired to its site.css and weren't overridden by the widget's
        // injected styles. We pick three elements known to use them and dump
        // computed values + which stylesheet's rule they came from.
        const styleReport = await window.evaluate(() => {
            const targets = [
                { sel: '.lp-brand.glass', name: 'landing brand' },
                { sel: '.lp-cta-primary.btn-glow', name: 'launch button' },
                { sel: '.gold-text', name: 'gold-text span' },
            ]
            const out = []
            for(const { sel, name } of targets){
                const el = document.querySelector(sel)
                if(!el){ out.push({ name, sel, found: false }); continue }
                const cs = getComputedStyle(el)
                out.push({ name, sel, found: true,
                    background: cs.backgroundImage || cs.background || cs.backgroundColor,
                    border: cs.borderTopColor + ' ' + cs.borderTopWidth,
                    backdropFilter: cs.backdropFilter,
                    color: cs.color,
                    position: cs.position,
                })
            }
            // Also check whether any widget rule (.aw-scope .glass) is present,
            // and confirm there's no UNSCOPED .glass coming from the widget bundle.
            let widgetUnscopedGlass = false
            for(const sheet of document.styleSheets){
                try {
                    for(const rule of sheet.cssRules){
                        if(rule.selectorText === '.glass' && rule.cssText.includes('rgba(139, 92, 246, 0.06)')){
                            widgetUnscopedGlass = true; break
                        }
                    }
                } catch(e){}
            }
            return { targets: out, widgetUnscopedGlass }
        })
        log('[STYLES]', JSON.stringify(styleReport, null, 2))
        await shot(window, 'styles-loginOptions')
    }

    if(scenario === 'inspect' || scenario === 'login' || scenario === 'flow'){
        if(visibleView === 'loginOptionsContainer'){
            await dumpDom(window, '#authWidgetMount')
            const registered = await window.evaluate(() => !!customElements.get('anubis-auth'))
            log('[STATE] customElements.get("anubis-auth") →', registered)
            log('[STATE] start buttons:', await widgetButtons())
            await shot(window, 'start-screen')

            if(scenario === 'flow'){
                log('[STEP] click "Продолжить через email"')
                await clickButtonByText('email')
                await new Promise(r => setTimeout(r, 300))
                log('[STATE] email-stage buttons:', await widgetButtons())
                await shot(window, 'email-stage-signin')

                log('[STEP] click "Регистрация" tab')
                await clickButtonByText('регистра')
                await new Promise(r => setTimeout(r, 200))
                await shot(window, 'email-stage-signup')

                log('[STEP] click "Вход" tab')
                await clickButtonByText('вход')
                await new Promise(r => setTimeout(r, 200))

                log('[STEP] click "Забыли пароль?"')
                await clickButtonByText('забыл')
                await new Promise(r => setTimeout(r, 300))
                log('[STATE] forgot-stage buttons:', await widgetButtons())
                await shot(window, 'forgot-stage')

                log('[STEP] back from forgot')
                await clickButtonByText('назад')
                await new Promise(r => setTimeout(r, 200))
                await shot(window, 'back-to-email')

                log('[STEP] back from email to start')
                await clickButtonByText('назад')
                await new Promise(r => setTimeout(r, 200))
                await shot(window, 'back-to-start')
                log('[STATE] final buttons:', await widgetButtons())
            }
        }
    }

    if(scenario === 'add-account'){
        // Pre-condition: we're already past loginOptions on landing screen.
        if(visibleView !== 'landingContainer'){
            log('[FAIL] expected landingContainer, got', visibleView, '— skipping scenario')
        } else {
            log('[STEP] navigate Settings → Account → Add account')
            await window.evaluate(() => document.getElementById('settingsMediaButton').click())
            await waitForViewVisible(window, '#settingsContainer')
            await shot(window, 'settings-open')
            await window.evaluate(() => document.querySelector('[rSc="account"]')?.click())
            await new Promise(r => setTimeout(r, 500))
            await window.evaluate(() => document.getElementById('settingsAddAccount')?.click())
            await waitForViewVisible(window, '#loginOptionsContainer')
            await new Promise(r => setTimeout(r, 600))
            await shot(window, 'add-account-screen')
            await dumpDom(window, '#authWidgetMount')
        }
    }

    if(!keep){
        log('[BYE] closing app — pass --keep to leave it running')
        await app.close()
    } else {
        log('[KEEP] window left open. Ctrl-C to terminate.')
        await new Promise(() => {})
    }
})().catch(err => {
    console.error('[FATAL]', err)
    process.exit(1)
})
