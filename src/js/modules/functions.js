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
    nextArrow: '<div class="capabilities__slider-btn arrow-btn__circle arrow-btn__circle-right"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="capabilities__slider-btn arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
});

$('.tariffs__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<div class="tariffs__slider-btn arrow-btn__circle arrow-btn__circle-right"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="tariffs__slider-btn arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
});

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

$('.functionality__preview').on('click', function(e) {
    $(this).siblings('.functionality__content').slideToggle();
    // $(this).siblings('.functionality__content').toggleClass('flex');
    $(this).find('.functionality__preview-circle').toggleClass('transparent');
    $(this).find('.functionality__preview-title').toggleClass('color-green');
    $(this).toggleClass('functionality__preview-bordernone');
})

$('.questions__preview').on('click', function(e) {
    $(this).siblings('.questions__text').slideToggle();
    $(this).toggleClass('questions__preview--active');
    $(this).find('.questions__preview-title').toggleClass('color-green');
    $(this).find('.questions__circle-vertical').toggleClass('questions__circle-vertical--active');
})






