const $burger = document.getElementById('toggler');
const $mobile = document.getElementById('mobile');
const $algum = document.querySelectorAll("#algum1, #algum2, #algum3, #algum4")

$burger.addEventListener('click', () => {toggleClass()})
$algum[0].addEventListener('click', () => {close()})
$algum[1].addEventListener('click', () => {close()})
$algum[2].addEventListener('click', () => {close()})
$algum[3].addEventListener('click', () => {close()})

const toggleClass = () => {
    $mobile.classList.toggle('toggle');
}

const close = () => {
    $burger.click();
}