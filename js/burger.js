const $burger = document.getElementById('toggler');
const $mobile = document.getElementById('mobile');
const $allButtons = document.querySelectorAll('.algum')

$burger.addEventListener('click', () => {toggleClass()})
$allButtons.forEach(buttons => {buttons.addEventListener('click', () => {close()})})

const toggleClass = () => {$mobile.classList.toggle('toggle')}

const close = () => {$burger.click()}