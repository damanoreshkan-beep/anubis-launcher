// Long-running playwright wrapper around the launcher.
// Stays alive after launch so an outer process can ask for screenshots
// or reloads without re-spawning Electron each time.
//
// Signals (PID written to /tmp/anubis-launcher-pid):
//   SIGUSR1 → screenshot to /tmp/launcher-shot.png
//   SIGUSR2 → renderer reload (picks up CSS/JS edits)
//   SIGTERM → clean shutdown
//
// Logs (stdout) get redirected by the caller to /tmp/launcher-attach.log.

const { _electron: electron } = require('playwright')
const fs = require('fs')

;(async () => {
    const app = await electron.launch({ args: ['.'] })
    const window = await app.firstWindow()
    await window.addInitScript(() => { window.__PW_TEST__ = true })
    await window.reload({ waitUntil: 'domcontentloaded' })

    window.on('console',   m => console.log('[' + m.type() + ']', m.text()))
    window.on('pageerror', e => console.log('[PAGEERROR]', e.message))

    fs.writeFileSync('/tmp/anubis-launcher-pid', String(process.pid))
    console.log('[ATTACH] PID', process.pid, '— ready')

    let busy = false
    async function once(fn){ if(busy) return; busy = true; try { await fn() } finally { busy = false } }

    process.on('SIGUSR1', () => once(async () => {
        await window.screenshot({ path: '/tmp/launcher-shot.png', fullPage: true })
        console.log('[SHOT] /tmp/launcher-shot.png')
    }))

    // REPL-ish hook: write JS to /tmp/anubis-eval.js, send SIGHUP, read
    // result from /tmp/anubis-eval-out.json. The code is wrapped in an
    // async arrow so `await` works at the top level.
    process.on('SIGHUP', () => once(async () => {
        let out
        try {
            const code = fs.readFileSync('/tmp/anubis-eval.js', 'utf8')
            const fnStr = `async () => { ${code} }`
            const result = await window.evaluate(fnStr)
            out = { ok: true, result }
        } catch (e) {
            out = { ok: false, error: e.message, stack: e.stack?.split('\n').slice(0, 4) }
        }
        fs.writeFileSync('/tmp/anubis-eval-out.json', JSON.stringify(out, null, 2))
        console.log('[EVAL]', out.ok ? 'ok' : 'err:', out.ok ? '' : out.error)
    }))
    process.on('SIGUSR2', () => once(async () => {
        await window.reload({ waitUntil: 'domcontentloaded' })
        console.log('[RELOADED]')
    }))
    process.on('SIGTERM', async () => {
        try { await app.close() } catch (_) {}
        process.exit(0)
    })
})().catch(e => { console.error('[FATAL]', e); process.exit(1) })
