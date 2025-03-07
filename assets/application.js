function updateCartCount(count) {
  const badge = document.querySelector('.cart-count-badge');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count == 0);
  }
}
