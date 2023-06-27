import './App.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Habilidades from './components/habilidades.js';

export default function App() {
    return (
        <div>
            <Header />
            <Home />
            <i className="fa-solid fa-angles-down scroll"></i>
            <Habilidades />
        </div>
    )
}