const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.querySelectorAll('li.nav__item');
const mobileMenuBtn = document.querySelector('.mobile-menu__line');
const bodyContainer = document.querySelector('.body-container');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  mobileMenuBtn.classList.toggle('mobile-menu__line--active');
  bodyContainer.classList.toggle('body-container--lock');
});

navMenu.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  mobileMenuBtn.classList.remove('mobile-menu__line--active');
  bodyContainer.classList.remove('body-container--lock');
});
