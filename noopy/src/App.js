import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoopyWeb from './NoopyWeb'; // Importación de NoopyWeb
import Login from './Login'; // Importación de Login
import Form from './Form'; // Importación de Form

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<NoopyWeb />} />
          {/* Ruta para la página de login */}
          <Route path="/login" element={<Login />} />
          {/* Ruta para la página de registro */}
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
