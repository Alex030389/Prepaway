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
	if(headerTop1) {
		if(getComputedStyle(headerSearchForm).display != 'none') {
			hideMblMenu();
		}
	
		if(getComputedStyle(headerTop2).display != 'none') {
			headerTop1.classList.remove('d-none');
			headerTop2.classList.add('d-none');
		}
	}
})

if(headerTop1) {
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
}


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

// ================================================= modal
$('[data-mfp-src="#modal-1"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#modal-2"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#modal-3"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#modal-4"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#modal-5"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#modal-6"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#modal-7"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

const modalBtnCloseAr = document.querySelectorAll('.modal__btn-close');

if(modalBtnCloseAr != null) {
	for(let i = 0; i < modalBtnCloseAr.length; i++) {
		modalBtnCloseAr[i].addEventListener('click', function() {
			$.magnificPopup.close();
		})
	}	
}


// ================================================== slider ===
$('.slick-1').slick({
	// infinite: false,
	dots: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: '<button type="button" class="slider__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slider__arrow slick-next"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
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


$('.slick-2').slick({
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	variableWidth: true,
	prevArrow: '<button type="button" class="slider-2__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slider-2__arrow slick-next"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
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
	prevArrow: '<button type="button" class="slider__arrow slick-prev"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slider__arrow slick-next"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
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


$('.slick-4').slick({
	dots: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1501,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 1200,
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
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
	]
});


$('.slick-5').slick({
	dots: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	infinite: false, 
	prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1501,
			settings: {
			}
		},
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
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
	]
});



$('.slick-6').slick({
	infinite: false,
	dots: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	waitForAnimate: false,
	prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
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
			breakpoint: 470,
			settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
	]
});




// ============================================================== slider-magnific
$('.slider-4__list').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});





// ========================================================= reseller-progress ===
const resProgrLevels = document.querySelectorAll('.res-progr__level');
const resProgrInnerLine = document.querySelector('.res-progr__inner-line');

for(let i = 0; i < resProgrLevels.length; i++) {
	if(resProgrLevels[i].classList.contains('_active')) {
		for(let ii = 0; ii <= i; ii++) {
			resProgrLevels[ii].querySelector('.res-progr__point').classList.add('_orange');
		}

		let innerLineWidht = 25 * i;
		resProgrInnerLine.style.width = innerLineWidht + '%';
	}
}


// ===================================================== input file
let inputFile = document.querySelectorAll('.input-file__input');
Array.prototype.forEach.call(inputFile, function (input) {
	let label = input.nextElementSibling,
	inputFileStatus = label.querySelector('.input-file__status').innerText;

	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles)
			label.querySelector('.input-file__status').innerText = 'Selected: ' + countFiles;
		else
			label.querySelector('.input-file__status').innerText = inputFileStatus;
	});
});


// =================================================== btn-about-course
const aboutCourse = document.querySelector('.about-course');
const btnAboutCourse = document.querySelector('.btn-about-course');

if(btnAboutCourse) {
	btnAboutCourse.addEventListener('click', function() {
		aboutCourse.classList.add('_show');
		btnAboutCourse.classList.add('d-none');
	})
}


// ==================================================== rating star
const starForm = document.querySelector('.star-form');
// const starFormItem = document.querySelectorAll('.star-form__item');
const starFormLabel = document.querySelectorAll('.star-form__label');
const starFormInput = document.querySelectorAll('.star-form__input');


if(starForm) {
	for(let i = 0; i < starFormLabel.length; i++) {
		starFormLabel[i].addEventListener('click', function() {
			for(let i = 0; i < starFormLabel.length; i++) {
				starFormLabel[i].classList.remove('_active');
			}

			for(let ii = 0; ii <= i; ii++) {
				starFormLabel[ii].classList.add('_active');
			}
		})

		starFormLabel[i].addEventListener('mouseenter', function() {
			for(let i = 0; i < starFormLabel.length; i++) {
				starFormLabel[i].classList.remove('_hover');
			}

			for(let ii = 0; ii <= i; ii++) {
				starFormLabel[ii].classList.add('_hover');
			}		
		})

		starFormLabel[i].addEventListener('mouseleave', function() {
			for(let i = 0; i < starFormLabel.length; i++) {
				starFormLabel[i].classList.remove('_hover');
			}
		})
	}	
}


// =================================================== video tab
const slider5List = document.querySelector('.slider-5__list');
const slider5Item2 = document.querySelectorAll('.slider-5__item-2');
const tabS = document.querySelector('.tab-s');
const tabSItems = document.querySelectorAll('.tab-s__item');

for(let i = 0; i < slider5Item2.length; i++) {
	slider5Item2[i].addEventListener('click', function() {
		
		tabS.classList.remove('d-none');
		
		for(let i = 0; i < tabSItems.length; i++) {
			tabSItems[i].classList.add('d-none');
			tabSItems[i].classList.remove('_fade-in');
		}

		tabSItems[i].classList.remove('d-none');
		
		setTimeout(function() {
			tabSItems[i].classList.add('_fade-in');
		},1);
	})
}


// ==================================================== member-nav _mobile
const membNavMobileLink = document.querySelectorAll('.memb-nav-mobile__link');

if(membNavMobileLink) {
	for(let i = 0; i < membNavMobileLink.length; i++) {
		membNavMobileLink[i].addEventListener('click', function() {
			membNavMobileLink[i].classList.toggle('_active');
		})
	}
}



// todo scrollTop
// ========================================================= arrow top
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
