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