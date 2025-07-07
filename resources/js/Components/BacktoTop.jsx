import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back fixed bottom-[110px] right-7 w-[70px] h-[70px] bg-[#9BE500] hover:bg-[#9747FF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <img
          src="/images/top.png"
          alt="Back to top"
          className="w-8 h-8 object-contain"
        />
      </button>
    </>
  );
};

export default BackToTopButton;
