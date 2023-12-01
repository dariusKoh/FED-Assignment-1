// Finds and stores data of relevant classes
const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".nav-items");
const hamburgerItems = document.querySelectorAll(".nav-items");

// Wait for hamburger menu icon to be clicked
hamburger.addEventListener("click", mobileMenu);
// Wait for hamburger menu item to be clicked so menu will automatically close (mainly for "about")
hamburgerItems.forEach(n => n.addEventListener("click", closeMenu));

// Opens hamburger menu when icon is clicked
function mobileMenu() {
    // Checks if hamburger icon / hamburgur menu has class "active"
    // If true: removes class and closes menu
    // Else: adds class and opens menu
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}

// Closes hamburger menu when an item is clicked
function closeMenu() {
    // Checks if hamburger icon / hamburgur menu has class "active"
    // If true: removes class and closes menu
    // Else: adds class and opens menu
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}