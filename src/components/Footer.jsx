import React from 'react';
import './Footer.css';

// Classic 8-bit pixel heart
const PixelHeart = () => (
  <svg
    className="pixel-heart"
    width="24"
    height="21"
    viewBox="0 0 28 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ shapeRendering: 'crispEdges' }}
    aria-hidden="true"
  >
    <g fill="#ff6b9d">
      <rect x="4"  y="0"  width="8"  height="4" />
      <rect x="16" y="0"  width="8"  height="4" />
      <rect x="0"  y="4"  width="28" height="4" />
      <rect x="0"  y="8"  width="28" height="4" />
      <rect x="4"  y="12" width="20" height="4" />
      <rect x="8"  y="16" width="12" height="4" />
      <rect x="12" y="20" width="4"  height="4" />
    </g>
    {/* shine */}
    <rect x="4" y="4" width="4" height="4" fill="rgba(255,255,255,0.55)" />
  </svg>
);

const Footer = () => (
  <footer className="site-footer">
    <p className="footer-text">
      MADE WITH <PixelHeart /> BY ISRAE YAJIB
    </p>
    <a className="footer-email" href="mailto:israe.yab@gmail.com">
      israe.yab@gmail.com
    </a>
  </footer>
);

export default Footer;
