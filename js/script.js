// script.js
const toggleBtn = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
