/* Сделай такую же галерею как в первом задании, но используя библиотеку
SimpleLightbox, которая возьмет на себя обработку кликов по изображениям,
открытие и закрытие модального окна, а также пролистывание изображений 
при помощи клавиатуры. 
Посмотри демо видео работы галереи с подключенной библиотекой. 

2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
3. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и 
simple-lightbox.min.css.
4. Инициализация библиотеки после того как элементы галереи созданы и 
добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - 
в первую очередь секции «Usage» и «Markup».
5. Посмотри в документации секцию «Options» и добавь отображение подписей 
к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 
250 миллисекунд после открытия изображения.*/

import { galleryItems } from './gallery-items.js';

const containerWithGalleryItems = document.querySelector('.gallery');
const markUp = createGalleryMarkUp(galleryItems);

containerWithGalleryItems.insertAdjacentHTML('afterbegin', markUp)
containerWithGalleryItems.addEventListener('click', onGalleryItemsClick)

function createGalleryMarkUp(galleryItems) {
    return galleryItems.
        map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
        })
        .join('');
}

function onGalleryItemsClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {    });
    
}

