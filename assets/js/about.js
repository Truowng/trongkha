const aboutTeamSlider = new Swiper("#about-team .team-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
