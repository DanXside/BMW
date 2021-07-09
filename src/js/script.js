const featureLinkElems = document.querySelectorAll('.feature__link'),
      featureSubElems = document.querySelectorAll('.feature-sub');

for (let i = 0; i < featureLinkElems.length; i++) {
    featureLinkElems[i].addEventListener('click', () => {
        if (featureLinkElems[i].classList.contains('feature__link_active')) {
            featureLinkElems[i].classList.remove('feature__link_active');
            featureSubElems[i].classList.add('hidden');
        } else {
            featureLinkElems.forEach((featureLinkElem) => {
                featureLinkElem.classList.remove('feature__link_active'); 
            });
            featureSubElems.forEach((featureSubElem) => {
                featureSubElem.classList.add('hidden');
            });
            featureLinkElems[i].classList.add('feature__link_active');
            featureSubElems[i].classList.remove('hidden');  
        };
    });
};

/* featureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        featureSubElems.forEach((featureSubElem) => {
            featureSubElem.classList.add('hidden');
        });
        featureLinkElems.forEach((featureLinkElem) => {
            featureLinkElem.classList.remove('feature__link_active');
        });
        featureSubElems[index].classList.remove('hidden');
        btn.classList.add('feature__link_active');
    });
}); */

/* Smooth scroll */

const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = link.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Tabs */

const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
      tabsFieldElems = document.querySelectorAll('[data-tabs-field]'),
      tabsTitleElems = document.querySelectorAll('[data-tabs-title]');
for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            if (tab === item) {
                item.classList.add('design-list__item_active');
            } else {
                item.classList.remove('design-list__item_active');
            };
        });
        tabsFieldElems.forEach(item => {
            if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            };
        });
        tabsTitleElems.forEach(item => {
            if (item.dataset.tabsTitle === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            };
        });
    });
};

/* Modal */

const moreElem = document.querySelectorAll('.more'),
      modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden');
};

const closeModal = () => {
    modalElem.classList.add('hidden');
};

moreElem.forEach((moreElem) => {
    moreElem.addEventListener('click', openModal);
});
modalElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        closeModal();
    };
});

/* Humburger */

const menuElem = document.querySelector('.menu'),
      humburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);

const closeMenu = () => {
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('humburger-menu-active');
};

menuElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('menu-list__link')) {
        closeMenu();
    };
});









