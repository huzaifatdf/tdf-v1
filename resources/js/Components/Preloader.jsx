import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ logoSrc, onFinish }) => {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const handlePageLoad = () => {
      // Zoom animation
      gsap.to(logoRef.current, {
        scale: 100,
        duration: 1,
        ease: "power2.inOut",
      });

      // Fade out preloader container after zoom
      gsap.to(preloaderRef.current, {
        autoAlpha: 0,
        delay: 1,
        duration: 0.8,
        onComplete: () => {
          setLoading(false);
          if (onFinish) onFinish();
        },
      });
    };

    if (document.readyState === "complete") {
      // Page already loaded
      handlePageLoad();
    } else {
      // Wait for load event
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-[#00141b] flex items-center justify-center z-[9999]"
      style={{ perspective: "600px" }}
    >
      <img
        ref={logoRef}
        src={logoSrc}
        alt="Loading Logo"
        className="w-32 h-32 object-contain"
        style={{ transformOrigin: "center center" }}
      />
    </div>
  );
};

export default Preloader;
