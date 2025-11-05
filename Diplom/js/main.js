(function() {
    
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burger = e.target.closest('.burger__icon')
        const nav = e.target.closest('.header__nav-item')

        if (!burger && !nav) return
        if (document.documentElement.clientWidth > 900) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()
const modal = document.querySelector('.modal')
const btn = document.querySelector('.aboutUs__imgBlock-button--svg')
btn.addEventListener('click', () => {
    modal.classList.add('modal--opened')
})
modal.addEventListener ('click', event => {
    const target = event.target
    if (target.classList.contains('modal') || target.classList.contains('modal__close-btn') || target.classList.contains('modal__form-submit')) {
        modal.classList.remove('modal--opened')
    }
})
document.addEventListener ('keydown', event => {
    if (event.code === 'Escape') {
        modal.classList.remove('modal--opened')
    }
})