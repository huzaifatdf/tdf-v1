import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onFinish }) => {
  const preloaderRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleLoad = () => {
      setIsLoaded(true);
      gsap.to(preloaderRef.current, {
        y: -100,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
          if (onFinish) onFinish();
        },
      });
    };

    // Listen for full page load
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-[#00141b] flex items-center justify-center z-[9999]"
    >
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
