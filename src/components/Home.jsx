import React, { useEffect, useRef, useState } from 'react';
import { FaTerminal } from 'react-icons/fa';
import './Home.css';
import Terminal from './Terminal';
import flowerIcon from '../assets/pixel-flower.png';

const Home = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const sceneRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!sceneRef.current) return;
    const bounds = sceneRef.current.getBoundingClientRect();
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
    sceneRef.current.style.setProperty('--pointer-x', `${pointerX}%`);
    sceneRef.current.style.setProperty('--pointer-y', `${pointerY}%`);
  };

  const resetPointer = () => {
    sceneRef.current?.style.setProperty('--pointer-x', '50%');
    sceneRef.current?.style.setProperty('--pointer-y', '50%');
  };

  useEffect(() => {
    let frameId;

    const updateParallax = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const scrollOffset = Math.min(window.scrollY, window.innerHeight);
        sceneRef.current?.style.setProperty('--scroll-shift', `${scrollOffset * 0.035}px`);
      });
    };

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', updateParallax);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="home page">
      <div className="container">
        <section className="hero">
          <div
            className="computer-scene"
            ref={sceneRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
          >
            <div className="computer-screen">
              <h1 className="screen-name">Israe Yajib</h1>
              <p className="screen-role">Software Engineering Student</p>
              <button className="screen-terminal" onClick={() => setShowTerminal(true)}>
                <FaTerminal aria-hidden="true" />
                <span>Terminal</span>
              </button>
            </div>
            <div className="pixel-atmosphere" aria-hidden="true">
              <span className="desktop-icon desktop-icon-flower"><img src={flowerIcon} alt="" /></span>
            </div>
          </div>
        </section>

        {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
      </div>
    </div>
  );
};

export default Home;
