import React from 'react';
import './PixelFlowers.css';

// Small 4-point pixel sparkle
const Sparkle = ({ color = '#fde047', scale = 1 }) => (
  <svg
    width={14 * scale}
    height={14 * scale}
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    style={{ shapeRendering: 'crispEdges', display: 'block' }}
  >
    <rect x="6" y="0"  width="2" height="4" fill={color}/>
    <rect x="6" y="10" width="2" height="4" fill={color}/>
    <rect x="0" y="6"  width="4" height="2" fill={color}/>
    <rect x="10" y="6" width="4" height="2" fill={color}/>
    <rect x="5" y="5"  width="4" height="4" fill={color}/>
    <rect x="4" y="4"  width="2" height="2" fill={color} opacity="0.6"/>
    <rect x="8" y="8"  width="2" height="2" fill={color} opacity="0.6"/>
  </svg>
);

// Tiny solid pixel dot
const Dot = ({ color = '#a5f3fc', scale = 1 }) => (
  <svg
    width={6 * scale}
    height={6 * scale}
    viewBox="0 0 6 6"
    xmlns="http://www.w3.org/2000/svg"
    style={{ shapeRendering: 'crispEdges', display: 'block' }}
  >
    <rect x="1" y="0" width="4" height="6" fill={color}/>
    <rect x="0" y="1" width="6" height="4" fill={color}/>
  </svg>
);

const PixelFlowers = () => (
  <div className="pixel-flowers-container">
    <div className="spark s1"><Sparkle color="#fde047" scale={1.4}/></div>
    <div className="spark s2"><Dot color="#a5f3fc" scale={1.3}/></div>
    <div className="spark s3"><Sparkle color="#c084fc" scale={1}/></div>
    <div className="spark s4"><Dot color="#ff9de2" scale={1.2}/></div>
    <div className="spark s5"><Sparkle color="#93c5fd" scale={1.2}/></div>
    <div className="spark s6"><Dot color="#fde047" scale={1}/></div>
    <div className="spark s7"><Sparkle color="#ff9de2" scale={0.9}/></div>
    <div className="spark s8"><Dot color="#c084fc" scale={1.3}/></div>
  </div>
);

export default PixelFlowers;
