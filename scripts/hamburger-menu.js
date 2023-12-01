const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".nav-items");
const hamburgerItems = document.querySelectorAll(".nav-items");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}

hamburgerItems.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}

