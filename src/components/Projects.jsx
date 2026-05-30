import React from 'react';
import { FaLaptopCode, FaDownload, FaGithub, FaFigma, FaPython } from 'react-icons/fa';
import './Projects.css';
import SectionClouds from './SectionClouds';

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: 'Quote Generator',
      description: 'Forget about work and cheer yourself up with inspirational quotes.',
      icon: FaLaptopCode,
      image: `${process.env.PUBLIC_URL}/image2.png`, // You can add an image for this project
      status: 'completed',
      tags: ['React', 'JavaScript', 'CSS',],
      github: 'https://github.com/israe44/quote-generator',
      demo: 'https://israe44.github.io/quote-generator/',
      buttons: [
        { text: 'View Demo', icon: FaLaptopCode, action: 'demo' },
        { text: 'View Code', icon: FaGithub, action: 'github' }
      ]
    },
    {
      id: 3,
      title: 'Bricoli',
      description: 'A home services platform connecting people with trusted local professionals.',
      icon: FaLaptopCode,
      image: '',
      status: 'completed',
      tags: ['React', 'Laravel', 'MongoDB'],
      github: '#',
      demo: 'https://bricoli.nimonacode.com/',
      buttons: [
        { text: 'View Project', icon: FaLaptopCode, action: 'demo' }
      ]
    },
    {
      id: 4,
      title: 'Moroccan Online App UI/UX',
      description: 'Modern user interface and experience design prototypes created in Figma.',
      icon: FaFigma,
      image: `${process.env.PUBLIC_URL}/figma.png`, // You can add your Figma project image
      status: 'completed',
      tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'Design System'],
      github: '#',
      demo: 'https://www.figma.com/community/file/1567526773725094928', // Replace with your actual Figma link
      buttons: [
        { text: 'View Figma Project', icon: FaFigma, action: 'demo' }
      ]
    },
    {
  id: 5,
title: 'GIF Python',
description: 'Python project for creating and manipulating GIF animations.',
icon: FaPython,
image: `${process.env.PUBLIC_URL}/gif.png`,
status: 'completed',
tags: ['Python', 'GIF', 'Animation', 'Image Processing'],

github: 'https://github.com/israe44/Random-GIF-made-with-Python.git', // ✅ Correct
buttons: [
  { text: 'View Code', icon: FaGithub, action: 'github' }
]

    },
    {
      id: 6,
      title: '',
      description: '',
      icon: FaGithub,
      image: '',
      status: 'completed',
      tags: [],
      github: 'https://github.com/israe44',
      demo: 'https://github.com/israe44',
      clickable: true,
      minimal: true // Flag for minimal display
    }
  ];

  const handleButtonClick = (action, url) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="projects page">
      <SectionClouds variant={2} />
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">A collection of my development projects and applications</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-card card ${project.clickable ? 'clickable-card' : ''} ${project.minimal ? 'minimal-card' : ''}`}
              onClick={project.clickable ? () => handleButtonClick('github', project.github) : undefined}
              style={project.clickable ? { cursor: 'pointer' } : undefined}
            >
              {project.minimal ? (
                <div className="minimal-content">
                  <svg
                    className="cloud-shape"
                    viewBox="0 0 60 36"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ shapeRendering: 'crispEdges' }}
                    aria-hidden="true"
                  >
                    <rect x="20" y="4"  width="16" height="6" fill="#6b5b95" />
                    <rect x="36" y="10" width="10" height="6" fill="#6b5b95" />
                    <rect x="14" y="10" width="28" height="6" fill="#6b5b95" />
                    <rect x="8"  y="16" width="44" height="6" fill="#5a4690" />
                    <rect x="4"  y="22" width="52" height="6" fill="#5a4690" />
                    <rect x="4"  y="28" width="52" height="4" fill="#43356e" />
                  </svg>
                  <div className="cloud-inner">
                    <div className="github-icon-large">
                      <FaGithub />
                    </div>
                    <div className="see-more-text">see more</div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="project-icon-badge">
                    <project.icon />
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                      {project.buttons.map((button, index) => {
                        const url = button.action === 'demo' ? project.demo : project.github;
                        const isSingleButton = project.buttons.length === 1;

                        return (
                          <button
                            key={index}
                            className={`btn ${isSingleButton ? 'btn-primary full-width' : index === 0 ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => handleButtonClick(button.action, url)}
                            disabled={url === '#'}
                          >
                            {button.icon && <button.icon />} {button.text}
                          </button>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;