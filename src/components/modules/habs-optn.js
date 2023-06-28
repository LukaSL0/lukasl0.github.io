import { useState } from "react";
import { useBetween } from 'use-between';

const CompartilharState = () => {
    const [opcao, setOpcao] = useState("");
    return {opcao, setOpcao};
}
export function Opcao() {
    const { opcao } = useBetween(CompartilharState);
    return opcao;
}

export default function HabsOptn(props) {
    
    const { setOpcao } = useBetween(CompartilharState);

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

    return (
        <li className="habilidade" onClick={(e) => {
            setOpcao(`${props.linguagem}`);
            toggleSelected(e);
        }}><i className={props.icon}></i> {props.linguagem}</li>
    )
}