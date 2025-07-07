import React, { useEffect, useState, useRef, useCallback } from 'react';

function TestimonialsSection() {
  const [selected, setSelected] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [testimonials, setTestimonials] = useState([
   {
    id: 1,
    name: "Shahzaib Mehmood",
    designation: "Director, So~Safe",
    rating: 5,
    title: "The team at TDF designed and executed the launch of our So~Safe UAE International website with great professionalism. Their creativity combined with the skills required to implement it produced that wow factor one requires on their website.",
    image: "images/sosafetesti.png",
  },
    {
    id: 2,
    name: "Mahwish Saad Khan",
    designation: "Executive Commercial Head, DataCheck",
    rating: 5,
    title: "I wanted to take a moment to commend The Design Firm for managing DataCheck's LinkedIn presence so well. Their strategic approach and engaging content have driven brand awareness, follower growth, and valuable connections. We highly recommend them!",
    image: "images/datachecktesti.png",
  },
  {
    id: 3,
    name: "Arsalan Farid",
    designation: "Deputy Sales Manager-Key Accounts, Idemitsu Pakistan",
    rating: 5,
    title: "I acknowledge and appreciate the fine and professional attitude of team TDF, who certainly, owns the acumen for understanding the customer needs, conceptualize and execute the strategizes that creates brand pull, follows equity and eventually creating value.",
    image: "images/idemtesti.png",
  },
  {
    id: 4,
    name: "Aamir Basrai",
    designation: "CEO, PentaExpress",
    rating: 5,
    title: "TDF has helped us elevate our social presence while helping target the market. My journey so far with them has been exceptional.",
    image: "images/pentatesti.png",
  },
  {
    id: 5,
    name: "Shahzad Qaiser",
    designation: "Sr. Manager Digital Marketing - MCCD, Askari Bank",
    rating: 5,
    title: "We are absolutely thrilled with the outstanding work delivered by The Design Firm (TDF) on the development of the new Askari Bank website. From the initial concept to the final launch, TDF demonstrated unparalleled professionalism, creativity, and technical expertise.",
    image: "images/askaritesti.png",
  },
  {
    id: 6,
    name: "Barbara Chanakira",
    designation: "CEO, Eaton Property Consultants",
    rating: 5,
    title: "We envisioned holistic branding for our business, and we're glad we chose TDF as our partner. TDF's customized branding strategy has significantly enhanced our digital presence, delivering a website that truly represents our business. Their keen eye for detail was evident throughout the project, reflected in the exemplary quality of work we received.",
    image: "images/eatontesti.png",
  },
  {
    id: 7,
    name: "Syed Asif Hasan",
    designation: "CEO, Blinq",
    rating: 5,
    title: "With TDF I am able to mark a presence of my brand and see how my potential market can be targeted. Since I have collaborated with TDF I can see a significant increase in my reach.",
    image: "images/blicktesti.png",
  },
  {
    id: 8,
    name: "Dr. Nadia Alwasiah",
    designation: "Physiatrist & Physician, Dr. Nadia Alwasiah",
    rating: 5,
    title: "The Design Firm helped me craft a visual identity for my brand that truly captures its essence. From our first meeting to the final product, the team was professional, creative, and responsive. I endorse them for any business seeking a dedicated team to bring their vision to life!",
    image: "images/nadiatesti.png",
  },
  {
    id: 9,
    name: "Saira Nasir",
    designation: "Founder & Owner, Mimi's",
    rating: 5,
    title: "The Design Firm helped me craft a visual identity for my brand 'Mimi's' that truly captures its essence. From our first meeting to the final product, the team was professional, creative, and responsive. I endorse them for any business seeking a dedicated team to bring their vision to life!",
    image: "images/mimistesti.png",
  },
  // Additional 7 testimonials to make it 16 total
//   {
//     id: 10,
//     name: "Ahmed Hassan",
//     designation: "Marketing Director, TechSolutions",
//     rating: 5,
//     title: "TDF's innovative approach to digital marketing has transformed our online presence. Their strategic insights and creative execution have resulted in a 300% increase in our lead generation. Highly recommended for any business looking to scale digitally.",
//     image: "images/techsolutionstesti.png",
//   },
//   {
//     id: 11,
//     name: "Fatima Al-Rashid",
//     designation: "Founder, GreenTech Innovations",
//     rating: 5,
//     title: "Working with The Design Firm has been a game-changer for our startup. They understood our vision perfectly and delivered a brand identity that resonates with our target audience. Their attention to detail and creative flair is unmatched.",
//     image: "images/greentechtesti.png",
//   },
//   {
//     id: 12,
//     name: "Omar Malik",
//     designation: "CEO, Digital Dynamics",
//     rating: 5,
//     title: "TDF's expertise in web development and digital strategy has been instrumental in our company's growth. They delivered a stunning website that not only looks amazing but also performs exceptionally well in terms of user experience and conversions.",
//     image: "images/digitaldynamicstesti.png",
//   },
//   {
//     id: 13,
//     name: "Amna Siddiqui",
//     designation: "Brand Manager, Lifestyle Co.",
//     rating: 5,
//     title: "The Design Firm's creative team exceeded our expectations with their innovative branding solutions. They helped us establish a strong brand presence in the market and significantly improved our customer engagement rates.",
//     image: "images/lifestylecotesti.png",
//   },
//   {
//     id: 14,
//     name: "Bilal Tariq",
//     designation: "Operations Manager, FastTrack Logistics",
//     rating: 5,
//     title: "TDF's comprehensive digital marketing strategy has revolutionized our business operations. Their data-driven approach and creative campaigns have helped us reach new markets and achieve unprecedented growth.",
//     image: "images/fasttracktesti.png",
//   },
//   {
//     id: 15,
//     name: "Zara Khan",
//     designation: "Creative Director, ArtSpace Studios",
//     rating: 5,
//     title: "Collaborating with The Design Firm has been an incredible experience. Their team's creativity and technical expertise brought our artistic vision to life in ways we never imagined. They truly understand the essence of creative branding.",
//     image: "images/artspacetesti.png",
//   }
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

  // Define floating avatar positions - expanded for 15 floating avatars (16 total - 1 center)
  const floatingPositions = [
    { top: "5%", left: "15%" },
    { top: "15%", left: "25%" },
    { top: "35%", left: "30%" },
    { top: "35%", left: "17%" },
    { top: "15%", right: "25%" },
    { top: "5%", right: "15%" },
    { top: "35%", right: "30%" },
    { top: "35%", right: "17%" },
    { top: "8%", left: "8%" },
    { top: "25%", left: "8%" },
    { top: "8%", right: "8%" },
    { top: "25%", right: "8%" },
    { top: "50%", left: "20%" },
    { top: "50%", right: "20%" },
    { top: "60%", left: "50%", transform: "translateX(-50%)" }
  ];

  return (
    <div className="from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden min-h-screenssssss">
      <div className="testimonial-wrapper relative z-10 flex items-center justify-center sec-padding --large px-8">
        {/* Floating Avatars */}
        <div className="floating-avatars absolute inset-0">
          {/* Dynamic floating avatars - skip index 0 as it's the center testimonial */}
          {testimonials.slice(1, 16).map((testimonial, i) => (
            testimonial.image !== '' ? (
              <img
                key={testimonial.id}
                className={`circle-avatar absolute ${
                  i < 8 ? 'w-12 h-12' : 'w-14 h-14'
                } rounded-full cursor-pointer transform transition-all duration-500 hover:scale-125 hover:shadow-xl hover:z-20 ${
                  isTransitioning ? 'scale-110 animate-pulse' : ''
                }`}
                src={testimonial.image}
                onClick={() => handleSwapWithCenter(i + 1)}
                alt={testimonial.name}
                style={floatingPositions[i]}
              />
            ) : (
              <div
                key={testimonial.id}
                className={`circle-avatar absolute ${
                  i < 8 ? 'w-12 h-12' : 'w-14 h-14'
                } bg-gray-200 rounded-full flex items-center justify-center ${
                  i < 8 ? 'text-sm' : 'text-base'
                } font-bold text-gray-700 cursor-pointer transform transition-all duration-500 hover:scale-125 hover:shadow-xl hover:z-20 ${
                  isTransitioning ? 'scale-110 animate-pulse' : ''
                }`}
                onClick={() => handleSwapWithCenter(i + 1)}
                style={floatingPositions[i]}
              >
                {testimonial.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}
              </div>
            )
          ))}
        </div>

        {/* Centered Testimonial */}
        <div className={`center-profile text-center max-w-2xl transition-all duration-500 ${
          isTransitioning ? 'transform scale-95 opacity-70' : 'transform scale-100 opacity-100'
        }`}>
          <div className="relative mb-8">
            {testimonials[0].image !== '' ? (
            <img
              src={testimonials[0].image}
              alt="user"
              className={`center-image w-32 h-32 rounded-full mx-auto shadow-2xl transition-all duration-500 ${
                isTransitioning ? 'transform scale-90 blur-sm' : 'transform scale-100 blur-0'
              }`}
            />
            ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto flex items-center justify-center shadow-2xl mobile-size-fix">
              <span className="text-3xl font-bold text-gray-700">
                {testimonials[0].name.charAt(0).toUpperCase()}
              </span>
            </div>
            )}
          </div>

          <div className={`stars transition-all duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {Array.from({ length: testimonials[0].rating }, (_, i) => (
              <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
            ))}
            {Array.from({ length: 5 - testimonials[0].rating }, (_, i) => (
              <span key={i} className="text-gray-400 text-xl">☆</span>
            ))}
          </div>

          <h3 className={`text-[25px] text-white font-bold transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`}>
            {testimonials[0].name}
          </h3>

          <h3 className={`text-[20px] fc-secondary font-bold transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`}>
            {testimonials[0].designation}
          </h3>

          <p className={`text-[18px] text-white leading-relaxed mb-8 transition-all duration-500 ${
            isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-100'
          }`} style={{transitionDelay: '0.1s'}}>
            {testimonials[0].title}
          </p>

          {testimonials[0].subtitle && (
            <p className={`subtitle text-white opacity-80 transition-all duration-500 ${
              isTransitioning ? 'transform translate-y-4 opacity-0' : 'transform translate-y-0 opacity-80'
            }`} style={{transitionDelay: '0.2s'}}>
              {testimonials[0].subtitle}
            </p>
          )}

          {/* Dots Navigation */}
          <div className={`dots flex justify-center flex-wrap space-x-2 mt-8 transition-all duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {originalTestimonials.map((_, i) => (
              <span
                key={i}
                className={`dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 mb-2 ${
                  i === getActiveDotIndex()
                    ? "bg-[#91A7BA] scale-125 border-2 border-white"
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
        .circle-avatar:nth-child(7) { animation-delay: -6s; }
        .circle-avatar:nth-child(8) { animation-delay: -7s; }
        .circle-avatar:nth-child(9) { animation-delay: -8s; }
        .circle-avatar:nth-child(10) { animation-delay: -9s; }
        .circle-avatar:nth-child(11) { animation-delay: -10s; }
        .circle-avatar:nth-child(12) { animation-delay: -11s; }
        .circle-avatar:nth-child(13) { animation-delay: -12s; }
        .circle-avatar:nth-child(14) { animation-delay: -13s; }
        .circle-avatar:nth-child(15) { animation-delay: -14s; }
      `}</style>
    </div>
  );
}

export default TestimonialsSection;
