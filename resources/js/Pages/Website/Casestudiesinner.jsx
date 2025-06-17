import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import parse from 'html-react-parser';
import { usePage } from "@inertiajs/react";

gsap.registerPlugin(ScrollTrigger);




function parseTitles(data) {
  return Object.keys(data).map(key => {
    const cleanedKey = key.replace(/_\d+$/, ''); // Remove trailing underscore + digits
    return { key: cleanedKey, value: data[key] };
  });
}


export default function Casestudiesinner(props) {
  const introRef = useRef(null);
  const {casestudy} = props;
  console.log(casestudy);
  const jsonData = JSON.parse(casestudy.data);
    console.log(jsonData);
  useEffect(() => {
    const intro = introRef.current;

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
  }, []);

  return (
    <WebsiteLayout title="Case Studies | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
      <section ref={introRef} className="flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" />
        <div className="container-fluid relative mt-[150px]">
            <div className="">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/2">
                    <h1 className="text-[32px] fc-secondary leading-tight mb-6">
                        {casestudy.title} { jsonData.subtitle === '' && <> - <br className="hidden md:block" />{jsonData.subtitle}</> }
                    </h1>
                </div>
                <div className="md:w-1/2">
                    <div className="prose prose-lg prose-invert">
                    <p className="text-[16px] fc-primary leading-relaxed mb-6">
                         <div dangerouslySetInnerHTML={{ __html: casestudy.description || '' }} />
                    </p>

                    </div>
                </div>
                </div>
                <img
                    src="/images/case.png"
                    alt="HabibMetro Bank Project Overview"
                    className="w-full h-[50vh] object-cover mt-5 mb-5"
                />
                <p className="text-[32px] font-bold fc-secondary leading-tight">Services Provided</p>
                <hr className="border-white mb-8"/>
            </div>
        </div>
      </section>

      <Capabilities data={casestudy} jsonData={jsonData}/>
      <Beginning data={casestudy} jsonData={jsonData} />
      <SmoothExperienceSection data={casestudy} jsonData={jsonData}/>
      {/* <Components data={casestudy.techstack} conclusion={casestudy.component}/> */}
    </WebsiteLayout>
  );
}

const WebsiteShowcase = ({ title, description, link, image, index, isLast }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (isLast) {
      // For the last section, use different ScrollTrigger settings
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            // Fade out the content as we scroll past
            gsap.set(content, { opacity: 1 - self.progress });
          }
        }
      });

      tl.from(content, {
        y: 100,
        opacity: 0,
        duration: 1,
      });
    } else {
      // Regular sections
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        }
      });

      tl.from(content, {
        y: 100,
        opacity: 0,
        duration: 1,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
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
                <h2 className="text-[30px] text-lime-400 mb-6">{title}</h2>
                <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]"
                >
                {link}
                </a>
            </div>
            <div className="md:col-span-7 relative group">
                <div className="absolute inset-0 transform transition-transform duration-500 " />
                <img
                src={image}
                alt={title}
                className="w-full transform transition-all duration-500"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

function transformData(data) {
  const result = [];

  for (let i = 0; i < data.length; i += 2) {
    const titleObj = data[i];
    const imageObj = data[i + 1];

    // Make sure both objects exist and are valid
    if (titleObj?.key === 'title' && imageObj?.key === 'image') {
      result.push({
        title: titleObj.value,
        image: imageObj.value
      });
    }
  }

  return result;
}


function Capabilities(props) {
  const { data,jsonData } = props;
  const {appUrl} = usePage().props;
  console.log(jsonData["Service"]);
  const services = jsonData && jsonData["Service"] ? transformData(parseTitles(jsonData["Service"])) : [];
  const projects =
   services
  ? services.map((item, index) => ({
    id: String(index + 1).padStart(2, '0'), // "01", "02", "03", ...,
      title: item?.title,
      //set description to 10 words max
      description:data?.description || '',
         link: jsonData["Detail"]?.website || '',
         image:`${appUrl}/${item?.image}` || '/images/case2.png', // Default image if not provided
    }))
  : [];


  return (
    <div className="relative">
      {projects.map((project, index) => (
        <WebsiteShowcase
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
          index={index}
          isLast={index === projects.length - 1}
        />
      ))}
    </div>
  );
}

function Beginning(props) {
 const sectionRef = useRef(null);
 const { data ,jsonData } = props;
  useEffect(() => {
    // Simple fade-in animation (assuming gsap is available elsewhere)
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className=""
    >

    <div className="container-fluid">

        <hr className="border-white mb-8"/>
        <div className="sec-padding">
        <div className="grid lg:grid-cols-2 gap-12 align-items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-2xl">
              <img
                src="/images/begi.png"
                alt="Team collaboration in modern office"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            {jsonData["Detail"]?.the_beginning && <>
            <h2 className="text-[30px] fc-secondary font-bold mb-3">
              The Beginning - Understanding the Need
            </h2>

            <div className="mb-8">
                { parse(jsonData["Detail"]["the_beginning"]) }
            </div>
            </>}
             {jsonData["Approach"]?.description && <>
            <div>
              <h3 className="text-lime-400 text-2xl lg:text-3xl font-bold mb-2">
                Our Approach
              </h3>

              { parse(jsonData["Approach"]["description"]) }
            </div>
                </>}
          </div>

        </div>

            {/* Bottom text */}
            {jsonData["Approach"]?.lower_description &&
            <div className="fc-primary text-lg leading-relaxed mt-7">
             { parse(jsonData["Approach"]?.lower_description || '') }
            </div>
            }
      </div>
      <hr className="border-white mb-8"/>
    </div>
    </section>
  );
}


function transformDataExperience(data) {
  const result = [];
    console.log("dara",data);
  for (let i = 0; i < data.length; i += 2) {
    const labelObj = data[i];
    const descriptionObj = data[i + 1];
    console.log("dara",labelObj, descriptionObj);
    // Make sure both objects exist and are valid
    if (labelObj?.key === 'label' && descriptionObj?.key === 'description') {
      result.push({
        label: labelObj.value,
        description: descriptionObj.value
      });
    }
  }

  return result;
}



// fixed hight section //
function SmoothExperienceSection(props) {
  const [activeSection, setActiveSection] = useState('text-to-text');
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});
  const { data , jsonData } = props;
    console.log(jsonData);
    const experience = transformDataExperience(parseTitles(jsonData["Experience"]));
    console.log(experience);
  const [sections, setSections] = useState(
     experience
        ? experience.map((item, index) => ({

      id: String(index + 1).padStart(2, '0'), // "01", "02", "03", ...,
      title: item?.label || '',
      subtitle: item?.description || '',
      }))
   : []);


  // Scroll observer to update active section based on scroll position
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
        block: 'center'
      });
    }
  };

  const currentSection = sections.find(s => s.id === activeSection);

  return data &&  (
    <>
      <section ref={sectionRef} className="container-fluid min-h-screen">
        {/* Main Content Area */}
        <div className="flex">
          {/* Left Side - Fixed Navigation */}
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-lg">
              {/* <div className="mb-12">
                <h1 className="text-[42px] font-bold text-white mb-4">
                  AI Model Suite
                </h1>
                <p className="text-[18px] text-gray-400 leading-relaxed">
                  Explore our comprehensive collection of AI models designed for different use cases and applications.
                </p>
              </div> */}

              <nav className="space-y-8">
                {sections.map((section, index) => (
                    console.log(section),
                  <div key={section.id} className="relative group">
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`text-left w-full transition-all duration-500 ${
                        activeSection === section.id
                          ? 'opacity-100'
                          : 'hover:opacity-70'
                      }`}
                    >
                      <h5 className={`text-[20px] font-bold mb-0 transition-all duration-500 ${
                        activeSection === section.id
                          ? 'fc-secondary'
                          : 'fc-white'
                      }`}>
                        {section.id}
                      </h5>
                      <h3 className={`text-[24px] font-bold mb-2 transition-all duration-500 ${
                        activeSection === section.id
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
                    {activeSection === section.id && (
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
                key={section.id}
                ref={el => sectionsRefs.current[section.id] = el}
                className="min-h-screen flex items-center"
              >
                <div className="max-w-xl">
                  <div className="animate-fadeIn">
                    {/* Title */}
                    {/* <h2 className="text-[36px] font-bold text-white mb-3">
                      {section.title}
                    </h2> */}

                    {/* Subtitle */}
                    <p className="text-[22px] fc-primary mb-8 leading-relaxed">
                      {parse(section.subtitle)}
                    </p>

                    {/* Features */}
                    {/* <div className="space-y-4 mb-10">
                      {section.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start"
                        >
                          <span className="fc-primary text-[18px] leading-relaxed">
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


// Table Section //
function Components(props) {
    const { data,conclusion } = props;
  return data ? (

    <div className="container-fluid relative">
      <div className="sec-padding pt-0">
        <div className="grid grid-cols-2 ">

          <div className="text-[22px] fc-secondary border-b border-gray-800 pb-3 pt-3 ">Component</div>
          <div className="text-[22px] fc-secondary border-b border-gray-800 pb-3 pt-3 ">Technology</div>

         {data && data.map((item, index) => (
   <>       <div className="text-[18px] fc-primary border-b border-gray-800 pb-3 pt-3 ">{item["component"]}</div>
          <div className="text-[18px] fc-primary border-b border-gray-800 pb-3 pt-3 ">{item["technology"]}</div>
</>))}
        </div>
      </div>
    </div>
  ) :   <div className="container-fluid relative">
      <div className="sec-padding pt-0">
        {conclusion && <p className="text-[18px] fc-primary">{conclusion}</p>}
      </div>
    </div> ;
};


