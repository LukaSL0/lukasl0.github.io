import { useEffect, useState } from "react";
import '../style/habilidades.css';
import HabsOptn from './modules/habs-optn';

export default function Habilidades() {
    
    // eslint-disable-next-line
    const [opcao, setOpcao] = useState();
    const [titulo, setTitulo] = useState('Selecione para visualizar');
    const [texto, setTexto] = useState('');

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
        } else if (opcao === "Git") {
            setTitulo("Git");
            setTexto("O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, geralmente utilizado em conjunto com o GitHub.");
        } else if (opcao === "GitHub") {
            setTitulo("GitHub");
            setTexto("Github é uma plataforma de hospedagem de códigos-fonte e arquivos com controle de versão usando o Git.");
        }
    }, [opcao])

    return (
        <section className="bloco1 init-hidden" id="habilidades">
        <h1 className="h11">HABILIDADES</h1>
            <div className="habilidades">
                <ul>
                    <HabsOptn linguagem="HTML" icon="fa-brands fa-html5 htmlic" />
                    <HabsOptn linguagem="CSS" icon="fa-brands fa-css3-alt cssic" />
                    <HabsOptn linguagem="JavaScript" icon="fa-brands fa-square-js jsic" />
                    <HabsOptn linguagem="Git" icon="fa-brands fa-git-alt gitic" />
                    <HabsOptn linguagem="GitHub" icon="fa-brands fa-square-github" />
                </ul>
                <div className="hab-detalhes">
                    <h1>{titulo}</h1>
                    <p>{texto}</p>
                </div>
            </div>
        </section>
    )
}