import './header.css';
import Bm from "../../multimedia/Bemust.png"


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
                    <li class="item"><a href="" class="link">Inicio</a> </li>
                    <li class="item"><a href="./padspagina/pad.html" class="link">Pads</a></li>
                    <li class="item"><a href="./personalizacionespag/personalizados.html" class="link">Personalización</a></li>
                    <li class="item"><a href="" class="link">Contacto</a></li>
                    <li class="item"><a href="" class="link">Iniciar Sesión</a></li>
                    <li class="item"><a href="" class="link">Registrarse</a></li>
                </ul>
            </div>
            </div>
        </section>
    )
}