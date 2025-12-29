const buttons = document.querySelectorAll('.tab-button');
const categories = document.querySelectorAll('.product-category');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    // Hide all categories
    categories.forEach(cat => (cat.style.display = 'none'));

    // Activate clicked button
    button.classList.add('active');
    // Show corresponding category
    const category = button.getAttribute('data-category');
    document.getElementById(category).style.display = 'flex';
  });
});