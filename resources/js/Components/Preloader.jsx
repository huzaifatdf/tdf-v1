import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
const Preloader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const preloaderRef = useRef(null);
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
        // Fade out preloader
        // Fade out and slide up
        gsap.to(preloaderRef.current, {
        y: -100,            // Slide upward by 100px
        autoAlpha: 0,       // Fade out
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            document.body.style.overflow = '';
            if (onFinish) onFinish();
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
      ref={preloaderRef} className="fixed inset-0 bg-[#00141B] flex items-center justify-center z-[9999]">
        <div className="flex flex-col items-center">
            <div>
                <img className="w-[210px]" src="/images/logo.svg" alt="Logo" />
            </div>
            <div className="text-white text-[60px] font-bold">{percent}%</div>
        </div>
    </div>
  );
};
export default Preloader;
