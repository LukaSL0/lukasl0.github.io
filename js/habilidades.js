const $html = document.getElementById('htmloptn');
const $css = document.getElementById('cssoptn');
const $js = document.getElementById('jsoptn');
const $git = document.getElementById('gitoptn');
const $github = document.getElementById('githuboptn');
const $h1 = document.getElementById('h1selecionado');
const $txt = document.getElementById('descselecionado');

$h1.addEventListener('animationend', () => {acabou1()}, false);
$txt.addEventListener('animationend', () => {acabou2()}, false);

const acabou1 = () => {
    $h1.classList.remove('animacao');
}

const acabou2 = () => {
    $txt.classList.remove('animacao');
}

$html.addEventListener('click', () => {
    $h1.classList.add('animacao');
    $txt.classList.add('animacao');

    $h1.innerHTML = 'HTML';
    $txt.innerHTML = 'O HTML é o esqueleto do seu website, configura todos os objetos e imagens do mesmo.';

    $html.classList.add('selected');
    $css.classList.remove('selected');
    $js.classList.remove('selected');
    $git.classList.remove('selected');
    $github.classList.remove('selected');
})

$css.addEventListener('click', () => {
    $h1.classList.add('animacao');
    $txt.classList.add('animacao');

    $h1.innerHTML = 'CSS';
    $txt.innerHTML = 'O CSS é o corpo do seu website, utilizando o HTML como base, ele define onde cada objeto irá ficar, sua cor, tamanho, etc.';

    $html.classList.remove('selected');
    $css.classList.add('selected');
    $js.classList.remove('selected');
    $git.classList.remove('selected');
    $github.classList.remove('selected');
})

$js.addEventListener('click', () => {
    $h1.classList.add('animacao');
    $txt.classList.add('animacao');
    
    $h1.innerHTML = 'JavaScript';
    $txt.innerHTML = 'O JavaScript é o código utilizado para executar todas as funções do seu website, por exemplo, essas que você está clicando agora mesmo.';

    $html.classList.remove('selected');
    $css.classList.remove('selected');
    $js.classList.add('selected');
    $git.classList.remove('selected');
    $github.classList.remove('selected');
})

$git.addEventListener('click', () => {
    $h1.classList.add('animacao');
    $txt.classList.add('animacao');
    
    $h1.innerHTML = 'Git';
    $txt.innerHTML = 'O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, utilizado em conjunto com o GitHub.';

    $html.classList.remove('selected');
    $css.classList.remove('selected');
    $js.classList.remove('selected');
    $git.classList.add('selected');
    $github.classList.remove('selected');
})

$github.addEventListener('click', () => {
    $h1.classList.add('animacao');
    $txt.classList.add('animacao');
    
    $h1.innerHTML = 'GitHub';
    $txt.innerHTML = 'Github é uma plataforma de hospedagem de códigos-fonte e arquivos com controle de versão usando o Git.';

    $html.classList.remove('selected');
    $css.classList.remove('selected');
    $js.classList.remove('selected');
    $git.classList.remove('selected');
    $github.classList.add('selected');
})