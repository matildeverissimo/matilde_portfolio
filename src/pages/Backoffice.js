import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ProfileEditor from '../components/backoffice/ProfileEditor';
import ProjectsManager from '../components/backoffice/ProjectsManager';
import '../styles/backoffice.css';
const Backoffice = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { resetData } = useData();
  return (
    <div className="backoffice">
      <aside className="backoffice-sidebar">
        <div className="sidebar-header">
          <h1>Backoffice</h1>
          <Link to="/" className="preview-link">Ver Site →</Link>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Perfil
          </button>
          <button 
            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            📁 Projetos
          </button>
        </nav>
        <div className="sidebar-footer">
          <button 
            className="reset-btn"
            onClick={() => {
              if (window.confirm('Tens a certeza? Isto irá repor todos os dados.')) {
                resetData();
              }
            }}
          >
            🔄 Repor Dados
          </button>
        </div>
      </aside>
      <main className="backoffice-content">
        {activeTab === 'profile' && <ProfileEditor />}
        {activeTab === 'projects' && <ProjectsManager />}
      </main>
    </div>
  );
};
export default Backoffice;