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

export function createProgressBar(slider_selector) {
    var $slider = $(slider_selector);
    var $progressBar = $slider.siblings('.progress');
    var $progressBarLabel = $progressBar.find('.slider__label');
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 3)) * 100;
        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);
    });
}
$(document).ready(function() {
$('.capabilities__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<div class="capabilities__slider-btn arrow-btn__circle arrow-btn__circle-right active"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="capabilities__slider-btn arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
});

$('.tariffs__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<div class="tariffs__slider-btn arrow-btn__circle arrow-btn__circle-right active"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="tariffs__slider-btn arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
});

$('.articles__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<div class="articles__slider-btn arrow-btn__circle arrow-btn__circle-right active"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
    prevArrow: '<div class="articles__slider-btn arrow-btn__circle arrow-btn__circle-left"><div class="arrow-btn__arrow-small"></div><div class="arrow-btn__arrow-long"></div></div>',
});

// Ticker
// https://www.jqueryscript.net/animation/horizontal-animation-conveyor-ticker.html
$(function () {
    $('.main-banner .main-marquee').jConveyorTicker({
        anim_duration: 150,
        force_loop: true,
    });
});

$(function () {
    $('.horizontal-marquee-1').jConveyorTicker({
        anim_duration: 150,
    });
});

$(function () {
    $('.horizontal-marquee-2').jConveyorTicker({
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

$('.functionality__preview').on('click', function (e) {
    // сначала у всех убираем активное состояние
    if (!$(this).hasClass('functionality__preview-bordernone')) {
        $('.functionality__preview').parent().find('.functionality__content, .functionality__content-top').css('display', 'none');
        $('.functionality__preview').find('.functionality__preview-circle').removeClass('transparent');
        $('.functionality__preview').find('.functionality__preview-title').removeClass('color-green');
        $('.functionality__preview').removeClass('functionality__preview-bordernone');

        $('.functionality__preview').removeClass("p-low");
        $('.functionality__preview').find('.functionality__preview-title').removeClass('p-open');


        $(this).siblings('.functionality__content').slideToggle('fast', function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'flex');
        });
        if (Number(window.innerWidth) <= 660) {


            $(this).addClass("p-low");
            $(this).find('.functionality__preview-title').addClass('p-open');

            $(this).parent().find('.functionality__content-top').slideToggle('fast', function () {
                if ($(this).is(':visible'))
                    $(this).css('display', 'flex');
            });
        }
        $(this).find('.functionality__preview-circle').addClass('transparent');
        $(this).find('.functionality__preview-title').addClass('color-green');
        $(this).addClass('functionality__preview-bordernone');
    }
})

$('.questions__preview').on('click', function (e) {
        $(this).siblings('.questions__text').slideToggle();
    $(this).toggleClass('questions__preview--active');
    $(this).find('.questions__preview-title').toggleClass('color-green');
    $(this).find('.questions__circle-vertical').toggleClass('questions__circle-vertical--active');

        if (Number(window.innerWidth) <= 770) {
        $(this).toggleClass("p-open");

        }
})



// -------------------  modal windows ---------------------
$('.avoke_modal-goto').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('rotatebtn--disabled')) {
        $('.modal-goto').addClass('modal-goto--active');
    }
})


$('.modal-goto__close').on('click', function (e) {
    e.preventDefault();
    $('.modal-goto').removeClass('modal-goto--active');
})


$('.avoke_modal-calc').on('click', function (e) {
    e.preventDefault();
    $('.modal-calc').addClass('modal-calc--active');
})

$('.modal-calc__close').on('click', function (e) {
    e.preventDefault();
    $('.modal-calc').removeClass('modal-calc--active');
})

$('.modal-success__close, .modal-success__close-img').on('click', function (e) {
    e.preventDefault();
    $('.modal-success').removeClass('modal-success--active');
})

$('.modal-failure__close, .modal-failure__close-img').on('click', function (e) {
    e.preventDefault();
    $('.modal-failure').removeClass('modal-failure--active');
})


// ------------------------------------------------------------

//------------------------- hide menu -------------------------
 /* code here */
$(window).on('scroll', function (e) {
    //hide menu
    var elementTop = $('.functions__h2').offset().top;
    var headerBottom = $('.header').offset().top + $('.header').outerHeight();
    if (Number(window.innerWidth) >= 1250) {
        if (elementTop - 200 < headerBottom) {
            $('.header__nav-ul').css('display', 'none');
            $('.burger__btn').css('display', 'inline-block');
        } else {
            $('.header__nav-ul').css('display', 'flex');
            $('.burger__btn').css('display', 'none');
        }
    }

    //hilight menu
    let allMenu = $(".dropdown__list-link");
    let functions_block = $('.functions').offset().top;
    let capabilities_block = $('.capabilities').offset().top;
    let tariffs_block = $('.tariffs').offset().top;
    if (functions_block - 200 < headerBottom) {
        allMenu.removeClass("color-green");
        allMenu.parent().find('[href="#functions"]').addClass("color-green");
    }
    if (capabilities_block - 200 < headerBottom) {
        allMenu.removeClass("color-green");
        allMenu.parent().find('[href="#capabilities"]').addClass("color-green");
    }
    if (tariffs_block - 200 < headerBottom) {
        allMenu.removeClass("color-green");
        allMenu.parent().find('[href="#tariffs"]').addClass("color-green");
    }
})






// --------------------burger menu ----------------------------

$('.burger__btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).toggleClass('close');
    $('.dropdown').toggleClass('dropdown--active');
    $('.header').toggleClass('header--dropdown');
})


// ------------------------------------------------------------

//---------------------slick btns-----------------------------

$('.capabilities__slider-btn.arrow-btn__circle-left').hover(function (e) {
    if (Number(window.innerWidth) <= 660) {
        $('.capabilities__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');
    }
}, function (e) {
    if (Number(window.innerWidth) <= 660) {
        $('.capabilities__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');
    }
})

$('.articles__slider-btn.arrow-btn__circle-left').hover(function (e) {
    if (Number(window.innerWidth) <= 660) {
        $('.articles__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');
    }
}, function (e) {
    if (Number(window.innerWidth) <= 660) {
        $('.articles__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');
    }
})

$('.tariffs__slider-btn.arrow-btn__circle-left').hover(function (e) {
    if (Number(window.innerWidth) <= 660) {
        $('.tariffs__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');
    }
}, function (e) {
    if (Number(window.innerWidth) <= 660) {
        $('.tariffs__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');
    }
})
// ------------------------------------------------------------


// ------------------------ resize ----------------------------

$(window).on("resize", function (e) {
    if (Number(window.innerWidth) > 660) {
        $('.functionality__content-top').css('display', 'none');
        // if ($('.functionality__content-top').css('display') != 'none') {
        // }
    }

})




const form = document.getElementById('form');
form.addEventListener('submit', formSend);

var response;

async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData(form);


    if (error === 0) {

        form.classList.add('_sending');
        // AJAX
        response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            form.reset(); // очищаем все поля всей формы
            $('.modal-success').addClass('modal-success--active');
        } else {
            $('.modal-failure').addClass('modal-failure--active');
        }
    } else {
        $('.modal-failure').addClass('modal-failure--active');
    }
}


function formValidate(form) {
    let error = 0;
    let formReq = document.querySelector('.feedback__form-phone');
    formRemoveError(formReq);

    if (phoneTest(formReq)) {
        formAddError(formReq);
        error++;
    }
    if (formReq.value == '') {
        formAddError(formReq);
        error++;
    }

    console.log(error);
    return error;
}
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
function phoneTest(input) {
    return !/(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/.test(input.value.replace(/ /g, ''));
}

$('.smooth-scroll').on('click', function (e) {
    e.preventDefault();
    const href = $(this).attr('href');
    $(href)[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

$('.dropdown__list-link').on('click', function (e) {
    e.preventDefault();
    const href = $(this).attr('href');
    $(href)[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    $('.dropdown').toggleClass('dropdown--active');
    $('.header').toggleClass('header--dropdown');
    $('.burger__btn').toggleClass('open');
    $('.burger__btn').toggleClass('close');
})

$('.header__login').on('click', function (e) {
    $('.dropdown').removeClass('dropdown--active');
    $('.header').removeClass('header--dropdown');
    $('.burger__btn').removeClass('close');
    $('.burger__btn').addClass('open');
})



$("#phone").inputmask({ "mask": "+7 (9 9 9) 9 9 9 9 9 9 9" });
/*
iswebp();

createProgressBar('.capabilities__slider');
createProgressBar('.tariffs__slider');
createProgressBar('.articles__slider');
*/
});