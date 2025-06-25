import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import parse from 'html-react-parser';


function parseTitles(data) {
  return Object.keys(data).map(key => {
    const cleanedKey = key.replace(/_\d+$/, ''); // Remove trailing underscore + digits
    return { key: cleanedKey, value: data[key] };
  });
}



function SmoothExperienceSection() {
  const [activeSection, setActiveSection] = useState('text-to-text');
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});
  const navRef = useRef(null); // Reference for the navigation container
  const navItemRefs = useRef({}); // References for individual nav items

  const {appUrl} = usePage().props
  //laravel api axios api/v1/services
  const [sections , setSection] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/v1/services')
      .then(response => {
        console.log(response.data);
        setSection(response.data);
        // Set initial active section
        if (response.data.length > 0) {
          setActiveSection(response.data[0].section_no);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Auto-scroll navigation when active section changes
  useEffect(() => {
    if (!activeSection || !navRef.current || !navItemRefs.current[activeSection]) return;

    const navContainer = navRef.current;
    const activeNavItem = navItemRefs.current[activeSection];

    // Get the position of the active nav item relative to the nav container
    const navContainerHeight = navContainer.clientHeight;
    const activeItemHeight = activeNavItem.offsetHeight;
    const activeItemOffsetTop = activeNavItem.offsetTop;

    // Calculate scroll position to center the active item
    const scrollTop = activeItemOffsetTop - (navContainerHeight / 2) + (activeItemHeight / 2);

    // Smooth scroll the navigation
    navContainer.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }, [activeSection]);

  useEffect(() => {
    const container = document.querySelector('.container-fluid');
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      let currentSection = sections.length > 0 ? sections[0].section_no : '01';

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

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [sections]);

  // Scroll observer to update active section based on scroll position
  useEffect(() => {
    if (sections.length === 0) return;

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
    if (sections.length === 0) return;

    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

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
  }, [sections]);

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
      <section ref={sectionRef} className="container-fluid min-h-screen service-main">
        <div className="flex">
          {/* Left Side - Fixed Navigation */}
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-lg">
              <nav
                ref={navRef}
                className="space-y-8 pl-6 h-[600px] overflow-y-auto custom-scrollbar custom-mobile-height"
                style={{ direction: 'rtl' }}
              >
                {sections.map((section, index) => {


                    return(
                  <div
                    key={section.id}
                    ref={el => navItemRefs.current[section.section_no] = el}
                    className="relative group"
                  >
                    <button
                      onClick={() => handleSectionClick(section.section_no)}
                      className={`text-left w-full transition-all duration-500 ${
                        activeSection === section.section_no
                          ? 'opacity-100'
                          : 'hover:opacity-70'
                      }`}
                    >
                      <h5 className={`text-[18px] mb-0 transition-all duration-500 ${
                        activeSection === section.section_no
                          ? 'fc-purple'
                          : 'fc-white'
                      }`}>
                        {section.section_no}
                      </h5>
                      <h3 className={`text-[20px] transition-all duration-500 fc-secondary ${
                        activeSection === section.section_no
                          ? 'fc-secondary'
                          : 'fc-white'
                      }`}>
                        {section.title}
                      </h3>
                    </button>

                    {/* Active indicator */}
                    {activeSection === section.section_no && (
                      <div className="absolute bottom-0 left-0 h-1 w-10 bg-[#9BE500] transition-all duration-500"></div>
                    )}
                  </div>
                )})}
              </nav>
            </div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="w-1/2">
            {sections.map((section, index) => {
                             const techstackRaw = section?.data && JSON.parse(section?.data);
    let titles = [];
    if (techstackRaw && techstackRaw["techstack"]) {
        try {
            const jsonDataTechStack = techstackRaw["techstack"];
            titles = parseTitles(jsonDataTechStack);
        } catch (err) {
            console.error("Failed to parse techstack JSON:", err);
        }
    }
    console.log("Titles:", titles);
                return(
              <div
                key={section.section_no}
                ref={el => sectionsRefs.current[section.section_no] = el}
                className="min-h-screen flex items-center py-20"
              >
                <div className="">
                  <div className="animate-fadeIn">
                    {/* Main Image */}
                    <img
                      src={`${appUrl}/${section.thumbnail}`}
                      alt={`${section.title} main image`}
                      className="w-full h-auto mb-6"
                    />

                    {/* Title */}
                    <h2 className="text-[26px] text-white mb-2">
                      {section.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[18px] fc-primary leading-relaxed">
                      {parse(section.description)}
                    </p>

                    {/* Techstack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {titles.map((obj, index) => (
                        <img src={ `${appUrl}/${obj.value}`} height="100px" width="100px" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
          <hr className="border-white mb-8"/>
        </div>
      </section>
    </>
  );
}

export default SmoothExperienceSection
