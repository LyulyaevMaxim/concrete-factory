; (function () {
  tableSlider();

  $(window).resize(function () {
    tableSlider();
  });


  function tableSlider() {
    let owl = $('.owl-table-slider');

    if (document.documentElement.clientWidth < 1170) {
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
          }
        }
      })
    } else {
      owl.trigger('destroy.owl.carousel');
      tableDesktop();
    }
  }

  function tableDesktop() {
    let table = $("block-for-tables"),
      tableBody = table.find("table-body"),
      tableHeader = tableBody.parent().find("table-header"),
      arrHeader = [];


    tableHeader.find("p").each(function () {
      arrHeader.push(parseFloat($(this).css("width")));
    });

    tableBody.find("item").each(function () {
      let i = 0;
      $(this).find("parameter").each(function () {
        $(this).css("min-width", arrHeader[i++]);
      });
    });
  }

}());