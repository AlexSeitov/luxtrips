import burger from './modules/burger.js';
import smoothscroll from 'smoothscroll-polyfill';
import scrollSmooth from './modules/scrollSmooth.js';
import tabbis from './vendor/tabs.js';
// import accordion from './modules/accordion.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import LazyLoad from 'vanilla-lazyload';

/* eslint-disable no-unused-vars */
const lazyLoadInstance = new LazyLoad({});

// Burger ======================================================================
burger('.burger', '.nav', '.nav__link', 'body');

// SmoothScroll ================================================================
smoothscroll.polyfill();
scrollSmooth('[data-link="anchor-link"]');

// Tabs ========================================================================
// https://github.com/jenstornell/tabbis.js
tabbis();

// Accordeon ===================================================================
// accordion('.accordion__head');

// Swiper ======================================================================

const swiper = new Swiper('.top-raited__swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: 'true',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

const breakpoint = window.matchMedia('(min-width: 768px)');

let mySwiper;

const luxurySwiper = function () {
  mySwiper = new Swiper('.luxury__swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    a11y: true,
    keyboardControl: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      480: {
        slidesPerView: 2
      }
    }
  });
};

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
  } else if (breakpoint.matches === false) {
    return luxurySwiper();
  }
  return null;
};

breakpoint.addEventListener('change', () => {
  breakpointChecker();
});

breakpointChecker();

const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: 'true',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    568: {
      slidesPerView: 2
    }
  }
});

/* eslint-enable no-unused-vars */

const translateImgs = document.querySelectorAll('.main-block__img');
const mainTitle = document.querySelector('.main-block__title');

window.addEventListener('scroll', () => {
  let scrollOffset = window.pageYOffset;

  translateImgs.forEach((item) => {
    const el = item;
    let speed = el.dataset.speed;
    el.style.transform = `translateY(${scrollOffset * speed}px)`;
  });

  mainTitle.style.transform = `translateY(${
    scrollOffset * mainTitle.dataset.speed
  }px)`;
});
