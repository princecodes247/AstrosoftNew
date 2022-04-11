const navButton = document.getElementById("nav-menu");
const sideBarMenu = document.querySelector(".sidebar-menu");
const closeBtn = document.getElementById("close-btn");

navButton.addEventListener("click", () => {
  sideBarMenu.classList.add("visible");
});
closeBtn.addEventListener("click", () => {
  sideBarMenu.classList.remove("visible");
});