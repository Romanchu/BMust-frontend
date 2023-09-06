import React, { Component } from 'react';

class Registro extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      error: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirm_password } = this.state;

    if (password !== confirm_password) {
      this.setState({ error: 'Las contraseñas no coinciden' });
    } else {
      // Enviar los datos al servidor o realizar otras acciones aquí
      console.log('Datos enviados:', this.state);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: '', // Limpiar cualquier mensaje de error al escribir
    });
  };

  render() {
    const { username, password, confirm_password, email, error } = this.state;

    return (
      <div>
        <h1>Registro</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre de Usuario:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />

          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />

          <label>
            Repetir Contraseña:
            <input
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />

          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />

          <input type="submit" value="Registrarse" />
        </form>
      </div>
    );
  }
}



export default Registro;
