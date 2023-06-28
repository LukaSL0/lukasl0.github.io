export default function ProjetosOptn(props) {
    
    const show = (e) => {
        if (e.target.classList.contains(props.projeto)) {
            document.querySelector(`.txt-${e.target.classList[1]}`).classList.add("animacao2");
        }
    }
    const clear = (e) => {
        if (e.target.classList.contains(props.projeto)) {
            document.querySelector(`.txt-${e.target.classList[1]}`).classList.remove("animacao2");
            document.querySelector(`.txt-${e.target.classList[1]}`).style.opacity = 0;
        }
    }

    return (
        <div className="projeto">
            <img src={props.imagem} onMouseOut={(e) => {clear(e)}} onMouseOver={(e) => {show(e)}} onClick={() => {
                window.open(props.redirect)
                }} alt="" className={"projeto-img " + props.projeto} />
            <p className={"projeto-txt txt-" + props.projeto}>Clique para ser redirecionado</p>
        </div>
    )
}