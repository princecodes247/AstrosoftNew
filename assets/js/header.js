// Add class to header on scroll
let header = document.querySelector('.header');
const navButton = document.getElementById("nav-menu");
const sideBarMenu = document.querySelector(".sidebar-menu");
const closeBtn = document.getElementById("close-btn");

navButton.addEventListener("click", () => {
  sideBarMenu.classList.toggle("sidebar-menu--visible");
  navButton.classList.toggle("sidebar-menu--visible");
});
closeBtn.addEventListener("click", () => {
  sideBarMenu.classList.remove("sidebar-menu--visible");
  navButton.classList.remove("sidebar-menu--visible");
});

const checkHeader = () => {
    if (window.scrollY > 100) {
        header.classList.add('header--scroll');
    } else {
        header.classList.remove('header--scroll');
    }
}

window.addEventListener("scroll", checkHeader);

checkHeader()

const setupHeader = () => {
    // Check current page
    console.log("hi")
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-links li a");
    
    sideBarMenu.classList.remove("sidebar-menu--visible");
  navButton.classList.remove("sidebar-menu--visible");

    navLinks.forEach((link) => {
        link.parentElement.classList.remove("nav_link--active");
        // console.log(link.getAttribute("href"))
        // console.log(currentPage)
        // let currTargetlink.getAttribute("href")
        if (currentPage.includes(link.getAttribute("href"))) {
            link.parentElement.classList.add("nav_link--active");
        }
    })
}

setupHeader()