'use strict';

svg4everybody();

// ==================================== mobile menu
const headerMblBtnHamburger = document.querySelector('.header__mobile-btn._hamburger');
const headerMblBtnSearch = document.querySelector('.header__mobile-btn._search');
const navMbl = document.querySelector('.nav-mbl');
const navMblBtnClose = document.querySelector('.nav-mbl__btn-close');
const navMblBody = document.querySelector('.nav-mbl__body');
const headerSearchForm = document.querySelector('.header__search-form');
const headerTop1 = document.querySelector('.header__top-inner-1');
const headerTop2 = document.querySelector('.header__top-inner-2');
const searchBtnBack = document.querySelector('.search__btn-back');
const searchInput = document.querySelector('.search__input');

window.addEventListener('resize', function() {
  if(getComputedStyle(headerSearchForm).display != 'none') {
    hideMblMenu();
  }

  if(getComputedStyle(headerTop2).display != 'none') {
    headerTop1.classList.remove('d-none');
    headerTop2.classList.add('d-none');
  }
})

headerMblBtnHamburger.addEventListener('click', function(e) {
  showMblMenu();
});

navMblBtnClose.addEventListener('click', function() {
  hideMblMenu();
});

navMbl.addEventListener('click', function(e) {
  if(e.target.classList.contains('nav-mbl')) {
    hideMblMenu();
  }
});

headerMblBtnSearch.addEventListener ('click', function() {
  headerTop1.classList.add('d-none');
  headerTop2.classList.remove('d-none');
  searchInput.focus();
})

searchBtnBack.addEventListener('click', function() {
  headerTop2.classList.add('d-none');
  headerTop1.classList.remove('d-none');
})

function showMblMenu() {
  document.body.classList.add('overflow-hidden');
  navMbl.classList.remove('d-none');
  setTimeout(function() {
    navMbl.classList.add('_active');
  }, 10);
}

function hideMblMenu() {
  document.body.classList.remove('overflow-hidden');
  navMbl.classList.remove('_active');
  setTimeout(function() {
    navMbl.classList.add('d-none');
  }, 300);
}


// ================================================== slider ===
$('.slick-1').slick({
  // infinite: false,
  dots: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<button type="button" class="slider__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slider__arrow slick-next"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
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

$('.slick-3').slick({
  dots: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button type="button" class="slider__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slider__arrow slick-next"><svg aria-hidden="true"><use xlink:href="./design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
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
