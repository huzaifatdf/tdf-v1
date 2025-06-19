import React, { useEffect, useState, useRef, useCallback } from 'react';

function TestimonialsSection() {
  const [selected, setSelected] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Becky Nelson",
      rating: 4,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "John Brown",
      rating: 5,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Hannah Thompson",
      rating: 3,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 4,
      name: "Chris King",
      rating: 5,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 5,
      name: "Sarah Lopez",
      rating: 4,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
  ]);

  // Keep track of original testimonials for proper dot mapping
  const [originalTestimonials] = useState([...testimonials]);

  const handleSwapWithCenter = (index) => {
    if (index === selected || isTransitioning) return;

    setIsTransitioning(true);

    // Add a slight delay to make the transition more visible
    setTimeout(() => {
      const updated = [...testimonials];
      const temp = updated[0];
      updated[0] = updated[index];
      updated[index] = temp;

      setTestimonials(updated);
      setSelected(index); // Update selected to the clicked index

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  // Handle dot clicks - find which testimonial should be active
  const handleDotClick = (dotIndex) => {
    if (dotIndex === selected || isTransitioning) return;

    // Find the current position of the testimonial we want to show
    const targetTestimonial = originalTestimonials[dotIndex];
    const currentPosition = testimonials.findIndex(t => t.id === targetTestimonial.id);

    if (currentPosition !== -1) {
      handleSwapWithCenter(currentPosition);
    }
  };

  // Get the active dot index based on which original testimonial is currently in center
  const getActiveDotIndex = () => {
    const centerTestimonial = testimonials[0];
    return originalTestimonials.findIndex(t => t.id === centerTestimonial.id);
  };

  return (
    <div className="from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#60a5fa" opacity="0.5"/>
              <line x1="50" y1="50" x2="100" y2="0" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3"/>
              <line x1="50" y1="50" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>

      <div className="testimonial-wrapper relative z-10 flex items-center justify-center sec-padding --large px-8">
        {/* Floating Avatars */}
        <div className="floating-avatars absolute inset-0">
          <div
            className="circle-avatar absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ top: "5%", left: "15%" }}
          >
            CK
          </div>

          {/* Dynamic floating avatars */}
          {[1, 2, 3, 4].map((index, i) => (
            <img
              key={index}
              className={`circle-avatar absolute w-12 h-12 rounded-full cursor-pointer transform transition-all duration-500 hover:scale-125 hover:shadow-xl hover:z-20 ${
                isTransitioning ? 'scale-110 animate-pulse' : ''
              }`}
              src={testimonials[index].image}
              onClick={() => handleSwapWithCenter(index)}
              alt=""
              style={
                i === 0
                  ? { top: "15%", left: "25%" }
                  : i === 1
                  ? { top: "35%", left: "30%" }
                  : i === 2
                  ? { top: "15%", right: "25%" }
                  : { top: "5%", right: "15%" }
              }
            />
          ))}

          <div
            className="circle-avatar absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ top: "35%", left: "17%" }}
          >
            JB
          </div>
          <div
            className="circle-avatar absolute w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ top: "35%", right: "30%" }}
          >
            HT
          </div>
          <div
            className="circle-avatar absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ top: "35%", right: "17%" }}
          >
            JB
          </div>
        </div>

        {/* Centered Testimonial */}
        <div className={`center-profile text-center max-w-2xl transition-all duration-500 ${
          isTransitioning ? 'transform scale-95 opacity-70' : 'transform scale-100 opacity-100'
        }`}>
          <div className="relative mb-8">
            <img
              src={testimonials[0].image}
              alt="user"
              className={`center-image w-32 h-32 rounded-full mx-auto shadow-2xl transition-all duration-500 ${
                isTransitioning ? 'transform scale-90 blur-sm' : 'transform scale-100 blur-0'
              }`}
            />
          </div>

          <div className={`stars transition-all duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {Array.from({ length: testimonials[0].rating }, (_, i) => (
              <span key={i} className="fc-secondary animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
            ))}
            {Array.from({ length: 5 - testimonials[0].rating }, (_, i) => (
              <span key={i} className="fc-primary">☆</span>
            ))}
          </div>

          <h3 className={`text-[20px] fc-primary font-bold transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`}>
            {testimonials[0].name}
          </h3>

          <p className={`text-[16px] fc-primary leading-relaxed mb-8 transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`} style={{transitionDelay: '0.1s'}}>
            {testimonials[0].title}
          </p>

          {testimonials[0].subtitle && (
            <p className={`subtitle fc-primary opacity-80 transition-all duration-500 ${
              isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-80'
            }`} style={{transitionDelay: '0.2s'}}>
              {testimonials[0].subtitle}
            </p>
          )}

          {/* Dots Navigation */}
          <div className={`dots flex justify-center space-x-2 mt-8 transition-all duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {originalTestimonials.map((_, i) => (
              <span
                key={i}
                className={`dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  i === getActiveDotIndex()
                    ? "bg-[#91A7BA] scale-125 border-testi"
                    : "bg-[#91A7BA] hover:bg-gray-400 hover:scale-110"
                }`}
                onClick={() => handleDotClick(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-avatars img:hover {
          filter: brightness(1.2);
        }

        .stars span {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .stars span:hover {
          transform: scale(1.2);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .circle-avatar {
          animation: float 6s ease-in-out infinite;
        }

        /* Stagger the float animation for different avatars */
        .circle-avatar:nth-child(2) { animation-delay: -1s; }
        .circle-avatar:nth-child(3) { animation-delay: -2s; }
        .circle-avatar:nth-child(4) { animation-delay: -3s; }
        .circle-avatar:nth-child(5) { animation-delay: -4s; }
        .circle-avatar:nth-child(6) { animation-delay: -5s; }
      `}</style>
    </div>
  );
}

export default TestimonialsSection;
