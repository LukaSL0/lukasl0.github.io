import '../css/header.css';

export default function Header() {
  return (
    <header>
        <p><i class="fa-solid fa-terminal"><span id="typing" class="typing"></span></i><span class="barra-write"></span></p>
        <nav>
            <div class="burgericon">
                <div class="burgeroptns" id="mobile">
                    <li><a href="#home" class="algum">HOME</a></li>
                    <li><a href="#habilidades" class="algum">HABILIDADES</a></li>
                    <li><a href="#projetos" class="algum">PROJETOS</a></li>
                    <li><a href="#contato" class="algum">CONTATO</a></li>
                </div>
                <input type="checkbox" class="toggler" id="toggler" aria-label="Burger" />
                <div class="hamburger"><div></div></div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
  );
}
