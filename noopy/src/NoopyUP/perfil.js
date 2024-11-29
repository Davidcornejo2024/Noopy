import React from "react";
import "./perfilUp.css";

const ProfileScreen = () => {
  const user = {
    profilePicture: "https://www.voicesofyouth.org/sites/voy/files/images/2020-10/img-20201002-wa0004.jpg", // Reemplaza con URL real
    username: "Maya",
    email: "mayandii@email.com",
    description: "Sé tu mismo siempre.",
    socialLinks: {
      twitter: "https://twitter.com/usuario",
      instagram: "https://instagram.com/may_.andii",
      linkedin: "https://linkedin.com/in/usuario",
    },
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Foto de perfil"
          className="profile-picture"
        />
        <h1 className="profile-username">{user.username}</h1>
      </div>

      <div className="profile-body">
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Descripción:</strong> {user.description}</p>

        <div className="profile-socials">
          <h3>Redes Sociales:</h3>
          <ul>
            <li>
              <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href={user.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
