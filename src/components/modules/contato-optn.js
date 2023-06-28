export default function CotantoOptn(props) {

    return (
        <a href={props.link}
            rel="noreferrer"
            target="_blank"
        ><i className={props.icon}></i>{props.contato}</a>
    )
}