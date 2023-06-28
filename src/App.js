import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Habilidades from './components/habilidades.js';
import Projetos from './components/projetos.js';

export default function App() {

    window.addEventListener('scroll', () => {animaScroll()});
    
    const animaScroll = () => {
        document.querySelectorAll('.init-hidden').forEach((section) => {
            const halfSection = window.innerHeight * 0.75;
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - halfSection < 0;
            if(isSectionVisible) {
                section.classList.add('init-hidden-off');
                document.querySelector('.fa-angles-down').classList.add('scroll-hidden');
            }
        })
    }

    return (
        <div className="App">
            <Header />
            <Home />
            <i className="fa-solid fa-angles-down"></i>
            <Habilidades />
            <Projetos />
        </div>
    )
}