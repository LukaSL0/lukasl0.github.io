import Typewriter from "typewriter-effect";

export default function Typing(props) {
    return (
        <div>
            <p><i className="fa-solid fa-terminal"></i></p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(props.nome)
                        .pauseFor(250)
                        .start();
                }}
            />
        </div>
    )
}