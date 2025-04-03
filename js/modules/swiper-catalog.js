let swiperInstance = null

function initializeSwiper(){
    if (swiperInstance) return

    swiperInstance = new Swiper('.swiper', {
        slidesPerView: 2.5,
        spaceBetween: 16,
        loop: true,
        touchEventsTarget: 'container',
    })
}

function destroySwiper(){
    if (swiperInstance){
        swiperInstance.destroy(true, true)
        swiperInstance = null
    }

    const swiper = document.querySelector('.cat');
    const swiperWrapper = document.querySelector('.catalogy-swiper');
    const swiperSlides = document.querySelectorAll('.catalogy__item');

    if (swiper && swiperWrapper) {

        swiper.classList.remove('swiper');
        swiperWrapper.classList.remove('swiper-wrapper');

        swiperSlides.forEach(slide => {
            slide.classList.remove('swiper-slide');
        });

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
    checkSize(mediaQuery); 
}
export function myCallback(shouldInitialize) {
    const swiper = document.querySelector('.cat');
    const swiperWrapper = document.querySelector('.catalogy-swiper');
    const swiperSlides = document.querySelectorAll('.catalogy__item');

    if (swiper && swiperWrapper) {

        swiper.classList.add('swiper');
        swiperWrapper.classList.add('swiper-wrapper');

        swiperSlides.forEach(slide => {
            slide.classList.add('swiper-slide');
        });

        if (shouldInitialize) {
            initializeSwiper();
        } else {
            destroySwiper();
        }
    }
}