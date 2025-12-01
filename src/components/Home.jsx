import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaGamepad, FaAward, FaFileAlt, FaProjectDiagram, FaTerminal } from 'react-icons/fa';
import './Home.css';
import Terminal from './Terminal';

const Home = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTerminalClick = () => {
    setShowTerminal(true);
    setTimeout(() => {
      const terminal = document.getElementById("terminal-section");
      if (terminal) terminal.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  // Cute Flower SVG components
  const CuteFlower = ({ className, style = 1 }) => {
    const flowerStyles = {
      1: (
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="30" cy="30" r="15" opacity="0.8"/>
          <circle cx="70" cy="30" r="15" opacity="0.8"/>
          <circle cx="30" cy="70" r="15" opacity="0.8"/>
          <circle cx="70" cy="70" r="15" opacity="0.8"/>
          <circle cx="50" cy="50" r="20" opacity="0.9"/>
          <circle cx="50" cy="50" r="8" fill="#FFD700" opacity="0.7"/>
        </svg>
      ),
      2: (
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 Q60 5 70 15 Q80 25 70 35 Q60 45 50 55 Q40 45 30 35 Q20 25 30 15 Q40 5 50 15 Z" opacity="0.8"/>
          <circle cx="50" cy="35" r="10" fill="#FFD700" opacity="0.6"/>
        </svg>
      )
    };

    return <div className={`cute-flower ${className}`}>{flowerStyles[style]}</div>;
  };

  const ProfileFlower = ({ className }) => (
    <div className={`profile-flower ${className}`}>
      <svg viewBox="0 0 20 20" fill="currentColor">
        <circle cx="10" cy="10" r="8"/>
        <circle cx="10" cy="10" r="3" fill="#FFD700"/>
      </svg>
    </div>
  );

  return (
    <div className="home page">

      {/* Background Flowers */}
      <CuteFlower className="cute-flower-1" style={1} />
      <CuteFlower className="cute-flower-2" style={2} />
      <CuteFlower className="cute-flower-3" style={1} />
      <CuteFlower className="cute-flower-4" style={2} />
      <CuteFlower className="cute-flower-5" style={1} />
      <CuteFlower className="cute-flower-6" style={2} />

      <div className="container">

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-image">
            
            <ProfileFlower className="profile-flower-1" />
            <ProfileFlower className="profile-flower-2" />
            <ProfileFlower className="profile-flower-3" />
            <ProfileFlower className="profile-flower-4" />

            <div className="centered-profile-card">
              <div className="profile-avatar">
                <img
                  src={process.env.PUBLIC_URL + "/image.png"}
                  alt="Israe Yajib"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              <div className="profile-info-enhanced">
                <div className="name-container">
                  <h1 className="name-gradient">
                    <span className="name-first">Israe Yajib</span>
                  </h1>
                  <div className="name-underline"></div>
                </div>

                <div className="title-stack">
                  <div className="title-main">Full Stack Web Developer</div>
                </div>

                <div className="profile-actions">
                  <button className="btn btn-terminal" onClick={handleTerminalClick}>
                    <FaTerminal className="btn-icon" />
                    Terminal
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TERMINAL SECTION  */}
        {showTerminal && (
          <section id="terminal-section" style={{ marginTop: "80px" }}>
            <Terminal />
          </section>
        )}

      </div>
    </div>
  );
};

export default Home;
