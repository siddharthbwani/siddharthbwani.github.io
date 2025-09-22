// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Disable right-click context menu
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

// Disable text selection via mouse
document.addEventListener('mousedown', function(e) {
  if (e.detail > 1) e.preventDefault(); // Prevent double-click selection
});

// Optional: disable text selection via keyboard (Ctrl + C)
document.addEventListener('copy', function(e) {
  e.preventDefault();
});


// Add in your main.js
document.querySelectorAll(".magnetic").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0,0)";
  });
});

