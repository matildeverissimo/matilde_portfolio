import React from 'react';
const ProfileSection = ({ profile }) => {
  return (
    <section className="profile-section" id="about">
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
            <span className="profile-greeting">Hey, you.</span>
            <h1 className="profile-name">I'm {profile.name}</h1>
            <h2 className="profile-title">{profile.title}</h2>
            <p className="profile-bio">{profile.bio}</p>
            
            <div className="profile-skills">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div className="profile-actions">
              <a href="#projects" className="btn btn-primary">See projects</a>
              <a href="#contact" className="btn btn-secondary">Contact me!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileSection;