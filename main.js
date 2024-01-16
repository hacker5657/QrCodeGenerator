/*
https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=123
*/

const form = document.querySelector('#form')
const qrCodeData = document.querySelector('#qrCodeData')
const qrCodeWrapper = document.querySelector('#qrCode')
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='
form.addEventListener('submit', (event) => {
  event.preventDefault()
  if(qrCodeData.value != ''){
    if(qrCodeData.classList.contains('error')){
      qrCodeData.classList.remove('error')
    }
    qrCodeWrapper.innerHTML = ''
    const value = qrCodeData.value
    const request = api + value
    const img = `<img src="${request}" alt="Qr code">`
    qrCodeWrapper.insertAdjacentHTML('beforeend', img)
  } else {
    qrCodeData.classList.add('error')
    qrCodeWrapper.innerHTML = ''
  }
})
