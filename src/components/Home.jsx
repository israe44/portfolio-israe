import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaGamepad, FaAward, FaFileAlt, FaProjectDiagram, FaTerminal } from 'react-icons/fa';
import './Home.css';
import Terminal from './Terminal';
import PixelFlowers from './PixelFlowers';

const Home = ({ scrollToSection }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTerminalClick = () => setShowTerminal(true);

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
          <PixelFlowers />
          <div className="hero-image">

            <div className="centered-profile-card">

              <div className="profile-info-enhanced">
                <div className="name-container">
                  <h1 className="name-gradient">
                    <span className="name-first">Israe Yajib</span>
                  </h1>
                  <div className="name-underline"></div>
                </div>

                <div className="title-stack">
                  <div className="title-main">Software Engineering Student</div>
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
        {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />} 

      </div>
    </div>
  );
};

export default Home;
