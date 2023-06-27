import '../css/header.css';
import Typing from './scripts/typing.js';
import { useRef, useEffect } from "react";


export default function Header() {

    const mobile = useRef();
    const items = useRef([]);
    const pushItems = (el) => items.current.push(el);
    useEffect(() => {
        for (let i = 0; i < items.current.length; i++) {
            items.current[i].addEventListener('click', () => {
                mobile.current.classList.toggle('toggle');
            })
        }})
    const toggle = () => {
        mobile.current.classList.toggle('toggle');
    }

    return (
        <header>
            <Typing nome="Luka" />
            <nav>
                <div className="burgericon">
                    <div className="burgeroptns" ref={mobile}>
                        <li><a href="#home" ref={pushItems}>HOME</a></li>
                        <li><a href="#habilidades" ref={pushItems}>HABILIDADES</a></li>
                        <li><a href="#projetos" ref={pushItems}>PROJETOS</a></li>
                        <li><a href="#contato" ref={pushItems}>CONTATO</a></li>
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
