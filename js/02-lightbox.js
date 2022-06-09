import { galleryItems } from './gallery-items.js';
// Change code below this line
//import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImegaesCardsMarkup(galleryItems);

function createImegaesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

const modalWin = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// galleryContainer.addEventListener('click', onGalleryElementClick);

// function onGalleryElementClick(event) {
//   event.preventDefault();

//   const isGalleryElement = event.target.classList.contains('gallery__image');

//   if (!isGalleryElement) {
//     return;
//   }
//   //   const selectedElement = event.target.dataset.source;
//   openLightBoxGallery();
// }

// function openLightBoxGallery() {
//   const modalWin = new SimpleLightbox('.gallery__item', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
//   //   const lightboxGalleryEl = new SimpleLightbox('.gallery a');
//   //   lightboxGalleryEl.open();
// }
