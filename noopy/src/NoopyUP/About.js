import React from 'react';
import './About.css'; 

import AboutImage from './npp.png';
const About = () => {
  
  return (
    <div className="about-container">
      <img src={AboutImage} alt="About" className="about-image" />
      
      <h1>Bienvenido a nuestra app</h1>
      <p>
        La herramienta perfecta para interactuar con tus amigos y compartir información de manera cómoda y eficiente. En un mundo donde la comunicación es clave, hemos diseñado una plataforma intuitiva que te permite mantenerte en contacto con tus seres queridos sin complicaciones.
      </p>
      <p>
        Nuestra app ofrece una variedad de funciones que facilitan la conexión. Desde chats en tiempo real hasta la posibilidad de compartir fotos, videos y documentos, todo está a solo un clic de distancia. Organiza tus conversaciones en grupos temáticos o chatea de forma privada; tú decides cómo quieres interactuar.
      </p>
      <p>
        Además, nuestra interfaz amigable garantiza que puedas navegar sin esfuerzo. Recibe notificaciones instantáneas para no perderte ningún mensaje importante y personaliza tu perfil para que refleje tu estilo único.
      </p>
      <p>
        La seguridad de tus datos es nuestra prioridad. Utilizamos tecnología avanzada para proteger tu información y garantizar que tu experiencia sea segura y confiable.
      </p>
      <p>
        Únete a nuestra comunidad y descubre una nueva forma de comunicarte. Ya sea para planificar una salida, compartir momentos especiales o simplemente ponerte al día, nuestra app está aquí para hacer que cada interacción sea memorable. ¡Descárgala hoy y empieza a conectar!
      </p>
    </div>
  );
};

export default About;