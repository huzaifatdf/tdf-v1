import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import parse from 'html-react-parser';
import { usePage } from "@inertiajs/react";
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify'; // For sanitizing HTML

gsap.registerPlugin(ScrollTrigger);

function parseTitles(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
  return Object.keys(data).map(key => ({
    key: key.replace(/_\d+$/, ''),
    value: data[key] || ''
  }));
}

export default function Casestudiesinner({ casestudy }) {
  const introRef = useRef(null);
  const { appUrl } = usePage().props || {};

  // Safely parse JSON data with error handling
  const jsonData = (() => {
    try {
      return casestudy?.data ? JSON.parse(casestudy.data) : {};
    } catch (e) {
      console.error('Failed to parse casestudy.data:', e);
      return {};
    }
  })();

  useEffect(() => {
    const intro = introRef.current;
    if (intro) {
      gsap.from(intro, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: intro,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <WebsiteLayout
      title={`${casestudy?.title || 'Case Study'} | TDF Agency`}
      description="Explore our portfolio of successful digital transformations and client success stories."
    >
      <section ref={introRef} className="flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" />
        <div className="container-fluid relative mt-[150px]">
          <div>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2">
                <h1 className="text-[32px] fc-secondary leading-tight mb-6">
                  {casestudy?.title || 'Case Study'}
                  {jsonData?.Detail?.subtitle && (
                    <> - <br className="hidden md:block" />{jsonData.Detail.subtitle}</>
                  )}
                </h1>
              </div>
              <div className="md:w-1/2">
                <div className="prose prose-lg prose-invert">
                  <p className="text-[16px] fc-primary leading-relaxed mb-6">
                    {casestudy?.description ? parse(DOMPurify.sanitize(casestudy.description)) : 'No description available.'}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={jsonData?.Detail?.image ? `${appUrl}/${jsonData.Detail.image}` : '/images/placeholder.png'}
              alt={`${casestudy?.title || 'Case Study'} Overview`}
              className="w-full h-[50vh] object-cover mt-5 mb-5"
            />
            <p className="text-[32px] font-bold fc-secondary leading-tight">Services Provided</p>
            <hr className="border-white mb-8" />
          </div>
        </div>
      </section>

      <Capabilities data={casestudy} jsonData={jsonData} appUrl={appUrl} />
      <Beginning data={casestudy} jsonData={jsonData} appUrl={appUrl} />
      <SmoothExperienceSection data={casestudy} jsonData={jsonData} />
      <Components data={jsonData?.Technology ? parseTitles(jsonData.Technology) : []} conclusion={jsonData?.Detail?.conclusion || ''} />
    </WebsiteLayout>
  );
}

Casestudiesinner.propTypes = {
  casestudy: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.string
  }).isRequired
};

const WebsiteShowcase = ({ title, description, link, image, index, isLast }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: isLast ? "top top" : "top top",
        end: isLast ? "bottom top" : "+=100%",
        pin: true,
        pinSpacing: isLast,
        scrub: 1,
        ...(isLast && {
          onUpdate: (self) => {
            gsap.set(content, { opacity: 1 - self.progress });
          }
        })
      }
    });

    tl.from(content, {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [isLast]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-dark-950 text-white flex items-center"
      style={{ zIndex: 100 - index }}
    >
      <div className="absolute inset-0 opacity-50" />
      <div className="container-fluid relative z-10">
        <div ref={contentRef} className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <h2 className="text-[30px] text-lime-400 mb-6">{title || 'Untitled'}</h2>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]"
                aria-label={`Visit ${title} website`}
              >
                {link}
              </a>
            )}
          </div>
          <div className="md:col-span-7 relative group">
            <div className="absolute inset-0 transform transition-transform duration-500" />
            <img
              src={image || '/images/placeholder.png'}
              alt={title || 'Project Image'}
              className="w-full transform transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WebsiteShowcase.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired
};

function transformData(data) {
  if (!data || !Array.isArray(data)) return [];
  const result = [];

  for (let i = 0; i < data.length; i += 2) {
    const titleObj = data[i];
    const imageObj = data[i + 1];

    if (titleObj?.key === 'title' && imageObj?.key === 'image') {
      result.push({
        title: titleObj.value || '',
        image: imageObj.value || ''
      });
    }
  }

  return result;
}

function Capabilities({ data, jsonData, appUrl }) {
  const services = jsonData?.Service ? transformData(parseTitles(jsonData.Service)) : [];
  const projects = services.map((item, index) => ({
    id: String(index + 1).padStart(2, '0'),
    title: item?.title || '',
    description: data?.description || '', // Fixed: No truncation
    link: jsonData?.Detail?.website || '',
    image: item?.image ? `${appUrl}/${item.image}` : '/images/placeholder.png',
  }));

  return (
    <div className="relative">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <WebsiteShowcase
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            index={index}
            isLast={index === projects.length - 1}
          />
        ))
      ) : (
        <p className="text-[18px] fc-primary text-center">No services available for this case study.</p>
      )}
    </div>
  );
}

Capabilities.propTypes = {
  data: PropTypes.object.isRequired,
  jsonData: PropTypes.object.isRequired,
  appUrl: PropTypes.string
};

function Beginning({ data, jsonData, appUrl }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="">
      <div className="container-fluid">
        <hr className="border-white mb-8" />
        <div className="sec-padding">
          <div className="grid lg:grid-cols-2 gap-12 align-items-center">
            <div className="relative">
              <div className="overflow-hidden shadow-2xl">
                <img
                  src={jsonData?.Detail?.beginning_image ? `${appUrl}/${jsonData.Detail.beginning_image}` : '/images/placeholder.png'}
                  alt="Project background"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:pl-8">
              {jsonData?.Detail?.the_beginning && (
                <>
                  <h2 className="text-[30px] fc-secondary font-bold mb-3">
                    The Beginning - Understanding the Need
                  </h2>
                  <div className="mb-8">
                    {parse(DOMPurify.sanitize(jsonData.Detail.the_beginning))}
                  </div>
                </>
              )}
              {jsonData?.Approach?.description && (
                <div>
                  <h3 className="text-lime-400 text-2xl lg:text-3xl font-bold mb-2">
                    Our Approach
                  </h3>
                  {parse(DOMPurify.sanitize(jsonData.Approach.description))}
                </div>
              )}
            </div>
          </div>
          {jsonData?.Approach?.lower_description && (
            <div className="fc-primary text-lg leading-relaxed mt-7">
              {parse(DOMPurify.sanitize(jsonData.Approach.lower_description))}
            </div>
          )}
        </div>
        <hr className="border-white mb-8" />
      </div>
    </section>
  );
}

Beginning.propTypes = {
  data: PropTypes.object.isRequired,
  jsonData: PropTypes.object.isRequired,
  appUrl: PropTypes.string
};

function transformDataExperience(data) {
  if (!data || !Array.isArray(data)) return [];
  const result = [];

  for (let i = 0; i < data.length; i += 2) {
    const labelObj = data[i];
    const descriptionObj = data[i + 1];

    if (labelObj?.key === 'label' && descriptionObj?.key === 'description') {
      result.push({
        label: labelObj.value || '',
        description: descriptionObj.value || ''
      });
    }
  }

  return result;
}

function SmoothExperienceSection({ data, jsonData }) {
  const [activeSection, setActiveSection] = useState('01');
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});

  const experience = jsonData?.Experience ? transformDataExperience(parseTitles(jsonData.Experience)) : [];
  const sections = experience.map((item, index) => ({
    id: String(index + 1).padStart(2, '0'),
    title: item?.label || '',
    subtitle: item?.description || '',
  }));

  useEffect(() => {
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

    return () => observers.forEach(observer => observer.disconnect());
  }, [sections]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
        block: 'center'
      });
    }
  };

  return data && sections.length > 0 ? (
    <section ref={sectionRef} className="container-fluid min-h-screen">
      <div className="flex">
        <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
          <div className="max-w-lg">
            <nav className="space-y-8" role="navigation" aria-label="Experience sections">
              {sections.map((section) => (
                <div key={section.id} className="relative group">
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSectionClick(section.id)}
                    className={`text-left w-full transition-all duration-500 ${
                      activeSection === section.id ? 'opacity-100' : 'hover:opacity-70'
                    }`}
                    aria-current={activeSection === section.id ? 'true' : 'false'}
                    tabIndex={0}
                  >
                    <h5 className={`text-[20px] font-bold mb-0 transition-all duration-500 ${
                      activeSection === section.id ? 'fc-secondary' : 'fc-white'
                    }`}>
                      {section.id}
                    </h5>
                    <h3 className={`text-[24px] font-bold mb-2 transition-all duration-500 ${
                      activeSection === section.id ? 'fc-secondary' : 'fc-white'
                    }`}>
                      {section.title}
                    </h3>
                  </button>
                  {activeSection === section.id && (
                    <div className="absolute bottom-0 left-0 h-1 w-10 bg-[#9BE500] transition-all duration-500" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-1/2">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => (sectionsRefs.current[section.id] = el)}
              className="min-h-screen flex items-center"
            >
              <div className="max-w-xl">
                <div className="animate-fadeIn">
                  <p className="text-[22px] fc-primary mb-8 leading-relaxed">
                    {parse(DOMPurify.sanitize(section.subtitle))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-white mb-8" />
    </section>
  ) : (
    <section className="container-fluid">
      <p className="text-[18px] fc-primary text-center">No experience details available for this case study.</p>
    </section>
  );
}

SmoothExperienceSection.propTypes = {
  data: PropTypes.object.isRequired,
  jsonData: PropTypes.object.isRequired
};

function transformDataComp(data) {
  if (!data || !Array.isArray(data)) return [];
  const result = [];

  for (let i = 0; i < data.length; i += 2) {
    const componentObj = data[i];
    const technologyObj = data[i + 1];

    if (componentObj?.key === 'component' && technologyObj?.key === 'technology') {
      result.push({
        component: componentObj.value || '',
        technology: technologyObj.value || ''
      });
    }
  }

  return result;
}

function Components({ data, conclusion }) {
  const parseCom = data ? transformDataComp(data) : [];

  return data || conclusion ? (
    <div className="container-fluid relative">
      <div className="sec-padding pt-0">
        {parseCom.length > 0 ? (
          <div className="grid grid-cols-2">
            <div className="text-[22px] fc-secondary border-b border-gray-800 pb-3 pt-3">Component</div>
            <div className="text-[22px] fc-secondary border-b border-gray-800 pb-3 pt-3">Technology</div>
            {parseCom.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-[18px] fc-primary border-b border-gray-800 pb-3 pt-3">{item.component}</div>
                <div className="text-[18px] fc-primary border-b border-gray-800 pb-3 pt-3">{item.technology}</div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="text-[18px] fc-primary">{parse(DOMPurify.sanitize(conclusion)) || 'No components or conclusion provided.'}</p>
        )}
      </div>
    </div>
  ) : (
    <p className="text-[18px] fc-primary text-center">No components or conclusion available.</p>
  );
}

Components.propTypes = {
  data: PropTypes.array,
  conclusion: PropTypes.string
};
