// Проверка поддержки webp браузером
// Если поддерживает, то добавляем класс webp 
// Если не поддерживает, добавляем класс no-webp 
export function iswebp() {
    // проверка поддержки webp 
    function testWebp(callBack) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callBack(webP.heihgt == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса 
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

$('.capabilities__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<div class="arrow-btn__circle arrow-btn__circle-right"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
});
// кастомные стрелки slick
// $('.capabilities__slider').slick({
//     dots: true,
//     prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev"> <img src="img/arrow-left.svg" alt="arrow-left"></button>',
//     nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next"> <img src="img/arrow-right.svg" alt="arrow-right"></button>',
// })

// Ticker
// https://www.jqueryscript.net/animation/horizontal-animation-conveyor-ticker.html
$(function () {
    $('.main-marquee').jConveyorTicker({
        anim_duration: 150,
    });
});

$('.videoPoster').on('click', function (e) {
    e.preventDefault();
    var poster = $(this);
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
});

function videoPlay(wrapper) {
    console.log('here');
    var iframe = wrapper.find('.js-videoIframe');
    console.log(iframe.data('src'));
    var src = iframe.data('src');
    console.log()
    wrapper.addClass('videoWrapperActive');
    iframe.attr('src', src + "?autoplay=1");
}


export function createProgressBar(slider_selector) {
    var $slider = $(slider_selector);
    var $progressBar = $slider.siblings('.progress');
    var $progressBarLabel = $progressBar.find('.slider__label');
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);
    });
}





