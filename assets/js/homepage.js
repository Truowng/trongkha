const homeBannerSlide = new Swiper("#home-banner .banner-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: "#home-banner .banner-slider .slider-button-next",
    prevEl: "#home-banner .banner-slider .slider-button-prev",
  },
});

const homeBlogSlider = new Swiper("#home-blog .blog-slider .swiper", {
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
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// Play Video
const videoControlButton = document.querySelector(
  "#home-video .video-container .video-control-button"
);
const videoContainer = document.querySelector("#home-video .video-container");

videoControlButton.addEventListener("click", () => {
  videoContainer.classList.add("play");
});
