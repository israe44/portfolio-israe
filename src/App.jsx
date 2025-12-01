// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Games from './components/Games';
import Certificates from './components/Certificates';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Load saved page
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);

  // Save current page
  useEffect(() => {
    localStorage.setItem('currentPage', activePage);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'games':
        return <Games />;
      case 'certificates':
        return <Certificates />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header activePage={activePage} setActivePage={setActivePage} />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
