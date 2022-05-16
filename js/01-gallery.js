import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImegaesCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImegaesCardsMarkup(galleryItems) {
  return galleryItems
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

galleryContainer.addEventListener('click', onGalleryElementClick);

function onGalleryElementClick(event) {
  event.preventDefault();

  const isGalleryElement = event.target.classList.contains('gallery__image');

  if (!isGalleryElement) {
    return;
  }
  const selectedElement = event.target.dataset.source;
  openModal(selectedElement);
}

function openModal(selectedElement) {
  const modalForm = basicLightbox.create(`
    <img src="${selectedElement}" class = "modal">
`);
  modalForm.show();
}

// const but = document.querySelector('.button');
// //console.log(but);

// but.addEventListener('click', open);

// function open(event) {
//   //event.preventDefault;
//   const form = basicLightbox.create(`<img src="" class = "modal">`);
//   form.show();
// }
