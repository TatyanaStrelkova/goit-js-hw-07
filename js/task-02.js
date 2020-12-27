const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');
const createItems = item => {
	const itemRef = document.createElement('li');
	itemRef.classList.add('ingredients__item');
	itemRef.textContent = item;
	return itemRef;
};
listRef.append(...ingredients.map(elem => createItems(elem)));
