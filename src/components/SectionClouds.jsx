import React from 'react';
import './SectionClouds.css';

// Small pixel-art cloud (matches the page-wide PixelClouds style)
const Cloud = ({ color = '#5a4690', shade = '#43356e', scale = 1 }) => (
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

// Decorative little clouds for a section. `variant` shifts the layout
// so neighbouring sections don't look identical.
const SectionClouds = ({ variant = 1 }) => (
  <div className={`section-clouds variant-${variant}`} aria-hidden="true">
    <div className="sc sc-a"><Cloud color="#5a4690" shade="#43356e" scale={1.6}/></div>
    <div className="sc sc-b"><Cloud color="#6b5b95" shade="#4d3a7a" scale={1.2}/></div>
    <div className="sc sc-c"><Cloud color="#4d3a7a" shade="#3a2c5e" scale={1.9}/></div>
    <div className="sc sc-d"><Cloud color="#5a4690" shade="#43356e" scale={1.3}/></div>
  </div>
);

export default SectionClouds;
