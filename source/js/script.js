/* в этот файл добавляет скрипты*/
let navMenu = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.nav-menu__toggle');

navMenu.classList.remove('nav-menu--nojs');
navToggle.classList.remove('nav-menu__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('nav-menu--closed')) {
    navMenu.classList.remove('nav-menu--closed');
    navMenu.classList.add('nav-menu--opened');
  } else {
    navMenu.classList.remove('nav-menu--opened');
    navMenu.classList.add('nav-menu--closed');
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
/*   direction: 'vertical', */
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
