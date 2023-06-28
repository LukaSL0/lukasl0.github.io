import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Habilidades from './components/habilidades.js';
import Projetos from './components/projetos.js';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <i className="fa-solid fa-angles-down scroll"></i>
            <Habilidades />
            <Projetos />
        </div>
    )
}