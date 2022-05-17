import { galleryItems } from './gallery-items.js';

const containerWithGalleryItems = document.querySelector('.gallery');
const markUp = createGalleryMarkUp(galleryItems);

containerWithGalleryItems.insertAdjacentHTML('afterbegin', markUp)
containerWithGalleryItems.addEventListener('click', onGalleryItemsClick)

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

    /*     e.target.src = e.target.dataset.source; */
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
    instance.show()
   
}

window.addEventListener('keydown', closeModalPressEsc)

function closeModalPressEsc(e) {
  if (e.key === "Escape") {
    instance.close()
  }
}


 






