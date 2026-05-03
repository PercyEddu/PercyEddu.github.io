// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación simple al hacer scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
