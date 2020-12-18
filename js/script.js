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
      sensitivity: 10,
      // класс объекта, на котором будет срабатывать прокрутка мышью.
      // eventsTarget: '.image-slider'
   },
   
   parallax: true,
   // отключение функционала если слайдов меньше чем нужно
   watchOverflow: true,

   // скорость
   speed: 500,

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
        return `<span class=${className}><span class='page__bullet--number'>${zero+(index+1)}</span></span>`;
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
      },
      // событие смены слайда
      slideChange: function () {
         menuSliderRemove();
         menuLinks[pageSlider.realIndex].classList.add('active')
      }
   }
});

let menuLinks = document.querySelectorAll('.header__link');

function menuSlider() {
   if (menuLinks.length > 0) {
      menuLinks[pageSlider.realIndex].classList.add('active');
      for (let i = 0; i < menuLinks.length; i++) {
         const menuLink = menuLinks[i];
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

      }
   }
}

function menuSliderRemove() {
   let menuLinkActive = document.querySelector('.header__link.active');
   if (menuLinkActive) {
      menuLinkActive.classList.remove('active');
   }
}

pageSlider.init();
