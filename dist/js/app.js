(()=>{"use strict";var __webpack_modules__={"./src/js/app.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.iswebp();\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.createProgressBar('.capabilities__slider');\n\n//# sourceURL=webpack://gulp2022/./src/js/app.js?")},"./src/js/modules/functions.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProgressBar\": () => (/* binding */ createProgressBar),\n/* harmony export */   \"iswebp\": () => (/* binding */ iswebp)\n/* harmony export */ });\n// Проверка поддержки webp браузером\r\n// Если поддерживает, то добавляем класс webp \r\n// Если не поддерживает, добавляем класс no-webp \r\nfunction iswebp() {\r\n    // проверка поддержки webp \r\n    function testWebp(callBack) {\r\n        let webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callBack(webP.heihgt == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    // Добавление класса \r\n    testWebp(function (support) {\r\n        let className = support === true ? 'webp' : 'no-webp';\r\n        document.documentElement.classList.add(className);\r\n    })\r\n}\r\n\r\n$('.capabilities__slider').slick({\r\n    dots: false,\r\n    infinite: true,\r\n    speed: 300,\r\n    slidesToShow: 3,\r\n    slidesToScroll: 1,\r\n    centerMode: false,\r\n    variableWidth: true,\r\n    nextArrow: '<div class=\"arrow-btn__circle arrow-btn__circle-right\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n    prevArrow: '<div class=\"arrow-btn__circle arrow-btn__circle-left\"><div class=\"arrow-btn__arrow-small\"></div><div class=\"arrow-btn__arrow-long\"></div></div>',\r\n});\r\n// кастомные стрелки slick\r\n// $('.capabilities__slider').slick({\r\n//     dots: true,\r\n//     prevArrow: '<button class=\"banner-section__slider-btn banner-section__slider-btn-prev\"> <img src=\"img/arrow-left.svg\" alt=\"arrow-left\"></button>',\r\n//     nextArrow: '<button class=\"banner-section__slider-btn banner-section__slider-btn-next\"> <img src=\"img/arrow-right.svg\" alt=\"arrow-right\"></button>',\r\n// })\r\n\r\n// Ticker\r\n// https://www.jqueryscript.net/animation/horizontal-animation-conveyor-ticker.html\r\n$(function () {\r\n    $('.main-marquee').jConveyorTicker({\r\n        anim_duration: 150,\r\n    });\r\n});\r\n\r\n$('.videoPoster').on('click', function (e) {\r\n    e.preventDefault();\r\n    var poster = $(this);\r\n    var wrapper = poster.closest('.js-videoWrapper');\r\n    videoPlay(wrapper);\r\n});\r\n\r\nfunction videoPlay(wrapper) {\r\n    console.log('here');\r\n    var iframe = wrapper.find('.js-videoIframe');\r\n    console.log(iframe.data('src'));\r\n    var src = iframe.data('src');\r\n    console.log()\r\n    wrapper.addClass('videoWrapperActive');\r\n    iframe.attr('src', src + \"?autoplay=1\");\r\n}\r\n\r\n\r\nfunction createProgressBar(slider_selector) {\r\n    var $slider = $(slider_selector);\r\n    var $progressBar = $slider.siblings('.progress');\r\n    var $progressBarLabel = $progressBar.find('.slider__label');\r\n    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\r\n        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;\r\n        $progressBar\r\n            .css('background-size', calc + '% 100%')\r\n            .attr('aria-valuenow', calc);\r\n    });\r\n}\r\n\r\n$('.functionality__preview').on('click', function(e) {\r\n    $(this).siblings('.functionality__content').slideToggle();\r\n    $(this).siblings('.functionality__content').toggleClass('flex');\r\n    $(this).find('.functionality__preview-circle').toggleClass('transparent');\r\n    $(this).find('.functionality__preview-title').toggleClass('color-green');\r\n    $(this).toggleClass('functionality__preview-bordernone');\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp2022/./src/js/modules/functions.js?")}},__webpack_module_cache__={};function __webpack_require__(r){var e=__webpack_module_cache__[r];return void 0!==e||(e=__webpack_module_cache__[r]={exports:{}},__webpack_modules__[r](e,e.exports,__webpack_require__)),e.exports}__webpack_require__.d=(r,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),__webpack_require__.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/app.js")})();