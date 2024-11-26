import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoopyWeb = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirigir al formulario de login
    navigate('/Form');
  };

  const handleRegisterClick = () => {
    // Redirigir al formulario de registro
    navigate('/Login');
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">
          No<span className="highlight">o</span>py
        </h1>
        <div className="buttons">
          <button onClick={handleRegisterClick} className="register-button">Registrarse</button>
          <button onClick={handleLoginClick} className="login-button">Iniciar</button>
        </div>
      </header>
      
      <main className="welcome-section">
        <div className="video-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <video width="100%" height="auto" controls autoPlay>
            <source src="mi_video.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </main>
    </div>
  );
};

export default NoopyWeb;
