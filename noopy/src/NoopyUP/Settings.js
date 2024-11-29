import React, { useState } from "react";
import "./SettingsScreen.css";

const SettingsScreen = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!isNotificationsEnabled);
  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  return (
    <div className={`settings-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Configuración</h1>

      <div className="settings-section">
        <h2>Perfil</h2>
        <button className="settings-button">Editar perfil</button>
        <button className="settings-button">Cambiar contraseña</button>
      </div>

      <div className="settings-section">
        <h2>Notificaciones</h2>
        <div className="settings-item">
          <span>Habilitar notificaciones</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isNotificationsEnabled}
              onChange={toggleNotifications}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Privacidad</h2>
        <button className="settings-button">Gestionar bloqueos</button>
        <button className="settings-button">Ajustes de visibilidad</button>
      </div>

      <div className="settings-section">
        <h2>General</h2>
        <div className="settings-item">
          <span>Modo oscuro</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
