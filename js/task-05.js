const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange);

function onInputChange (evt) {
    console.log(evt.currentTarget.value);
    outputEl.textContent = evt.currentTarget.value
    
    if (evt.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous'
    }
}