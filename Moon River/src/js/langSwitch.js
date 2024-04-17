const switchLang = () => {
    const buttons = document.querySelector('.page__langBtns');
    console.log(buttons);
    buttons.addEventListener('click', function(event) {
        buttons.querySelectorAll('.langBtn').forEach(function(item){
            item.classList.remove('langBtn_active');
        })
        event.target.classList.add('langBtn_active');
    })
}

export default switchLang;