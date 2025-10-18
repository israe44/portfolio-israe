// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Algorithms from './components/Algorithms';
import Projects from './components/Projects';
import Games from './components/Games';
import Resume from './components/Resume';
import Certificates from './components/Certificates';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Save current page to localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', activePage);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'algorithms':
        return <Algorithms />;
      case 'projects':
        return <Projects />;
      case 'games':
        return <Games />;
      case 'resume':
        return <Resume />;
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