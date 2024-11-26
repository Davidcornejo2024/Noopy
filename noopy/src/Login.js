import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import nppLogo from './npp.png'; 

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Usuario:', emailOrUsername);
    console.log('Contraseña:', password);
    alert('Login functionality not implemented.');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={nppLogo} // Usamos la imagen importada aquí
          alt="Noopy"
          className="logo"
        />
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Número, correo electrónico, usuario"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
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
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
        <div className="links">
          <a href="/crear-cuenta">Crear cuenta</a>
          <a href="/olvidar-contrasena">Olvidé mi contraseña</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

