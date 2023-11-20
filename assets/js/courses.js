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
      spaceBetween: 60,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 72,
    },
  },
});
