'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menu = () => {
        const hamburger = document.querySelector('.humburger'),
              menu = document.querySelector('.mobilemenu'),
              overlay = document.querySelector('.mobilemenu__overlay');
    
    
        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
            let scroll = calcScroll();
            document.body.style.marginRight = `${scroll}px`;
            document.body.style.overflow = 'hidden';
        });
    
        function closeMenu() {
            overlay.addEventListener('click', () => {
                menu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            });
        }
    
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && menu.classList.contains('active')) {
                menu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    
        function calcScroll() {
            let div = document.createElement('div');
    
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
    
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
    
            return scrollWidth;
        }
    
        closeMenu();
    }

    function closeInfo() {
        const infoSelector = document.querySelector('.info'),
              closeSelector = document.querySelector('.info__close');

        closeSelector.addEventListener('click', () => {
            infoSelector.classList.add('hide');
        });
    }
    
    menu();
    closeInfo()
});

