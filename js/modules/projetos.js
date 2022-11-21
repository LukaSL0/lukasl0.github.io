export default function projetosScript() {
    const $p1 = document.getElementById('p1redirect');
    const $p2 = document.getElementById('p2redirect');
    const $p3 = document.getElementById('p3redirect');
    const $allTexts = document.querySelectorAll('.projeto-txt')
    const $p12 = document.querySelector('.p1txt');
    const $p21 = document.querySelector('.p2txt');
    const $p31 = document.querySelector('.p3txt');

    const acabou = () => {
        $allTexts.forEach(text => {text.classList.remove('animacao2')})
    }

    $p1.addEventListener('animationend', acabou, false);
    $p2.addEventListener('animationend', acabou, false);
    $p3.addEventListener('animationend', acabou, false);

    $p1.addEventListener('mouseover', () => {
        $p12.classList.add('animacao2');
        $p12.style.opacity = '1';
    })
    $p1.addEventListener('mouseout', () => {
        $p12.classList.remove('animacao2');
        $p12.style.opacity = '0';
    })

    $p2.addEventListener('mouseover', () => {
        $p21.classList.add('animacao2');
        $p21.style.opacity = '1';
    })
    $p2.addEventListener('mouseout', () => {
        $p21.classList.remove('animacao2');
        $p21.style.opacity = '0';
    })

    $p3.addEventListener('mouseover', () => {
        $p31.classList.add('animacao2');
        $p31.style.opacity = '1';
    })
    $p3.addEventListener('mouseout', () => {
        $p31.classList.remove('animacao2');
        $p31.style.opacity = '0';
    })

    $p1.addEventListener('click', () => {window.open('https://lukasl0.github.io/strawberry/')})
    $p2.addEventListener('click', () => {window.open('https://lukasl0.github.io/eyeit/')})
    $p3.addEventListener('click', () => {window.open('https://lukasl0.github.io/brox/')})
}