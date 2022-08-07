let counterValue = 0

const displayCounter = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    displayCounter.textContent = counterValue
    
    console.log(displayCounter)
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    displayCounter.textContent = counterValue
    
    console.log(displayCounter)
});