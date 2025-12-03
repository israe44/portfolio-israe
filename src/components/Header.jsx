// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes, FaHome, FaProjectDiagram, FaLaptopCode, FaGamepad, FaFileAlt, FaAward } from 'react-icons/fa';
import './Header.css';

// Bucket SVG Component with Color Gradients
const BucketLogo = () => (
  <svg viewBox="0 0 100 100" className="bucket-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bucketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="gradient-stop-1" stopColor="currentColor" stopOpacity="1"/>
        <stop offset="50%" className="gradient-stop-2" stopColor="currentColor" stopOpacity="0.8"/>
        <stop offset="100%" className="gradient-stop-3" stopColor="currentColor" stopOpacity="0.6"/>
      </linearGradient>
      <radialGradient id="shineGradient">
        <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </radialGradient>
    </defs>
    
    {/* Handle with animation */}
    <path d="M 20 28 Q 50 8 80 28" stroke="url(#bucketGradient)" strokeWidth="3.5" strokeLinecap="round" fill="none" className="bucket-handle"/>
    
    {/* Main bucket body */}
    <g className="bucket-body">
      <path d="M 25 35 L 30 82 Q 30 90 38 90 L 62 90 Q 70 90 70 82 L 75 35 Z" 
            stroke="url(#bucketGradient)" 
            strokeWidth="3" 
            fill="none" 
            strokeLinejoin="round"
            className="bucket-outline"/>
    </g>
    
    {/* Shine/highlight effect */}
    <ellipse cx="38" cy="48" rx="6" ry="14" fill="url(#shineGradient)" className="bucket-shine"/>
    
    {/* Inner liquid effect with waves */}
    <g className="bucket-liquid" opacity="0.4">
      <path d="M 32 62 Q 50 64 68 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="wave-1"/>
      <path d="M 32 72 Q 50 74 68 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="wave-2"/>
      <path d="M 30 80 L 70 80" stroke="currentColor" strokeWidth="1.5" opacity="0.6" className="water-level"/>
    </g>
    
    {/* Accent color dots */}
    <circle cx="50" cy="60" r="2.5" fill="currentColor" className="accent-dot-1" opacity="0.7"/>
    <circle cx="45" cy="75" r="1.5" fill="currentColor" className="accent-dot-2" opacity="0.6"/>
    <circle cx="55" cy="78" r="1.5" fill="currentColor" className="accent-dot-3" opacity="0.6"/>
  </svg>
);

const Header = ({ activePage, setActivePage, toggleTheme, isDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollActivePage, setScrollActivePage] = useState(activePage);

  const menuItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaProjectDiagram },
    { id: 'projects', label: 'Projects', icon: FaLaptopCode },
    { id: 'games', label: 'Games', icon: FaGamepad },
    
    { id: 'certificates', label: 'Certificates', icon: FaAward }
  ];

  // Detect which section is in view while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (top 25% of screen)
          if (rect.top <= window.innerHeight * 0.25 && rect.bottom > 0) {
            setScrollActivePage(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Use scrollActivePage for display, but allow manual clicks
  const currentPage = mobileMenuOpen ? activePage : scrollActivePage;

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo" onClick={toggleTheme} title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <BucketLogo />
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map(item => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className={currentPage === item.id ? 'active' : ''}>
                  <button 
                    className="nav-link"
                    onClick={() => handleNavClick(item.id)}
                  >
                    <IconComponent className="nav-icon" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;