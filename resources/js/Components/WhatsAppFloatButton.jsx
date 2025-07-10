import React, { useState, useEffect } from 'react';

const WhatsAppFloatButton = ({
  phoneNumber = "1234567890",
  message = "Hello! I'm interested in your services.",
  position = "bottom-right",
  businessName = "Your Business",
  profileImage = null
}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  // Show button after 1 minute (60000ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Check if user is in footer section
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if footer is visible in viewport
        const footerVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
        setIsInFooter(footerVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = (e) => {
    if (e) e.stopPropagation();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const positionClasses = {
    'bottom-right': isInFooter ? 'bottom-[35%] right-10' : 'bottom-6 right-10',
    'bottom-left': isInFooter ? 'bottom-[35%] left-10' : 'bottom-6 left-10',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  // Don't render anything if not visible yet
  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={handleWhatsAppClick}
      className={`fixed ${positionClasses[position]} z-50 cursor-pointer animate-fadeIn transition-all duration-300 mobile-whatsapp`}
    >
      {/* Float Button */}
      <div className="relative group bg-[#00000052] border-2 border-[#9BE500] rounded-full w-14 h-14 flex items-center justify-center">
        <button
          className=""
          aria-label="Open WhatsApp chat"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-[#9BE500] group-hover:rotate-12 transition-transform duration-300"
            style={{
              animation: 'delayedZoom 10s ease-in-out infinite',
            }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </button>

        <style>
          {`
          @keyframes delayedZoom {
            0%, 95% { transform: scale(1); }
            96% { transform: scale(1.07); }
            97% { transform: scale(0.99); }
            98% { transform: scale(1.05); }
            99% { transform: scale(0.97); }
            100% { transform: scale(1); }
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
          `}
        </style>
      </div>
    </div>
  );
};

export default WhatsAppFloatButton;
