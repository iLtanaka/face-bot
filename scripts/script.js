const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');
const menuSpan = document.querySelector('.menu__icon_span');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active-btn');
        body.classList.toggle('lock');
    })
}