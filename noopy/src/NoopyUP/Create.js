import React, { useState } from 'react';
import './Create.css';
import nppLogo from './npp.png'; 

const Forms = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Usuario:', Username);
    console.log('Telefono:', phoneNumber);
    console.log('Correo:', Email);
    console.log('Contraseña:', password);
    alert('Login functionality not implemented.');
  };
  <button type="submit" className="btn btn-primary w-100">Guardar cambios</button>

 

  return (
    <div className="form-container">
      <div className="form-box">
        <img
          src={nppLogo} 
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
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Form;
