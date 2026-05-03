// Animación de escritura
const text = "FullStack Developer | .NET Specialist";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();


// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));


// Navbar efecto scroll
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.style.background = window.scrollY > 50 ? "#000" : "transparent";
});


// PARTICULAS
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 1
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "#0ff";
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
