// src/App.jsx
import React, { useRef, useState } from 'react';
import './App.css';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useTheme } from './hooks/useTheme';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Games from './components/Games';
import Certificates from './components/Certificates';
import PixelDecorations from './components/PixelDecorations';

function App() {
  const [activePage, setActivePage] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const gamesRef = useRef(null);
  const certificatesRef = useRef(null);

  // Apply scroll animations
  const homeScrollRef = useScrollAnimation();
  const aboutScrollRef = useScrollAnimation();
  const projectsScrollRef = useScrollAnimation();
  const gamesScrollRef = useScrollAnimation();
  const certificatesScrollRef = useScrollAnimation();

  // Mapping of page ids to refs
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    games: gamesRef,
    certificates: certificatesRef
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    setActivePage(sectionId);
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  };

  return (
    <div className="App">
      <PixelDecorations />
      <Header activePage={activePage} setActivePage={scrollToSection} toggleTheme={toggleTheme} isDark={isDark} />

      <main className="main-content">
        <section ref={homeRef} id="home" className="page-section" data-scroll-ref={homeScrollRef}>
          <Home scrollToSection={scrollToSection} />
        </section>

        <section ref={aboutRef} id="about" className="page-section" data-scroll-ref={aboutScrollRef}>
          <About />
        </section>

        <section ref={projectsRef} id="projects" className="page-section" data-scroll-ref={projectsScrollRef}>
          <Projects />
        </section>

        <section ref={gamesRef} id="games" className="page-section" data-scroll-ref={gamesScrollRef}>
          <Games />
        </section>

        <section ref={certificatesRef} id="certificates" className="page-section" data-scroll-ref={certificatesScrollRef}>
          <Certificates />
        </section>
      </main>
    </div>
  );
}

export default App;
