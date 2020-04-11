let projectSlider = new Swiper('.project__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.project__slider__btn--next',
        prevEl: '.project__slider__btn--prev'
      }
  });

  let arendaSlider = new Swiper ('.arenda__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
          nextEl: '.arenda-slider__btn--next',
          prevEl: '.arenda-slider__btn--prev'
      }
  })