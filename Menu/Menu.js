
/*class Menu {
  constructor(menu) {
    this.menu = menu;
    this.menuSelector = document.querySelectorAll('.menu');
    this.menuButton = document.querySelectorAll('.menu-button');
    this.menuButton.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  this.menuSelector.classList.toggle('menu--open');
}
}*/
//let imgMB = document.querySelector('img.menu-button');


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu[0].classList.toggle('menu--open');
};



// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

/*menu.forEach(function(menu) {
  return new Menu(menu);
})*/

/*let att = document.createAttribute('class');
att.value = ('menu--open');
menuButton.setAttributeNode(att);*/

// Using your menuButton reference, add a click handler that calls 
//toggleMenu
menuButton.addEventListener('click', toggleMenu);