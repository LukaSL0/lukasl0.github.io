// Primeira parte - Expand

const p1 = document.getElementById('p1redirect');
const p12 = document.getElementById('p1txt');
const p2 = document.getElementById('p2redirect');
const p21 = document.getElementById('p2txt');
const p3 = document.getElementById('p3redirect');
const p31 = document.getElementById('p3txt');

p1.addEventListener('animationend', acabou, false);
p2.addEventListener('animationend', acabou, false);
p3.addEventListener('animationend', acabou, false);

function acabou(){
    p12.classList.remove('animacao2')
    p21.classList.remove('animacao2')
    p31.classList.remove('animacao2')
}

p1.addEventListener('mouseout', function() {
    p12.classList.remove('animacao2');
    p12.style.opacity = '0'
})

p1.addEventListener('mouseover', function() {
    p12.classList.add('animacao2');
    p12.style.opacity = '1'
})

p2.addEventListener('mouseout', function() {
    p21.classList.remove('animacao2');
    p21.style.opacity = '0'
})

p2.addEventListener('mouseover', function() {
    p21.classList.add('animacao2');
    p21.style.opacity = '1'
})

p3.addEventListener('mouseout', function() {
    p31.classList.remove('animacao2');
    p31.style.opacity = '0'
})

p3.addEventListener('mouseover', function() {
    p31.classList.add('animacao2');
    p31.style.opacity = '1'
})

// Segunda parte - redirect

p1.addEventListener('click', () => {
    window.open('https://lukasl0.github.io/strawberry/');
})

p2.addEventListener('click', () => {
    window.open('https://lukasl0.github.io/eyeit/');
})

p3.addEventListener('click', () => {
    window.open('https://lukasl0.github.io/brox/');
})