import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galeryElement = document.querySelector(".gallery");
galeryElement.addEventListener("click", onCreateModal);
galeryElement.addEventListener("keydown", onCloseModal);
galeryElement.insertAdjacentHTML(
  "beforeend",
  oncreateMarkUpGalery(galleryItems)
);

function oncreateMarkUpGalery(galery) {
  return galery
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
    .join("");
}
let instance;
function onCreateModal(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600"> `);

  instance.show();
}

function onCloseModal(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
