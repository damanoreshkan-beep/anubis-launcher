const remoteMain = require('@electron/remote/main')
remoteMain.initialize()

// Requirements
const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron')
const autoUpdater                       = require('electron-updater').autoUpdater
const ejse                              = require('ejs-electron')
const fs                                = require('fs')
const isDev                             = require('./app/assets/js/isdev')
const path                              = require('path')
const semver                            = require('semver')
const { pathToFileURL }                 = require('url')
const { SHELL_OPCODE } = require('./app/assets/js/ipcconstants')
const LangLoader                        = require('./app/assets/js/langloader')

// Read the user's selected locale directly from config.json BEFORE rendering
// any EJS — main process owns ejs-electron, so all <%- lang(...) %> calls run
// here, not in the renderer. configmanager itself pulls @electron/remote, so
// we read the JSON file directly via app.getPath('userData').
function readUserLocale(){
    try {
        const cfgPath = path.join(app.getPath('userData'), 'config.json')
        if(!fs.existsSync(cfgPath)) return 'ru_RU'
        const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf-8'))
        return cfg?.settings?.launcher?.locale || 'ru_RU'
    } catch (e) {
        return 'ru_RU'
    }
}
LangLoader.setupLanguage(readUserLocale())

// ─── Custom URL scheme: anubisworld:// ──────────────────────────────────────
// Lets the website widget hand control back to this app after a sign-in or
// password reset (window.location.href = 'anubisworld://signed-in?nick=...').
// On all platforms we register as the default handler for the scheme; on
// Windows / Linux we additionally enforce single-instance so the URL gets
// delivered to the already-running window via the `second-instance` event
// rather than spawning a duplicate launcher.
const PROTOCOL_SCHEME = 'anubisworld'

if(process.defaultApp){
    // Dev mode (`electron .`) needs the absolute path so the OS can build the
    // command line. In a packaged app the executable is invoked directly.
    if(process.argv.length >= 2){
        app.setAsDefaultProtocolClient(PROTOCOL_SCHEME, process.execPath, [path.resolve(process.argv[1])])
    }
} else {
    app.setAsDefaultProtocolClient(PROTOCOL_SCHEME)
}

// Linux AppImage gotcha: setAsDefaultProtocolClient delegates to xdg-mime,
// which only works if a .desktop file already references the application.
// AppImages don't create one, so we drop one ourselves on first launch and
// register the handler against it. Idempotent — safe to re-run on every boot.
function registerLinuxProtocolHandler(){
    if(process.platform !== 'linux' || isDev) return
    try {
        const os = require('os')
        const { execFileSync } = require('child_process')
        const exec = process.env.APPIMAGE || process.execPath
        const appsDir = path.join(os.homedir(), '.local', 'share', 'applications')
        const desktopPath = path.join(appsDir, 'anubis-world-launcher.desktop')
        const iconPath = process.env.APPIMAGE
            ? '' // AppImage embeds its own icon; no separate path
            : path.join(__dirname, 'build', 'icon.png')
        const contents = [
            '[Desktop Entry]',
            'Name=Anubis World Launcher',
            'Comment=Modded Minecraft launcher for Anubis World',
            `Exec=${exec} %u`,
            iconPath ? `Icon=${iconPath}` : '',
            'Type=Application',
            'Terminal=false',
            'Categories=Game;',
            'MimeType=x-scheme-handler/anubisworld;',
        ].filter(Boolean).join('\n') + '\n'
        fs.mkdirSync(appsDir, { recursive: true })
        fs.writeFileSync(desktopPath, contents)
        try { fs.chmodSync(desktopPath, 0o755) } catch (_) {}
        try {
            execFileSync('xdg-mime', ['default', 'anubis-world-launcher.desktop', 'x-scheme-handler/anubisworld'], { stdio: 'ignore' })
        } catch (_) { /* xdg-mime may be missing; the .desktop file alone often suffices */ }
        try {
            execFileSync('update-desktop-database', [appsDir], { stdio: 'ignore' })
        } catch (_) { /* optional */ }
    } catch (e) {
        console.warn('Linux protocol registration skipped:', e?.message)
    }
}
registerLinuxProtocolHandler()

// Single-instance lock: if another instance of the launcher is started
// (e.g. via the deep link), forward its argv to us and quit it.
const gotLock = app.requestSingleInstanceLock()
if(!gotLock){
    app.quit()
    process.exit(0)
}

let pendingDeepLink = null
function deepLinkFromArgs(argv){
    if(!Array.isArray(argv)) return null
    return argv.find(a => typeof a === 'string' && a.startsWith(`${PROTOCOL_SCHEME}://`)) || null
}
function handleDeepLink(url){
    if(!url) return
    pendingDeepLink = url
    // If the renderer is already loaded, push the URL straight in.
    if(win && !win.isDestroyed()){
        if(win.isMinimized()) win.restore()
        win.focus()
        win.webContents.send('deep-link', url)
        pendingDeepLink = null
    }
}

// Initial launch may carry the URL in argv (Windows / Linux first-time call).
const initialDeepLink = deepLinkFromArgs(process.argv)
if(initialDeepLink) pendingDeepLink = initialDeepLink

// Subsequent launches (Windows / Linux) — second-instance forwards argv.
app.on('second-instance', (_e, argv) => {
    console.log('[deep-link] second-instance argv:', JSON.stringify(argv))
    handleDeepLink(deepLinkFromArgs(argv))
})

// macOS delivers the URL via the open-url event instead of argv.
app.on('open-url', (e, url) => {
    e.preventDefault()
    handleDeepLink(url)
})

// Setup auto updater.
function initAutoUpdater(event, data) {

    if(data){
        autoUpdater.allowPrerelease = true
    } else {
        // Defaults to true if application version contains prerelease components (e.g. 0.12.1-alpha.1)
        // autoUpdater.allowPrerelease = true
    }
    
    if(isDev){
        autoUpdater.autoInstallOnAppQuit = false
        autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml')
    }
    if(process.platform === 'darwin'){
        autoUpdater.autoDownload = false
    }
    autoUpdater.on('update-available', (info) => {
        event.sender.send('autoUpdateNotification', 'update-available', info)
    })
    autoUpdater.on('update-downloaded', (info) => {
        event.sender.send('autoUpdateNotification', 'update-downloaded', info)
    })
    autoUpdater.on('update-not-available', (info) => {
        event.sender.send('autoUpdateNotification', 'update-not-available', info)
    })
    autoUpdater.on('checking-for-update', () => {
        event.sender.send('autoUpdateNotification', 'checking-for-update')
    })
    autoUpdater.on('error', (err) => {
        event.sender.send('autoUpdateNotification', 'realerror', err)
    }) 
}

// Open channel to listen for update actions.
ipcMain.on('autoUpdateAction', (event, arg, data) => {
    switch(arg){
        case 'initAutoUpdater':
            console.log('Initializing auto updater.')
            initAutoUpdater(event, data)
            event.sender.send('autoUpdateNotification', 'ready')
            break
        case 'checkForUpdate':
            autoUpdater.checkForUpdates()
                .catch(err => {
                    event.sender.send('autoUpdateNotification', 'realerror', err)
                })
            break
        case 'allowPrereleaseChange':
            if(!data){
                const preRelComp = semver.prerelease(app.getVersion())
                if(preRelComp != null && preRelComp.length > 0){
                    autoUpdater.allowPrerelease = true
                } else {
                    autoUpdater.allowPrerelease = data
                }
            } else {
                autoUpdater.allowPrerelease = data
            }
            break
        case 'installUpdateNow':
            autoUpdater.quitAndInstall()
            break
        default:
            console.log('Unknown argument', arg)
            break
    }
})
// Redirect distribution index event from preloader to renderer.
ipcMain.on('distributionIndexDone', (event, res) => {
    event.sender.send('distributionIndexDone', res)
})

// Handle trash item.
ipcMain.handle(SHELL_OPCODE.TRASH_ITEM, async (event, ...args) => {
    try {
        await shell.trashItem(args[0])
        return {
            result: true
        }
    } catch(error) {
        return {
            result: false,
            error: error
        }
    }
})

// Discord (and any future Supabase OAuth provider) sign-in flow:
// renderer hands us an OAuth URL, we open it in a child BrowserWindow,
// watch for the redirect carrying access_token + refresh_token in the
// URL hash, then return the tokens so the renderer can call setSession.
//
// Pure web-flow OAuth (no custom protocol registration needed) — works on
// Windows and Linux without any installer plumbing.
let oauthWin
ipcMain.handle('discord-auth-open', async (event, url) => {
    if(oauthWin && !oauthWin.isDestroyed()){
        oauthWin.focus()
        return null
    }
    oauthWin = new BrowserWindow({
        width: 480,
        height: 720,
        title: 'Discord — Sign In',
        backgroundColor: '#0c0a18',
        autoHideMenuBar: true,
        frame: true,
        icon: getPlatformIcon(),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            partition: 'persist:oauth',
        },
    })
    oauthWin.removeMenu()

    return await new Promise((resolve) => {
        const handle = (newUrl) => {
            // Supabase redirects to ?access_token=... OR #access_token=... depending
            // on flow. Both end up here once the OAuth round-trip completes.
            try {
                const u = new URL(newUrl)
                const hash = u.hash.startsWith('#') ? u.hash.slice(1) : u.hash
                const search = u.searchParams
                const hashParams = new URLSearchParams(hash)
                const access = hashParams.get('access_token') || search.get('access_token')
                const refresh = hashParams.get('refresh_token') || search.get('refresh_token')
                if(access && refresh){
                    if(!oauthWin.isDestroyed()) oauthWin.close()
                    resolve({ access_token: access, refresh_token: refresh })
                }
            } catch (e) { /* not a URL we care about */ }
        }
        oauthWin.webContents.on('will-redirect', (_e, navUrl) => handle(navUrl))
        oauthWin.webContents.on('did-navigate', (_e, navUrl) => handle(navUrl))
        oauthWin.webContents.on('did-navigate-in-page', (_e, navUrl) => handle(navUrl))
        oauthWin.on('closed', () => {
            oauthWin = null
            resolve(null)  // user closed the window without finishing
        })
        oauthWin.loadURL(url)
    })
})

// Disable hardware acceleration.
// https://electronjs.org/docs/tutorial/offscreen-rendering
app.disableHardwareAcceleration()


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {

    win = new BrowserWindow({
        width: 980,
        height: 552,
        icon: getPlatformIcon(),
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'app', 'assets', 'js', 'preloader.js'),
            nodeIntegration: true,
            contextIsolation: false
        },
        backgroundColor: '#171614'
    })
    remoteMain.enable(win.webContents)

    const data = {
        appVersion: app.getVersion(),
        // Public Supabase project that backs the shared anubis-auth widget.
        // The anon (publishable) key is safe in client code; row-level
        // security on the profiles table enforces real access control.
        supabaseUrl: 'https://ckfinpywlpllvhvzagnw.supabase.co',
        supabaseKey: 'sb_publishable_Bl6csDnCJ5LIJsIsCafMYQ_5zwLTgvR',
        lang: (str, placeHolders) => LangLoader.queryEJS(str, placeHolders)
    }
    Object.entries(data).forEach(([key, val]) => ejse.data(key, val))

    win.loadURL(pathToFileURL(path.join(__dirname, 'app', 'app.ejs')).toString())

    // Once the renderer is ready, push any deep link that arrived before the
    // window existed (cold-start case where the app was launched by the OS
    // protocol handler with the URL in argv).
    win.webContents.once('did-finish-load', () => {
        if(pendingDeepLink){
            win.webContents.send('deep-link', pendingDeepLink)
            pendingDeepLink = null
        }
    })

    // DevTools opened automatically only when ANUBIS_DEVTOOLS=1. Prevents
    // shipping with devtools visible but gives us a quick diagnostic hook
    // during Phase 6 integration testing (Forge install, launch failures).
    if(process.env.ANUBIS_DEVTOOLS === '1') {
        win.webContents.openDevTools({ mode: 'detach' })
        // Mirror renderer console to main stdout so we can see errors in the
        // terminal without flipping focus back to DevTools.
        win.webContents.on('console-message', (e, level, message, line, source) => {
            const lvl = ['log','warn','error','info'][level] || 'log'
            console.log(`[renderer ${lvl}] ${source}:${line} ${message}`)
        })
    }

    /*win.once('ready-to-show', () => {
        win.show()
    })*/

    win.removeMenu()

    win.resizable = true

    win.on('closed', () => {
        win = null
    })
}

function createMenu() {
    
    if(process.platform === 'darwin') {

        // Extend default included application menu to continue support for quit keyboard shortcut
        let applicationSubMenu = {
            label: 'Application',
            submenu: [{
                label: 'About Application',
                selector: 'orderFrontStandardAboutPanel:'
            }, {
                type: 'separator'
            }, {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: () => {
                    app.quit()
                }
            }]
        }

        // New edit menu adds support for text-editing keyboard shortcuts
        let editSubMenu = {
            label: 'Edit',
            submenu: [{
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                selector: 'undo:'
            }, {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                selector: 'redo:'
            }, {
                type: 'separator'
            }, {
                label: 'Cut',
                accelerator: 'CmdOrCtrl+X',
                selector: 'cut:'
            }, {
                label: 'Copy',
                accelerator: 'CmdOrCtrl+C',
                selector: 'copy:'
            }, {
                label: 'Paste',
                accelerator: 'CmdOrCtrl+V',
                selector: 'paste:'
            }, {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                selector: 'selectAll:'
            }]
        }

        // Bundle submenus into a single template and build a menu object with it
        let menuTemplate = [applicationSubMenu, editSubMenu]
        let menuObject = Menu.buildFromTemplate(menuTemplate)

        // Assign it to the application
        Menu.setApplicationMenu(menuObject)

    }

}

function getPlatformIcon(){
    let ext
    switch(process.platform) {
        case 'win32':
            ext = 'ico'
            break
        case 'darwin':
            ext = 'icns'
            break
        case 'linux':
        default:
            ext = 'png'
            break
    }

    return path.join(__dirname, 'build', `icon.${ext}`)
}

app.on('ready', createWindow)
app.on('ready', createMenu)

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})
