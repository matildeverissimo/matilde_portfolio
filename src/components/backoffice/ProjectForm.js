import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
const emptyProject = {
  title: '',
  category: '',
  description: '',
  fullDescription: '',
  image: '',
  tags: [],
  year: new Date().getFullYear().toString(),
  client: '',
  link: ''
};
const ProjectForm = ({ project, onClose, isNew }) => {
  const { addProject, updateProject } = useData();
  const [formData, setFormData] = useState(project || emptyProject);
  const [saved, setSaved] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };
  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, tags }));
    setSaved(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isNew) {
      addProject(formData);
    } else {
      updateProject(project.id, formData);
    }
    
    setSaved(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  return (
    <div className="editor">
      <div className="editor-header">
        <button className="back-btn" onClick={onClose}>← Back</button>
        <h2>{isNew ? 'New Project' : 'Edit Project'}</h2>
        {saved && <span className="save-indicator">✓ Saved</span>}
      </div>
      <form onSubmit={handleSubmit} className="editor-form">
        <div className="form-section">
          <h3>Project Information</h3>
          
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Project name"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                placeholder="Ex: Mobile App, Web Design"
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2024"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="client">Client</label>
            <input
              type="text"
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Client name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Short description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="2"
              placeholder="Bried description for the project card..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullDescription">Full description</label>
            <textarea
              id="fullDescription"
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              rows="5"
              placeholder="Deatiled description of the project..."
            />
          </div>
        </div>
        <div className="form-section">
          <h3>Media and Links</h3>
          
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
            />
            {formData.image && (
              <div className="image-preview">
                <img src={formData.image} alt="Preview" />
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="link">Project link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>
        </div>
        <div className="form-section">
          <h3>Tags</h3>
          
          <div className="form-group">
            <label htmlFor="tags">Tags (separated by comma)</label>
            <input
              type="text"
              id="tags"
              value={formData.tags.join(', ')}
              onChange={handleTagsChange}
              placeholder="UX Research, UI Design, Prototyping..."
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {isNew ? 'Create project' : 'Save changes'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProjectForm;