import Typewriter from "typewriter-effect";

export default function Typing(props) {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString(props.nome)
                    .pauseFor(250)
                    .start();
            }}
        />
    )
}