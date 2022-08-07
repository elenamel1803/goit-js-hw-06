const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul')

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add("item")

  console.log(listItem);

  listEl.append(listItem);
});