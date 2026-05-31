import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaGitAlt, FaDocker, FaGithub, FaLinkedin, FaStar } from 'react-icons/fa';
import { SiLaravel, SiMysql, SiMongodb } from 'react-icons/si';
import './About.css';
import SectionClouds from './SectionClouds';
import batImg from '../assets/bat.png';

const About = () => {
  const N8NIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g stroke="#EA4B71" strokeWidth="4" strokeLinecap="round">
        <line x1="10" y1="32" x2="30" y2="32" />
        <line x1="30" y1="32" x2="50" y2="19" />
        <line x1="30" y1="32" x2="50" y2="45" />
      </g>
      <g fill="#EA4B71">
        <circle cx="10" cy="32" r="5" />
        <circle cx="30" cy="32" r="8" />
        <circle cx="50" cy="19" r="5" />
        <circle cx="50" cy="45" r="5" />
      </g>
    </svg>
  );

  const technologies = [
    { name: 'HTML', icon: FaHtml5, category: 'frontend', color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, category: 'frontend', color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, category: 'frontend', color: '#F7DF1E' },
    { name: 'React', icon: FaReact, category: 'frontend', color: '#61DAFB' },
    { name: 'Laravel', icon: SiLaravel, category: 'backend', color: '#FF2D20' },
    { name: 'PHP', icon: FaPhp, category: 'backend', color: '#777BB4' },
    { name: 'Python', icon: FaPython, category: 'backend', color: '#3776AB' },
    { name: 'MySQL', icon: SiMysql, category: 'database', color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, category: 'database', color: '#47A248' },
    { name: 'n8n', icon: N8NIcon, category: 'automation', color: '#EA4B71' }
  ];
  technologies.push({ name: 'Git', icon: FaGitAlt, category: 'version-control', color: '#F05032' });
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/israe44', color: '#333' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/israeyajib', color: '#0077B5' },
    { name: 'Fiverr', icon: FaStar, url: 'https://fiverr.com/sarou2y', color: '#1DBF73' }
  ];
  technologies.push({ name: 'Docker', icon: FaDocker, category: 'devops', color: '#2496ED' });
  return (
    <div className="about page">
      <SectionClouds variant={1} />
      <div className="container">
        <div className="about-header">
          <h1 className="page-title">About Me</h1>
          <div className="title-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="profile-section">
              <div className="profile-text">
                <h2>Full Stack Developer & UI/UX Designer</h2>
                <div className="about-card-wrap">
                  <img src={batImg} alt="" className="about-bat" aria-hidden="true" />
                  <div className="description-box">
                  <p>
                    "I'm a full-stack developer who just loves the process of building things from the ground up. There's a special kind of magic in crafting a sleek user interface and then diving deep to make the engine behind it hum. For me, it's that perfect blend of creative design and logical problem-solving that makes coding so incredibly rewarding."
                  </p>
                  <p>
                    Outside of coding, I enjoy UI/UX design as a creative hobby, crafting interfaces and experimenting with user flows.
                  </p>
                  <div className="personal-info">
                    <div className="info-item">
                      <strong>Email:</strong> israe.yab@gmail.com
                    </div>
                  
                    <div className="info-item">
                      <strong>Location:</strong>Casablanca, Morocco
                    </div>
                    <div className="info-item">
                      <strong>Connect:</strong>
                      <div className="social-icons">
                        {socialLinks.map((social) => (
                          <a 
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ '--social-color': social.color }}
                          >
                            <social.icon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="tech-stack-section">
              <h3 className="section-title">Tech Stack</h3>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <div key={tech.name} className="tech-card" style={{ '--tech-color': tech.color }}>
                    <div className="tech-icon">
                      <tech.icon />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;