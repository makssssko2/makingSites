function catalog(){
    const buttons = document.querySelectorAll('.catalog__btn');
    const catalog = document.querySelector('.catalog__products');
    
    const loadCatalog = async function(country){
        catalog.innerHTML = '';
        try{
            let response = await fetch('./../../dataset/items.json')
            let result = await response.json();
            result.forEach((item) => {
                if(item.country == country){
                    catalog.insertAdjacentHTML('beforeend',
                    `<div class="catalog__item item">
                        <div class="item__image"><img src="${item.source}" alt="Painting"></div>
                        <p class="item__author">${item.author}</p>
                        <h3 class="item__title">${item.title}</h3>
                        <p class="item__materials">${item.materials}</p>
                        <p class="item__price">${item.price} руб</p>
                        <button class="item__add">В корзину</button>
                    </div>`
                    );
                }
            })
        } catch(error){
            console.log(error);
        }
    }
    buttons.forEach((item) => {
        item.addEventListener('click',(event) => {
            buttons.forEach((button) => {
                button.classList.remove('catalog__btn_active');
            })
            event.target.classList.add('catalog__btn_active');
            loadCatalog(event.target.dataset.country);
        })
    })



    loadCatalog('France');
}
export default catalog;