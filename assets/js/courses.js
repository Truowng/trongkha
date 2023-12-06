const coursesValueSlider = new Swiper("#courses-value .value-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
