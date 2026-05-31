/**
 * Script for landing.ejs
 */

// Requirements
const { URL }                 = require('url')
const {
    MojangRestAPI,
    getServerStatus
}                             = require('helios-core/mojang')
const {
    RestResponseStatus,
    isDisplayableError,
    validateLocalFile
}                             = require('helios-core/common')
const {
    FullRepair,
    DistributionIndexProcessor,
    MojangIndexProcessor,
    downloadFile
}                             = require('helios-core/dl')
const {
    validateSelectedJvm,
    ensureJavaDirIsRoot,
    javaExecFromRoot,
    discoverBestJvmInstallation,
    latestOpenJDK,
    extractJdk
}                             = require('helios-core/java')

// Internal Requirements
const DiscordWrapper          = require('./assets/js/discordwrapper')
const ProcessBuilder          = require('./assets/js/processbuilder')

// Launch Elements
const launch_content          = document.getElementById('launch_content')
const launch_details          = document.getElementById('launch_details')
const launch_progress         = document.getElementById('launch_progress')
const launch_progress_label   = document.getElementById('launch_progress_label')
const launch_details_text     = document.getElementById('launch_details_text')
const server_selection_button = document.getElementById('server_selection_button')
const user_text               = document.getElementById('user_text')

const loggerLanding = LoggerUtil.getLogger('Landing')

/* Launch Progress Wrapper Functions */

/**
 * Show/hide the loading area.
 * 
 * @param {boolean} loading True if the loading area should be shown, otherwise false.
 */
function toggleLaunchArea(loading){
    if(loading){
        launch_details.style.display = 'flex'
        launch_content.style.display = 'none'
    } else {
        launch_details.style.display = 'none'
        launch_content.style.display = 'inline-flex'
    }
}

/**
 * Set the details text of the loading area.
 * 
 * @param {string} details The new text for the loading details.
 */
function setLaunchDetails(details){
    launch_details_text.innerHTML = details
}

/**
 * Set the value of the loading progress bar and display that value.
 * 
 * @param {number} percent Percentage (0-100)
 */
function setLaunchPercentage(percent){
    launch_progress.setAttribute('max', 100)
    launch_progress.setAttribute('value', percent)
    launch_progress_label.innerHTML = percent + '%'
}

/**
 * Set the value of the OS progress bar and display that on the UI.
 * 
 * @param {number} percent Percentage (0-100)
 */
function setDownloadPercentage(percent){
    remote.getCurrentWindow().setProgressBar(percent/100)
    setLaunchPercentage(percent)
}

/**
 * Enable or disable the launch button.
 * 
 * @param {boolean} val True to enable, false to disable.
 */
function setLaunchEnabled(val){
    document.getElementById('launch_button').disabled = !val
}

// Bind launch button
document.getElementById('launch_button').addEventListener('click', async e => {
    loggerLanding.info('Launching game..')
    try {
        const server = (await DistroAPI.getDistribution()).getServerById(ConfigManager.getSelectedServer())
        const jExe = ConfigManager.getJavaExecutable(ConfigManager.getSelectedServer())
        if(jExe == null){
            await asyncSystemScan(server.effectiveJavaOptions)
        } else {

            setLaunchDetails(Lang.queryJS('landing.launch.pleaseWait'))
            toggleLaunchArea(true)
            setLaunchPercentage(0, 100)

            const details = await validateSelectedJvm(ensureJavaDirIsRoot(jExe), server.effectiveJavaOptions.supported)
            if(details != null){
                loggerLanding.info('Jvm Details', details)
                await dlAsync()

            } else {
                await asyncSystemScan(server.effectiveJavaOptions)
            }
        }
    } catch(err) {
        loggerLanding.error('Unhandled error in during launch process.', err)
        showLaunchFailure(Lang.queryJS('landing.launch.failureTitle'), Lang.queryJS('landing.launch.failureText'))
    }
})

// Account capsule — two distinct click areas inside the same glass
// pill. Avatar half jumps to Cabinet (Skin) so users can change skin
// in one tap; Settings half opens the regular Settings shell at its
// default Account tab.
const avatarPill = document.getElementById('avatarPill')
if(avatarPill){
    avatarPill.onclick = async () => {
        await prepareSettings()
        switchView(getCurrentView(), VIEWS.settings, 500, 500, () => {
            const cabinetNavBtn = document.querySelector('[rSc="settingsTabCabinet"]')
            if(cabinetNavBtn) settingsNavItemListener(cabinetNavBtn, false)
        })
    }
}
const settingsPill = document.getElementById('settingsPill')
if(settingsPill){
    settingsPill.onclick = async () => {
        await prepareSettings()
        switchView(getCurrentView(), VIEWS.settings)
    }
}

// Bind selected account
function updateSelectedAccount(authUser){
    let username = Lang.queryJS('landing.selectedAccount.noAccountSelected')
    if(authUser != null){
        if(authUser.displayName != null){
            username = authUser.displayName
        }
        if(authUser.uuid != null){
            document.getElementById('avatarContainer').style.backgroundImage = `url('https://mc-heads.net/avatar/${authUser.uuid}/64')`
        }
    }
    user_text.innerHTML = username
}
updateSelectedAccount(ConfigManager.getSelectedAccount())

// Bind selected server
function updateSelectedServer(serv){
    if(getCurrentView() === VIEWS.settings){
        fullSettingsSave()
    }
    ConfigManager.setSelectedServer(serv != null ? serv.rawServer.id : null)
    ConfigManager.save()
    server_selection_button.innerHTML = '&#8226; ' + (serv != null ? serv.rawServer.name : Lang.queryJS('landing.noSelection'))
    if(getCurrentView() === VIEWS.settings){
        animateSettingsTabRefresh()
    }
    setLaunchEnabled(serv != null)
}
// Real text is set in uibinder.js on distributionIndexDone.
server_selection_button.innerHTML = '&#8226; ' + Lang.queryJS('landing.selectedServer.loading')
server_selection_button.onclick = async e => {
    e.target.blur()
    await toggleServerSelection(true)
}

// Update Mojang Status Color
const refreshMojangStatuses = async function(){
    loggerLanding.info('Refreshing Mojang Statuses..')

    let status = 'grey'
    let tooltipEssentialHTML = ''
    let tooltipNonEssentialHTML = ''

    const response = await MojangRestAPI.status()
    let statuses
    if(response.responseStatus === RestResponseStatus.SUCCESS) {
        statuses = response.data
    } else {
        loggerLanding.warn('Unable to refresh Mojang service status.')
        statuses = MojangRestAPI.getDefaultStatuses()
    }
    
    greenCount = 0
    greyCount = 0

    for(let i=0; i<statuses.length; i++){
        const service = statuses[i]

        const tooltipHTML = `<div class="mojangStatusContainer">
            <span class="mojangStatusIcon" style="color: ${MojangRestAPI.statusToHex(service.status)};">&#8226;</span>
            <span class="mojangStatusName">${service.name}</span>
        </div>`
        if(service.essential){
            tooltipEssentialHTML += tooltipHTML
        } else {
            tooltipNonEssentialHTML += tooltipHTML
        }

        if(service.status === 'yellow' && status !== 'red'){
            status = 'yellow'
        } else if(service.status === 'red'){
            status = 'red'
        } else {
            if(service.status === 'grey'){
                ++greyCount
            }
            ++greenCount
        }

    }

    if(greenCount === statuses.length){
        if(greyCount === statuses.length){
            status = 'grey'
        } else {
            status = 'green'
        }
    }
    
    document.getElementById('mojangStatusEssentialContainer').innerHTML = tooltipEssentialHTML
    document.getElementById('mojangStatusNonEssentialContainer').innerHTML = tooltipNonEssentialHTML
    document.getElementById('mojang_status_icon').style.color = MojangRestAPI.statusToHex(status)
}

const refreshServerStatus = async (fade = false) => {
    loggerLanding.info('Refreshing Server Status')
    const serv = (await DistroAPI.getDistribution()).getServerById(ConfigManager.getSelectedServer())

    let pLabel = Lang.queryJS('landing.serverStatus.server')
    let pVal = Lang.queryJS('landing.serverStatus.offline')

    try {

        const servStat = await getServerStatus(47, serv.hostname, serv.port)
        console.log(servStat)
        pLabel = Lang.queryJS('landing.serverStatus.players')
        pVal = servStat.players.online + '/' + servStat.players.max

    } catch (err) {
        loggerLanding.warn('Unable to refresh server status, assuming offline.')
        loggerLanding.debug(err)
    }
    if(fade){
        $('#server_status_wrapper').fadeOut(250, () => {
            document.getElementById('landingPlayerLabel').innerHTML = pLabel
            document.getElementById('player_count').innerHTML = pVal
            $('#server_status_wrapper').fadeIn(500)
        })
    } else {
        document.getElementById('landingPlayerLabel').innerHTML = pLabel
        document.getElementById('player_count').innerHTML = pVal
    }
    
}

refreshMojangStatuses()
// Server Status is refreshed in uibinder.js on distributionIndexDone.

// Refresh statuses every hour. The status page itself refreshes every day so...
let mojangStatusListener = setInterval(() => refreshMojangStatuses(true), 60*60*1000)
// Set refresh rate to once every 5 minutes.
let serverStatusListener = setInterval(() => refreshServerStatus(true), 300000)

/**
 * Shows an error overlay, toggles off the launch area.
 * 
 * @param {string} title The overlay title.
 * @param {string} desc The overlay description.
 */
function showLaunchFailure(title, desc){
    setOverlayContent(
        title,
        desc,
        Lang.queryJS('landing.launch.okay')
    )
    setOverlayHandler(null)
    toggleOverlay(true)
    toggleLaunchArea(false)
}

/* System (Java) Scan */

/**
 * Asynchronously scan the system for valid Java installations.
 * 
 * @param {boolean} launchAfter Whether we should begin to launch after scanning. 
 */
async function asyncSystemScan(effectiveJavaOptions, launchAfter = true){

    setLaunchDetails(Lang.queryJS('landing.systemScan.checking'))
    toggleLaunchArea(true)
    setLaunchPercentage(0, 100)

    const jvmDetails = await discoverBestJvmInstallation(
        ConfigManager.getDataDirectory(),
        effectiveJavaOptions.supported
    )

    if(jvmDetails == null) {
        // If the result is null, no valid Java installation was found.
        // Show this information to the user.
        setOverlayContent(
            Lang.queryJS('landing.systemScan.noCompatibleJava'),
            Lang.queryJS('landing.systemScan.installJavaMessage', { 'major': effectiveJavaOptions.suggestedMajor }),
            Lang.queryJS('landing.systemScan.installJava'),
            Lang.queryJS('landing.systemScan.installJavaManually')
        )
        setOverlayHandler(() => {
            setLaunchDetails(Lang.queryJS('landing.systemScan.javaDownloadPrepare'))
            toggleOverlay(false)
            
            try {
                downloadJava(effectiveJavaOptions, launchAfter)
            } catch(err) {
                loggerLanding.error('Unhandled error in Java Download', err)
                showLaunchFailure(Lang.queryJS('landing.systemScan.javaDownloadFailureTitle'), Lang.queryJS('landing.systemScan.javaDownloadFailureText'))
            }
        })
        setDismissHandler(() => {
            $('#overlayContent').fadeOut(250, () => {
                //$('#overlayDismiss').toggle(false)
                setOverlayContent(
                    Lang.queryJS('landing.systemScan.javaRequired', { 'major': effectiveJavaOptions.suggestedMajor }),
                    Lang.queryJS('landing.systemScan.javaRequiredMessage', { 'major': effectiveJavaOptions.suggestedMajor }),
                    Lang.queryJS('landing.systemScan.javaRequiredDismiss'),
                    Lang.queryJS('landing.systemScan.javaRequiredCancel')
                )
                setOverlayHandler(() => {
                    toggleLaunchArea(false)
                    toggleOverlay(false)
                })
                setDismissHandler(() => {
                    toggleOverlay(false, true)

                    asyncSystemScan(effectiveJavaOptions, launchAfter)
                })
                $('#overlayContent').fadeIn(250)
            })
        })
        toggleOverlay(true, true)
    } else {
        // Java installation found, use this to launch the game.
        const javaExec = javaExecFromRoot(jvmDetails.path)
        ConfigManager.setJavaExecutable(ConfigManager.getSelectedServer(), javaExec)
        ConfigManager.save()

        // We need to make sure that the updated value is on the settings UI.
        // Just incase the settings UI is already open.
        settingsJavaExecVal.value = javaExec
        await populateJavaExecDetails(settingsJavaExecVal.value)

        // TODO Callback hell, refactor
        // TODO Move this out, separate concerns.
        if(launchAfter){
            await dlAsync()
        }
    }

}

async function downloadJava(effectiveJavaOptions, launchAfter = true) {

    // TODO Error handling.
    // asset can be null.
    const asset = await latestOpenJDK(
        effectiveJavaOptions.suggestedMajor,
        ConfigManager.getDataDirectory(),
        effectiveJavaOptions.distribution)

    if(asset == null) {
        throw new Error(Lang.queryJS('landing.downloadJava.findJdkFailure'))
    }

    let received = 0
    await downloadFile(asset.url, asset.path, ({ transferred }) => {
        received = transferred
        setDownloadPercentage(Math.trunc((transferred/asset.size)*100))
    })
    setDownloadPercentage(100)

    if(received != asset.size) {
        loggerLanding.warn(`Java Download: Expected ${asset.size} bytes but received ${received}`)
        if(!await validateLocalFile(asset.path, asset.algo, asset.hash)) {
            log.error(`Hashes do not match, ${asset.id} may be corrupted.`)
            // Don't know how this could happen, but report it.
            throw new Error(Lang.queryJS('landing.downloadJava.javaDownloadCorruptedError'))
        }
    }

    // Extract
    // Show installing progress bar.
    remote.getCurrentWindow().setProgressBar(2)

    // Wait for extration to complete.
    const eLStr = Lang.queryJS('landing.downloadJava.extractingJava')
    let dotStr = ''
    setLaunchDetails(eLStr)
    const extractListener = setInterval(() => {
        if(dotStr.length >= 3){
            dotStr = ''
        } else {
            dotStr += '.'
        }
        setLaunchDetails(eLStr + dotStr)
    }, 750)

    const newJavaExec = await extractJdk(asset.path)

    // Extraction complete, remove the loading from the OS progress bar.
    remote.getCurrentWindow().setProgressBar(-1)

    // Extraction completed successfully.
    ConfigManager.setJavaExecutable(ConfigManager.getSelectedServer(), newJavaExec)
    ConfigManager.save()

    clearInterval(extractListener)
    setLaunchDetails(Lang.queryJS('landing.downloadJava.javaInstalled'))

    // TODO Callback hell
    // Refactor the launch functions
    asyncSystemScan(effectiveJavaOptions, launchAfter)

}

// Keep reference to Minecraft Process
let proc
// Is DiscordRPC enabled
let hasRPC = false
// Joined server regex
// Change this if your server uses something different.
const GAME_JOINED_REGEX = /\[.+\]: Sound engine started/
const GAME_LAUNCH_REGEX = /^\[.+\]: (?:MinecraftForge .+ Initialized|ModLauncher .+ starting: .+|Loading Minecraft .+ with Fabric Loader .+)$/
const MIN_LINGER = 5000

/**
 * Forge 1.13+ ships a thin installer that has to be run in client mode
 * on each user's machine. That run produces several jars under
 * `<commonDir>/libraries/...` that the BootstrapLauncher then expects
 * to find on the module path:
 *
 *     net/minecraft/client/<mc>-<mcp>/client-<mc>-<mcp>-srg.jar
 *     net/minecraft/client/<mc>-<mcp>/client-<mc>-<mcp>-extra.jar
 *     net/minecraftforge/forge/<mc>-<forge>/forge-<mc>-<forge>-client.jar
 *     net/minecraftforge/fmlcore/<mc>-<forge>/fmlcore-<mc>-<forge>.jar
 *     net/minecraftforge/mclanguage/<mc>-<forge>/mclanguage-<mc>-<forge>.jar
 *     (plus javafmllanguage, lowcodelanguage, ...)
 *
 * helios-core 2.3.0 was built for ForgeGradle 2 (Forge 1.12.2 era) and
 * doesn't run the installer step. We do it here ourselves, exactly the
 * way the vanilla Mojang launcher does, with `--installClient`. The
 * step is idempotent — it skips immediately on subsequent launches
 * once the marker file (`fmlcore-<mc>-<forge>.jar`) is present.
 *
 * @param {*} serv   The distribution-resolved server entry.
 * @param {*} modLoaderData The Forge `version.json` we read off the manifest.
 */
async function ensureForgeClientArtifacts(serv, modLoaderData, logger){
    const fs = require('fs')
    const path = require('path')
    const { spawn } = require('child_process')
    const log = logger || LoggerUtil.getLogger('LaunchSuite')

    const mcVersion   = modLoaderData.inheritsFrom || serv.rawServer.minecraftVersion
    // modLoaderData.id looks like "1.20.1-forge-47.4.10" → grab "47.4.10".
    const forgeFull   = modLoaderData.id                 // 1.20.1-forge-47.4.10
    const forgeVer    = forgeFull.split('-').pop()       // 47.4.10
    const forgeKey    = `${mcVersion}-${forgeVer}`       // 1.20.1-47.4.10

    const commonDir  = ConfigManager.getCommonDirectory()
    const libsDir    = path.join(commonDir, 'libraries')

    // Marker that tells us the installer has already been run.
    const fmlCoreJar = path.join(libsDir, 'net', 'minecraftforge', 'fmlcore', forgeKey, `fmlcore-${forgeKey}.jar`)
    if(fs.existsSync(fmlCoreJar)){
        log.info(`Forge client artifacts present for ${forgeKey}; skipping installer.`)
        return
    }

    // Locate the installer that helios-core already downloaded into libs.
    const installerJar = path.join(libsDir, 'net', 'minecraftforge', 'forge', forgeKey, `forge-${forgeKey}.jar`)
    const installerJarAlt = path.join(libsDir, 'net', 'minecraftforge', 'forge', forgeKey, `forge-${forgeKey}-installer.jar`)
    const installer = fs.existsSync(installerJar) ? installerJar : fs.existsSync(installerJarAlt) ? installerJarAlt : null
    if(installer == null){
        throw new Error(`Forge installer not found at ${installerJar} — distribution may be missing the installer entry.`)
    }

    // The installer demands a launcher_profiles.json in the install
    // target — happy with a stub that lists no profiles.
    const profilesPath = path.join(commonDir, 'launcher_profiles.json')
    if(!fs.existsSync(profilesPath)){
        fs.writeFileSync(profilesPath, '{"profiles":{},"settings":{},"version":3}\n')
    }

    setLaunchDetails('Installing Forge client (one-time)…')
    log.info(`Running Forge installer: java -jar ${path.basename(installer)} --installClient ${commonDir}`)

    const javaExec = ConfigManager.getJavaExecutable(serv.rawServer.id)
    await new Promise((resolve, reject) => {
        const child = spawn(javaExec, ['-jar', installer, '--installClient', commonDir], { cwd: commonDir })
        let lastLine = ''
        child.stdout.on('data', d => {
            for(const line of d.toString().split('\n')){
                if(line.trim()){
                    log.info('[forge-installer]', line.trim())
                    lastLine = line.trim()
                }
            }
        })
        child.stderr.on('data', d => log.warn('[forge-installer]', d.toString().trim()))
        child.on('error', reject)
        child.on('close', code => {
            if(code === 0){
                log.info('Forge installer finished.')
                resolve()
            } else {
                reject(new Error(`Forge installer exited with code ${code}. Last line: ${lastLine}`))
            }
        })
    })

    // Sanity check — if the marker file still isn't there, something
    // about the installer's expected paths drifted from ours and we
    // need to know about it, not silently fall through to a JVM crash.
    if(!fs.existsSync(fmlCoreJar)){
        throw new Error(`Forge installer ran but ${fmlCoreJar} is still missing.`)
    }
}

async function dlAsync(login = true) {

    // Login parameter is temporary for debug purposes. Allows testing the validation/downloads without
    // launching the game.

    const loggerLaunchSuite = LoggerUtil.getLogger('LaunchSuite')
    // Alias so logging calls inside this function can stay short.
    const log = loggerLaunchSuite

    setLaunchDetails(Lang.queryJS('landing.dlAsync.loadingServerInfo'))

    let distro

    try {
        distro = await DistroAPI.refreshDistributionOrFallback()
        onDistroRefresh(distro)
    } catch(err) {
        log.error('Unable to refresh distribution index.', err)
        showLaunchFailure(Lang.queryJS('landing.dlAsync.fatalError'), Lang.queryJS('landing.dlAsync.unableToLoadDistributionIndex'))
        return
    }

    const serv = distro.getServerById(ConfigManager.getSelectedServer())

    if(login) {
        if(ConfigManager.getSelectedAccount() == null){
            loggerLanding.error('You must be logged into an account.')
            return
        }
    }

    setLaunchDetails(Lang.queryJS('landing.dlAsync.pleaseWait'))
    toggleLaunchArea(true)
    setLaunchPercentage(0, 100)

    const fullRepairModule = new FullRepair(
        ConfigManager.getCommonDirectory(),
        ConfigManager.getInstanceDirectory(),
        ConfigManager.getLauncherDirectory(),
        ConfigManager.getSelectedServer(),
        DistroAPI.isDevMode()
    )

    fullRepairModule.spawnReceiver()

    fullRepairModule.childProcess.on('error', (err) => {
        log.error('Error during launch', err)
        showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringLaunchTitle'), err.message || Lang.queryJS('landing.dlAsync.errorDuringLaunchText'))
    })
    fullRepairModule.childProcess.on('close', (code, _signal) => {
        if(code !== 0){
            log.error(`Full Repair Module exited with code ${code}, assuming error.`)
            showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringLaunchTitle'), Lang.queryJS('landing.dlAsync.seeConsoleForDetails'))
        }
    })

    log.info('Validating files.')
    setLaunchDetails(Lang.queryJS('landing.dlAsync.validatingFileIntegrity'))
    let invalidFileCount = 0
    try {
        invalidFileCount = await fullRepairModule.verifyFiles(percent => {
            setLaunchPercentage(percent)
        })
        setLaunchPercentage(100)
    } catch (err) {
        log.error('Error during file validation.')
        showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringFileVerificationTitle'), err.displayable || Lang.queryJS('landing.dlAsync.seeConsoleForDetails'))
        return
    }
    

    if(invalidFileCount > 0) {
        log.info('Downloading files.')
        setLaunchDetails(Lang.queryJS('landing.dlAsync.downloadingFiles'))
        setLaunchPercentage(0)
        try {
            await fullRepairModule.download(percent => {
                setDownloadPercentage(percent)
            })
            setDownloadPercentage(100)
        } catch(err) {
            log.error('Error during file download.')
            showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringFileDownloadTitle'), err.displayable || Lang.queryJS('landing.dlAsync.seeConsoleForDetails'))
            return
        }
    } else {
        log.info('No invalid files, skipping download.')
    }

    // Remove download bar.
    remote.getCurrentWindow().setProgressBar(-1)

    fullRepairModule.destroyReceiver()

    setLaunchDetails(Lang.queryJS('landing.dlAsync.preparingToLaunch'))

    const mojangIndexProcessor = new MojangIndexProcessor(
        ConfigManager.getCommonDirectory(),
        serv.rawServer.minecraftVersion)
    const distributionIndexProcessor = new DistributionIndexProcessor(
        ConfigManager.getCommonDirectory(),
        distro,
        serv.rawServer.id
    )

    const modLoaderData = await distributionIndexProcessor.loadModLoaderVersionJson(serv)
    const versionData = await mojangIndexProcessor.getVersionJson()

    // Forge 1.13+ ships a thin installer — the actual `client-srg.jar`,
    // `client-extra.jar`, `forge-<ver>-client.jar`, plus fmlcore /
    // mclanguage / javafmllanguage / lowcodelanguage live on each
    // client and are generated by running the installer in client
    // mode. helios-core 2.3.0 never runs that step (its codepath was
    // built for Forge 1.12.2-era ForgeGradle 2), so we run it
    // ourselves on first launch if the output isn't present.
    try {
        await ensureForgeClientArtifacts(serv, modLoaderData, loggerLaunchSuite)
    } catch (err) {
        log.error('Forge client install failed:', err)
        showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringLaunchTitle'), err.message || Lang.queryJS('landing.dlAsync.seeConsoleForDetails'))
        return
    }

    if(login) {
        const authUser = ConfigManager.getSelectedAccount()
        log.info(`Sending selected account (${authUser.displayName}) to ProcessBuilder.`)
        let pb = new ProcessBuilder(serv, versionData, modLoaderData, authUser, remote.app.getVersion())
        setLaunchDetails(Lang.queryJS('landing.dlAsync.launchingGame'))

        // const SERVER_JOINED_REGEX = /\[.+\]: \[CHAT\] [a-zA-Z0-9_]{1,16} joined the game/
        const SERVER_JOINED_REGEX = new RegExp(`\\[.+\\]: \\[CHAT\\] ${authUser.displayName} joined the game`)

        const onLoadComplete = () => {
            toggleLaunchArea(false)
            if(hasRPC){
                DiscordWrapper.updateDetails(Lang.queryJS('landing.discord.loading'))
                proc.stdout.on('data', gameStateChange)
            }
            proc.stdout.removeListener('data', tempListener)
            proc.stderr.removeListener('data', gameErrorListener)
        }
        const start = Date.now()

        // Attach a temporary listener to the client output.
        // Will wait for a certain bit of text meaning that
        // the client application has started, and we can hide
        // the progress bar stuff.
        const tempListener = function(data){
            if(GAME_LAUNCH_REGEX.test(data.trim())){
                const diff = Date.now()-start
                if(diff < MIN_LINGER) {
                    setTimeout(onLoadComplete, MIN_LINGER-diff)
                } else {
                    onLoadComplete()
                }
            }
        }

        // Listener for Discord RPC.
        const gameStateChange = function(data){
            data = data.trim()
            if(SERVER_JOINED_REGEX.test(data)){
                DiscordWrapper.updateDetails(Lang.queryJS('landing.discord.joined'))
            } else if(GAME_JOINED_REGEX.test(data)){
                DiscordWrapper.updateDetails(Lang.queryJS('landing.discord.joining'))
            }
        }

        const gameErrorListener = function(data){
            data = data.trim()
            if(data.indexOf('Could not find or load main class net.minecraft.launchwrapper.Launch') > -1){
                log.error('Game launch failed, LaunchWrapper was not downloaded properly.')
                showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringLaunchTitle'), Lang.queryJS('landing.dlAsync.launchWrapperNotDownloaded'))
            }
        }

        try {
            // Build Minecraft process.
            proc = pb.build()

            // Bind listeners to stdout.
            proc.stdout.on('data', tempListener)
            proc.stderr.on('data', gameErrorListener)

            setLaunchDetails(Lang.queryJS('landing.dlAsync.doneEnjoyServer'))

            // Battle Pass — credit time-in-game from process start to exit.
            // Server picks the timestamps so the client can't lie about elapsed.
            const playSession = require('./assets/js/playsession')
            playSession.start('game')
            proc.on('close', () => { playSession.end('game') })

            // Init Discord Hook
            if(distro.rawDistribution.discord != null && serv.rawServer.discord != null){
                DiscordWrapper.initRPC(distro.rawDistribution.discord, serv.rawServer.discord)
                hasRPC = true
                proc.on('close', (code, signal) => {
                    log.info('Shutting down Discord Rich Presence..')
                    DiscordWrapper.shutdownRPC()
                    hasRPC = false
                    proc = null
                })
            }

        } catch(err) {

            log.error('Error during launch', err)
            showLaunchFailure(Lang.queryJS('landing.dlAsync.errorDuringLaunchTitle'), Lang.queryJS('landing.dlAsync.checkConsoleForDetails'))

        }
    }

}

/* ────────────────────────── Battle Pass HUD ──────────────────────────
 *
 * Daily VIP quest. A thin top rail whose fill = qualifying-days / 28,
 * with a single VIP node at the far-right end. Below the bar a live
 * timer shows TODAY's in-game time toward the 5h daily goal (resets at
 * Kyiv midnight). No levels. Only in-game time counts.
 *
 * Live ticking is anchored to the server's open-game-session started_at
 * (via play_vip_progress, which already counts open sessions up to now),
 * so a renderer reload continues the timer instead of resetting it.
 */
;(function initBattlePassHud(){
    const ps = require('./assets/js/playsession')
    const log = LoggerUtil.getLogger('BattlePass')
    const REFRESH_MS = 30_000   // re-read progress from DB
    const TICK_MS    = 1_000    // local repaint cadence

    function unit(key){
        return Lang.queryJS(`battlepass.unit.${key}`) || { h: 'h', min: 'min', sec: 'sec' }[key]
    }
    // Today's progress clock, 2 most-significant units, styled numerals.
    function fmtToday(s){
        s = Math.max(0, Math.floor(s))
        const h = Math.floor(s / 3600)
        const m = Math.floor((s % 3600) / 60)
        const sec = s % 60
        const part = (n, u) => `<strong>${n}</strong>${unit(u)}`
        if (h > 0) return `${part(h, 'h')} ${part(m, 'min')}`
        if (m > 0) return `${part(m, 'min')} ${part(sec, 'sec')}`
        return part(sec, 'sec')
    }

    const VIP_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>'
    function rarityLabel(rarity){
        return (Lang.queryJS('battlepass.rarity.' + rarity) || rarity || '').toString().toUpperCase()
    }

    function mount(){
        const root = document.getElementById('bp_topbar')
        if(!root) return
        const q = (sel) => root.querySelector(sel)
        const $days      = q('[data-bp="days"]')
        const $daysTotal = q('[data-bp="days-total"]')
        const $today     = q('[data-bp="today"]')
        const $todayGoal = q('[data-bp="today-goal"]')
        const $fill      = q('[data-bp="bar-fill"]')
        const $nodes     = q('[data-bp="nodes"]')

        // Latest server snapshot.
        let vip = null              // the single VIP tier row
        let daysCompleted = 0
        let daysNeeded = 28
        let todaySecondsBase = 0    // server-counted today seconds at fetch time
        let dailyGoalSecs = 5 * 3600
        let openGameStartMs = null  // server started_at of open game session
        let fetchedAtMs = Date.now()
        let claimed = false
        let nodeRendered = false
        let tickHandle = null
        let autoOpened = false      // auto-pop the claim modal once per session

        function renderNode(){
            if (!vip || nodeRendered) return
            $nodes.innerHTML = ''
            const li = document.createElement('li')
            li.className = 'bp-topbar-node bp-topbar-node-anchor-right'
            li.dataset.rarity = vip.rarity
            li.style.left = '100%'
            li.style.cursor = 'pointer'
            li.addEventListener('click', openModal)
            const name  = Lang.queryJS(`battlepass.tier.${vip.code}.name`) || vip.code
            const perks = Lang.queryJS(`battlepass.tier.${vip.code}.perks`)
            const perksHtml = Array.isArray(perks) && perks.length
                ? `<ul class="bp-topbar-node-tip-perks">` + perks.map(p => `<li>${p}</li>`).join('') + `</ul>`
                : ''
            li.innerHTML =
                VIP_ICON +
                `<span class="bp-topbar-node-tip">` +
                `<span class="bp-topbar-node-tip-head">${name}</span>` +
                `<span class="bp-topbar-node-tip-sub">${rarityLabel(vip.rarity)}</span>` +
                perksHtml +
                `</span>`
            $nodes.appendChild(li)
            nodeRendered = true
        }

        // Today's seconds, extrapolated live from the server base while a
        // game session is open. Capped for display at the daily goal.
        function liveTodaySeconds(){
            let live = 0
            if (openGameStartMs != null) {
                // play_vip_progress already counted this session up to
                // fetch time; continue from there.
                live = Math.max(0, (Date.now() - fetchedAtMs) / 1000)
            }
            return todaySecondsBase + live
        }

        function paint(){
            const today = liveTodaySeconds()
            const todayDisplay = Math.min(today, dailyGoalSecs)
            const done = today >= dailyGoalSecs

            $days.textContent = daysCompleted
            $daysTotal.textContent = `/ ${daysNeeded}`
            $fill.style.width = `${Math.min(100, (daysCompleted / daysNeeded) * 100)}%`

            $today.innerHTML = fmtToday(todayDisplay)
            $todayGoal.innerHTML = `/ <strong>5</strong>${unit('h')}`
            root.classList.toggle('bp-topbar-today-done', done)

            // VIP node unlocks once the whole quest is complete.
            const questDone = daysCompleted >= daysNeeded
            if (nodeRendered) {
                const li = $nodes.firstElementChild
                if (li) li.classList.toggle('bp-topbar-node-unlocked', questDone)
            }
            root.dataset.rarity = vip ? vip.rarity : 'common'
        }

        function startTicking(){
            if (tickHandle) return
            tickHandle = setInterval(paint, TICK_MS)
            paint()
        }

        async function refresh(){
            try {
                const r = await ps.fetchProgress()
                if (!r) { root.hidden = true; return }
                vip = r.vip
                daysCompleted = r.daysCompleted
                daysNeeded = r.daysNeeded
                todaySecondsBase = r.todaySeconds
                dailyGoalSecs = r.dailyGoalSecs
                openGameStartMs = r.openGameStartMs
                claimed = r.claimed
                fetchedAtMs = Date.now()
                renderNode()
                paint()
                if (root.hidden) {
                    root.hidden = false
                    void root.offsetWidth
                    root.classList.add('bp-topbar-visible')
                }
                // Quest complete + reward still unclaimed → celebrate once.
                if (!autoOpened && vip && !claimed && daysCompleted >= daysNeeded) {
                    autoOpened = true
                    openModal()
                }
            } catch (e) {
                log.warn('refresh failed:', e.message)
            }
        }

        ps.subscribe((ev) => {
            if (ev.type === 'start') { startTicking(); refresh() }
            if (ev.type === 'end')   refresh()
        })

        // ─────────────── VIP claim modal ───────────────
        const modal = document.getElementById('bp_modal')
        const $mIcon   = modal?.querySelector('[data-bp-modal-icon]')
        const $mRarity = modal?.querySelector('[data-bp-modal-rarity-tag]')
        const $mName   = modal?.querySelector('[data-bp-modal-name]')
        const $mLvl    = modal?.querySelector('[data-bp-modal-level-tag]')
        const $mPerks  = modal?.querySelector('[data-bp-modal-perks]')
        const $mState  = modal?.querySelector('[data-bp-modal-state]')

        const TG_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
        const DC_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>'

        function openModal(){
            if (!modal || !vip) return
            modal.dataset.rarity = vip.rarity
            $mIcon.innerHTML = VIP_ICON
            $mRarity.textContent = rarityLabel(vip.rarity)
            $mName.textContent = Lang.queryJS(`battlepass.tier.${vip.code}.name`) || vip.code
            // Show progress (X / 28 days) where the level tag used to be.
            $mLvl.textContent = `${daysCompleted} / ${daysNeeded} ${Lang.queryJS('battlepass.daysLabel') || 'days'}`
            const perks = Lang.queryJS(`battlepass.tier.${vip.code}.perks`)
            $mPerks.innerHTML = Array.isArray(perks) ? perks.map(p => `<li>${p}</li>`).join('') : ''
            renderModalState()
            modal.hidden = false
        }
        function closeModal(){ if (modal) modal.hidden = true }

        function renderModalState(){
            if (!$mState) return
            const questDone = daysCompleted >= daysNeeded
            if (claimed) {
                $mState.innerHTML = contactBlockHtml('alreadyClaimed')
            } else if (!questDone) {
                const txt = (Lang.queryJS('battlepass.modal.needDays') || 'Play 5h/day · {done}/{need} days')
                    .replace('{done}', daysCompleted).replace('{need}', daysNeeded)
                $mState.innerHTML = `<div class="bp-modal-locked-text">${txt}</div>`
            } else {
                const btn = document.createElement('button')
                btn.type = 'button'
                btn.className = 'bp-modal-claim'
                btn.textContent = Lang.queryJS('battlepass.modal.claim') || 'Claim'
                btn.addEventListener('click', () => doClaim(btn))
                $mState.innerHTML = ''
                $mState.appendChild(btn)
            }
        }

        function contactBlockHtml(variant){
            const title = Lang.queryJS('battlepass.modal.' + (variant === 'alreadyClaimed' ? 'alreadyClaimedTitle' : 'afterClaimTitle'))
            const body  = Lang.queryJS('battlepass.modal.' + (variant === 'alreadyClaimed' ? 'alreadyClaimedBody'  : 'afterClaimBody'))
            const tgUrl = Lang.queryEJS('landing.mediaTelegramURL')
            const dcUrl = Lang.queryEJS('landing.mediaDiscordURL')
            return `
                <div class="bp-modal-contact-title">${title}</div>
                <p class="bp-modal-contact-body">${body}</p>
                <div class="bp-modal-contact-buttons">
                    <a href="${tgUrl}" class="bp-modal-contact-tg" target="_blank" rel="noopener">${TG_ICON} Telegram</a>
                    <a href="${dcUrl}" class="bp-modal-contact-discord" target="_blank" rel="noopener">${DC_ICON} Discord</a>
                </div>
            `
        }

        async function doClaim(btn){
            if (!vip) return
            btn.disabled = true
            try {
                const res = await ps.claim(vip.level)
                if (res?.ok || res?.reason === 'already_claimed') {
                    claimed = true
                    $mState.innerHTML = contactBlockHtml(res?.ok ? 'afterClaim' : 'alreadyClaimed')
                } else {
                    btn.disabled = false
                    log.warn('claim rejected:', res?.reason)
                }
            } catch (e) {
                btn.disabled = false
                log.warn('claim failed:', e.message)
            }
        }

        modal?.querySelectorAll('[data-bp-close]').forEach(el => el.addEventListener('click', closeModal))
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal?.hidden) closeModal() })

        refresh()
        startTicking()
        setInterval(refresh, REFRESH_MS)
        log.info('rail mounted')
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount)
    } else {
        mount()
    }
})()

