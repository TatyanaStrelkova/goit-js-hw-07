const categoriesRef = document.querySelectorAll('ul#categories > li.item');
console.log(`В списке ${categoriesRef.length} категории.`);

function showElementsCategories(array) {
    array.forEach((element) => console.log('Категория: ' + element.firstElementChild.textContent + '\n Количество элементов: ' + element.lastElementChild.children.length));
}
showElementsCategories(categoriesRef)
