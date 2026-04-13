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
        <button className="back-btn" onClick={onClose}>← Voltar</button>
        <h2>{isNew ? 'Novo Projeto' : 'Editar Projeto'}</h2>
        {saved && <span className="save-indicator">✓ Guardado</span>}
      </div>
      <form onSubmit={handleSubmit} className="editor-form">
        <div className="form-section">
          <h3>Informação do Projeto</h3>
          
          <div className="form-group">
            <label htmlFor="title">Título *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Nome do projeto"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Categoria *</label>
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
              <label htmlFor="year">Ano</label>
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
            <label htmlFor="client">Cliente</label>
            <input
              type="text"
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Nome do cliente"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição Curta *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="2"
              placeholder="Breve descrição para o card..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullDescription">Descrição Completa</label>
            <textarea
              id="fullDescription"
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              rows="5"
              placeholder="Descrição detalhada do projeto..."
            />
          </div>
        </div>
        <div className="form-section">
          <h3>Media e Links</h3>
          
          <div className="form-group">
            <label htmlFor="image">URL da Imagem</label>
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
            <label htmlFor="link">Link do Projeto</label>
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
            <label htmlFor="tags">Tags (separadas por vírgula)</label>
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
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            {isNew ? 'Criar Projeto' : 'Guardar Alterações'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProjectForm;