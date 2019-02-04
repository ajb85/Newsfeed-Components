const toggleMenu = e => {
  // Stretch
  if (menu.classList.length > 1) {
    menu.classList.toggle("menu--closed"); // Stretch
  }
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName("menu-button")[0];
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
