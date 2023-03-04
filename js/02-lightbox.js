import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = handelGalleryMarkup(galleryItems);

function handelGalleryMarkup(items) {
    return items.map(item => 
        `<div class="gallery__item">
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
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

    new SimpleLightbox(".gallery a", {
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
     scrollZoom: false,
    });

    const modalImg = event.target.dataset.source;

    const modalImgShow = basicLightbox.create(
        `<img src="${modalImg}" width="800" height="600">`
    )
    
    modalImgShow.show()

}

