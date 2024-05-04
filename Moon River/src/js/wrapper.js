const wrapper = () => {
    const button = document.querySelector('.burger');
    const wrapper = document.querySelector('.wrapper');
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');
    const wrapperItems = document.querySelector('.nav');

    button.addEventListener('click', function(){
        button.classList.toggle('burger_active');
        header.classList.toggle('header_show');
        hero.classList.toggle('hero_hide');
        wrapper.classList.toggle('wrapper_show');

        wrapperItems.addEventListener('click', function(event) {
            if(event.target.closest('.nav__item')) {
                wrapperItems.querySelectorAll('.nav__item').forEach(function(item){
                    item.classList.remove('nav__item_active');
                })
                event.target.closest('.nav__item').classList.add('nav__item_active');
            }
        })
    })
}

export default wrapper;