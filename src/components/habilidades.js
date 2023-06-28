import { useEffect, useState } from "react";
import '../style/habilidades.css';
import HabsOptn from './modules/habs-optn.js';
import { Opcao } from './modules/habs-optn.js';

export default function Habilidades() {
    const [titulo, setTitulo] = useState('Selecione para visualizar');
    const [texto, setTexto] = useState('');

    const opcao = Opcao();

    useEffect(() => {
        if (opcao === "HTML") {
            setTitulo("HTML");
            setTexto("O HTML é o esqueleto do seu website, configura todos os objetos e imagens do mesmo.");
        } else if (opcao === "CSS") {
            setTitulo("CSS");
            setTexto("O CSS é o corpo do seu website, utilizando o HTML como base, ele define onde cada objeto irá ficar, sua cor, tamanho, etc.");
        } else if (opcao === "JavaScript") {
            setTitulo("JavaScript");
            setTexto("O JavaScript é o código utilizado para executar todas as funções do seu website, por exemplo, essas que você está clicando agora mesmo.");
        } else if (opcao === "React JS") {
            setTitulo("React JS");
            setTexto("O React JS é um framework utilizado para otimizar e organizar de forma moderna um código front-end.")
        } else if (opcao === "Git") {
            setTitulo("Git");
            setTexto("O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, geralmente utilizado em conjunto com o GitHub.");
        } else if (opcao === "GitHub") {
            setTitulo("GitHub");
            setTexto("Github é uma plataforma de hospedagem de códigos-fonte e arquivos com controle de versão usando o Git.");
        }
    }, [opcao])

    return (
        <section className="bloco1 init-hidden">
        <h1 className="h11">HABILIDADES</h1>
            <div className="habilidades">
                <ul>
                    <HabsOptn linguagem="HTML" icon="fa-brands fa-html5" />
                    <HabsOptn linguagem="CSS" icon="fa-brands fa-css3-alt" />
                    <HabsOptn linguagem="JavaScript" icon="fa-brands fa-square-js" />
                    <HabsOptn linguagem="React JS" icon="fa-brands fa-react" />
                    <HabsOptn linguagem="Git" icon="fa-brands fa-git-alt" />
                    <HabsOptn linguagem="GitHub" icon="fa-brands fa-square-github" />
                </ul>
                <div className="hab-detalhes">
                    <h1 className="textos">{titulo}</h1>
                    <p className="textos">{texto}</p>
                </div>
            </div>
        </section>
    )
}