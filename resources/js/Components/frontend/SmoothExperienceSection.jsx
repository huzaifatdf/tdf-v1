
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePage } from "@inertiajs/react";
import axios from "axios";


function SmoothExperienceSection() {
  const [activeSection, setActiveSection] = useState('text-to-text');
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});



    const {appUrl} = usePage().props
    //laravel api axios api/v1/services
    const [sections , setSection] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/v1/services')
            .then(response => {
                console.log(response.data);
                setSection(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);




  useEffect(() => {
  const container = document.querySelector('.container-fluid');
  const handleScroll = () => {
    const scrollPosition = container.scrollTop;
    let currentSection = '01';

    sections.forEach(section => {
      const element = sectionsRefs.current[section.section_no];
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
          currentSection = section.section_no;
        }
      }
    });

    setActiveSection(currentSection);
  };

  container.addEventListener('scroll', handleScroll);
  return () => container.removeEventListener('scroll', handleScroll);
}, [sections]);

  // Scroll observer to update active section based on scroll position
  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.section_no);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      const element = sectionsRefs.current[section.section_no];
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sections]);

  // GSAP entrance animation
  useEffect(() => {
    const section = sectionRef.current;

    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

    const handleSectionClick = (sectionId) => {
    const element = sectionsRefs.current[sectionId];
    if (element) {
        element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // Changed from 'center'
        });
    }
    };

  const currentSection = sections.find(s => s.section_no === activeSection);

  return (
    <>
      <section ref={sectionRef} className="container-fluid min-h-screen">
        {/* Main Content Area */}
        {/* <div className="mb-12">
            <h1 className="text-[32px] font-bold fc-secondary leading-tight">
                AI Model Suite
            </h1>
            <hr class="border-white mb-8"></hr>
            <p className="text-[18px] text-gray-400 leading-relaxed">
                Explore our comprehensive collection of AI models designed for different use cases and applications.
            </p>
            </div> */}
        <div className="flex">
          {/* Left Side - Fixed Navigation */}
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-lg">


              <nav className="space-y-8">
                {sections.map((section, index) => (
                  <div key={section.id} className="relative group">
                    <button
                      onClick={() => handleSectionClick(section.section_no)}
                      className={`text-left w-full transition-all duration-500 ${
                        activeSection === section.section_no
                          ? 'opacity-100'
                          : 'hover:opacity-70'
                      }`}
                    >
                      <h5 className={`text-[18px] mb-0 transition-all duration-500 fc-secondary ${
                        activeSection === section.section_no
                          ? 'fc-secondary'
                          : 'fc-white'
                      }`}>
                        {section.id}
                      </h5>
                      <h3 className={`text-[20px] transition-all duration-500  fc-secondary ${
                        activeSection === section.section_no
                          ? 'fc-secondary'
                          : 'fc-white'
                      }`}>
                        {section.title}
                      </h3>
                      {/* <p className={`text-[14px] leading-relaxed transition-all duration-500 ${
                        activeSection === section.id
                          ? 'text-gray-300'
                          : 'text-gray-500'
                      }`}>
                        {section.subtitle}
                      </p> */}
                    </button>

                    {/* Active indicator */}
                    {activeSection === section.section_no && (
                      <div className="absolute bottom-0 left-0 h-1 w-10 bg-[#9BE500] transition-all duration-500"></div>

                    )}
                  </div>
                ))}
              </nav>

              {/* Progress indicator */}
              {/* <div className="mt-12 flex items-center space-x-2">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      sections.findIndex(s => s.id === activeSection) >= index
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-700 w-4'
                    }`}
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="w-1/2">
            {sections.map((section, index) => (
              <div
                key={section.section_no}
                ref={el => sectionsRefs.current[section.section_no] = el}
                className="min-h-screen flex items-center py-20" // Added py-20
                >
                <div className="">
                  <div className="animate-fadeIn">

                    {/* Main Image */}
                    {section.thumbnail || section.thumbnail !== 'null' || section.thumbnail !== null  &&(
                    <img
                        src={section.thumbnail}
                        alt={`${section.title} main image`}
                        className="w-full h-auto mb-6"
                    />
                    )}
                    {/* Title */}
                    {/* <h2 className="text-[36px] font-bold text-white mb-3">
                      {section.title}
                    </h2> */}

                    {/* Subtitle */}
                    <p className="text-[18px] fc-primary leading-relaxed">
                      {section.description}
                    </p>

                    {/* Features */}
                    {/* <div className="mb-10">
                      {section.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start"
                        >

                          <span className="text-[16px] fc-primary leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="border-white mb-8"/>
        </div>
      </section>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default SmoothExperienceSection
