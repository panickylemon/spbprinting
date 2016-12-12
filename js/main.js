jQuery(document).ready(function ($) {
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin: 20,
        nav:true, //Кнопки навигации
        dots:false,
        navText: false,
        responsiveClass:true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});