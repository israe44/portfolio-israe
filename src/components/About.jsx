import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaServer, FaMobile, FaGithub, FaLinkedin, FaStar, FaPalette } from 'react-icons/fa';
import './About.css';

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
      <circle cx="32" cy="32" r="30" fill="#FF6A00" />
      <g fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle">
        <text x="32" y="38">n8n</text>
      </g>
    </svg>
  );

  const technologies = [
    { name: 'HTML', icon: FaCode, category: 'frontend', color: '#E34F26' },
    { name: 'CSS', icon: FaCode, category: 'frontend', color: '#1572B6' },
    { name: 'JavaScript', icon: FaCode, category: 'frontend', color: '#F7DF1E' },
    { name: 'React', icon: FaLaptopCode, category: 'frontend', color: '#61DAFB' },
    { name: 'Bootstrap', icon: FaMobile, category: 'frontend', color: '#7952B3' },
    { name: 'PHP', icon: FaServer, category: 'backend', color: '#777BB4' },
    { name: 'Python', icon: FaServer, category: 'backend', color: '#3776AB' },
    { name: 'MySQL', icon: FaDatabase, category: 'database', color: '#4479A1' },
    { name: 'Figma', icon: FaPalette, category: 'design', color: '#FF6B6B' },
    { name: 'n8n', icon: N8NIcon, category: 'automation', color: '#FF6A00' }
  ];
  technologies.push({ name: 'Git', icon: FaGithub, category: 'version-control', color: '#F05032' });
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/israe44', color: '#333' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/israeyajib', color: '#0077B5' },
    { name: 'Fiverr', icon: FaStar, url: 'https://fiverr.com/sarou2y', color: '#1DBF73' }
  ];
  technologies.push({ name: 'Docker', icon: FaServer, category: 'devops', color: '#2496ED' });
  return (
    <div className="about page">
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
                <div className="description-box">
                  <p>
                    "I'm a full-stack developer who just loves the process of building things from the ground up. There's a special kind of magic in crafting a sleek user interface and then diving deep to make the engine behind it hum. For me, it's that perfect blend of creative design and logical problem-solving that makes coding so incredibly rewarding."
                  </p>
                  <p>
                    "Outside of coding, I enjoy UI/UX design as a creative hobby—crafting interfaces and experimenting with user flows."
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