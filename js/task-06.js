const textInputEl = document.querySelector('#validation-input')

textInputEl.addEventListener('blur', evt => {
    if (evt.currentTarget.value.length != textInputEl.getAttribute ('data-length')) {
        textInputEl.classList.add('invalid')
        textInputEl.classList.remove('valid')
    } else {
        textInputEl.classList.add('valid')
        textInputEl.classList.remove('invalid')
    }
})