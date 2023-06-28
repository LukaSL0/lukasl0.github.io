import '../style/projetos.css';
import ProjetosOptn from './modules/projetos-optn';

export default function Projetos() {
    return (
        <section className="bloco2 init-hidden">
        <h1 className="h12">PROJETOS</h1>
        <div className="projetos">
            <ProjetosOptn projeto="strawberry" />
            <ProjetosOptn projeto="eye" />
            <ProjetosOptn projeto="brox" />
        </div>
        <div className="desc">
            <h2>Todos estes projetos foram feitos para clientes autônomos</h2>
            <p>Os projetos sofreram pequenas modificações para não comprometer informações pessoais, ou o projeto original dos clientes</p>
        </div>
    </section>
    )
}