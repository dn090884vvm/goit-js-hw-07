import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImegaesCardsMarkup(galleryItems);

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
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

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
  const modalForm = basicLightbox.create(
    `
    <img src="${selectedElement}" class = "modal"> `,
    {
      onShow: onOpenedModal,
      onClose: onClosedModal,
    }
  );
  modalForm.show();

  // document.addEventListener('keydown', event => {
  //   event.preventDefault();

  //   if (event.code === 'Escape') {
  //     modalForm.close();
  //   }
  // });

  function onOpenedModal() {
    document.addEventListener('keydown', escapeButtonPressed);
    console.log('Opened');
  }

  function onClosedModal() {
    document.removeEventListener('keydown', escapeButtonPressed);
    console.log('Closed');
  }

  function escapeButtonPressed(event) {
    if (event.code === 'Escape') {
      //return;
      modalForm.close();
    }
    // console.log(event.code);
  }
}

// function onOpenedModal() {
//   document.addEventListener('keydown', escapeButtonPressed);
// }

// function onClosedModal() {
//   document.removeEventListener('keydown', escapeButtonPressed);
// }

// function escapeButtonPressed(event) {
//   if (event.code !== 'Escape') {
//     return;
//   }
//   modalForm.close();
// }

// function closeModal() {
//   // basicLightbox.close();
// }

// document.addEventListener('keydown', closeModal);

// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });
// const but = document.querySelector('.button');
// //console.log(but);

// but.addEventListener('click', open);

// function open(event) {
//   //event.preventDefault;
//   const form = basicLightbox.create(`<img src="" class = "modal">`);
//   form.show();
// }
