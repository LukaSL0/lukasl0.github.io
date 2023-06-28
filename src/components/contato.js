import '../style/contato.css';
import CotantoOptn from './modules/contato-optn.js';

export default function Contato() {



    return (
        <section className="bloco3 init-hidden">
            <h1>CONTATO</h1>
            <div className="contatos">
                <div className="opcoes-contatos">
                    <CotantoOptn contato="GitHub"
                        icon="fa-brands fa-square-github"
                        link="https://github.com/LukaSL0/"
                    />
                    <CotantoOptn contato="LinkedIn"
                        icon="fa-brands fa-linkedin"
                        link="https://linkedin.com/in/luka-souza-6609ba217/"
                    />
                    <CotantoOptn contato="Gmail"
                        icon="fa-solid fa-envelope"
                        link="mailto:lukasouza77@gmail.com"
                    />
                </div>
            </div>
            <p>Os métodos de contato acima são exclusivos para contato profissional.</p>
        </section>
    )
}