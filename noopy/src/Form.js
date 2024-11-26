import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Usuario:', emailOrUsername);
    console.log('Teléfono:', phoneNumber);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    alert('Login functionality not implemented.');
  };

  return (
    <div className="form-container">
      <div className="form-box">
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
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
