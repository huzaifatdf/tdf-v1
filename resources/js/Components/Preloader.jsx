import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const preloaderRef = useRef(null);
  const loaderRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    let animationFrame;
    let startTime;

    const animatePercent = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newPercent = Math.min(100, Math.floor(progress / 20)); // ~2 seconds total

      setPercent(newPercent);

      if (newPercent < 100) {
        animationFrame = requestAnimationFrame(animatePercent);
      } else {
        // First fade out the logo
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            // Then slide away the curtains
            gsap.to(leftCurtainRef.current, {
              x: '-100%',
              duration: 0.7,
              delay: 0.3,
              ease: 'cubic-bezier(0.645,0.045,0.355,1.000)',
            });

            gsap.to(rightCurtainRef.current, {
              x: '100%',
              duration: 0.7,
              delay: 0.3,
              ease: 'cubic-bezier(0.645,0.045,0.355,1.000)',
              onComplete: () => {
                // Finally hide the entire preloader
                gsap.to(preloaderRef.current, {
                  y: -100,
                  autoAlpha: 0,
                  duration: 0.3,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    document.body.style.overflow = '';
                    if (onFinish) onFinish();
                  },
                });
              },
            });
          },
        });
      }
    };

    animationFrame = requestAnimationFrame(animatePercent);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = ''; // Restore scroll just in case
    };
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] w-full h-full"
    >
      {/* Static Centered Logo */}
      <div
        ref={loaderRef}
        className="fixed inset-0 flex items-center justify-center z-[1001]"
      >
        <img src="/images/logo.svg" alt="Loading logo" className="w-32 h-auto" />
      </div>

      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="fixed top-0 left-0 w-[51%] h-full bg-[#00141b] z-[1000]"
      />

      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="fixed top-0 right-0 w-[51%] h-full bg-[#00141b] z-[1000]"
      />
    </div>
  );
};

export default Preloader;
