const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.querySelectorAll('li.nav__item')

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  mobileMenu.classList.toggle('mobile-menu--active');
});

navMenu.addEventListener('click', () => {
  nav.classList.remove('nav--active');
});