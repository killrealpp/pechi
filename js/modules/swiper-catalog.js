export function onWidthMatch(callback) {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    function checkSize(event) {
        if (event.matches) {
            callback();
        }
    }

    mediaQuery.addEventListener("change", checkSize);
    checkSize(mediaQuery);
}

export function myCallback() {
    const slideHidden = document.querySelectorAll('.slide-hidden');
    console.log(slideHidden);


    
}
