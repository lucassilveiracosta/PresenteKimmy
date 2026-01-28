window.onload = () => {
    console.log("Página carregada com o novo tema verde!");
    
    const title = document.querySelector('h1');
    setInterval(() => {
        // MUDANÇA DE CORES: Agora só tons de verde
        const colors = [
            'rgb(0, 160, 11)',   // O verde principal
            'rgb(50, 200, 60)',  // Um verde mais claro
            'rgb(0, 100, 5)',    // Um verde mais escuro
            'rgb(100, 255, 110)' // Um verde limão quase neon
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
    }, 2500); // Aumentei um pouco o tempo para 2.5s para ficar mais suave
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