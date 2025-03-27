// export function initDialog() {
//     document.querySelectorAll('.dialog').forEach(dialog => {
//         const button = dialog.querySelector('.dialog__btn');
//         const content = dialog.querySelector('.dialog__content');
//         button.addEventListener('click', () => {
//             content.classList.toggle('dialog__content--visible');
//             document.body.classList.toggle('no-scroll', content.classList.contains('dialog__content--visible'));
//         });

//         document.addEventListener('click', (event) => {
//             if (!dialog.contains(event.target)) {
//                 content.classList.remove('dialog__content--visible');
//                 document.body.classList.remove('no-scroll');
//             }
//         });
//     });
// }


export function initCatalog(){
    const catalogBtn = document.querySelector('.catalog__btn')
    const catalogDialog = document.querySelector('.catalog__dialog')

    catalogBtn.addEventListener('click', ()=>{
        catalogDialog.classList.toggle('open')
    })

    document.addEventListener('click', (event) => {
        if (!catalogDialog.contains(event.target) && !catalogBtn.contains(event.target)) {
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
                    item.classList.remove('active'); 
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







