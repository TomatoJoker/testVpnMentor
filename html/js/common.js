dynamicHeightToolbar();
window.addEventListener("resize", function () {
    dynamicHeightToolbar();
});

function dynamicHeightToolbar() {
    if (window.innerWidth < 1200) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    } else {
        document.documentElement.style.removeProperty('--vh');
    }
} // calc window height without toolbar on mobile browser

const dropdown = (btnEl, parent, element) => {
    const btn = document.querySelectorAll(btnEl);
    btn.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.closest(parent).querySelector(element);
            const isMenuOpen = btn.getAttribute('aria-expanded') === 'true' || false;
            const body = document.querySelector('body');
            const bodyStyle = body.style.getPropertyValue('overflow');

            if (btn.getAttribute('aria-expanded')) {
                btn.setAttribute('aria-expanded', !isMenuOpen);
            }

            if (btn.getAttribute('aria-controls') === 'dataNav') {
                if (!bodyStyle) {
                    body.style.setProperty('overflow', 'hidden');
                } else {
                    body.style.removeProperty('overflow');
                }
            }

            btn.classList.toggle(`${btnEl.split(' ')[0].slice(1)}--active`);
            target.classList.toggle(`${element.split(' ')[0].slice(1)}--open`);
        });
    })
}

dropdown('.lang__active-item', '.lang', '.lang__list');

if (window.innerWidth < 1200) {
    dropdown('.header__menu-link', '.header__menu-item', '.header__sub-menu');
    dropdown('.header__burger', '.header__container--mob', '.header__menu');
}


const searchWrapper = document.querySelector('.header__search-wrapper'),
    headerSearchDesktop = document.querySelector('.header__search--desktop');
searchWrapper.addEventListener('click', (ev) => {
    .classList.add('');
    headerSearchDesktop.classList.add('header__search--open');
})
document.addEventListener('click', (ev) => {
    if (!searchWrapper.contains(ev.target)) {
        searchBtnToggle.classList.remove('.header__search-btn-toggle');
        headerSearchDesktop.classList.remove('header__search--open');
    }
});