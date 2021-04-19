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
  spaceBetween: 10,
  slidesPerGroup: 4,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 25,
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
