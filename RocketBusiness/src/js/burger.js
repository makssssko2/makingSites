export default function burger() {
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burgerBtn.addEventListener('click',() => {
        burgerBtn.classList.toggle('burger_active');
        nav.classList.toggle('nav__active');
        document.body.classList.toggle('stop-scroll')
    })
}