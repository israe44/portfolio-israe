// Pixel Art Decorative Elements
import React from 'react';
import './PixelDecorations.css';

const PixelDecorations = () => {
  return (
    <>
      {/* Pixel Snake */}
      <div className="pixel-decoration pixel-snake" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="40" height="40" className="pixel-svg">
          <rect x="5" y="15" width="4" height="4" fill="#4a9b4a" />
          <rect x="9" y="15" width="4" height="4" fill="#6bc46b" />
          <rect x="13" y="15" width="4" height="4" fill="#4a9b4a" />
          <rect x="17" y="15" width="4" height="4" fill="#2d5a2d" />
          <rect x="21" y="15" width="4" height="4" fill="#4a9b4a" />
          <rect x="25" y="15" width="4" height="4" fill="#6bc46b" />
          <rect x="29" y="15" width="4" height="4" fill="#4a9b4a" />
          <rect x="13" y="11" width="4" height="4" fill="#4a9b4a" />
          <rect x="17" y="11" width="4" height="4" fill="#2d5a2d" />
          <rect x="21" y="11" width="4" height="4" fill="#4a9b4a" />
          <circle cx="19" cy="13" r="1" fill="#ffd700" />
        </svg>
      </div>

      {/* Pixel Flower */}
      <div className="pixel-decoration pixel-flower" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32" className="pixel-svg">
          <rect x="12" y="12" width="8" height="8" fill="#ffd700" />
          <rect x="14" y="10" width="4" height="4" fill="#ffed4e" />
          <rect x="14" y="18" width="4" height="4" fill="#ffed4e" />
          <rect x="10" y="14" width="4" height="4" fill="#ffed4e" />
          <rect x="18" y="14" width="4" height="4" fill="#ffed4e" />
          <rect x="12" y="12" width="8" height="8" fill="#ffd700" opacity="0.8" />
          <rect x="15" y="15" width="2" height="2" fill="#ccaa00" />
        </svg>
      </div>

      {/* Pixel Leaf */}
      <div className="pixel-decoration pixel-leaf" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" className="pixel-svg">
          <rect x="8" y="4" width="4" height="4" fill="#4a9b4a" />
          <rect x="6" y="8" width="8" height="4" fill="#6bc46b" />
          <rect x="4" y="12" width="12" height="4" fill="#4a9b4a" />
          <rect x="6" y="16" width="8" height="4" fill="#2d5a2d" />
          <rect x="8" y="20" width="4" height="4" fill="#4a9b4a" />
          <rect x="10" y="8" width="2" height="12" fill="#2d5a2d" />
        </svg>
      </div>

      {/* Pixel Vine */}
      <div className="pixel-decoration pixel-vine" aria-hidden="true">
        <svg viewBox="0 0 16 48" width="16" height="48" className="pixel-svg">
          <rect x="6" y="0" width="4" height="4" fill="#2d5a2d" />
          <rect x="4" y="4" width="8" height="4" fill="#4a9b4a" />
          <rect x="6" y="8" width="4" height="4" fill="#2d5a2d" />
          <rect x="2" y="12" width="12" height="4" fill="#4a9b4a" />
          <rect x="6" y="16" width="4" height="4" fill="#2d5a2d" />
          <rect x="4" y="20" width="8" height="4" fill="#6bc46b" />
          <rect x="6" y="24" width="4" height="4" fill="#2d5a2d" />
          <rect x="0" y="28" width="16" height="4" fill="#4a9b4a" />
          <rect x="6" y="32" width="4" height="4" fill="#2d5a2d" />
          <rect x="4" y="36" width="8" height="4" fill="#4a9b4a" />
          <rect x="6" y="40" width="4" height="4" fill="#2d5a2d" />
          <rect x="2" y="44" width="12" height="4" fill="#4a9b4a" />
        </svg>
      </div>

      {/* Pixel Bird */}
      <div className="pixel-decoration pixel-bird" aria-hidden="true">
        <svg viewBox="0 0 28 20" width="28" height="20" className="pixel-svg">
          <rect x="8" y="8" width="4" height="4" fill="#ffd700" />
          <rect x="12" y="8" width="4" height="4" fill="#ffed4e" />
          <rect x="16" y="8" width="4" height="4" fill="#ffd700" />
          <rect x="10" y="4" width="4" height="4" fill="#ffd700" />
          <rect x="14" y="4" width="4" height="4" fill="#ffed4e" />
          <rect x="6" y="12" width="4" height="4" fill="#ffd700" />
          <rect x="18" y="12" width="4" height="4" fill="#ffd700" />
          <rect x="12" y="12" width="4" height="4" fill="#ccaa00" />
          <rect x="11" y="6" width="2" height="2" fill="#000" />
        </svg>
      </div>

      {/* Pixel Butterfly */}
      <div className="pixel-decoration pixel-butterfly" aria-hidden="true">
        <svg viewBox="0 0 32 24" width="32" height="24" className="pixel-svg">
          <rect x="12" y="8" width="4" height="4" fill="#6bc46b" />
          <rect x="16" y="8" width="4" height="4" fill="#4a9b4a" />
          <rect x="8" y="4" width="4" height="4" fill="#ffd700" />
          <rect x="20" y="4" width="4" height="4" fill="#ffd700" />
          <rect x="6" y="8" width="4" height="4" fill="#ffed4e" />
          <rect x="22" y="8" width="4" height="4" fill="#ffed4e" />
          <rect x="4" y="12" width="4" height="4" fill="#ffd700" />
          <rect x="24" y="12" width="4" height="4" fill="#ffd700" />
          <rect x="12" y="12" width="8" height="4" fill="#4a9b4a" />
          <rect x="14" y="16" width="4" height="4" fill="#2d5a2d" />
        </svg>
      </div>
    </>
  );
};

export default PixelDecorations;

