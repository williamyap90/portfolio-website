// animated hamburger menu
function toggleClick(x) {
    x.classList.toggle('open');
}

const hamburger = document.querySelector('.hamburger');
const navToggle = document.querySelector('.nav-toggle');

function toggleMenu() {
    if (hamburger.classList.contains('open')) {
        hamburger.classList.toggle('open');
        navToggle.checked = false;
    }
}

const hamburgerLinks = document.querySelectorAll('.nav__item');

hamburgerLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
});
