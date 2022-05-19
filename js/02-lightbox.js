import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galeryElement = document.querySelector(".gallery");
galeryElement.addEventListener("click", onCreateModal);
galeryElement.insertAdjacentHTML(
  "beforeend",
  oncreateMarkUpGalery(galleryItems)
);

function oncreateMarkUpGalery(galery) {
  return galery
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

function onCreateModal(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt" });
}
