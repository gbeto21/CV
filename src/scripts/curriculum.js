const photo = document.querySelector('#photoContainer');
const headerModal = document.querySelector('#photoContainerModal');
const panel = document.querySelector("#panel")
const main = document.querySelector("#main")
const buttonClose = document.querySelector("#buttonClose")
const smallDevice = window.matchMedia('screen and (max-width: 320px) and (min-width: 0px)')

const eventClick = 'click'
const none = 'none'
const block = 'block'
const blank = ''

var showingPanel = false

smallDevice.addListener(validateSmallDevice)
validateSmallDevice(smallDevice)

function validateSmallDevice(event) {
    if (event.matches) {
        photo.addEventListener(eventClick, validateShowModal)
        buttonClose.addEventListener(eventClick, hideModal)
        validateHidePanel()
    }

    else {
        photo.removeEventListener(eventClick, validateShowModal)
        buttonClose.removeEventListener(eventClick, hideModal)
        showElements()
    }
}

function validateHidePanel() {

    if (showingPanel == false)
        hidePanel()
}

function hidePanel() {

    main.style.display = block
    panel.style.display = none
    headerModal.style.display = none
}

function showPanel() {

    main.style.display = none
    panel.style.display = block
    headerModal.style.display = block
}

function showElements() {
    showingPanel = false
    main.style.display = blank
    panel.style.display = blank
    headerModal.style.display = blank
}

function validateShowModal() {

    if (showingPanel == false) {
        showPanel()
        showingPanel = true;
    }
}

function hideModal() {

    if (showingPanel) {
        hidePanel()
        showingPanel = false;
    }
}