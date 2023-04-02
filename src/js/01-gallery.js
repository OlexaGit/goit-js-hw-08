import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');

const addHtmlElemenys = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', addHtmlElemenys);

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
});

galleryContainer.onclick = event => {
  if (!event.target.classList.contains('gallery__image')) {
    console.log('ERROR');
    return;
  }
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
  );
  instance.show();
  console.log(event.target.dataset.source);
  const keyEscape = evt => {
    console.log('Keydown: ', evt.key);
    if (evt.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', keyEscape);
    }
  };

  document.addEventListener('keydown', keyEscape);
};

console.log(galleryItems);
