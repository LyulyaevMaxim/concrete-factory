if (document.documentElement.clientWidth < 1024) {
  var owl = $('.owl-table-slider');
  owl.owlCarousel({
    margin: 15,
    nav: true,
    navText: false,
    loop: true,
    dots: false,
    lazyLoad: true,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 0,
        slideBy: 2
      },
      1170: {
        items: 0,
        margin: 0
      }
    }
  })
}  