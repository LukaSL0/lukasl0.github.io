import { useState } from "react";

export default function HabsOptn(props) {
    // eslint-disable-next-line
    const [opcao, setOpcao] = useState("");

    const toggleSelected = (e) => {
        e.target.classList.add("selected");
    }

    return (
        <li onClick={(e) => {
            setOpcao(`${props.linguagem}`);
            toggleSelected(e);
        }}><i className={props.icon}></i> {props.linguagem}</li>
    )
}
