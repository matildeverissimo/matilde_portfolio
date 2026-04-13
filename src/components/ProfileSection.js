import React from 'react';
const ProfileSection = ({ profile }) => {
  return (
    <section className="profile-section" id="sobre">
      <div className="container">
        <div className="profile-content">
          <div className="profile-avatar">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} />
            ) : (
              <div className="avatar-placeholder">
                {profile.name.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="profile-info">
            <span className="profile-greeting">Olá, eu sou</span>
            <h1 className="profile-name">{profile.name}</h1>
            <h2 className="profile-title">{profile.title}</h2>
            <p className="profile-bio">{profile.bio}</p>
            
            <div className="profile-skills">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div className="profile-actions">
              <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
              <a href="#contacto" className="btn btn-secondary">Contactar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileSection;