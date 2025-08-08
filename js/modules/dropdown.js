export function initDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown__btn');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__list-item');
        // const body = document.body


        button.addEventListener('click', function (event) {
            event.stopPropagation(); 
            list.classList.toggle('dropdown__list--visible');
            // body.classList.toggle('open--menu')
        });

        items.forEach(item => {
            item.addEventListener('click', function () {
                button.textContent = item.textContent;
                list.classList.remove('dropdown__list--visible');
                // body.classList.remove('open--menu');    
            });
        });
    });

    document.addEventListener('click', function (event) {
        document.querySelectorAll('.dropdown__list--visible').forEach(openList => {
            if (!openList.closest('.dropdown')?.contains(event.target)) {
                openList.classList.remove('dropdown__list--visible');
            }
        });
    });
}
