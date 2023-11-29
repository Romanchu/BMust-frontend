import React from 'react';
import { Link } from 'react-router-dom';
import './body.css';
import paduno from '../../multimedia/pad1.webp';
import paddos from '../../multimedia/pad2.webp';
import padtres from '../../multimedia/pad3.jpeg';
import padcuatro from '../../multimedia/pad4.webp';

export default function Body() {
  const handleCompraClick = () => {
    alert('Producto añadido'); 
  };

  return (
    <>
      <div>
        <h1 className="palabra1">A tu alcance cualquier tipo de pad...</h1>
        <img src={paduno} alt="imgpad" className="pad1" />
        <img src={paddos} alt="imgpad" className="pad2" />
        <img src={padtres} alt="imgpad" className="pad3" />
        <img src={padcuatro} alt="imgpad" className="pad4" />
        <div className="comprar">
          <button className="boton1" onClick={handleCompraClick}>
            <Link to="/carrito" className="boton">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Añadir producto
            </Link>
          </button>
        </div>
        <h1 className="palabra2">BE</h1>
        <h1 className="palabra3">MUST</h1>
      </div>
    </>
  );
}
