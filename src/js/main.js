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
      spaceBetween: 60,
      navigation: {
          nextEl: '.arenda__slider__btn--next',
          prevEl: '.arenda__slider__btn--prev'
      }
  })