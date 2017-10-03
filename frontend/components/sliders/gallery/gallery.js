; (function () {
  gallerySlider();

  function gallerySlider() {
    var owl = $('.owl-gallery-slider');
    owl.owlCarousel({
      margin: 20,
      nav: true,
      navText: true,
      loop: true,
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 2
        },
        768: {
          items: 3
        },
        1170: {
          items: 4
        }
      }
    })
  }

}());