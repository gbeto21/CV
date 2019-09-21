const photo = document.querySelector('#photoContainer');
const headerModal = document.querySelector('#photoContainerModal');
const smallDevice = window.matchMedia('screen and (max-width: 320px) and (min-width: 0px)')

smallDevice.addListener(validateSmallDevice)
validateSmallDevice(smallDevice)

function validateSmallDevice(event){
    if(event.matches)
        photo.addEventListener('click', showModal)
    else
        photo.removeEventListener('click', showModal)
}

function showModal(){
    
    if(headerModal.classList.contains('active'))
        headerModal.classList.remove('active')
    else
        headerModal.classList.add('active');
    debugger
}