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
                content.style.display = 'none';
            });

            contentBox.style.display = 'block';
        });

        item.addEventListener('mouseleave', function () {
            setTimeout(() => {
                if (!contentBox.matches(':hover')) {
                    contentBox.style.display = 'none'; 
                }
            }, 100);
        });

        contentBox.addEventListener('mouseenter', function () {
            contentBox.style.display = 'block';
        });

        contentBox.addEventListener('mouseleave', function () {
            setTimeout(() => {
                if (!item.matches(':hover')) {
                    contentBox.style.display = 'none';
                }
            }, 100);
        });
    });
}