const $sections = document.querySelectorAll('.init-hidden');
const $seta = document.getElementById('seta');

window.addEventListener('scroll', () => {animaScroll()});

const animaScroll = () => {
    $sections.forEach((section) => {
        const halfSection = window.innerHeight * 0.75;
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfSection < 0;
        if(isSectionVisible) {
            section.classList.add('init-hidden-off');
            $seta.classList.add('init-hidden');
        }
    })
}
