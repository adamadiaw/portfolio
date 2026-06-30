// ===== DARK MODE =====
// const toggle = document.getElementById('theme-toggle');
// toggle.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
//     toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
// });

// ===== DARK MODE =====
const toggle = document.getElementById('theme-toggle');

// Vérifier la préférence stockée
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️';
} else {
    toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
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

// ===== LECTEUR VIDÉO =====
function ouvrirVideo(url) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('video-player');
    const source = document.getElementById('video-source');
    
    // Charger la vidéo
    source.src = url;
    video.load();
    
    // Afficher la modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Lecture automatique
    video.play().catch(err => {
        console.log('Lecture automatique bloquée par le navigateur');
    });
}

function fermerVideo() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('video-player');
    
    // Arrêter la vidéo
    video.pause();
    video.currentTime = 0;
    
    // Cacher la modal
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Fermer avec la touche Echap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fermerVideo();
    }
});

// ===== DEMANDER L'ACCÈS =====
function demanderAcces(projet) {
    const message = `Bonjour Adama, je suis intéressé par votre projet "${projet}" et j'aimerais avoir accès au code source ou en discuter avec vous. Pouvez-vous me contacter ?`;
    window.location.href = `mailto:adamadiaw842@gmail.com?subject=Accès au code - ${projet}&body=${encodeURIComponent(message)}`;
}