import bootstrap from 'bootstrap'
import Swiper from 'swiper/bundle';

const burgerContainer=document.querySelector(".header__burger-container");
const burger=document.querySelector(".header__burger");
const body=document.querySelector("body");
const menu=document.querySelector(".menu");
burger.addEventListener("click", () => {
  burgerContainer.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("lock");
  menu.classList.toggle("active");
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 25,
      slidesPerGroup: 4,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
