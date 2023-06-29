import { useState } from "react";
import { useBetween } from 'use-between';

const CompartilharState = () => {
    const [titulo, setTitulo] = useState('Selecione para visualizar');
    const [texto, setTexto] = useState('');
    return { titulo, setTitulo, texto, setTexto};
}
export function States() {
    const { titulo, texto } = useBetween(CompartilharState);
    const strings = `${titulo};${texto}`;
    return strings;
}

export default function HabsOptn(props) {
    
    const { setTitulo, setTexto } = useBetween(CompartilharState);

    document.querySelectorAll('.textos').forEach(texto => {
        texto.addEventListener('animationend', () => {
            texto.classList.remove("animacao");
        })
    })

    const toggleSelected = (e) => {
        document.querySelectorAll('.habilidade').forEach(habilidade => {
            habilidade.classList.remove("selected")
        })
        document.querySelectorAll('.textos').forEach(texto => {
            texto.classList.add("animacao");
        })
        e.target.classList.add("selected");
    }

    const newOption = () => {
        setTitulo(props.linguagem);
        setTexto(props.desc);
    }

    return (
        <li className="habilidade"
            onClick={(e) => {
                toggleSelected(e);
                newOption();
            }}><i className={props.icon}></i> {props.linguagem}</li>
    )
}