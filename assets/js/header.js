// Add class to header on scroll
let header = document.querySelector('.header');

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 100) {
        header.classList.add('header--scroll');
    } else {
        header.classList.remove('header--scroll');
    }
})
