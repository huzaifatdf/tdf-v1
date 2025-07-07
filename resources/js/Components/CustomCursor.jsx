
import React, { useEffect, useState, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    // Hide the default cursor for the entire document and all elements
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
      *:hover {
        cursor: none !important;
      }
      *:active {
        cursor: none !important;
      }
      *:focus {
        cursor: none !important;
      }
      html, body {
        cursor: none !important;
      }
      a, button, input, textarea, select {
        cursor: none !important;
      }
      a:hover, button:hover, input:hover, textarea:hover, select:hover {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Also set cursor style directly on html and body
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    // Cleanup function to remove the style when component unmounts
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`asdads fixed top-0 left-0 pointer-events-none z-[111111] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      {/* Custom Logo Cursor - Replace this SVG with your actual logo */}
      <img src="/images/cursor.svg" width="24" height="24" alt="Logo cursor" />
    </div>
  );
};
