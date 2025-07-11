console.log("Sean Feiertag’s portfolio loaded.");

// Nav toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
menuToggle?.addEventListener('click', () => nav.classList.toggle('active'));

// Auto-close nav
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('active')));

// Scroll Animations
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2, rootMargin: "0px 0px -100px 0px" };
const observer = new IntersectionObserver((entries, o) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target); } });
}, options);
faders.forEach(f => observer.observe(f));

// Dark Mode Toggle
const modeToggle = document.getElementById('dark-mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  modeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Initialize mode icon
modeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
