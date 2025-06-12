import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePage, Link } from "@inertiajs/react";
import axios from "axios";

function SmoothCaseStudiesSection() {
  const { appUrl } = usePage().props;
  const [data, setData] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});
  const [sections, setSections] = useState([]);

  // Fetch data and update sections
  useEffect(() => {
    axios.get('/api/v1/case')
      .then(response => {
        const fetchedData = response.data;
        setData(fetchedData);

        // Transform the data into sections format
        const newSections = fetchedData.map((item, index) => ({
          id: String(index + 1).padStart(2, '0'),
          title: item.title,
          slug: item.slug,
          subtitle: item.description.length > 10
            ? item.description.split(' ').slice(0, 10).join(' ') + '...'
            : item.description,
          logo: '/images/logo.svg',
          mainImage: item.image ? `${appUrl}/${item.image}` : '/images/case4.png',
          features: Array.isArray(item.services) ? item.services : [],
          stats: {
            models: '25+',
            performance: '99.9%',
            latency: '<100ms',
          },
        }));

        setSections(newSections);
        setActiveSection(newSections.length > 0 ? newSections[0].id : null);
      })
      .catch(error => {
        console.error('Error fetching case studies:', error);
      });
  }, [appUrl]);

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
    <section ref={sectionRef} className="container-fluid min-h-screen">
      <div className="flex sec-padding pt-0">
        {/* Left Side - Navigation */}
        <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
          <div className="max-w-lg">
            <nav
              className="space-y-8 pl-6 h-[650px] overflow-y-auto custom-scrollbar custom-mobile-height"
              style={{ direction: 'rtl' }}
            >
              {sections.map((section) => (
                <div key={section.id} className="relative group" style={{ direction: 'ltr' }}>
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
                        ? 'fc-secondary'
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
                  src={section.logo}
                  alt={`${section.title} logo`}
                  className="w-32 h-auto mb-4"
                />

                <img
                  src={section.mainImage}
                  alt={`${section.title} main image`}
                  className="w-full h-auto mb-6"
                />

                <p className="text-[18px] fc-primary mb-4 leading-relaxed">
                  {section.subtitle}
                </p>

                <div className="mb-10">
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
                        <span className="fc-primary text-[16px] leading-relaxed">
                          {feature.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer"
                  href={route('casestudy.show', section.slug)}
                >
                  Read more <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SmoothCaseStudiesSection;
