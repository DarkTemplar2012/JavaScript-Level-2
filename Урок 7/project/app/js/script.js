 //карусель клиентов на мыши
 $(function () {
   $('#carousel').carouFredSel({
     responsive: true,
     items: {
       visible: 1,
       width: 900,
       height: 500
     },
     scroll: {
       duration: 500,
       timeoutDuration: 5500, 
     },
     pagination: '#pager'
   });
 });
 (function ($) {
   "use strict";
   var bindToClass = 'carousel',
     containerWidth = 0,
     scrollWidth = 0,
     posFromLeft = 0, // Stripe position from the left of the screen
     stripePos = 0, // When relative mouse position inside the thumbs stripe
     animated = null,
     $indicator, $carousel, el, $el, ratio, scrollPos, nextMore, prevMore, pos, padding;
   // calculate the thumbs container width
   function calc(e) {
     $el = $(this).find(' > .wrap');
     el = $el[0];
     $carousel = $el.parent();
     $indicator = $el.prev('.indicator');
     nextMore = prevMore = false; // reset
     containerWidth = el.clientWidth;
     scrollWidth = el.scrollWidth; // the "<ul>"" width
     padding = 0.2 * containerWidth; // padding in percentage of the area which the mouse movement affects
     posFromLeft = $el.offset().left;
     stripePos = e.pageX - padding - posFromLeft;
     pos = stripePos / (containerWidth - padding * 2);
     scrollPos = (scrollWidth - containerWidth) * pos;
     if (scrollPos < 0) scrollPos = 0;
     if (scrollPos > (scrollWidth - containerWidth)) scrollPos = scrollWidth - containerWidth;
     $el.animate({
       scrollLeft: scrollPos
     }, 200, 'swing');
     if ($indicator.length) $indicator.css({
       width: (containerWidth / scrollWidth) * 100 + '%',
       left: (scrollPos / scrollWidth) * 100 + '%'
     });
     clearTimeout(animated);
     animated = setTimeout(function () {
       animated = null;
     }, 200);
     return this;
   }
   // move the stripe left or right according to mouse position
   function move(e) {
     // don't move anything until inital movement on 'mouseenter' has finished
     if (animated) return;
     ratio = scrollWidth / containerWidth;
     stripePos = e.pageX - padding - posFromLeft; // the mouse X position, "normalized" to the carousel position
     if (stripePos < 0) stripePos = 0;
     pos = stripePos / (containerWidth - padding * 2); // calculated position between 0 to 1
     // calculate the percentage of the mouse position within the carousel
     scrollPos = (scrollWidth - containerWidth) * pos;
     el.scrollLeft = scrollPos;
     if ($indicator[0] && scrollPos < (scrollWidth - containerWidth)) $indicator[0].style.left = (scrollPos / scrollWidth) * 100 + '%';
     // check if element has reached an edge
     prevMore = el.scrollLeft > 0;
     nextMore = el.scrollLeft < (scrollWidth - containerWidth);
     $carousel.toggleClass('left', prevMore);
     $carousel.toggleClass('right', nextMore);
   }
   $.fn.carousel = function (options) {
     $(document).on('mouseenter.carousel', '.' + bindToClass, calc).on('mousemove.carousel', '.' + bindToClass, move);
   };
   // automatic binding to all elements which have the class that is assigned to "bindToClass"
   $.fn.carousel();
 })(jQuery);

 //эффекты наведе7ния на блог
 $(function () {
   $('.b-blog_unit > div').each(function () {
     var $cfs = $(this);
     $cfs.carouFredSel({
       direction: 'up',
       circular: false,
       infinite: false,
       auto: false,
       scroll: {
         queue: 'last'
       },
       items: {
         visible: 1,
         width: 300,
         height: 200
       }
     });
     $cfs.hover(function () {
       $cfs.trigger('next');
     }, function () {
       $cfs.trigger('prev');
     });
   });
 });

 //плавная прокрутка по якорям
 $(document).ready(function () {
   $("#menu").on("click", "a", function (event) {
     //отменяем стандартную обработку нажатия по ссылке
     event.preventDefault();

     //забираем идентификатор бока с атрибута href
     var id = $(this).attr('href'),

       //узнаем высоту от начала страницы до блока на который ссылается якорь
       top = $(id).offset().top;

     //анимируем переход на расстояние - top за 1500 мс
     $('body,html').animate({
       scrollTop: top
     }, 500);
   });
 });

 //дропдаун меню
 /* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {

     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }


 //jsor карусель
 newFunction();

 function newFunction() {
   {
     var jssor_1_SlideoTransitions = [
       [{
         b: -1,
         d: 1,
         o: -0.7
       }],
       [{
         b: 900,
         d: 2000,
         x: -379,
         e: {
           x: 7
         }
       }],
       [{
         b: 900,
         d: 2000,
         x: -379,
         e: {
           x: 7
         }
       }],
       [{
         b: -1,
         d: 1,
         o: -1,
         sX: 2,
         sY: 2
       }, {
         b: 0,
         d: 900,
         x: -171,
         y: -341,
         o: 1,
         sX: -2,
         sY: -2,
         e: {
           x: 3,
           y: 3,
           sX: 3,
           sY: 3
         }
       }, {
         b: 900,
         d: 1600,
         x: -283,
         o: -1,
         e: {
           x: 16
         }
       }]
     ];
     var jssor_1_options = {
       $AutoPlay: 1,
       $SlideDuration: 800,
       $SlideEasing: $Jease$.$OutQuint,
       $CaptionSliderOptions: {
         $Class: $JssorCaptionSlideo$,
         $Transitions: jssor_1_SlideoTransitions
       },
       $ArrowNavigatorOptions: {
         $Class: $JssorArrowNavigator$
       },
       $BulletNavigatorOptions: {
         $Class: $JssorBulletNavigator$
       }
     };
     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
     /*#region responsive code begin*/
     var MAX_WIDTH = 10000;

     function ScaleSlider() {
       var containerElement = jssor_1_slider.$Elmt.parentNode;
       var containerWidth = containerElement.clientWidth;
       if (containerWidth) {
         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
         jssor_1_slider.$ScaleWidth(expectedWidth);
       } else {
         window.setTimeout(ScaleSlider, 30);
       }
     }
     ScaleSlider();
     $Jssor$.$AddEvent(window, "load", ScaleSlider);
     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
   };
 }