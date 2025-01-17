const menu = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navMenu.classList.toggle("show");
});
