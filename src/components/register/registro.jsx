import React, { useState } from 'react';
import './registro.css'; 

function Registro() {
  // Estados para los campos del formulario
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor o hacer lo que necesites
    console.log('Datos enviados:', { usuario, contrasena, correoElectronico });
  };

  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <div className="campo">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="repetirContrasena">Repetir Contraseña</label>
          <input
            type="password"
            id="repetirContrasena"
            value={repetirContrasena}
            onChange={(e) => setRepetirContrasena(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="correoElectronico"  >Correo Electrónico</label>
          <input
            type="email"
            id="correoElectronico"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            required
          />
        </div>
        <button class="boton2" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

