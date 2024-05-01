import cl from "../../pages/restaurants/Restaurants.module.css"

function createMobileNavbar(pathname) {
    if (window.innerWidth <= 768) {
        console.log("NAVBAR-JS");
        const navbar = document.querySelector('#navbar');
        const menu = document.querySelector('#menu');
        const menuToggle = document.querySelector('.navbar__toggle');
        const linkBtns = document.querySelectorAll('.navbar__link')
        let isMenuOpen = false;

        function toggleMenu(e) {
            if(e) e.preventDefault();
            isMenuOpen = !isMenuOpen;
            
            // toggle a11y attributes and active class
            menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
            menu.hidden = !isMenuOpen;
            navbar.classList.toggle('navbar--open');

            // Если открыта страница "Все рестораны" необходимо также убирать кнопку, открывающую боковую менюшку
            if (pathname === "/restaurants") {
                document.querySelector(`.${cl["nav-toggle"]}`).classList.toggle(`${cl["nav-toggle_hidden"]}`)
            }
        }

        const routeFunc = (url) => {
            toggleMenu(null)
            window.location.href = url
        }

        linkBtns.forEach(link => link.addEventListener('click', e => routeFunc(e.target.dataset.url)))

        // TOGGLE MENU ACTIVE STATE
        menuToggle.addEventListener('click', toggleMenu);
    }
}

export default createMobileNavbar