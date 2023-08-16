import './body.css'
import paduno from "../../multimedia/pad1.webp"
import paddos from "../../multimedia/pad2.webp"
import padtres from "../../multimedia/pad3.jpeg"
import padcuatro from "../../multimedia/pad4.webp"
export default function Body(){
    return(
        <>
            <div>
                <h1 class="palabra1">A tu alcance cualquier tipo de pad...</h1>
                <img src={paduno} alt="imgpad" class="pad1"/>
                <img src={paddos} alt="imgpad" class="pad2"/>
                <img src={padtres} alt="imgpad" class="pad3"/>
                <img src={padcuatro} alt="imgpad" class="pad4"/>
            <div class="comprar">
                <button>
                    <a class="boton" href="./carrito/carrito.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Comprar ahora
                    </a>
                </button>
            </div>
                <h1 class="palabra2">BE</h1>
                <h1 class="palabra3">MUST</h1>
            </div>
        </>
    )
}

