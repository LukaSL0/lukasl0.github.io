import '../css/header.css';
import Typing from './scripts/typing.js';
import { useRef } from "react";


export default function Header() {
    const items = useRef();
    const mobile = useRef();

    const toggle = () => {
        mobile.current.classList.toggle('toggle');
    }

    return (
        <header>
            <Typing nome="Luka" />
            <nav>
                <div className="burgericon">
                    <div className="burgeroptns" ref={mobile}>
                        <li><a href="#home" ref={items}>HOME</a></li>
                        <li><a href="#habilidades" ref={items}>HABILIDADES</a></li>
                        <li><a href="#projetos" ref={items}>PROJETOS</a></li>
                        <li><a href="#contato" ref={items}>CONTATO</a></li>
                    </div>

                    <input type="checkbox" className="toggler" onClick={toggle} aria-label="Burger" />
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
