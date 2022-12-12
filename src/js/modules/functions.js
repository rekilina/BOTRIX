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

// кастомные стрелки slick
$('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev"> <img src="img/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next"> <img src="img/arrow-right.svg" alt="arrow-right"></button>',
})

// работа табов поиска
$('.search__tabs-item').on('click', function (e) {
    e.preventDefault();
    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');
    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');
})

// работа табов - универсальные классы
$('.tab').on('click', function (e) {
    e.preventDefault();

    // $('.tab').removeClass('tab--active');
    $($(this).siblings()).removeClass('tab--active');
    // $('.tab-content').removeClass('tab-content--active');
    $($(this).parent().siblings().find('.tab-content')).removeClass('tab-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tab-content--active');
})

$('.products-item__favourite').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('products-item__favourite--active');
})

// кастомные стрелки slick
$('.products-slider').slick({
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow: '<button class="products-slider-btn products-slider-btn-prev"> <img src="img/arrow-left-black.svg" alt="arrow-left-black"></button>',
    nextArrow: '<button class="products-slider-btn products-slider-btn-next"> <img src="img/arrow-right-black.svg" alt="arrow-right-black"></button>',
})

$('.products-add-slider').slick({
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow: '<button class="products-slider-btn products-slider-btn-prev"> <img src="img/arrow-left-black.svg" alt="arrow-left-black"></button>',
    nextArrow: '<button class="products-slider-btn products-slider-btn-next"> <img src="img/arrow-right-black.svg" alt="arrow-right-black"></button>',
})

$('.filter-style').styler();
$('.catalog__filter-select').styler();

$('.filter-aside__drop').on('click', function (e) {
    $(this).toggleClass('filter-aside__item-drop--active');
    $(this).parent().find('.filter-aside__checkbox-wrap, .filter-aside__wrapper').slideToggle('300');
})

$('.filter-aside__promo-link').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('filter-aside__promo-link--active');
})

$('.catalog__filter-changeview').on('click', function (e) {
    $('.catalog__filter-changeview').removeClass('catalog__filter-changeview--active');
    $(this).addClass('catalog__filter-changeview--active');
    if ($('.catalog__filter-line').hasClass('catalog__filter-changeview--active')) {
        $('.catalog__grid').addClass('catalog__grid--line');
    } else {
        $('.catalog__grid').removeClass('catalog__grid--line');
    }
})

$('.product-card__buttons-favourite, .product-card__buttons-compare').on('click', function (e) {
    $(this).toggleClass('product-card__buttons--active');
    console.log(this);
})

$(function () {

    $(".stars-rating").rateYo({
        fullStar: true,
        multiColor: {
            "startColor": "#1C62CD", //RED
            "endColor": "#1C62CD"
        },
        starWidth: "23px",
        spacing: "7px"
    });

});