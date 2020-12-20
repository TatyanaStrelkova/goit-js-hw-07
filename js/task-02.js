const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');
ingredients.forEach(item => {
const itemRef = document.createElement('li');
    itemRef.textContent = item;
    listRef.appendChild(itemRef);
})

