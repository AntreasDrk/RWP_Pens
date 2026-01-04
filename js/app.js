const buttons = document.querySelectorAll('.tab-button');
const categories = document.querySelectorAll('.product-category');
const showMoreBtn = document.getElementById('show-more');

// Main tabs - sub tabs
const mainWindowBtn = document.querySelectorAll('.window-button');
const subTabsBtn = document.querySelectorAll('.windows-content');


mainWindowBtn.forEach(mWin => {
    mWin.addEventListener('click', () => {

        // Deactivating all main tabs
        mainWindowBtn.forEach(btn => btn.classList.remove(active));

        // Hidding all the main content
        subTabsBtn.forEach(section => section.classList.remove('active'));

        // Activating clicked tab
        mWin.classList.add('active');

        // Showing linked content
        const contentId = 
    })
})