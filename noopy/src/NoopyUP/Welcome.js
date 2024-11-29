import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Welcome.css'; // Asegúrate de crear un archivo CSS para estilos

// Importa la imagen desde tu computadora
import welcomeImage from './npp.png'; // Cambia la ruta a la ubicación de tu imagen

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={welcomeImage} alt="Bienvenido" className="welcome-image" />
      <h1>Bienvenido a Noopy</h1>
      <Link to="/login" className="login-button">Login</Link> {/* Link a la página de Login */}
    </div>
  );
};

export default Welcome;