import '../css/header.css';
import Typing from './scripts/typing.js';

export default function Header() {
  return (
    <header>
        <Typing nome="Luka" />
        <nav>
            <div className="burgericon">
                <div className="burgeroptns" id="mobile">
                    <li><a href="#home" className="algum">HOME</a></li>
                    <li><a href="#habilidades" className="algum">HABILIDADES</a></li>
                    <li><a href="#projetos" className="algum">PROJETOS</a></li>
                    <li><a href="#contato" className="algum">CONTATO</a></li>
                </div>
                <input type="checkbox" className="toggler" id="toggler" aria-label="Burger" />
                <div className="hamburger"><div></div></div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
  );
}
