(()=>{"use strict";var __webpack_modules__={"./src/js/app.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n\r\n$(document).ready(function() {\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.iswebp();\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.createProgressBar('.capabilities__slider');\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.createProgressBar('.tariffs__slider');\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.createProgressBar('.articles__slider');\r\n});\n\n//# sourceURL=webpack://gulp2022/./src/js/app.js?")},"./src/js/modules/functions.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProgressBar\": () => (/* binding */ createProgressBar),\n/* harmony export */   \"iswebp\": () => (/* binding */ iswebp)\n/* harmony export */ });\n// Проверка поддержки webp браузером\r\n// Если поддерживает, то добавляем класс webp\r\n// Если не поддерживает, добавляем класс no-webp\r\nfunction iswebp() {\r\n    // проверка поддержки webp\r\n    function testWebp(callBack) {\r\n        let webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callBack(webP.heihgt == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    // Добавление класса\r\n    testWebp(function (support) {\r\n        let className = support === true ? 'webp' : 'no-webp';\r\n        document.documentElement.classList.add(className);\r\n    })\r\n}\r\n\r\nfunction createProgressBar(slider_selector) {\r\n    var $slider = $(slider_selector);\r\n    var $progressBar = $slider.siblings('.progress');\r\n    var $progressBarLabel = $progressBar.find('.slider__label');\r\n    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\r\n        var calc = ((nextSlide) / (slick.slideCount - 3)) * 100;\r\n        $progressBar\r\n            .css('background-size', calc + '% 100%')\r\n            .attr('aria-valuenow', calc);\r\n    });\r\n}\r\n$(document).ready(function() {\r\n$('.capabilities__slider').slick({\r\n    dots: false,\r\n    infinite: false,\r\n    speed: 300,\r\n    slidesToShow: 3,\r\n    slidesToScroll: 1,\r\n    centerMode: false,\r\n    variableWidth: true,\r\n    nextArrow: '<div class=\"capabilities__slider-btn arrow-btn__circle arrow-btn__circle-right active\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n    prevArrow: '<div class=\"capabilities__slider-btn arrow-btn__circle arrow-btn__circle-left\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n});\r\n\r\n$('.tariffs__slider').slick({\r\n    dots: false,\r\n    infinite: false,\r\n    speed: 300,\r\n    slidesToShow: 3,\r\n    slidesToScroll: 1,\r\n    centerMode: false,\r\n    variableWidth: true,\r\n    nextArrow: '<div class=\"tariffs__slider-btn arrow-btn__circle arrow-btn__circle-right active\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n    prevArrow: '<div class=\"tariffs__slider-btn arrow-btn__circle arrow-btn__circle-left\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n});\r\n\r\n$('.articles__slider').slick({\r\n    dots: false,\r\n    infinite: false,\r\n    speed: 300,\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    centerMode: false,\r\n    variableWidth: true,\r\n    nextArrow: '<div class=\"articles__slider-btn arrow-btn__circle arrow-btn__circle-right active\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n    prevArrow: '<div class=\"articles__slider-btn arrow-btn__circle arrow-btn__circle-left\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n});\r\n\r\n// Ticker\r\n// https://www.jqueryscript.net/animation/horizontal-animation-conveyor-ticker.html\r\n$(function () {\r\n    $('.main-banner .main-marquee').jConveyorTicker({\r\n        anim_duration: 150,\r\n        force_loop: true,\r\n    });\r\n});\r\n\r\n$(function () {\r\n    $('.horizontal-marquee-1').jConveyorTicker({\r\n        anim_duration: 150,\r\n    });\r\n});\r\n\r\n$(function () {\r\n    $('.horizontal-marquee-2').jConveyorTicker({\r\n        anim_duration: 150,\r\n    });\r\n});\r\n\r\n$('.videoPoster').on('click', function (e) {\r\n    e.preventDefault();\r\n    var poster = $(this);\r\n    var wrapper = poster.closest('.js-videoWrapper');\r\n    videoPlay(wrapper);\r\n});\r\n\r\nfunction videoPlay(wrapper) {\r\n    var iframe = wrapper.find('.js-videoIframe');\r\n    var src = iframe.data('src');\r\n    wrapper.addClass('videoWrapperActive');\r\n    iframe.attr('src', src + \"?autoplay=1\");\r\n}\r\n\r\n$('.functionality__preview').on('click', function (e) {\r\n    // сначала у всех убираем активное состояние\r\n    if (!$(this).hasClass('functionality__preview-bordernone')) {\r\n        $('.functionality__preview').parent().find('.functionality__content, .functionality__content-top').css('display', 'none');\r\n        $('.functionality__preview').find('.functionality__preview-circle').removeClass('transparent');\r\n        $('.functionality__preview').find('.functionality__preview-title').removeClass('color-green');\r\n        $('.functionality__preview').removeClass('functionality__preview-bordernone');\r\n\r\n        $('.functionality__preview').removeClass(\"p-low\");\r\n        $('.functionality__preview').find('.functionality__preview-title').removeClass('p-open');\r\n\r\n\r\n        $(this).siblings('.functionality__content').slideToggle('fast', function () {\r\n            if ($(this).is(':visible'))\r\n                $(this).css('display', 'flex');\r\n        });\r\n        if (Number(window.innerWidth) <= 660) {\r\n\r\n\r\n            $(this).addClass(\"p-low\");\r\n            $(this).find('.functionality__preview-title').addClass('p-open');\r\n\r\n            $(this).parent().find('.functionality__content-top').slideToggle('fast', function () {\r\n                if ($(this).is(':visible'))\r\n                    $(this).css('display', 'flex');\r\n            });\r\n        }\r\n        $(this).find('.functionality__preview-circle').addClass('transparent');\r\n        $(this).find('.functionality__preview-title').addClass('color-green');\r\n        $(this).addClass('functionality__preview-bordernone');\r\n    }\r\n})\r\n\r\n$('.questions__preview').on('click', function (e) {\r\n        $(this).siblings('.questions__text').slideToggle();\r\n    $(this).toggleClass('questions__preview--active');\r\n    $(this).find('.questions__preview-title').toggleClass('color-green');\r\n    $(this).find('.questions__circle-vertical').toggleClass('questions__circle-vertical--active');\r\n\r\n        if (Number(window.innerWidth) <= 770) {\r\n        $(this).toggleClass(\"p-open\");\r\n\r\n        }\r\n})\r\n\r\n\r\n\r\n// -------------------  modal windows ---------------------\r\n$('.avoke_modal-goto').on('click', function (e) {\r\n    e.preventDefault();\r\n    if (!$(this).hasClass('rotatebtn--disabled')) {\r\n        $('.modal-goto').addClass('modal-goto--active');\r\n    }\r\n})\r\n\r\n\r\n$('.modal-goto__close').on('click', function (e) {\r\n    e.preventDefault();\r\n    $('.modal-goto').removeClass('modal-goto--active');\r\n})\r\n\r\n\r\n$('.avoke_modal-calc').on('click', function (e) {\r\n    e.preventDefault();\r\n    $('.modal-calc').addClass('modal-calc--active');\r\n})\r\n\r\n$('.modal-calc__close').on('click', function (e) {\r\n    e.preventDefault();\r\n    $('.modal-calc').removeClass('modal-calc--active');\r\n})\r\n\r\n$('.modal-success__close, .modal-success__close-img').on('click', function (e) {\r\n    e.preventDefault();\r\n    $('.modal-success').removeClass('modal-success--active');\r\n})\r\n\r\n$('.modal-failure__close, .modal-failure__close-img').on('click', function (e) {\r\n    e.preventDefault();\r\n    $('.modal-failure').removeClass('modal-failure--active');\r\n})\r\n\r\n\r\n// ------------------------------------------------------------\r\n\r\n//------------------------- hide menu -------------------------\r\n /* code here */\r\n$(window).on('scroll', function (e) {\r\n    //hide menu\r\n    var elementTop = $('.functions__h2').offset().top;\r\n    var headerBottom = $('.header').offset().top + $('.header').outerHeight();\r\n    if (Number(window.innerWidth) >= 1250) {\r\n        if (elementTop - 200 < headerBottom) {\r\n            $('.header__nav-ul').css('display', 'none');\r\n            $('.burger__btn').css('display', 'inline-block');\r\n        } else {\r\n            $('.header__nav-ul').css('display', 'flex');\r\n            $('.burger__btn').css('display', 'none');\r\n        }\r\n    }\r\n\r\n    //hilight menu\r\n    let allMenu = $(\".dropdown__list-link\");\r\n    let functions_block = $('.functions').offset().top;\r\n    let capabilities_block = $('.capabilities').offset().top;\r\n    let tariffs_block = $('.tariffs').offset().top;\r\n    if (functions_block - 200 < headerBottom) {\r\n        allMenu.removeClass(\"color-green\");\r\n        allMenu.parent().find('[href=\"#functions\"]').addClass(\"color-green\");\r\n    }\r\n    if (capabilities_block - 200 < headerBottom) {\r\n        allMenu.removeClass(\"color-green\");\r\n        allMenu.parent().find('[href=\"#capabilities\"]').addClass(\"color-green\");\r\n    }\r\n    if (tariffs_block - 200 < headerBottom) {\r\n        allMenu.removeClass(\"color-green\");\r\n        allMenu.parent().find('[href=\"#tariffs\"]').addClass(\"color-green\");\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n// --------------------burger menu ----------------------------\r\n\r\n$('.burger__btn').on('click', function (e) {\r\n    e.preventDefault();\r\n    $(this).toggleClass('open');\r\n    $(this).toggleClass('close');\r\n    $('.dropdown').toggleClass('dropdown--active');\r\n    $('.header').toggleClass('header--dropdown');\r\n})\r\n\r\n\r\n// ------------------------------------------------------------\r\n\r\n//---------------------slick btns-----------------------------\r\n\r\n$('.capabilities__slider-btn.arrow-btn__circle-left').hover(function (e) {\r\n    if (Number(window.innerWidth) <= 660) {\r\n        $('.capabilities__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');\r\n    }\r\n}, function (e) {\r\n    if (Number(window.innerWidth) <= 660) {\r\n        $('.capabilities__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');\r\n    }\r\n})\r\n\r\n$('.articles__slider-btn.arrow-btn__circle-left').hover(function (e) {\r\n    if (Number(window.innerWidth) <= 660) {\r\n        $('.articles__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');\r\n    }\r\n}, function (e) {\r\n    if (Number(window.innerWidth) <= 660) {\r\n        $('.articles__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');\r\n    }\r\n})\r\n\r\n$('.tariffs__slider-btn.arrow-btn__circle-left').hover(function (e) {\r\n    if (Number(window.innerWidth) <= 660) {\r\n        $('.tariffs__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(100px)');\r\n    }\r\n}, function (e) {\r\n    if (Number(window.innerWidth) <= 660) {\r\n        $('.tariffs__slider-btn.arrow-btn__circle-right').css('transform', 'translateX(0)');\r\n    }\r\n})\r\n// ------------------------------------------------------------\r\n\r\n\r\n// ------------------------ resize ----------------------------\r\n\r\n$(window).on(\"resize\", function (e) {\r\n    if (Number(window.innerWidth) > 660) {\r\n        $('.functionality__content-top').css('display', 'none');\r\n        // if ($('.functionality__content-top').css('display') != 'none') {\r\n        // }\r\n    }\r\n\r\n})\r\n\r\n\r\n\r\n\r\nconst form = document.getElementById('form');\r\nform.addEventListener('submit', formSend);\r\n\r\nvar response;\r\n\r\nasync function formSend(e) {\r\n    e.preventDefault();\r\n    let error = formValidate(form);\r\n\r\n    let formData = new FormData(form);\r\n\r\n\r\n    if (error === 0) {\r\n\r\n        form.classList.add('_sending');\r\n        // AJAX\r\n        response = await fetch('sendmail.php', {\r\n            method: 'POST',\r\n            body: formData\r\n        });\r\n        if (response.ok) {\r\n            form.reset(); // очищаем все поля всей формы\r\n            $('.modal-success').addClass('modal-success--active');\r\n        } else {\r\n            $('.modal-failure').addClass('modal-failure--active');\r\n        }\r\n    } else {\r\n        $('.modal-failure').addClass('modal-failure--active');\r\n    }\r\n}\r\n\r\n\r\nfunction formValidate(form) {\r\n    let error = 0;\r\n    let formReq = document.querySelector('.feedback__form-phone');\r\n    formRemoveError(formReq);\r\n\r\n    if (phoneTest(formReq)) {\r\n        formAddError(formReq);\r\n        error++;\r\n    }\r\n    if (formReq.value == '') {\r\n        formAddError(formReq);\r\n        error++;\r\n    }\r\n\r\n    console.log(error);\r\n    return error;\r\n}\r\nfunction formAddError(input) {\r\n    input.parentElement.classList.add('_error');\r\n    input.classList.add('_error');\r\n}\r\nfunction formRemoveError(input) {\r\n    input.parentElement.classList.remove('_error');\r\n    input.classList.remove('_error');\r\n}\r\nfunction phoneTest(input) {\r\n    return !/(\\+7|8)[- _]*\\(?[- _]*(\\d{3}[- _]*\\)?([- _]*\\d){7}|\\d\\d[- _]*\\d\\d[- _]*\\)?([- _]*\\d){6})/.test(input.value.replace(/ /g, ''));\r\n}\r\n\r\n$('.smooth-scroll').on('click', function (e) {\r\n    e.preventDefault();\r\n    const href = $(this).attr('href');\r\n    $(href)[0].scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\"\r\n    })\r\n})\r\n\r\n$('.dropdown__list-link').on('click', function (e) {\r\n    e.preventDefault();\r\n    const href = $(this).attr('href');\r\n    $(href)[0].scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\"\r\n    })\r\n    $('.dropdown').toggleClass('dropdown--active');\r\n    $('.header').toggleClass('header--dropdown');\r\n    $('.burger__btn').toggleClass('open');\r\n    $('.burger__btn').toggleClass('close');\r\n})\r\n\r\n$('.header__login').on('click', function (e) {\r\n    $('.dropdown').removeClass('dropdown--active');\r\n    $('.header').removeClass('header--dropdown');\r\n    $('.burger__btn').removeClass('close');\r\n    $('.burger__btn').addClass('open');\r\n})\r\n\r\n\r\n\r\n$(\"#phone\").inputmask({ \"mask\": \"+7 (9 9 9) 9 9 9 9 9 9 9\" });\r\n/*\r\niswebp();\r\n\r\ncreateProgressBar('.capabilities__slider');\r\ncreateProgressBar('.tariffs__slider');\r\ncreateProgressBar('.articles__slider');\r\n*/\r\n});\n\n//# sourceURL=webpack://gulp2022/./src/js/modules/functions.js?")}},__webpack_module_cache__={};function __webpack_require__(r){var n=__webpack_module_cache__[r];return void 0!==n||(n=__webpack_module_cache__[r]={exports:{}},__webpack_modules__[r](n,n.exports,__webpack_require__)),n.exports}__webpack_require__.d=(r,n)=>{for(var e in n)__webpack_require__.o(n,e)&&!__webpack_require__.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},__webpack_require__.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),__webpack_require__.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/app.js")})();