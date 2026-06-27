// ===== DARK MODE =====
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// ===== FORMULAIRE =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('📩 Merci Adama ! Je te répondrai rapidement.');
    e.target.reset();
});

// ===== NAV SMOOTH (optionnel) =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});