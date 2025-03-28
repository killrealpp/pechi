export function initCatalog() {
    const catalogBtn = document.querySelector('.catalog__btn');
    const catalogDialog = document.querySelector('.catalog__dialog');
    const catalogFirst = document.querySelector('.catalog__first');

    catalogBtn.addEventListener('click', () => {
        catalogDialog.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (
            !catalogFirst.contains(event.target) &&  
            !catalogBtn.contains(event.target)     
        ) {
            catalogDialog.classList.remove('open');
        }
    });
}


export function catalogVars() {
    const tabHeaders = document.querySelectorAll('[data-tab]');
    const contentBoxer = document.querySelectorAll('[data-tab-content]');

    tabHeaders.forEach(function (item) {
        const contentBox = document.querySelector(`#${item.dataset.tab}`);

        item.addEventListener('mouseenter', function () {
            tabHeaders.forEach(function (header) {
                header.classList.remove('active');
            });

            item.classList.add('active');

            contentBoxer.forEach(function (content) {
                content.classList.add('hidden')
            });

            contentBox.classList.remove('hidden')
            
        });

        item.addEventListener('mouseleave', function () {
            setTimeout(() => {
                if (!contentBox.matches(':hover')) {
                    contentBox.classList.add('hidden')
                }
            }, 100);
        });

        contentBox.addEventListener('mouseenter', function () {
            contentBox.classList.remove('hidden')
        });

        contentBox.addEventListener('mouseleave', function () {
            setTimeout(() => {
                if (!item.matches(':hover')) {
                    contentBox.classList.add('hidden')
                }
            }, 100);
        });
    });
}


export function initContacts(){
    const btn = document.querySelector('.header__num-btn')
    const details = document.querySelector('.number-details')
    console.log(btn)
    console.log(details)

    btn.addEventListener('click',()=>{
        details.classList.toggle('open')
    })  

    document.addEventListener('click', (event)=>{
        if (!details.contains(event.target) && !btn.contains(event.target)){
            details.classList.remove('open')
        }
    })
}


export function initScrollContacts(){
    const btn = document.querySelector('.header__num-btn--scroll')
    const details = document.querySelector('.number-details--scroll')

    btn.addEventListener('click',()=>{
        details.classList.toggle('open')
    })  

    document.addEventListener('click', (event)=>{
        if (!details.contains(event.target) && !btn.contains(event.target)){
            details.classList.remove('open')
        }
    })
}

export function headerScroll() {
    const headerBottom = document.querySelector('.header__bottom');
    const headerBtns = document.querySelector('.header-scroll__btns')
    const input = document.querySelector('.header__input')
    const num = document.querySelector('.header__num--scroll')

    if (!headerBottom) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            headerBottom.classList.add('scroll');
            headerBtns.classList.remove('hidden')
            headerBtns.classList.add('scroll__btns')
            input.classList.add('scroll__input')
            num.classList.remove('hidden')
        } else {
            headerBottom.classList.remove('scroll');
            headerBtns.classList.add('hidden')
            headerBtns.classList.remove('scroll__btns')
            input.classList.remove('scroll__input')
            num.classList.add('hidden')
        }
    });
}
