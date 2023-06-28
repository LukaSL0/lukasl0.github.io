export default function ProjetosOptn(props) {

    const imglink = () => {
        if (props.projeto === "strawberry") {
            return "https://cdn.discordapp.com/attachments/890745869832454145/1123506243273768960/strawberry.avif";
        } else if (props.projeto === "eye") {
            return "https://cdn.discordapp.com/attachments/890745869832454145/1123506242774638683/eye.avif";
        } else if (props.projeto === "brox") {
            return "https://cdn.discordapp.com/attachments/890745869832454145/1123505922392727642/brox.avif";
        }
    }

    const redirect = () => {
        if (props.projeto === "strawberry") {
            return "https://lukasl0.github.io/strawberry/";
        } else if (props.projeto === "eye") {
            return "https://lukasl0.github.io/eyeit/";
        } else if (props.projeto === "brox") {
            return "https://lukasl0.github.io/brox/";
        }
    }

    const show = (e) => {
        if (e.target.classList.contains("strawberry") || e.target.classList.contains("eye") || e.target.classList.contains("brox")) {
            document.querySelector(`.txt-${e.target.classList[1]}`).classList.add("animacao2");
        }
    }
    const clear = (e) => {
        if (e.target.classList.contains("strawberry") || e.target.classList.contains("eye") || e.target.classList.contains("brox")) {
            document.querySelector(`.txt-${e.target.classList[1]}`).classList.remove("animacao2");
            document.querySelector(`.txt-${e.target.classList[1]}`).style.opacity = 0;
        }
    }

    return (
        <div className="projeto">
            <img src={imglink()} onMouseOut={(e) => {clear(e)}} onMouseOver={(e) => {show(e)}} onClick={() => {
                window.open(redirect())
                }} alt="" className={"projeto-img " + props.projeto} />
            <p className={"projeto-txt txt-" + props.projeto}>Clique para ser redirecionado</p>
        </div>
    )
}