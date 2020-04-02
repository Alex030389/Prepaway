'use strict';

svg4everybody();


$('.slider__list').slick({
  // infinite: false,
  dots: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<button type="button" class="slider__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slider__arrow slick-next"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});


$('.slider-2__list').slick({
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: '<button type="button" class="slider-2__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slider-2__arrow slick-next"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


// todo scrollTop
// ============================================================= arrow top
$(window).scroll(function () {
  if ($(this).scrollTop() > 1500) {
    // $('.btn-up').fadeIn();
    $('.btn-up').css({"transform": "translateX(0)"});
  } else {
    $('.btn-up').css({"transform": "translateX(100px)"});
  }
});

$('.btn-up').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});


// todo stickFooter
// ============================================================ stickFooter
(function () {
  let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  let stickFooter = function () {
    let FOOTER = document.querySelector('footer');
    let MAIN = document.querySelector('main');
    let BODY = document.querySelector('body');
    let footerHeight = FOOTER.offsetHeight;
    BODY.style.position = 'relative';
    MAIN.style.marginBottom = footerHeight + 'px';
    FOOTER.style.position = 'absolute';
    FOOTER.style.bottom = '0';
    FOOTER.style.left = '0';
    FOOTER.style.width = '100%';
  };

  if (isIE11) {
    stickFooter();
    window.addEventListener('resize', stickFooter);
  }
})();
