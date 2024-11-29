import React, { useState } from 'react';
import './CrearCuenta.css';
import nppLogo from './npp.png'; 

const CrearCuenta = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    alert('Funcionalidad de creación de cuenta no implementada.');
  };

  return (
    <div className="crear-cuenta-container">
      <img
          src={nppLogo} 
          alt="Noopy"
          className="logo"
        />
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🔓' : '🔒'}
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default CrearCuenta;