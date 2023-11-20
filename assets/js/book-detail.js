const bookSlider = new Swiper(".book .book-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 195,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 195,
    },
  },
});
