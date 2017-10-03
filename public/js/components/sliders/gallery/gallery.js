'use strict';

;(function () {
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
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlcnMvZ2FsbGVyeS9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbImdhbGxlcnlTbGlkZXIiLCJvd2wiLCIkIiwib3dsQ2Fyb3VzZWwiLCJtYXJnaW4iLCJuYXYiLCJuYXZUZXh0IiwibG9vcCIsImRvdHMiLCJsYXp5TG9hZCIsInJlc3BvbnNpdmUiLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFHLGFBQVksQUFDYixBQUVBOzs7V0FBQSxBQUFTLGdCQUFnQixBQUN2QjtRQUFJLE1BQU0sRUFBVixBQUFVLEFBQUUsQUFDWjtRQUFBLEFBQUk7Y0FBWSxBQUNOLEFBQ1I7V0FGYyxBQUVULEFBQ0w7ZUFIYyxBQUdMLEFBQ1Q7WUFKYyxBQUlSLEFBQ047WUFMYyxBQUtSLEFBQ047Z0JBTmMsQUFNSixBQUNWOzs7aUJBQVksQUFDUCxBQUNELEFBQU8sQUFFVDs7O2lCQUpVLEFBSUwsQUFDSCxBQUFPLEFBRVQ7OztpQkFQVSxBQU9MLEFBQ0gsQUFBTyxBQUVUOzs7aUJBdEJOLEFBQUMsQUFLQyxBQUFnQixBQUNkLEFBTVksQUFDVixBQVNNLEFBQ0osQUFBTyxBQUlkLEFBRUYiLCJmaWxlIjoic2xpZGVycy9nYWxsZXJ5L2dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7IChmdW5jdGlvbiAoKSB7XG4gIGdhbGxlcnlTbGlkZXIoKTtcblxuICBmdW5jdGlvbiBnYWxsZXJ5U2xpZGVyKCkge1xuICAgIHZhciBvd2wgPSAkKCcub3dsLWdhbGxlcnktc2xpZGVyJyk7XG4gICAgb3dsLm93bENhcm91c2VsKHtcbiAgICAgIG1hcmdpbjogMjAsXG4gICAgICBuYXY6IHRydWUsXG4gICAgICBuYXZUZXh0OiB0cnVlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgbGF6eUxvYWQ6IHRydWUsXG4gICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBpdGVtczogMVxuICAgICAgICB9LFxuICAgICAgICA0NTA6IHtcbiAgICAgICAgICBpdGVtczogMlxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICBpdGVtczogM1xuICAgICAgICB9LFxuICAgICAgICAxMTcwOiB7XG4gICAgICAgICAgaXRlbXM6IDRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufSgpKTsiXX0=
