// Dark mode
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// Formulaire (simule l'envoi)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('📩 Merci ! Je te répondrai rapidement.');
  e.target.reset();
});