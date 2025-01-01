// const menu_btn = document.querySelector(".hamburger");
// const mobile_menu = document.querySelector(".mobile-nav");
// menu_btn.addEventListener("click", function () {
//   menu_btn.classList.toggle("is-active");
//   mobile_menu.classList.toggle("is-active");
// });

// document.querySelectorAll(".mobile-nav a").forEach((item) => {
//   item.addEventListener("click", function () {
//     menu_btn.classList.toggle("is-active");
//     mobile_menu.classList.toggle("is-active");
//   });
// });


const observer = new MutationObserver(() => {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  if (navbarToggle && navbarMenu) {
    observer.disconnect(); // Stop observing once the elements are found
    navbarToggle.addEventListener('click', () => {
      console.log('test menu');
      navbarMenu.classList.toggle('active');
    });
  }
});

// Observe the document body for changes (like elements being added)
observer.observe(document.body, { childList: true, subtree: true });