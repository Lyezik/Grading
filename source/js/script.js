/* в этот файл добавляет скрипты*/
let navMenu = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.nav-menu__toggle');
let rangeToggle = document.querySelector('.range-scale__toggle');
let rangeBar = document.querySelector('.range-scale__bar');
let paginationItem =  document.querySelectorAll('.pagination__item');
let paginationNumber =  document.querySelectorAll('.pagination__number');
let paginationPrev =  document.querySelector('.pagination__item--previous');
let paginationNext =  document.querySelector('.pagination__item--next');
let mapImage = document.querySelector('.map__container-image');
let mapContainer = document.querySelector('.map__container');

navMenu.classList.remove('nav-menu--nojs');
navToggle.classList.remove('nav-menu__toggle--nojs');
mapImage.classList.add('map__container-image--no-js');
mapContainer.classList.remove('map__container--no-js');

if (rangeToggle.disabled) {
  rangeBar.style = "background: #bdbdbd;"
}

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

for (i=1; i<paginationItem.length-1; i++) {
  paginationItem[i].addEventListener('click', function(evt) {
    for (i=1; i<paginationItem.length-1; i++) {
    if (paginationItem[i].classList.contains('pagination__item--current')) {
      paginationItem[i].classList.remove('pagination__item--current')
    }
  }
    this.classList.add('pagination__item--current')

    if (paginationItem[1].classList.contains('pagination__item--current')) {
      paginationItem[0].style.visibility = "hidden";
    } else {
      paginationItem[0].style.visibility = "visible";
    }

    if (paginationItem[3].classList.contains('pagination__item--current')) {
      paginationItem[4].style.visibility = "hidden";
    } else {
      paginationItem[4].style.visibility = "visible";
    }
  });
}

paginationPrev.addEventListener('click', function() {
  let currentCount = 2;
  for (i=0; i<paginationItem.length; i++) {
    if (paginationItem[i].classList.contains('pagination__item--current')==true) {
      currentCount = i;
    }
  }
  if (currentCount > 1) {
  paginationItem[currentCount].classList.remove('pagination__item--current')
  paginationItem[currentCount-1].classList.add('pagination__item--current')
  currentCount--;

  if (currentCount==1) {
    paginationItem[0].style.visibility = "hidden";
  }
  }
  paginationNext.style.visibility = "visible";
})

paginationNext.addEventListener('click', function() {
  let currentCount = 2;
  for (i=0; i<paginationItem.length; i++) {
    if (paginationItem[i].classList.contains('pagination__item--current')==true) {
      currentCount = i;
    }
  }
  if (currentCount < paginationItem.length-1) {
  paginationItem[currentCount].classList.remove('pagination__item--current')
  paginationItem[currentCount+1].classList.add('pagination__item--current')
  currentCount++;

  if (currentCount==paginationItem.length-2) {
    paginationItem[paginationItem.length-1].style.visibility = "hidden";
  }
  }
  paginationPrev.style.visibility = "visible";
})

var map = L.map('map').setView([59.968415, 30.317485], 14);
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      minZoom: 18,
      zoomControl: false,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);

    var iconOptions = {
      iconUrl: 'img/map/map-pin.png',
      iconSize: [38, 50]
    }
    var customIcon = L.icon(iconOptions);
    var markerOptions = {
      clickable: true,
      draggable: true,
      icon: customIcon,
    }
    var marker = L.marker([59.968415, 30.317485], markerOptions);
    marker.addTo(map);
