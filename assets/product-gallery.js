// assets/product-gallery.js
document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail-btn');
  const mainImages = document.querySelectorAll('.product-image');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const targetId = thumb.getAttribute('data-thumbnail-id');
      
      mainImages.forEach(img => {
        if (img.getAttribute('data-image-id') === targetId) {
          img.classList.remove('hidden');
        } else {
          img.classList.add('hidden');
        }
      });
    });
  });
});