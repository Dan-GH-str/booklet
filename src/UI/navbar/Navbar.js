if(window.innerWidth < 768) {
    const navbar = document.querySelector('#navbar');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.navbar__toggle');
    const linkBtns = document.querySelectorAll('.navbar__link')
    let isMenuOpen = false;

    function closeMenu(e) {
        if(e) e.preventDefault();
        isMenuOpen = !isMenuOpen;
        
        // toggle a11y attributes and active class
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        navbar.classList.toggle('navbar--open');
    }

    const routeFunc = (url) => {
        closeMenu(null)
        window.location.href = url
    }

    linkBtns.forEach(link => link.addEventListener('click', e => routeFunc(e.target.dataset.url)))

    // TOGGLE MENU ACTIVE STATE
    menuToggle.addEventListener('click', closeMenu);
}