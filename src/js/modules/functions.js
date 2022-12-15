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

$('.articles__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<div class="articles__slider-btn arrow-btn__circle arrow-btn__circle-right"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="articles__slider-btn arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
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
    var iframe = wrapper.find('.js-videoIframe');
    var src = iframe.data('src');
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
    $(this).siblings('.functionality__content').slideToggle('fast', function() {
        if ($(this).is(':visible'))
            $(this).css('display','flex');
    });
    if(Number(window.innerWidth) <= 660) {
        $(this).toggleClass("p-low");
        $(this).find('.functionality__preview-title').toggleClass('p-open');
        $(this).parent().find('.functionality__content-top').slideToggle('fast',function() {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });
    }
    $(this).find('.functionality__preview-circle').toggleClass('transparent');
    $(this).find('.functionality__preview-title').toggleClass('color-green');
    $(this).toggleClass('functionality__preview-bordernone');
})

$('.questions__preview').on('click', function(e) {
    $(this).siblings('.questions__text').slideToggle();
    $(this).toggleClass('questions__preview--active');
    $(this).find('.questions__preview-title').toggleClass('color-green');
    $(this).find('.questions__circle-vertical').toggleClass('questions__circle-vertical--active');

    if(Number(window.innerWidth) <= 770) {
        $(this).toggleClass("p-open");
        
    }
})



// -------------------  modal windows ---------------------
$('.main-banner__content-rotatebtn').on('click', function(e) {
    if(!$(this).hasClass('rotatebtn--disabled')) {
        $('.modal-goto').addClass('modal-goto--active');
    }
})

$('.modal-goto__close').on('click', function(e) {
    e.preventDefault();
    $('.modal-goto').removeClass('modal-goto--active');
})


$('.calculate__btn').on('click', function(e) {
    e.preventDefault();
    $('.modal-calc').addClass('modal-calc--active');
})

$('.modal-calc__close').on('click', function(e) {
    e.preventDefault();
    $('.modal-calc').removeClass('modal-calc--active');
})

// ------------------------------------------------------------

//------------------------- hide menu -------------------------
$(window).on('scroll', function(e) {
    var elementTop = $('.functions__h2').offset().top;
    var headerBottom = $('.header').offset().top + $('.header').outerHeight();
    if(Number(window.innerWidth) >= 1250) {
        if (elementTop < headerBottom) {
            $('.header__nav-ul').css('display', 'none');
            $('.burger__btn').css('display', 'inline-block');
            // $('.header__nav-ul').fadeOut(100, 'linear');
            // $('.burger__btn').fadeIn(200, 'linear');
        } else {
            $('.header__nav-ul').css('display', 'flex');
            $('.burger__btn').css('display', 'none');
            // $('.header__nav-ul').fadeIn(200, 'linear');
            // $('.burger__btn').fadeOut(100, 'linear');
        }
    }

})






// --------------------burger menu ----------------------------

$('.burger__btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).toggleClass('close');
    $('.dropdown').toggleClass('dropdown--active');
    $('.header').toggleClass('header--dropdown');
})


// ------------------------------------------------------------

//---------------------slick btns-----------------------------

$('.capabilities__slider-btn.arrow-btn__circle-left').hover(function(e) {
    if(Number(window.innerWidth) <= 660) {
        $('.capabilities__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');
    }
}, function(e) {
    if(Number(window.innerWidth) <= 660) {
        $('.capabilities__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');
    }
})

$('.articles__slider-btn.arrow-btn__circle-left').hover(function(e) {
    if(Number(window.innerWidth) <= 660) {
        $('.articles__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');
    }
}, function(e) {
    if(Number(window.innerWidth) <= 660) {
        $('.articles__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');
    }
})

$('.tariffs__slider-btn.arrow-btn__circle-left').hover(function(e) {
    if(Number(window.innerWidth) <= 660) {
        $('.tariffs__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');
    }
}, function(e) {
    if(Number(window.innerWidth) <= 660) {
        $('.tariffs__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');
    }
})
// ------------------------------------------------------------


// ------------------------ resize ----------------------------

$(window).on("resize", function(e) {
    if(Number(window.innerWidth) > 660) {
        $('.functionality__content-top').css('display', 'none');
        // if ($('.functionality__content-top').css('display') != 'none') {
        // }
    }

})