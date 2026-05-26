import React from 'react';
import './PixelClouds.css';

// A chunky pixel-art cloud
const Cloud = ({ color = '#4d3a7a', shade = '#3d2a5a', scale = 1 }) => (
  <svg
    width={48 * scale}
    height={28 * scale}
    viewBox="0 0 48 28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ shapeRendering: 'crispEdges', display: 'block' }}
  >
    <rect x="16" y="2"  width="16" height="6" fill={color}/>
    <rect x="8"  y="8"  width="32" height="6" fill={color}/>
    <rect x="2"  y="14" width="44" height="6" fill={color}/>
    <rect x="6"  y="8"  width="6"  height="6" fill={color}/>
    <rect x="34" y="8"  width="8"  height="6" fill={color}/>
    <rect x="2"  y="20" width="44" height="4" fill={shade}/>
  </svg>
);

const PixelClouds = () => (
  <div className="pixel-clouds-layer" aria-hidden="true">
    <div className="cloud c1"><Cloud color="#5a4690" shade="#43356e" scale={3}/></div>
    <div className="cloud c2"><Cloud color="#4d3a7a" shade="#3a2c5e" scale={2.2}/></div>
    <div className="cloud c3"><Cloud color="#6b5b95" shade="#4d3a7a" scale={2.6}/></div>
    <div className="cloud c4"><Cloud color="#473579" shade="#352a5a" scale={1.8}/></div>
    <div className="cloud c5"><Cloud color="#5a4690" shade="#43356e" scale={3.4}/></div>
    <div className="cloud c6"><Cloud color="#4d3a7a" shade="#3a2c5e" scale={2}/></div>
    <div className="cloud c7"><Cloud color="#6b5b95" shade="#4d3a7a" scale={2.4}/></div>
  </div>
);

export default PixelClouds;
