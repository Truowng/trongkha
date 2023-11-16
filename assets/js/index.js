const projectSlider = new Swiper(".project .project-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".project-slider .slider-button-next",
    prevEl: ".project-slider .slider-button-prev",
  },
});

// TOGGLE MENU
const menu = document.querySelector("#header .menu-mobile .header-nav");

const handleMenu = (action) => {
  if (action == "open") {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
};
