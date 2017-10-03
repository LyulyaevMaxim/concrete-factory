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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlcnMvZ2FsbGVyeS9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbImdhbGxlcnlTbGlkZXIiLCJvd2wiLCIkIiwib3dsQ2Fyb3VzZWwiLCJtYXJnaW4iLCJuYXYiLCJuYXZUZXh0IiwibG9vcCIsImRvdHMiLCJyZXNwb25zaXZlIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRyxhQUFZLEFBQ2IsQUFFQTs7O1dBQUEsQUFBUyxnQkFBZ0IsQUFDdkI7UUFBSSxNQUFNLEVBQVYsQUFBVSxBQUFFLEFBQ1o7UUFBQSxBQUFJO2NBQVksQUFDTixBQUNSO1dBRmMsQUFFVCxBQUNMO2VBSGMsQUFHTCxBQUNUO1lBSmMsQUFJUixBQUNOO1lBTGMsQUFLUixBQUNOOzs7aUJBQVksQUFDUCxBQUNELEFBQU8sQUFFVDs7O2lCQUpVLEFBSUwsQUFDSCxBQUFPLEFBRVQ7OztpQkFQVSxBQU9MLEFBQ0gsQUFBTyxBQUVUOzs7aUJBaEJKLEFBQWdCLEFBQ2QsQUFLWSxBQUNWLEFBU00sQUFDSixBQUFPLEFBSWQsQUFFRixBQTVCQyxBQUFDIiwiZmlsZSI6InNsaWRlcnMvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyAoZnVuY3Rpb24gKCkge1xuICBnYWxsZXJ5U2xpZGVyKCk7XG5cbiAgZnVuY3Rpb24gZ2FsbGVyeVNsaWRlcigpIHtcbiAgICB2YXIgb3dsID0gJCgnLm93bC1nYWxsZXJ5LXNsaWRlcicpO1xuICAgIG93bC5vd2xDYXJvdXNlbCh7XG4gICAgICBtYXJnaW46IDIwLFxuICAgICAgbmF2OiB0cnVlLFxuICAgICAgbmF2VGV4dDogdHJ1ZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgIH0sXG4gICAgICAgIDQ1MDoge1xuICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgIH0sXG4gICAgICAgIDExNzA6IHtcbiAgICAgICAgICBpdGVtczogNFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59KCkpOyJdfQ==
