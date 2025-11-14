(function () {

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

    const tabControls = document.querySelector('.program__duration-weeks')
    tabControls.addEventListener('click', toggleTab)
    function toggleTab(event) {
        const tabControl = event.target.closest('.program__duration-week')

        if (!tabControl) return
        if (tabControl.classList.contains('program__duration-week--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeTab = document.querySelector('.tab-content--show')
        const activeControl = document.querySelector('.program__duration-week--active')

        if (activeTab) {
            activeTab.classList.remove('tab-content--show')
        }
        if (activeControl) {
            activeControl.classList.remove('program__duration-week--active')
        }
        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('program__duration-week--active')
    }

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {
            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    });

    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 32,
        slidesPerView: 3,
        pagination: {
            el: '.button-number',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.button-right',
            prevEl: '.button-left',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });

    const modal = document.querySelector('.modal')
    const btn = document.querySelector('.aboutUs__imgBlock-button--svg')
    btn.addEventListener('click', () => {
        modal.classList.add('modal--opened')
    })
    modal.addEventListener('click', event => {
        const target = event.target
        if (target.classList.contains('modal') || target.classList.contains('modal__close-btn') || target.classList.contains('modal__form-submit')) {
            modal.classList.remove('modal--opened')
        }
    })
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            modal.classList.remove('modal--opened')
        }
    })
})()

