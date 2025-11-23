
const accordionLists = document.querySelectorAll('.photo-accordion')

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.photo-accordion')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened')

        if (accordionItem.classList.contains('accordion--opened')) {
            accordionContent.style.maxHeight = 100 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});
const accordionLists2 = document.querySelectorAll('.form__button')
accordionLists2.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.form__button')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened-2')

        if (accordionItem.classList.contains('accordion--opened-2')) {
            accordionContent.style.maxHeight = 1000 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});

const accordionListsReview = document.querySelectorAll('.reviews__menu')
accordionListsReview.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.review__accordion-button')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened-3')

        if (accordionItem.classList.contains('accordion--opened-3')) {
            accordionContent.style.maxHeight = 1000 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});
const accordionListsFAQ = document.querySelectorAll('.FAQ__accordion')
accordionListsFAQ.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.FAQ__accordion-control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened-4')

        if (accordionItem.classList.contains('accordion--opened-4')) {
            accordionContent.style.maxHeight = 1000 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});
const accordionListsNewsBlock = document.querySelectorAll('.news__accordion')
accordionListsNewsBlock.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.news__accordion-button')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened-5')

        if (accordionItem.classList.contains('accordion--opened-5')) {
            accordionContent.style.maxHeight = 1000 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});
const accordionListsNews = document.querySelectorAll('.accordion__control')
accordionListsNews.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion__control-button')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened-6')

        if (accordionItem.classList.contains('accordion--opened-6')) {
            accordionContent.style.maxHeight = 1500 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});
const accordionListsNav = document.querySelectorAll('.js-accordion')
accordionListsNav.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.market__nav-control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault();

        accordionItem.classList.toggle('accordion--opened-7')

        if (accordionItem.classList.contains('accordion--opened-7')) {
            accordionContent.style.maxHeight = 1000 + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }
    })
});

document.querySelectorAll('.slide-control').forEach(counter => {
    let count = 0;
    const valueEl = counter.querySelector('.pagination__number');
    const minusBtn = counter.querySelector('.pagination__minus');
    const plusBtn = counter.querySelector('.pagination__plus');

    function updateDisplay() {
        valueEl.textContent = count;
        minusBtn.disabled = count <= 0;
        
        // Добавляем/убираем класс для стилизации неактивной кнопки
        if (count <= 0) {
            minusBtn.classList.add('disabled');
        } else {
            minusBtn.classList.remove('disabled');
        }
    }

    minusBtn.onclick = () => {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    };

    plusBtn.onclick = () => {
        count++;
        updateDisplay();
    };

    updateDisplay();
});

new Swiper('.market__slider', {
    slidesPerView: 1,
    pagination: {
        el: '.slider__pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    },
});
class FilterButton {
    constructor(buttonId, dropdownId, gridContainerId) {
        this.button = document.getElementById(buttonId);
        this.dropdown = document.getElementById(dropdownId);
        this.gridContainer = document.getElementById(gridContainerId);
        this.options = this.dropdown.querySelectorAll('.filter__item');
        this.currentFilter = 'all';

        // Сохраняем исходный HTML кнопки (с SVG)
        this.originalButtonHTML = this.button.innerHTML;

        this.init();
    }

    init() {
        // Обработчик клика по кнопке
        this.button.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpening = !this.dropdown.classList.contains('show');

            this.dropdown.classList.toggle('show');
            // Добавляем/убираем класс active у кнопки
            this.button.classList.toggle('active', isOpening);
        });

        // Обработчики для опций
        this.options.forEach(option => {
            option.addEventListener('click', () => {
                this.selectFilter(option);
            });
        });

        // Закрытие dropdown при клике вне его
        document.addEventListener('click', () => {
            this.dropdown.classList.remove('show');
        });

        // Загружаем сохраненный фильтр из localStorage
        this.loadSavedFilter();
    }

    selectFilter(option) {
        const value = option.dataset.value;
        const text = option.textContent;

        // Сохраняем текущий фильтр
        this.currentFilter = value;

        // Обновляем текст кнопки, сохраняя SVG
        this.updateButtonText(text);

        // Обновляем активный класс
        this.options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Закрываем dropdown
        this.dropdown.classList.remove('show');
        this.button.classList.remove('active');

        // Сохраняем в localStorage
        this.saveFilter();

        // ВЫПОЛНЯЕМ ПЕРЕМЕШИВАНИЕ ЭЛЕМЕНТОВ ПРИ ВЫБОРЕ ФИЛЬТРА
        this.shuffleGridItems();
    }

    updateButtonText(text) {
        // Находим SVG элемент в кнопке
        const svgElement = this.button.querySelector('svg');

        if (svgElement) {
            // Сохраняем SVG
            const svgHTML = svgElement.outerHTML;
            // Обновляем кнопку с сохранением SVG
            this.button.innerHTML = `<span class="filter-btn-text">${text}</span> ${svgHTML}`;
        } else {
            // Если SVG не найден, просто обновляем текст
            this.button.innerHTML = `<span class="filter-btn-text">${text}</span>`;
        }
    }

    // МЕТОД ДЛЯ ПЕРЕМЕШИВАНИЯ ЭЛЕМЕНТОВ
    shuffleGridItems() {
        if (!this.gridContainer) {
            console.error('Grid container not found');
            return;
        }

        const items = Array.from(this.gridContainer.querySelectorAll('.catalog__slide-content'));

        if (items.length === 0) {
            console.warn('No grid items found');
            return;
        }

        // Алгоритм Фишера-Йейтса для перемешивания
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }

        // Очищаем контейнер и добавляем перемешанные элементы
        this.gridContainer.innerHTML = '';
        items.forEach(item => {
            this.gridContainer.appendChild(item);
            item.style.background = '#fff';

            setTimeout(() => {
                item.style.background = '';
            }, 1000);
        });

        console.log(`Элементы перемешаны после выбора фильтра: ${this.currentFilter}`);
    }

    applyFilter(filterValue) {
        console.log(`Применен фильтр: ${filterValue}`);
        // Здесь может быть дополнительная логика фильтрации товаров
    }

    saveFilter() {
        localStorage.setItem('selectedFilter', this.currentFilter);
    }

    loadSavedFilter() {
        const savedFilter = localStorage.getItem('selectedFilter');
        if (savedFilter) {
            const option = this.dropdown.querySelector(`[data-value="${savedFilter}"]`);
            if (option) {
                this.selectFilter(option);
            }
        }
    }

    // Метод для получения текущего фильтра
    getCurrentFilter() {
        return this.currentFilter;
    }

    // Дополнительный метод для принудительного перемешивания
    forceShuffle() {
        this.shuffleGridItems();
    }
}

// Инициализация - теперь передаем три параметра
const filter = new FilterButton('filterBtn', 'filterDropdown', 'gridContainer');


document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burger = e.target.closest('.header__burger')
        const nav = e.target.closest('.nav__item')

        if (!burger && !nav) return
        if (document.documentElement.clientWidth > 1200) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }