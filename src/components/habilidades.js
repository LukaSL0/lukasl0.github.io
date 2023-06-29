import '../style/habilidades.css';
import HabsOptn from './modules/habs-optn.js';
import { States } from './modules/habs-optn.js';

export default function Habilidades() {

    const titulo = States().split(';')[0];
    const texto = States().split(';')[1];

    return (
        <section className="bloco1 init-hidden" id="habilidades">
        <h1 className="h11">HABILIDADES</h1>
            <div className="habilidades">
                <ul>
                    <HabsOptn linguagem="HTML" icon="fa-brands fa-html5" desc="O HTML é o esqueleto do seu website, configura todos os objetos e imagens do mesmo." />
                    <HabsOptn linguagem="CSS" icon="fa-brands fa-css3-alt" desc="O CSS é o corpo do seu website, utilizando o HTML como base, ele define onde cada objeto irá ficar, sua cor, tamanho, etc." />
                    <HabsOptn linguagem="JavaScript" icon="fa-brands fa-square-js" desc="O JavaScript é o código utilizado para executar todas as funções do seu website, por exemplo, essas que você está clicando agora mesmo." />
                    <HabsOptn linguagem="React JS" icon="fa-brands fa-react" desc="O React JS é um framework utilizado para otimizar e organizar de forma moderna um código front-end." />
                    <HabsOptn linguagem="Git" icon="fa-brands fa-git-alt" desc="O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, geralmente utilizado em conjunto com o GitHub." />
                    <HabsOptn linguagem="GitHub" icon="fa-brands fa-square-github" desc="Github é uma plataforma de hospedagem de códigos-fonte e arquivos com controle de versão usando o Git." />
                </ul>
                <div className="hab-detalhes">
                    <h1 className="textos">{titulo}</h1>
                    <p className="textos">{texto}</p>
                </div>
            </div>
        </section>
    )
}