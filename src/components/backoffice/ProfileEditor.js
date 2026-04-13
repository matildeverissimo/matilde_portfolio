import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
const ProfileEditor = () => {
  const { data, updateProfile } = useData();
  const [profile, setProfile] = useState(data.profile);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setProfile(data.profile);
  }, [data.profile]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };
  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      social: { ...prev.social, [name]: value }
    }));
    setSaved(false);
  };
  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    setProfile(prev => ({ ...prev, skills }));
    setSaved(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  return (
    <div className="editor">
      <div className="editor-header">
        <h2>Editar Perfil</h2>
        {saved && <span className="save-indicator">✓ Guardado</span>}
      </div>
      <form onSubmit={handleSubmit} className="editor-form">
        <div className="form-section">
          <h3>Informação Básica</h3>
          
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="O teu nome completo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Título Profissional</label>
            <input
              type="text"
              id="title"
              name="title"
              value={profile.title}
              onChange={handleChange}
              placeholder="Ex: UX/UI Designer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Biografia</label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="4"
              placeholder="Fala um pouco sobre ti..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">URL do Avatar</label>
            <input
              type="url"
              id="avatar"
              name="avatar"
              value={profile.avatar}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>
        </div>
        <div className="form-section">
          <h3>Contacto</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Localização</label>
            <input
              type="text"
              id="location"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Cidade, País"
            />
          </div>
        </div>
        <div className="form-section">
          <h3>Redes Sociais</h3>
          
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={profile.social.linkedin}
              onChange={handleSocialChange}
              placeholder="[linkedin.com](https://linkedin.com/in/)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="behance">Behance</label>
            <input
              type="url"
              id="behance"
              name="behance"
              value={profile.social.behance}
              onChange={handleSocialChange}
              placeholder="[behance.net](https://behance.net/)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dribbble">Dribbble</label>
            <input
              type="url"
              id="dribbble"
              name="dribbble"
              value={profile.social.dribbble}
              onChange={handleSocialChange}
              placeholder="[dribbble.com](https://dribbble.com/)"
            />
          </div>
        </div>
        <div className="form-section">
          <h3>Competências</h3>
          
          <div className="form-group">
            <label htmlFor="skills">Skills (separadas por vírgula)</label>
            <input
              type="text"
              id="skills"
              value={profile.skills.join(', ')}
              onChange={handleSkillsChange}
              placeholder="UI Design, UX Research, Figma..."
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Guardar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileEditor;