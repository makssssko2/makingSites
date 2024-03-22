const burger = function(){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const body = document.body;

    burger.addEventListener('click', (e) => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header__nav_active');
        body.classList.toggle('stop-scroll')
    });

    const links = document.querySelectorAll('.header__link');
    links.forEach((item) => {
        item.addEventListener('click', () => {
            burger.classList.remove('burger_active');
            menu.classList.remove('header__nav_active');
            body.classList.remove('stop-scroll');
        })
    })
}

export default burger;