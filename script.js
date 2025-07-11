// Simple message to show the script is working
console.log("Welcome to Sean's Website!");

// Toggle the navigation menu when the hamburger icon is clicked
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('nav-menu').querySelector('ul');
  menu.classList.toggle('active');
});
