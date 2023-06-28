import '../style/projetos.css';
import ProjetosOptn from './modules/projetos-optn';

export default function Projetos() {
    return (
        <section className="bloco2 init-hidden">
            <h1 className="h12">PROJETOS</h1>
            <div className="projetos">
                <ProjetosOptn projeto="strawberry"
                    imagem="https://cdn.discordapp.com/attachments/890745869832454145/1123506243273768960/strawberry.avif"
                    redirect="https://lukasl0.github.io/strawberry/"
                />
                <ProjetosOptn projeto="eye"
                    imagem="https://cdn.discordapp.com/attachments/890745869832454145/1123506242774638683/eye.avif"
                    redirect="https://lukasl0.github.io/eyeit/"
                />
                <ProjetosOptn projeto="brox"
                    imagem="https://cdn.discordapp.com/attachments/890745869832454145/1123505922392727642/brox.avif"
                    redirect="https://lukasl0.github.io/brox/"
                />
            </div>
            <div className="desc">
                <h2>Todos estes projetos foram feitos para clientes autônomos</h2>
                <p>Os projetos sofreram pequenas modificações para não comprometer informações pessoais, ou o projeto original dos clientes</p>
            </div>
        </section>
    )
}