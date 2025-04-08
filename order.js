
const urlParams = new URLSearchParams(window.location.search);
const item = urlParams.get('item');
if (item) {
  document.getElementById('product-name').textContent = "Ordering: " + decodeURIComponent(item);
}


const form = document.getElementById('order-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  document.getElementById('success-message').style.display = 'block';
  form.reset();
});
