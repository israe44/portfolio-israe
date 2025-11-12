import React from 'react';
import { FaCode, FaLaptopCode, FaGamepad, FaAward, FaFileAlt, FaProjectDiagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: FaProjectDiagram,
      title: 'About',
      description: 'Interactive algorithm visualizations and implementations',
      link: 'about'
    },
    {
      icon: FaLaptopCode,
      title: 'Projects',
      description: 'Portfolio of web applications and software projects',
      link: 'projects'
    },
    {
      icon: FaGamepad,
      title: 'Games',
      description: 'Fun interactive games built with modern web technologies',
      link: 'games'
    },
    {
      icon: FaAward,
      title: 'Certificates',
      description: 'Professional certifications and achievements',
      link: 'certificates'
    },
    {
      icon: FaFileAlt,
      title: 'Resume',
      description: 'Professional experience and skills overview',
      link: 'resume'
    }
  ];

  return (
    <div className="home page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Israe YAJIB</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer | UI UX Designer</h2>
            <p className="hero-description">
              Passionate about creating innovative solutions and bringing ideas to life through code and design. <br />
              Explore my portfolio to see my projects.
            </p>
            <div className="hero-actions">
              
           
              
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img
                  src={process.env.PUBLIC_URL + "/image.png"}
                  alt="Israe Yajib"
                  className="avatar-icon"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                 
                />
              </div>
              <div className="profile-info">
                <h3>Full Stack Web Developer</h3>
                <p>Front End • Back End</p>
              </div>
            </div>
          </div>
        </section>

     

     
      </div>
    </div>
  );
};

export default Home;



