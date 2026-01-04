const buttons = document.querySelectorAll('.tab-button');
const categories = document.querySelectorAll('.product-category');
const showMoreBtn = document.getElementById('show-more');

let visibleCount = 10;

// Initialize first category
let activeCategory = document.querySelector('.tab-button.active').dataset.category;
updateVisibleProducts(activeCategory);

// Function to show first 5 products
function updateVisibleProducts(categoryId) {
  const products = document.querySelectorAll(`#${categoryId} .product`);
  products.forEach((prod, index) => {
    prod.style.display = index < visibleCount ? 'block' : 'none';
  });
  showMoreBtn.style.display = products.length > visibleCount ? 'block' : 'none';
}


// main window


// Tab switching for sub-windows
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    categories.forEach(cat => (cat.style.display = 'none'));

    activeCategory = button.dataset.category;
    document.getElementById(activeCategory).style.display = 'grid';
    visibleCount = 10;
    updateVisibleProducts(activeCategory);
  });
});

// Show More button
showMoreBtn.addEventListener('click', () => {
  visibleCount += 5;
  updateVisibleProducts(activeCategory);
});