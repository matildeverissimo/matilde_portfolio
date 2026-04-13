import React from 'react';
import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projeto/${project.id}`} className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="image-placeholder">
            <span>🎨</span>
          </div>
        )}
        <div className="project-overlay">
          <span className="view-project">Ver Projeto →</span>
        </div>
      </div>
      
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;