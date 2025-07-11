console.log("Sean Feiertag's portfolio loaded.");

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
toggle.addEventListener('click', () => nav.classList.toggle('active'));

// Close menu when a link is clicked
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('active'));
});
