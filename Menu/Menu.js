const toggleMenu = e => {
  // Toggle the "menu--open" class on your menu refence.
  e.target.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName("menu-button")[0];
// Using your menuButton reference, add a click handler that calls toggleMenu
menu.addEventListener("click", toggleMenu);
