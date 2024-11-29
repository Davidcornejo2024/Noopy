import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './NoopyUP/Navbar';
import Login from './NoopyUP/Login';
import ProfileScreen from "./NoopyUP/perfil";
import Welcome from './NoopyUP/Welcome'; // Importa el nuevo componente
import CrearCuenta from './/NoopyUP/CrearCuenta'
import About from './/NoopyUP/About'
import SettingsScreen from './/NoopyUP/Settings'


function App() {
  return (
    <Router>
      <div>
        {/* Menú o navegación opcional */}
        <header>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/profile">Perfil</a></li>
              <li><a href="/About">Acerca de</a></li>
              <li><a href="/SettingsScreen">Configuración</a></li>
            </ul>
          </nav>
        </header>

        {/* Configuración de rutas */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} /> {/* Usa el componente Welcome */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/CrearCuenta" element={<CrearCuenta />} />
            <Route path="/SettingsScreen" element={<SettingsScreen />} />
            <Route path="/About" element={<About />} />
            <Route path="/Navbar" element={<Navbar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;