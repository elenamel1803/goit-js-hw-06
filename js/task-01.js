const listEl = document.querySelector('ul').children
const listAmountEl = listEl.length 
console.log(`Number of categories: ${listAmountEl}`)

for (const element of listEl) {
    const titleEl = element.firstElementChild.textContent;
    const itemEl = element.lastElementChild.children.length;

console.log(`Category: ${titleEl} \nElements: ${itemEl}`); 
}