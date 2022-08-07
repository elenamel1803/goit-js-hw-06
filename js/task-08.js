const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
    evt.preventDefault()

    const {
        elements: { email, password },
    } = evt.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all fields!')
    }
    const formValues = { email: email.value, password: password.value }
    
    console.log(formValues)

    evt.currentTarget.reset()
}