const inputEl = document.querySelector('#font-size-control')
const abracadabraEl = document.querySelector('#text')

inputEl.addEventListener('input', (evt) => abracadabraEl.style.fontSize = `${evt.currentTarget.value}px`);
abracadabraEl.style.fontSize = `${inputEl.value}px`;