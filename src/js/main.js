let smallRes = window.matchMedia('(max-width: 760px)');

smallRes.addEventListener('change', (e) => {
  if (e.matches) {
    projectSlider.params.slidesPerGroup = 1;
    projectSlider.params.slidesPerView = 1;
  } else {
    projectSlider.params.slidesPerGroup = 2;
    projectSlider.params.slidesPerView = 2;
  }
});

let projectSlider = new Swiper('.project__slider', {
  slidesPerGroup: 2,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.project__slider__btn--next',
    prevEl: '.project__slider__btn--prev'
  }
});

let arendaSlider = new Swiper ('.arenda-slider__wrapper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.arenda-slider__btn--next',
    prevEl: '.arenda-slider__btn--prev'
  }
});