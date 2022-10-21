const sections = document.querySelectorAll('.init-hidden');
const down = document.getElementById('seta');

window.addEventListener('scroll', animaScroll);

function animaScroll() {
    sections.forEach((section) => {
        const halfSection = window.innerHeight * 0.6;
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfSection < 0;
        if(isSectionVisible) {
            section.classList.add('init-hidden-off')
            down.style.display = 'none';
        }
    })
}
