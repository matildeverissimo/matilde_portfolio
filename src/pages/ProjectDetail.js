import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/project-detail.css';
const ProjectDetail = () => {
  const { id } = useParams();
  const { data } = useData();
  const project = data.projects.find(p => p.id === id);
  if (!project) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="project-detail">
      <header className="detail-header">
        <div className="container">
          <Link to="/" className="back-link">← Voltar</Link>
        </div>
      </header>
      <main className="detail-content">
        <div className="container">
          <div className="detail-hero">
            <span className="detail-category">{project.category}</span>
            <h1 className="detail-title">{project.title}</h1>
            
            <div className="detail-meta">
              {project.year && <span>Ano: {project.year}</span>}
              {project.client && <span>Cliente: {project.client}</span>}
            </div>
          </div>
          <div className="detail-image">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="image-placeholder large">
                <span>🎨</span>
                <p>Imagem do Projeto</p>
              </div>
            )}
          </div>
          <div className="detail-body">
            <div className="detail-description">
              <h2>Sobre o Projeto</h2>
              <p>{project.fullDescription || project.description}</p>
            </div>
            <aside className="detail-sidebar">
              <div className="sidebar-section">
                <h3>Competências</h3>
                <div className="detail-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div className="sidebar-section">
                  <h3>Link do Projeto</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver Live →
                  </a>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <footer className="detail-footer">
        <div className="container">
          <Link to="/" className="btn btn-primary">Ver Mais Projetos</Link>
        </div>
      </footer>
    </div>
  );
};
export default ProjectDetail;