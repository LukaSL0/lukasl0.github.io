import { useEffect, useState } from "react";

export default function HabsAnim() {

    let opcoes =  document.querySelectorAll('.opcoes');

    const toggleSelected = (e) => {
        for (let i = 0; i < opcoes.length; i++) {
            opcoes[i].classList.remove('selected');
        }
        e.target.classList.add("selected");
    }

    const [opcao, setOpcao] = useState('');
    const [titulo, setTitulo] = useState('Selecione para visualizar');
    const [texto, setTexto] = useState('');

    useEffect(() => {
        if (opcao === "html") {
            setTitulo("HTML");
            setTexto("O HTML é o esqueleto do seu website, configura todos os objetos e imagens do mesmo.");
        } else if (opcao === "css") {
            setTitulo("CSS");
            setTexto("O CSS é o corpo do seu website, utilizando o HTML como base, ele define onde cada objeto irá ficar, sua cor, tamanho, etc.");
        } else if (opcao === "js") {
            setTitulo("JavaScript");
            setTexto("O JavaScript é o código utilizado para executar todas as funções do seu website, por exemplo, essas que você está clicando agora mesmo.");
        } else if (opcao === "git") {
            setTitulo("Git");
            setTexto("O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, geralmente utilizado em conjunto com o GitHub.");
        } else if (opcao === "github") {
            setTitulo("GitHub");
            setTexto("Github é uma plataforma de hospedagem de códigos-fonte e arquivos com controle de versão usando o Git.");
        }
    }, [opcao])

    return (
        <div className="habilidades">
            <ul>
                <li className="opcoes" onClick={(e) => {setOpcao('html');toggleSelected(e)}}><i className="fa-brands fa-html5 htmlic"></i> HTML</li>
                <li className="opcoes" onClick={(e) => {setOpcao('css');toggleSelected(e)}}><i className="fa-brands fa-css3-alt cssic"></i> CSS</li>
                <li className="opcoes" onClick={(e) => {setOpcao('js');toggleSelected(e)}}><i className="fa-brands fa-square-js jsic"></i> JavaScript</li>
                <li className="opcoes" onClick={(e) => {setOpcao('git');toggleSelected(e)}}><i className="fa-brands fa-git-alt gitic"></i> Git</li>
                <li className="opcoes" onClick={(e) => {setOpcao('github');toggleSelected(e)}}><i className="fa-brands fa-square-github"></i> Github</li>
            </ul>
            <div className="hab-detalhes">
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </div>
        </div>
    )
}
