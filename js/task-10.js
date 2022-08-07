const inputNum = document.querySelector('input')
const createbtn = document.querySelector('[data-create]')
const destroybtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

createbtn.addEventListener('click', () => {
	const addBoxes = createBoxes(inputNum.value)
	boxes.append(...addBoxes)
})

destroybtn.addEventListener('click', () => {
	destroyBoxes.call()
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const addElements = []
  for (let i = 0; i < amount; i += 1){
		const newDiv = document.createElement('div')
		newDiv.style.height = `${30 + 10 * i}px`
		newDiv.style.width = `${30 + 10 * i}px`
		newDiv.style.background = getRandomHexColor()
		addElements.push(newDiv)
};
	return addElements
}

function destroyBoxes() {
  boxes.innerHTML = ''
}