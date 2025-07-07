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
        // First fade out the spinner
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
      className="fixed inset-0 z-[9999]"
    >
      {/* Pulsing Dots Loader */}
      <div
        ref={loaderRef}
        className="loader flex items-center justify-center space-x-2 relative top-1/2 left-1/2
          w-[150px] h-[150px] -ml-[75px] -mt-[75px] z-[1001]"
      >
        <img src="/images/logo.svg" alt="" />
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
