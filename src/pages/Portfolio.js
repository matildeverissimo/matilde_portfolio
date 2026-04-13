import React from 'react';
import { useData } from '../context/DataContext';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import '../styles/portfolio.css';
const Portfolio = () => {
  const { data } = useData();
  const { profile, projects } = data;
  return (
    <div className="portfolio">
      <Header profile={profile} />
      
      <main className="main-content">
        <ProfileSection profile={profile} />
        
        <section className="projects-section" id="projects">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              My recent work
            </p>
            
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="section-title">Let's talk!</h2>
            <p className="section-subtitle">
              
            </p>
            
            <div className="contact-info">
              <a href={`mailto:${profile.email}`} className="contact-link">
                <span className="contact-icon">✉️</span>
                {profile.email}
              </a>
              {profile.phone && (
                <a href={`tel:${profile.phone}`} className="contact-link">
                  <span className="contact-icon">📱</span>
                  {profile.phone}
                </a>
              )}
              {profile.location && (
                <span className="contact-link">
                  <span className="contact-icon">📍</span>
                  {profile.location}
                </span>
              )}
            </div>
            <div className="social-links">
              {profile.social.linkedin && (
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer profile={profile} />
    </div>
  );
};
export default Portfolio;