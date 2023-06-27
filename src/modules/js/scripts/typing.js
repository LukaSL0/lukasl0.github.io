import Typewriter from "typewriter-effect";

export default function Typing(props) {
    return (
        <p><i className="fa-solid fa-terminal"><Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString(props.nome)
                    .pauseFor(250)
                    .start();
            }} /></i></p>
    )
}