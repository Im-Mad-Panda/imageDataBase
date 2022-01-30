// 1. По нажатию на кнопку вы меняете две картинки между собой (либо первая, либо вторая).
// Используйте объект аттрибута

// 2. Сделайте кнопку, которая после первого нажатия на нее становится неактивной (disabled)

const imageDataBase = [
  "https://artguide.com/storage/post/1599/wide_detail_picture.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg/280px-Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg",
];
const nextImage = document.getElementById("img");
const changeImgBtn = document.getElementById("changeImgBtn");
const srcAttr = document.createAttribute("src");
let imageIndex = 0;
srcAttr.value = imageDataBase[imageIndex];
nextImage.setAttributeNode(srcAttr);

changeImgBtn.addEventListener("click", () => {
  if (imageIndex < imageDataBase.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
  srcAttr.value = imageDataBase[imageIndex];
  nextImage.setAttributeNode(srcAttr);
});
