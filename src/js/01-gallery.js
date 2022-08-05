// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import SimpleLightbox fromlightbox.css';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const cardsMarkup = renderCardGalery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox');

function renderCardGalery(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" 
      alt="${description}" />
      </a>
      `;
    })
    .join('');
}