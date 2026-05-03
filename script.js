// Animación de aparición
const elements = document.querySelectorAll('.project-card, .timeline-item, .skill');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    observer.observe(el);
});

// Navbar dinámica
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    nav.style.background = window.scrollY > 50 
        ? "rgba(11,15,25,0.95)" 
        : "rgba(11,15,25,0.7)";
});
