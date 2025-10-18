// src/components/Header.jsx
import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes, FaHome, FaProjectDiagram, FaLaptopCode, FaGamepad, FaFileAlt, FaAward } from 'react-icons/fa';
import './Header.css';

const Header = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'algorithms', label: 'Algorithms', icon: FaProjectDiagram },
    { id: 'projects', label: 'Projects', icon: FaLaptopCode },
    { id: 'games', label: 'Games', icon: FaGamepad },
    { id: 'resume', label: 'Resume', icon: FaFileAlt },
    { id: 'certificates', label: 'Certificates', icon: FaAward }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <FaCode className="logo-icon" />
          Portfolio<span>.</span>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map(item => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className={activePage === item.id ? 'active' : ''}>
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