// Welcome message
console.log("Welcome to Sean's Website!");

// Toggle the navigation menu
const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu').querySelector('ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close the menu when a link is clicked (on small screens)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
