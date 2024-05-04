export default function modal() {
    const regbtn = document.querySelector('.header__reg');
    const navReg = document.querySelector('.nav__reg')
    const modal = document.querySelector('.modal-wrapper');
    const modalCheckUp = document.querySelector('.modal-checkUp-wrapper');
    const burger = document.querySelector('.burger');
    const checkUpReg = document.querySelector('.swiper-wrapper')
    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal__close')) {
            e.preventDefault();
            modal.classList.remove('modal-wrapper_active');
            if(!burger.classList.contains('burger_active')) {
                document.body.classList.remove('stop-scroll');
            }
        }
    })
    regbtn.addEventListener('click',() => {
        modal.classList.add('modal-wrapper_active');
        document.body.classList.add('stop-scroll')
    });

    navReg.addEventListener('click',() => {
        modal.classList.add('modal-wrapper_active');
        document.body.classList.add('stop-scroll')
    });

    checkUpReg.addEventListener('click',(e) => {
        if(e.target.classList.contains('slide__reg')) {
            modalCheckUp.classList.add('modal-wrapper_active');
            document.body.classList.add('stop-scroll');
        }
    });

    modalCheckUp.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal__close')) {
            e.preventDefault();
            modalCheckUp.classList.remove('modal-wrapper_active');
            if(!burger.classList.contains('burger_active')) {
                document.body.classList.remove('stop-scroll');
            }
        }
    })

}
