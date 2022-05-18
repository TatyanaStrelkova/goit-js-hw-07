import { galleryItems } from './gallery-items.js';

const containerWithGalleryItems = document.querySelector('.gallery');
const markUp = createGalleryMarkUp(galleryItems);
const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

containerWithGalleryItems.insertAdjacentHTML('afterbegin', markUp);
containerWithGalleryItems.addEventListener('click', onGalleryItemsClick);
/* window.addEventListener('keydown', onEscKeyPress); */

function createGalleryMarkUp(galleryItems) {
    return galleryItems.
        map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
        })
        .join('');
}

function onGalleryItemsClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }
  instance.show()   
  
}

/* function onEscKeyPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}  */








 






