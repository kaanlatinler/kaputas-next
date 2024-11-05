// /public/assets/js/revolution-slider.js

jQuery(document).ready(function () {
  // Revolution Slider
  jQuery("#slider-revolution").revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    delay: 5000,
    navigation: {
      arrows: {
        enable: true,
      },
      bullets: {
        enable: false,
        style: "hermes",
      },
    },
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 2000,
      levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
    },
    responsiveLevels: [1920, 1380, 1240],
    gridwidth: [1360, 1200, 940],
    spinner: "off",
    gridheight: 700,
    disableProgressBar: "on",
  });
});
