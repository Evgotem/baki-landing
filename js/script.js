let wrapper = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page', {
   // свои классы
   wrapperClass: 'page__wrapper',
   slideClass: 'page__screen',

   // вертикальный слайдер
   direction: 'vertical',

   // количество слайдов для показа
   slidesPerView: 'auto',

   // включаем параллакс
   parallax: true,

   // управление клавиатурой
   keyboard: {
      // включить\выключить
      enabled: true,
      // включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // включить\выключить управление клавишами pageUp\pageDown
      pageUpDown: true,
   },

   // управление колесом мыши
   mousewheel: {
      // чувствительность калеса мыши

      // класс объекта, на котором будет срабатывать прокрутка мышью.
      // eventsTarget: '.image-slider'
   },

   parallax: false,
   // отключение функционала если слайдов меньше чем нужно
   watchOverflow: true,
   // переключение при клике на слайд
   skideToClickedSlide: false,

   // скорость
   speed: 700,

   // обновить свайпер при изменении элементов слайдера
   observer: true,

   // обновить свайпер при изменении родительских элементов слайдера
   observeParents: true,

   // обновить свайпер при изменении дочерних элементов слайдера
   observeSlideChildren: true,

   // навигация
   // буллеты, текущее положение, прогрессбар
   pagination: {
      el: '.page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'page__bullet',
      bulletActiveClass: 'page__bullet_active',
      renderBullet: function (index, className) {
         let zero = '0';
         if (index > 8) {
            zero = '';
         }
         // нумерация 01, 02 и тд.
         return `<span class=${className}><span class='page__bullet--number'>${zero + (index + 1)}</span></span>`;
      }
   },
   // скролл
   scrollbar: {
      el: '.page__scroll',
      dragClass: 'page__drag-scroll',
      // возможность перетаскивать скролл
      draggable: true
   },
   // отключаем автоинизиализацию
   init: false,
   // события
   on: {
      // событие инициализации
      init: function () {
         menuSlider();
         setScrollType();
      },
      // событие смены слайда
      slideChange: function () {
         menuSliderRemove();
         menuLinks[pageSlider.realIndex].classList.add('active')
      }
   },
   resize: function () {
      setScrollType();
   }
});

let menuLinks = document.querySelectorAll('.header__link');
let footerLinks = document.querySelectorAll('.footer__link');
function menuSlider() {
   if (menuLinks.length > 0) {
      menuLinks[pageSlider.realIndex].classList.add('active');
      for (let i = 0; i < menuLinks.length; i++) {
         const menuLink = menuLinks[i];
         const footerLink = footerLinks[i];
         menuLink.onclick = e => {
            menuSliderRemove();
            // сделать чтобы при нажатии на пункт меню слайдилось на определенный экран
            if (i === 0) {
               pageSlider.slideTo(1, 800);
            }
            else if (i === 1) {
               pageSlider.slideTo(4, 800);
            }
            else if (i === 2) {
               pageSlider.slideTo(6, 800);
            }
            else if (i === 3) {
               pageSlider.slideTo(8, 800);
            }
            menuLink.classList.add('active');
            e.preventDefault();
            console.log(pageSlider.realIndex);
         }
         footerLink.onclick = e => {
            menuSliderRemove();
            // сделать чтобы при нажатии на пункт меню слайдилось на определенный экран
            if (i === 0) {
               pageSlider.slideTo(1, 800);
            }
            else if (i === 1) {
               pageSlider.slideTo(4, 800);
            }
            else if (i === 2) {
               pageSlider.slideTo(6, 800);
            }
            else if (i === 3) {
               pageSlider.slideTo(8, 800);
            }
            menuLink.classList.add('active');
            e.preventDefault();
            console.log(pageSlider.realIndex);
         }

      }
   }
}

function menuSliderRemove() {
   let menuLinkActive = document.querySelector('.header__link.active');
   if (menuLinkActive) {
      menuLinkActive.classList.remove('active');
   }
}

// отключаем поэкранную прокрутку когда контента больше 100% по высоте
function setScrollType() {
   if (wrapper.classList.contains('free')) {
      wrapper.classList.remove('free');
      pageSlider.params.freeMode = false;
   }
   for (let i = 0; i < pageSlider.slides.length; i++) {
      const pageSlide = pageSlider.slides[i];
      const pageSlideContent = pageSlide.querySelector('.screen__content');
      if (pageSlideContent) {
         const pageSlideContentHeight = pageSlideContent.offsetHeight;
         if (pageSlideContentHeight > window.innerHeight) {
            wrapper.classList.add('free');
            pageSlider.params.freeMode = true;
            break;
         }
      }
   }
}

pageSlider.init();

// вещаем при нажатии на бургер класс active
let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.header__menu');
let header = document.querySelector('.header');
burger.onclick = () => {
   burger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   header.classList.toggle("active");
}

// let section = document.querySelectorAll('section');
// for (let i = 0; i < section.length; i++) {

//    if(sectionElement.style.backgroundColor == "#e5e5e5") {
//       document.querySelector('.page__bullet_active .page__bullet--number').style.color = '#434343';
//    }

// }



// слайдер в слайдере
new Swiper('.projects-slider', {
   // навигация
   // пагинация, текущее положение, прогрессбар
   pagination: {
      el: '.swiper-pagination',
      // буллеты
      clickable: true,
   },
   autoHeight: true,
   // корректная работа перетаскивания, свайпа для дочернего слайдера
   nested: true,
   // кол-во слайдов для показа
   slidesPerView: 1,
   navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
   },
   loop: true,
   breakpoints: {
      1440: {
         slidesPerView: 2,
      },
   },
   spaceBetween: 15,
   pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper__bullet',
      bulletActiveClass: 'swiper__bullet_active',
      renderBullet: function (index, className) {
         let zero = '0';
         if (index > 8) {
            zero = '';
         }
         // нумерация 01, 02 и тд.
         return `<span class=${className}><span class='swiper__bullet--number'>${zero + (index + 1)}</span></span>`;
      }
   }
});


// кнопка скролла вверх

//    let toTopButton = document.querySelector('.to-top-btn');
//    toTopButton.onclick = () => {
//       pageSlider.slideTo(0, 800);
//    }

// открытие/закрытие модального окна
let modalLinks = document.querySelectorAll('.modal-link');
for (let i = 0; i < modalLinks.length; i++) {
   let modalLink = modalLinks[i];
   modalLink.onclick = () => {
      document.querySelector('.modal').classList.add('open');
   }
}
const modalClose = document.querySelector('.modal__close');
modalClose.onclick = () => {
   document.querySelector('.modal').classList.remove('open');
}

let modalBtn = document.querySelector('.modal-btn');
modalBtn.onclick = () => {
   document.querySelector('.thank-modal').classList.add('open');
}
const thankClose = document.querySelector('.thank__close');
thankClose.onclick = () => {
   document.querySelector('.thank-modal').classList.remove('open');
   document.querySelector('.modal').classList.remove('open');
}
// const modalLinks = document.querySelectorAll('.modal-link')
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 800;

// if (modalLinks.length > 0) {
//    for (let i = 0; i < modalLinks.length; i++) {
//       const modalLink = modalLinks[i];
//       modalLink.addEventListener('click', function(e) {
//          const modalName = modalLink.getAttribute('href').replace('#', '');
//          const currentModal = document.getElementById(modalName);
//          modalOpen(currentModal);
//          e.preventDefault()
//          ;
//       })
//    }
// }