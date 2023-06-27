import '../style/habilidades.css';
import HabsAnim from "./modules/habs-anim.js";

export default function Habilidades() {
    return (
        <section className="bloco1 init-hidden" id="habilidades">
        <h1 className="h11">HABILIDADES</h1>
            <HabsAnim />
        </section>
    )
}