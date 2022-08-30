import 'normalize.css'
import './styles/main.scss';

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.toggle('dropdown__button--active');
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.classList.add('dropdown__list--visible');
            dropDownList.classList.add('dropdown__list--visible');
        });
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        }
    });
});


var swiperThumbs = new Swiper(".swiper-thumbs", {
    slidesPerView: 3,
    spaceBetween: 5,
    breakpoints: {
        1920: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 3
        },
        480: {
            slidesPerView: 3
        }
    }
});

var swiperMain = new Swiper(".swiper-main", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbs
    }
});


var sliderComment = new Swiper(".slider-comment", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    setWrapperSize: true,

    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            centeredSlides: true,
            spaceBetween: 0,
            slidesPerView: 6,
        },

    },
});

var swiperMain = new Swiper(".swiper-main", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbs
    }
});
/*
const swiper = new Swiper('.swiper', {


    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },

});*/

/*
const swiper = new Swiper('.swiper', {
    
});
*/



/*
    slidesPerColumn: 1,
    spaceBetween: 0,
    slidesOffsetAfter: 0,
    centeredSlides: true,
*/



const li = document.querySelectorAll('.clickable-li')
const elem = document.querySelectorAll('.clickable');


for (var i = 0; i < li.length; i++) {

    li[i].addEventListener('click', function (e) {

        for (var i = 0; i < li.length; i++) {

            if (e.target === li[i]) {

                elem[i].classList.toggle('active');
            } else {
                elem[i].classList.remove('active');
            }

        }


    })
}
