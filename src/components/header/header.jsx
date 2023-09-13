import './header.css';
import Bm from "../../multimedia/Bemust.png";
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <section class="sectionMain">
            <div class="divlogotitle">
                <img src={Bm} alt="logo" class="imglogo" />
                <h1 class="h1title">Be Must</h1>
            </div>
            
            <div>
            <div class="navbar">
                <ul class="navbar">
                    <li class="item"><Link to="/" class="link">Inicio</Link> </li>
                    <li class="item"><Link to="./padspagina/pad.html" class="link">Pads</Link></li>
                    <li class="item"><Link to="./personalizacionespag/personalizados.html" class="link">Personalización</Link></li>
                    <li class="item"><Link to="/carrito" class="link">Carrito</Link></li>
                    <li class="item"><Link to="/login" class="link">Iniciar Sesión</Link></li>
                    <li class="item"><Link to="/registro" class="link">Registrarse</Link></li>
                </ul>
            </div>
            </div>
        </section>
    )
}