let pageSlider = new Swiper('.page',{
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
      sensitivity: 1,
      // класс объекта, на котором будет срабатывать прокрутка мышью.
      // eventsTarget: '.image-slider'
   },
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
   },
   // скролл
   scrollbar: {
      el:'.page__scroll',
      dragClass: 'page__drag-scroll',
      // возможность перетаскивать скролл
      draggable: true
   }
});