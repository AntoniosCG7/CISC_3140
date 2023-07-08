var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightbox-image");
var thumbnailList = document.getElementById("thumbnail-list");
var imageList = document.getElementById("image-list");
var thumbnails = imageList.getElementsByClassName("thumbnail");
var index = 0;

function openLightbox(imageSrc, clickedIndex) {
  lightbox.style.display = "flex";
  lightboxImage.src = imageSrc;
  index = clickedIndex;
  thumbnailList.innerHTML = imageList.innerHTML; // Copy thumbnails to lightbox
}

function closeLightbox() {
  lightbox.style.display = "none";
}

// Add onclick handlers to all thumbnail images
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function () {
    openLightbox(this.src, i);
  };
}

// Function to switch to the next image every half second
function switchImage() {
  if (lightbox.style.display == "flex") {
    index = (index + 1) % thumbnails.length;
    lightboxImage.src = thumbnails[index].src;
  }
}

setInterval(switchImage, 500);
