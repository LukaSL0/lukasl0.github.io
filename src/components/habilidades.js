import '../style/habilidades.css';

export default function Habilidades() {
    return (
        <section className="bloco1 init-hidden" id="habilidades">
        <h1 className="h11">HABILIDADES</h1>
        <div className="habilidades">
            <ul>
                <li className="skills htmloptn"><i className="fa-brands fa-html5 htmlic"></i> HTML</li>
                <li className="skills cssoptn"><i className="fa-brands fa-css3-alt cssic"></i> CSS</li>
                <li className="skills jsoptn"><i className="fa-brands fa-square-js jsic"></i> JavaScript</li>
                <li className="skills gitoptn"><i className="fa-brands fa-git-alt gitic"></i> Git</li>
                <li className="skills githuboptn"><i className="fa-brands fa-square-github"></i> Github</li>
            </ul>
            <div className="hab-detalhes">
                <h1 id="h1selecionado">Selecione para visualizar</h1>
                <p id="descselecionado"></p>
            </div>
        </div>
    </section>
    )
}