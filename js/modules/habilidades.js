export default function habilidadesScript() {
    const $skills = document.querySelectorAll('.skills');
    const $html = document.querySelector('.htmloptn');
    const $css = document.querySelector('.cssoptn');
    const $js = document.querySelector('.jsoptn');
    const $git = document.querySelector('.gitoptn');
    const $github = document.querySelector('.githuboptn');
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

    const removeAllClasses = () => {
        $skills.forEach(skill => {skill.classList.remove('selected')})
    }

    const addTextsAnimations = () => {
        $h1.classList.add('animacao')
        $txt.classList.add('animacao')
    }

    $html.addEventListener('click', () => {
        addTextsAnimations()

        $h1.innerHTML = 'HTML';
        $txt.innerHTML = 'O HTML é o esqueleto do seu website, configura todos os objetos e imagens do mesmo.';

        removeAllClasses()
        $html.classList.add('selected')
    })

    $css.addEventListener('click', () => {
        addTextsAnimations()

        $h1.innerHTML = 'CSS';
        $txt.innerHTML = 'O CSS é o corpo do seu website, utilizando o HTML como base, ele define onde cada objeto irá ficar, sua cor, tamanho, etc.';

        removeAllClasses()
        $css.classList.add('selected')
    })

    $js.addEventListener('click', () => {
        addTextsAnimations
        
        $h1.innerHTML = 'JavaScript';
        $txt.innerHTML = 'O JavaScript é o código utilizado para executar todas as funções do seu website, por exemplo, essas que você está clicando agora mesmo.';

        removeAllClasses()
        $js.classList.add('selected')
    })

    $git.addEventListener('click', () => {
        addTextsAnimations()
        
        $h1.innerHTML = 'Git';
        $txt.innerHTML = 'O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, utilizado em conjunto com o GitHub.';

        removeAllClasses()
        $git.classList.add('selected')
    })

    $github.addEventListener('click', () => {
        addTextsAnimations()
        
        $h1.innerHTML = 'GitHub';
        $txt.innerHTML = 'Github é uma plataforma de hospedagem de códigos-fonte e arquivos com controle de versão usando o Git.';

        removeAllClasses()
        $github.classList.add('selected')
    })
}