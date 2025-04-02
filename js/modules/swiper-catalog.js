let swiperInstance = null

function initializeSwiper(){
    if (swiperInstance) return

    swiperInstance = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination:{
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })
}

function destroySwiper(){
    if (swiperInstance){
        swiperInstance.destroy(true, true)
        swiperInstance = null
    }
}

export function onWidthMatch(callback) {
    const mediaQuery = window.matchMedia("(max-width: 375px)");

    function checkSize(event) {
        if (event.matches) {
            callback(true); // Когда ширина экрана <= 375px, вызываем слайдер
        } else {
            callback(false); // Когда ширина больше 375px, уничтожаем слайдер
        }
    }

    mediaQuery.addEventListener("change", checkSize);
    checkSize(mediaQuery); // Инициализируем сразу при запуске
}

export function myCallback(shouldInitialize) {
    if (shouldInitialize) {
        initializeSwiper();
    } else {
        destroySwiper(); 
    }
}