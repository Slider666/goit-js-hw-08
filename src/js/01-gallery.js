// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const newGallary = galleryItems.map(({ preview, original, description }) => {
  const newEl = document.createElement('div');
  newEl.classList.add('gallery__item');
  newEl.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>`
  );
  return newEl;
});

galleryEl.append(...newGallary);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
