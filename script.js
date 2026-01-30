window.onload = () => {
    console.log("Página carregada com o novo tema verde!");
    
    const title = document.querySelector('h1');
    setInterval(() => {
        const colors = [
            'rgb(0, 160, 11)',   // O verde principal
            'rgb(50, 200, 60)',  // Um verde mais claro
            'rgb(0, 100, 5)',    // Um verde mais escuro
            'rgb(100, 255, 110)' // Um verde limão quase neon
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
    }, 2500);
};

window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section, .container');
    let navLinks = document.querySelectorAll('.main-header a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.main-header a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});



//Carrossel

let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.music-card');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Lógica de loop infinito
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

window.onload = () => {
    // Configurações do canhão de confetes
    confetti({
        particleCount: 500,
        spread: 900,
        origin: { y: 0.6 },
        colors: ['#00a00b', '#32c83c', '#ffffff'], // Verde do tema + branco
        ticks: 200, // Duração da animação na tela
        gravity: 1,
        scalar: 1.2
    });
};