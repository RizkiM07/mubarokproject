const menuToogle = document.querySelector(".header .menu input");
const navbar = document.querySelector(".header nav ul");

menuToogle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
