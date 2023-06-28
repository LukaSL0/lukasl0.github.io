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

    const toggleSelected = (e) => {
        document.querySelectorAll('.lingugagem').forEach(linguagem => {
            linguagem.classList.remove("selected")
        })
        e.target.classList.add("selected");
    }

    return (
        <li className="lingugagem" onClick={(e) => {
            setOpcao(`${props.linguagem}`);
            toggleSelected(e);
        }}><i className={props.icon}></i> {props.linguagem}</li>
    )
}