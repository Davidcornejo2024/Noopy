// Navbar.js
import React from 'react';
import './Navbar.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/profile">Perfil</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/settings">Configuración</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;