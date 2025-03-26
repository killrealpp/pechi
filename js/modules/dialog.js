export function initDialog() {
    document.querySelectorAll('.dialog').forEach(dialog => {
        const button = dialog.querySelector('.dialog__btn');
        const content = dialog.querySelector('.dialog__content');

        button.addEventListener('click', () => {
            content.classList.toggle('dialog__content--visible');
            document.body.classList.toggle('no-scroll', content.classList.contains('dialog__content--visible'));
        });

        document.addEventListener('click', (event) => {
            if (!dialog.contains(event.target)) {
                content.classList.remove('dialog__content--visible');
                document.body.classList.remove('no-scroll');
            }
        });
    });
}
