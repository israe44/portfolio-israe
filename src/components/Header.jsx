// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes, FaHome, FaProjectDiagram, FaLaptopCode, FaGamepad, FaFileAlt, FaAward } from 'react-icons/fa';
import './Header.css';

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