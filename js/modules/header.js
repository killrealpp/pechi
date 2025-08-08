export function initCatalog() {
    const catalogBtns = document.querySelectorAll('.catalog__btn, .header-scroll__btn-cataog');
    const catalogDialog = document.querySelector('.catalog__dialog');
    const catalogFirst = document.querySelector('.catalog__first');
    const body = document.body

    catalogBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            catalogDialog.classList.toggle('open');
            body.classList.toggle('open--menu')
        });
    });

    document.addEventListener('click', (event) => {
        if (
            !catalogFirst.contains(event.target) &&  
            ![...catalogBtns].some(btn => btn.contains(event.target))  
        ) {
            catalogDialog.classList.remove('open');
            body.classList.remove('open--menu');
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
    const headerTop = document.querySelector('.header__top')
    const catalogDialog = document.querySelector('.catalog__dialog')
    const catalogFirst = document.querySelector('.catalog__first')

    if (!headerBottom) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            headerBottom.classList.add('scroll');
            headerBtns.classList.remove('hidden')
            headerBtns.classList.add('scroll__btns')
            input.classList.add('scroll__input')
            num.classList.remove('hidden')
            headerTop.classList.add('shadow')
            catalogDialog.classList.remove('open')
            catalogFirst.classList.add('catalog-height')

        } else {
            headerBottom.classList.remove('scroll');
            headerBtns.classList.add('hidden')
            headerBtns.classList.remove('scroll__btns')
            input.classList.remove('scroll__input')
            num.classList.add('hidden')
            headerTop.classList.remove('shadow')
        }
    });
}

// export function headerScroll() {
//     const headerBottom = document.querySelector('.header__bottom');
//     const headerBtns = document.querySelector('.header-scroll__btns')
//     const input = document.querySelector('.header__input')
//     const num = document.querySelector('.header__num--scroll')
//     const headerTop = document.querySelector('.header__top')
//     const catalogDialog = document.querySelector('.catalog__dialog')
//     const catalogFirst = document.querySelector('.catalog__first')

//     if (!headerBottom) return;

//     window.addEventListener('scroll', () => {
//         // Если экран меньше или равен 768px - НЕ применяем класс 'scroll' к headerBottom
//         const isMobile = window.innerWidth <= 768;
//         const isScrolled = window.scrollY > 150;

//         if (isScrolled) {
//             if (!isMobile) headerBottom.classList.add('scroll'); // Только на ПК
//             headerBtns.classList.remove('hidden')
//             headerBtns.classList.add('scroll__btns')
//             input.classList.add('scroll__input')
//             num.classList.remove('hidden')
//             headerTop.classList.add('shadow')
//             catalogDialog.classList.remove('open')
//             catalogFirst.classList.add('catalog-height')
//         } else {
//             if (!isMobile) headerBottom.classList.remove('scroll'); // Только на ПК
//             headerBtns.classList.add('hidden')
//             headerBtns.classList.remove('scroll__btns')
//             input.classList.remove('scroll__input')
//             num.classList.add('hidden')
//             headerTop.classList.remove('shadow')
//         }
//     });
// }

export function scrollMenu(){
    const btn = document.querySelector('.header-scroll__btn-menu')
    const menu = document.querySelector('.header-scroll__menu')

    btn.addEventListener('click', ()=>{
        menu.classList.toggle('hidden')
    })

    document.addEventListener('click', (event)=>{
        if (!menu.contains(event.target) && !btn.contains(event.target)){
            menu.classList.add('hidden')
        }
    })

}


export function catalogTop() {
    const catalogDialog = document.querySelector('.catalog__dialog');
    const headerInner = document.querySelector('.header__inner');
    const top = document.querySelector('.top');

    if (headerInner) {
        const headerHeight = headerInner.getBoundingClientRect().height; // Теперь всегда корректный размер
        

        if (catalogDialog) {
            catalogDialog.style.top = `${headerHeight + 24}px`;
        }

        if (top) {
            top.style.paddingTop = `${headerHeight + 124}px`;
        }
    }
}

export function observeHeaderChanges() {
    const headerInner = document.querySelector('.header__inner');

    if (headerInner) {
        const observer = new MutationObserver(() => {
            catalogTop(); 
        });

        observer.observe(headerInner, {
            childList: true,       
            subtree: true,       
            attributes: true,     
            characterData: true   
        });
    }
}

export function openBurgerMenu(){
    const openButton = document.querySelector('.header__plan-btn')
    const menu = document.querySelector('.menu-plan')
    const closeButton = document.querySelector('.menu-plan__back-svg')
    // const body = document.body

    openButton.addEventListener('click', ()=>{
        menu.classList.add('open')
        // body.classList.toggle('open--menu')

    })

    closeButton.addEventListener('click', ()=>[
        menu.classList.remove('open')
        // body.classList.remove('open--menu')
    ])

}


export function openCatalog(){
    const planCat = document.querySelector('.plan-cat')
    const menuPlanCat = document.querySelector('.menu-plan__cat')
    const backSvg = document.querySelector('.back-svg') 

    planCat.addEventListener('click', ()=>{
        menuPlanCat.classList.add('block')
    })

    backSvg.addEventListener('click', ()=>{
        menuPlanCat.classList.remove('block')
    })
}