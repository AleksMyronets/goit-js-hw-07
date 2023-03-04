import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryMarkup = handelGalleryMarkup(galleryItems);

function handelGalleryMarkup(items) {
    return items.map(item => 
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" 
          data-source="${item.original}" alt="${item.alt}">
        </a>
      </div>`
    )
    .join('');

}

galleryList.insertAdjacentHTML('beforeend', galleryMarkup)
galleryList.addEventListener('click', handelGalleryClick)

function handelGalleryClick(event) {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
        return
    }

    const modalImg = event.target.dataset.source;

    const modalImgShow = basicLightbox.create(
        `<img src="${modalImg}" width="800" height="600">`
    )
    
    modalImgShow.show()

}