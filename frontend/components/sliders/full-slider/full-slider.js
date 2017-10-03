; (function () {
  fullSlider();

  function fullSlider() {
    var owl = $('.owl-full-slider');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      navText: true,
      loop: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        }
      }
    })
  }

}());