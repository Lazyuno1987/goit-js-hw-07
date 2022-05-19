import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galeryElement = document.querySelector(".gallery");
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


  const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt" });

