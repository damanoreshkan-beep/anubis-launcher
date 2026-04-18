const loginOptionsCancelContainer = document.getElementById('loginOptionCancelContainer')
const loginOptionGuest = document.getElementById('loginOptionGuest')
const guestNicknameInput = document.getElementById('guestNicknameInput')
const guestNicknameError = document.getElementById('guestNicknameError')
const loginOptionsCancelButton = document.getElementById('loginOptionCancelButton')

const ConfigManager_loginOptions = require('./assets/js/configmanager')
const Lang_loginOptions = require('./assets/js/langloader')
const { validateUsername: validateGuestNickname } = require('./assets/js/offlineauth')

let loginOptionsCancellable = false

let loginOptionsViewOnLoginSuccess
let loginOptionsViewOnLoginCancel
let loginOptionsViewOnCancel
let loginOptionsViewCancelHandler

function loginOptionsCancelEnabled(val){
    if(val){
        $(loginOptionsCancelContainer).show()
    } else {
        $(loginOptionsCancelContainer).hide()
    }
}

function submitGuestLogin(){
    const nick = (guestNicknameInput.value || '').trim()
    if(!validateGuestNickname(nick)){
        guestNicknameError.textContent = Lang_loginOptions.queryJS('loginOptions.guestValidationError')
        return
    }
    guestNicknameError.textContent = ''
    const authAcc = ConfigManager_loginOptions.addOfflineAuthAccount(nick)
    ConfigManager_loginOptions.save()
    // Same post-login contract as Mojang/Microsoft handlers: push the new account
    // into landing/settings UI state before the view switch fires.
    if(typeof updateSelectedAccount === 'function'){
        updateSelectedAccount(authAcc)
    }
    guestNicknameInput.value = ''
    switchView(getCurrentView(), loginOptionsViewOnLoginSuccess)
}

loginOptionGuest.onclick = submitGuestLogin
guestNicknameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') submitGuestLogin()
})

loginOptionsCancelButton.onclick = (e) => {
    switchView(getCurrentView(), loginOptionsViewOnCancel, 500, 500, () => {
        // Clear login values (Mojang login)
        // No cleanup needed for Microsoft.
        loginUsername.value = ''
        loginPassword.value = ''
        if(loginOptionsViewCancelHandler != null){
            loginOptionsViewCancelHandler()
            loginOptionsViewCancelHandler = null
        }
    })
}