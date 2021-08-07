const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parentsEl = document.querySelector("#ingredients");

const elements = ingredients.map(elem => {
  const ingredient = document.createElement('li');
  ingredient.textContent = elem;
  return ingredient;
})

parentsEl.append(...elements);


