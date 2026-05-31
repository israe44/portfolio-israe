import React, { useState, useEffect } from 'react';
import './Hobbies.css';
import SectionClouds from './SectionClouds';
import gymGif from '../assets/gym-transparent.gif';
import gymStatic from '../assets/gym-static.png';
import bookGif from '../assets/book-transparent.gif';
import bookStatic from '../assets/book-static.png';

// Books shown on the open pages, cycled slowly like turning pages.
const BOOKS = [
  { title: 'Atomic Habits', author: 'James Clear' },
  { title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini' },
  { title: 'Candide', author: 'Voltaire' },
];

const GymHobby = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="hobby-card">
      <div
        className="hobby-tile"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Static frame until hovered, then the gif plays */}
        <img src={hover ? gymGif : gymStatic} alt="Gym" className="hobby-gif" />
      </div>
      <span className="hobby-label">Gym</span>
    </div>
  );
};

const BookHobby = () => {
  const [hover, setHover] = useState(false);
  const [idx, setIdx] = useState(0);

  // Flip to the next title once per gif loop while hovered.
  useEffect(() => {
    if (!hover) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % BOOKS.length);
    }, 4000); // matches the 4s page-turn loop
    return () => clearInterval(id);
  }, [hover]);

  const book = BOOKS[idx];

  return (
    <div className="hobby-card">
      <div
        className="hobby-tile hobby-tile-book"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="book-hobby">
          {/* Static open book until hovered, then the pages flip */}
          <img
            src={hover ? bookGif : bookStatic}
            alt="Books I love"
            className="book-gif"
          />
          {/* key forces a soft fade each time the title changes,
              but the name stays readable through the page switch */}
          <div className="book-pages" key={idx}>
            <span className="book-title-text">{book.title}</span>
            <span className="book-author-text">{book.author}</span>
          </div>
        </div>
      </div>
      <span className="hobby-label">Reading</span>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="hobbies page">
      <SectionClouds variant={3} />
      <div className="container">
        <h1 className="page-title">My Hobbies</h1>
        <p className="page-subtitle">What I love doing outside of code</p>

        <div className="hobbies-row">
          <GymHobby />
          <BookHobby />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
