const changeColorBtn = document.querySelector('.change-color')
const bgColor = document.querySelector('body')
const colorValue = document.querySelector('.color')

changeColorBtn.addEventListener('click', evt => {
  const color = getRandomHexColor();
  bgColor.style.backgroundColor = color;
  colorValue.textContent = color;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}