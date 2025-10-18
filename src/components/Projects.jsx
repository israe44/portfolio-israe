import React from 'react';
import { FaLaptopCode, FaFilePowerpoint, FaDownload } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Static Gym Website',
      description: 'My first ever website.',
      icon: FaLaptopCode,
      status: 'completed',
      tags: ['Html', 'CSS', 'JavaScript'],
      github: 'https://github.com/israe44/Static-Gym-website',
      demo: 'https://israe44.github.io/Static-Gym-website/'
    },
    {
      id: 2,
      title: 'Tkinter Python GUI Presentation',
      description: 'Comprehensive presentation on creating graphical interfaces in Python using Tkinter. Covers widgets, event handling, file management, and advanced features.',
      icon: FaFilePowerpoint,
      status: 'completed',
      tags: ['Python', 'Tkinter', 'GUI', 'Presentation', 'UI/UX'],
      github: 'https://docs.google.com/presentation/d/11xXlIeN16n2vmwDUKFsjeWka-J_9-jZiCyrsXMCiUZg/export/pptx',
      demo: 'https://docs.google.com/presentation/d/11xXlIeN16n2vmwDUKFsjeWka-J_9-jZiCyrsXMCiUZg/preview'
    }
  ];

  const statusColors = {
    completed: '#4CAF50',
    'in-progress': '#FF9800',
    planned: '#9C27B0'
  };

  // Function to handle online viewing
  const handleViewDemo = (demoUrl) => {
    if (demoUrl !== '#') {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to handle download
  const handleDownload = (downloadUrl) => {
    if (downloadUrl !== '#') {
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="projects page">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">A collection of my development projects and applications</p>

        <div className="projects-stats">
          <div className="project-stat">
            <span className="stat-number">{projects.filter(p => p.status === 'completed').length}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="project-stat">
            <span className="stat-number">0</span>
            <span className="stat-label">In Progress</span>
          </div>
          <div className="project-stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Planned</span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card card">
              <div className="project-header">
                <div className="project-icon">
                  <project.icon />
                </div>
                <div 
                  className="project-status" 
                  style={{ backgroundColor: statusColors[project.status] }}
                >
                  {project.status.replace('-', ' ')}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewDemo(project.demo)}
                  disabled={project.demo === '#'}
                >
                  <FaLaptopCode /> View Presentation
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => handleDownload(project.github)}
                  disabled={project.github === '#'}
                >
                  <FaDownload /> Download PPT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;