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
        <h2>Edit Profile</h2>
        {saved && <span className="save-indicator">✓ Saved</span>}
      </div>
      <form onSubmit={handleSubmit} className="editor-form">
        <div className="form-section">
          <h3>Basic information</h3>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Professional title</label>
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
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="4"
              placeholder="Tell me about you..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar url</label>
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
          <h3>Contacts</h3>
          
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
              <label htmlFor="phone">Phone number</label>
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
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="City, Country"
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
        </div>
        <div className="form-section">
          <h3>Skills</h3>
          
          <div className="form-group">
            <label htmlFor="skills">Skills (separated by comma)</label>
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
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileEditor;