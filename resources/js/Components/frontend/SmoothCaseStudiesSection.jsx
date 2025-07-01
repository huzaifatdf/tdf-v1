import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePage, Link } from "@inertiajs/react";
import axios from "axios";

function parseTitles(data) {
  return Object.keys(data).map(key => {
    const cleanedKey = key.replace(/_\d+$/, ''); // Remove trailing underscore + digits
    return { key: cleanedKey, value: data[key] };
  });
}

function SmoothCaseStudiesSection() {
  const { appUrl } = usePage().props;
  const [data, setData] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});
  const navRef = useRef(null); // Reference for the navigation container
  const navItemRefs = useRef({}); // References for individual nav items
  const [sections, setSections] = useState([]);

  // Fetch data and update sections
  useEffect(() => {
    axios.get('/api/v1/case')
      .then(response => {
        const fetchedData = response.data;
        console.log(fetchedData);
        setData(fetchedData);

        // Transform the data into sections format
        const newSections = fetchedData.map((item, index) => {
          const jsonData = JSON.parse(item.data);
          const services = parseTitles(jsonData["Service"]);
          return({
            id: String(index + 1).padStart(2, '0'),
            title: item.title,
            slug: item.slug,
            subtitle: item.description.length > 10
              ? item.description.split(' ').slice(0, 10).join(' ') + '...'
              : item.description,
            mainImage: item.image ? `${appUrl}/${item.image}` : '/images/case4.png',
            features: services.length > 0 ? services.map(service => {
              if(service.key === 'title'){
                return service.value
              }
            }).filter(Boolean) : [],
          })
        });

        setSections(newSections);
        setActiveSection(newSections.length > 0 ? newSections[0].id : null);
      })
      .catch(error => {
        console.error('Error fetching case studies:', error);
      });
  }, [appUrl]);

  // Auto-scroll navigation when active section changes
  useEffect(() => {
    if (!activeSection || !navRef.current || !navItemRefs.current[activeSection]) return;

    const navContainer = navRef.current;
    const activeNavItem = navItemRefs.current[activeSection];

    // Get the position of the active nav item relative to the nav container
    const navContainerRect = navContainer.getBoundingClientRect();
    const activeItemRect = activeNavItem.getBoundingClientRect();

    // Calculate the scroll position to center the active item
    const navContainerHeight = navContainer.clientHeight;
    const activeItemHeight = activeItemRect.height;
    const activeItemOffsetTop = activeNavItem.offsetTop;

    // Calculate scroll position to center the active item
    const scrollTop = activeItemOffsetTop - (navContainerHeight / 2) + (activeItemHeight / 2);

    // Smooth scroll the navigation
    navContainer.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }, [activeSection]);

  // Scroll observer to update active section based on scroll position
  useEffect(() => {
    if (sections.length === 0) return;

    const observers = [];

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          threshold: 0.6,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      const element = sectionsRefs.current[section.id];
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
        block: 'center'
      });
    }
  };

  const currentSection = sections.find(s => s.id === activeSection);

  if (sections.length === 0) {
    return <div className="container-fluid min-h-screen flex items-center justify-center">
      <p>Loading case studies...</p>
    </div>;
  }

  return (
    <section ref={sectionRef} className="container-fluid min-h-screen mobile-screens">
      <div className="flex sec-padding">
        {/* Left Side - Navigation */}
        <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
          <div className="max-w-lg">
            <nav
              ref={navRef}
              className="space-y-8 pl-6 h-[550px] overflow-y-auto custom-scrollbar custom-mobile-height"
              style={{ direction: 'rtl' }}
            >
              {sections.map((section) => (
                <div
                  key={section.id}
                  ref={el => navItemRefs.current[section.id] = el}
                  className="relative group"
                  style={{ direction: 'ltr' }}
                >
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    className={`text-left w-full transition-all duration-500 ${
                      activeSection === section.id
                        ? 'opacity-100'
                        : 'hover:opacity-70'
                    }`}
                  >
                    <h5 className={`text-[18px] mb-0 transition-all duration-500 ${
                      activeSection === section.id
                        ? 'fc-purple'
                        : 'fc-white'
                    }`}>
                      {section.id}
                    </h5>
                    <h3 className={`text-[20px] transition-all duration-500 ${
                      activeSection === section.id
                        ? 'fc-secondary'
                        : 'fc-white'
                    }`}>
                      {section.title}
                    </h3>
                  </button>

                  {activeSection === section.id && (
                    <div className="absolute bottom-0 left-0 h-1 w-10 bg-[#9BE500] transition-all duration-500"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={el => sectionsRefs.current[section.id] = el}
              className="min-h-screen flex items-center"
            >
              <div className="animate-fadeIn">
                <img
                  src={section.mainImage}
                  alt={`${section.title} main image`}
                  className="w-full h-auto mb-6"
                />

                {/* Title */}
                <h2 className="text-[26px] fc-secondary mb-2">
                    {section.title}
                </h2>

                <p className="text-[20px] fc-primary mb-3 leading-relaxed">
                  {section.subtitle}
                </p>

                <ul className="mb-10">
                  {section.features.map((feature, featureIndex) => {
                    if (featureIndex >= 3) {
                      return featureIndex === 3 ? (
                        <div key={featureIndex} className="flex items-start">
                          <span className="fc-primary text-[18px] leading-relaxed mt-2">
                            and more...
                          </span>
                        </div>
                      ) : null;
                    }
                    return (
                      <div key={featureIndex} className="flex items-start">
                        <li className="fc-primary text-[18px] leading-relaxed">
                          {feature}
                        </li>
                      </div>
                    );
                  })}
                </ul>

              <Link
  className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer"
  href={route('casestudy.show', section.slug)}
onBefore={() => window.scrollTo(0, 0)} // Ensures scroll resets on navigation
>
  Read more <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span>
</Link>
                <hr className="border-white mb-8"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SmoothCaseStudiesSection;
