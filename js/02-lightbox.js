import { galleryItems } from './gallery-items.js';

const containerWithGalleryItems = document.querySelector('.gallery');
const markUp = createGalleryMarkUp(galleryItems);

containerWithGalleryItems.insertAdjacentHTML('afterbegin', markUp)
containerWithGalleryItems.addEventListener('click', () => {
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, });
})

function createGalleryMarkUp(galleryItems) {
    return galleryItems.
        map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`;
        })
        .join('');
}


    


