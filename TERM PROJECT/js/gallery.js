// Get references to DOM elements
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightbox-image");
var thumbnailList = document.getElementById("thumbnail-list");
var imageList = document.getElementById("image-list");
var thumbnails = imageList.getElementsByClassName("thumbnail");
var index = 0;

/**
 * Opens the lightbox with the clicked image and index.
 *
 * @param {string} imageSrc - The source URL of the clicked image.
 * @param {number} clickedIndex - The index of the clicked image.
 */
function openLightbox(imageSrc, clickedIndex) {
  // Display the lightbox and set the image source
  lightbox.style.display = "flex";
  lightboxImage.src = imageSrc;
  index = clickedIndex;
  thumbnailList.innerHTML = imageList.innerHTML; // Copy thumbnails to lightbox
}

/**
 * Closes the lightbox.
 */
function closeLightbox() {
  // Hide the lightbox
  lightbox.style.display = "none";
}

// Add onclick handlers to all thumbnail images
for (var i = 0; i < thumbnails.length; i++) {
  // Use an IIFE to capture the value of i at each iteration
  (function (i) {
    thumbnails[i].onclick = function () {
      // Open the lightbox with the clicked image and index
      openLightbox(this.src, i);
    };
  })(i); // Pass the value of i into the IIFE
}

/**
 * Switches to the next image every half second.
 */
function switchImage() {
  if (lightbox.style.display == "flex") {
    // Increment the index and wrap around if necessary
    index = (index + 1) % thumbnails.length;
    lightboxImage.src = thumbnails[index].src;
  }
}

// Call switchImage every half second
setInterval(switchImage, 500);
