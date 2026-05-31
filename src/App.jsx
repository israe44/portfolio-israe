// src/App.jsx
import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { useTheme } from './hooks/useTheme';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Certificates from './components/Certificates';
import PixelClouds from './components/PixelClouds';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const certificatesRef = useRef(null);

  // Mapping of page ids to refs
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    hobbies: hobbiesRef,
    certificates: certificatesRef
  };

  // Always start at the top on refresh (disable browser scroll restoration)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Reveal each section as it scrolls into view
  useEffect(() => {
    const sections = [homeRef, aboutRef, projectsRef, hobbiesRef, certificatesRef]
      .map((r) => r.current)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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
      <PixelClouds />
<Header activePage={activePage} setActivePage={scrollToSection} toggleTheme={toggleTheme} isDark={isDark} />

      <main className="main-content">
        <section ref={homeRef} id="home" className="page-section">
          <Home scrollToSection={scrollToSection} />
        </section>

        <section ref={aboutRef} id="about" className="page-section">
          <About />
        </section>

        <section ref={projectsRef} id="projects" className="page-section">
          <Projects />
        </section>

        <section ref={hobbiesRef} id="hobbies" className="page-section">
          <Hobbies />
        </section>

        <section ref={certificatesRef} id="certificates" className="page-section">
          <Certificates />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
