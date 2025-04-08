const urlParams = new URLSearchParams(window.location.search);
const item = urlParams.get('item');
if (item) {
  document.getElementById('product-name').textContent = "Ordering: " + decodeURIComponent(item);
}

// Handle form submission
const form = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    successMessage.style.display = 'block';
    form.reset();
  });
}
