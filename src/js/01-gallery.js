// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function newGallary(image) {
  return image
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                  />
              </a>
            </div>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', newGallary(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
