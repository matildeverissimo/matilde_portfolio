import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import ProjectForm from './ProjectForm';
const ProjectsManager = () => {
  const { data, deleteProject } = useData();
  const [editingProject, setEditingProject] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const handleEdit = (project) => {
    setEditingProject(project);
    setIsCreating(false);
  };
  const handleCreate = () => {
    setEditingProject(null);
    setIsCreating(true);
  };
  const handleClose = () => {
    setEditingProject(null);
    setIsCreating(false);
  };
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
    }
  };
  if (editingProject || isCreating) {
    return (
      <ProjectForm 
        project={editingProject} 
        onClose={handleClose}
        isNew={isCreating}
      />
    );
  }
  return (
    <div className="projects-manager">
      <div className="manager-header">
        <h2>Manage projects</h2>
        <button className="btn btn-primary" onClick={handleCreate}>
          + New Project
        </button>
      </div>
      <div className="projects-list">
        {data.projects.length === 0 ? (
          <div className="empty-state">
            <p>You still don't have projects.</p>
            <button className="btn btn-primary" onClick={handleCreate}>
              Create first project
            </button>
          </div>
        ) : (
          data.projects.map(project => (
            <div key={project.id} className="project-item">
              <div className="project-item-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder small">🎨</div>
                )}
              </div>
              
              <div className="project-item-info">
                <h3>{project.title}</h3>
                <span className="category">{project.category}</span>
              </div>
              <div className="project-item-actions">
                <button 
                  className="btn-icon"
                  onClick={() => handleEdit(project)}
                  title="Edit"
                >
                  ✏️
                </button>
                <button 
                  className="btn-icon delete"
                  onClick={() => handleDelete(project.id)}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ProjectsManager;