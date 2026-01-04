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
// TO BE ADDED AND WORK ON IT AS I LEARN
{/* <script>
  // ===== MAIN TABS =====
  const mainTabButtons = document.querySelectorAll(".tab");
  const allTabContents = document.querySelectorAll(".tab-content");

  mainTabButtons.forEach(mainButton => {
    mainButton.addEventListener("click", () => {

      // 1. Deactivate all main tabs
      mainTabButtons.forEach(btn => btn.classList.remove("active"));

      // 2. Hide all main contents
      allTabContents.forEach(section => section.classList.remove("active"));

      // 3. Activate clicked tab
      mainButton.classList.add("active");

      // 4. Show linked content
      const contentId = mainButton.dataset.tab;
      const activeContent = document.getElementById(contentId);
      activeContent.classList.add("active");

      // 5. If there are sub-tabs, activate the first one
      const subTabButtons = activeContent.querySelectorAll(".sub-tab");
      const subTabContents = activeContent.querySelectorAll(".sub-content");

      if (subTabButtons.length > 0) {
        subTabButtons.forEach(btn => btn.classList.remove("active"));
        subTabContents.forEach(sec => sec.classList.remove("active"));

        subTabButtons[0].classList.add("active");
        subTabContents[0].classList.add("active");
      }
    });
  });

  // ===== SUB TABS =====
  const allSubTabButtons = document.querySelectorAll(".sub-tab");

  allSubTabButtons.forEach(subButton => {
    subButton.addEventListener("click", () => {

      // 1. Find parent tab content
      const parentContent = subButton.closest(".tab-content");

      // 2. Deactivate all sub-tabs in this section
      parentContent.querySelectorAll(".sub-tab")
        .forEach(btn => btn.classList.remove("active"));

      // 3. Hide all sub-tab contents in this section
      parentContent.querySelectorAll(".sub-content")
        .forEach(sec => sec.classList.remove("active"));

      // 4. Activate clicked sub-tab
      subButton.classList.add("active");

      // 5. Show linked sub-content
      const subContentId = subButton.dataset.subtab;
      parentContent.querySelector(`#${subContentId}`)
        .classList.add("active");
    });
  });
</script> */}