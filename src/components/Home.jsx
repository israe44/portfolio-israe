import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaGamepad, FaAward, FaFileAlt, FaProjectDiagram, FaTerminal } from 'react-icons/fa';
import './Home.css';
import Terminal from './Terminal';

const Home = ({ scrollToSection }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTerminalClick = () => {
    setShowTerminal(true);
    setTimeout(() => {
      const terminal = document.getElementById("terminal-section");
      if (terminal) terminal.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="home page">
      <div className="container">

        {/* Hero Section */}
        <section
          className="hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="hero-image">

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
