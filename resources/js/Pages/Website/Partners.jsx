import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import parse from 'html-react-parser';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const introRef = useRef(null);

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
    <WebsiteLayout title="Contact | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
        <section ref={introRef} className="flex relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
                <div className="container-fluid relative mt-[150px]">
                    <div className="">
                        <div className="grid md:grid-cols-12 gap-12 items-center justify-center pb-[60px]">
                            <div className="lg:col-span-6 space-y-6">
                                <h1 className="text-[50px] fc-white leading-[1.1]">
                                     Meet Our Partners
                                </h1>
                            </div>
                            <div className="lg:col-span-6 space-y-6">
                                <div className="prose prose-lg prose-invert">
                                <h2 className="text-[30px] font-bold fc-secondary leading-tight">
                                   Unlocking Growth Through Strategic Alliances
                                </h2>
                                <p className="text-[16px] fc-primary leading-tight mb-0">
                                    Our strategic partners are an extension of our business and help us provide engaging customer experiences that benefit our customers' bottom lines.
                                </p>
                                </div>
                            </div>
                        </div>
                        <hr class="border-white mb-8"></hr>
                    </div>
                </div>
        </section>
        <PartnerForm />
        <Strategic />
    </WebsiteLayout>
  );
}



// Form Section //
const PartnerForm = () => {
  const [activeTab, setActiveTab] = useState('Become a Partner');

  const tabs = ['Become a Partner', 'For Services'];

  return (
    <div className="relative sec-padding">
      <div className="container-fluid grid lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-6">
          <h3 className="text-[22px] font-bold fc-primary leading-tight mb-3">Let’s get in touch!</h3>
          <p className="text-[16px] fc-primary leading-tight mb-0">
            We team up with organizations that care about more than the bottom line. If you're working to create measurable impact, let’s build something powerful together.
          </p>

            <div className="space-y-8 mt-5">
                </div>
            </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-6">
          <h3 className="text-[30px] fc-secondary mb-9">Uncover the Benefits Now!</h3>

          {/* Tabs */}
            <div className="flex mb-6 mt-6 text-sm">
                {tabs.map((tab, idx) => (
                    <div key={tab} className="flex items-center">
                    <button
                        onClick={() => setActiveTab(tab)}
                        className="flex flex-col items-start pr-6 text-left"
                    >
                        <span className="fc-primary">0{idx + 1}</span>

                        <span
                        className={`relative text-[18px] ${
                            activeTab === tab ? 'text-lime-400' : 'text-white'
                        }`}
                        >
                        {tab}
                        {activeTab === tab && (
                            <span className="absolute left-0 -bottom-1 w-1/2 border-b-2 border-lime-400"></span>
                        )}
                        </span>
                    </button>

                    {/* Vertical separator except after last */}
                    {idx < tabs.length - 1 && (
                        <div className="border-r border-gray-600 h-6 mx-3"></div>
                    )}
                    </div>
                ))}
            </div>



          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className=""
              />
              <input
                type="text"
                placeholder="Company name"
                className=""
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className=""
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className=""
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full"
            ></textarea>

            <button type="button" class="d-block ml-auto group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer">Submit<span class="fc-purple group-hover:translate-x-1 transition-transform ml-3">→</span></button>
          </form>
        </div>
      </div>
    </div>
  );
};


// Our Strategic Partner //
function Strategic() {
  const [activeSection, setActiveSection] = useState('text-to-text');
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});

  const sections = [
    {
      id: '01',
      title: 'For Teachers',
      subtitle: 'Academic Scheduling',
      description: 'The Problem: Timetables often clash, teachers get overloaded, or free periods aren’t used well.',
      features: [
        'EDUMAN’s Solution: Smart, automated scheduling ensures teachers get well-balanced workloads with no conflicts.',
      ],
      Image: '/images/partner.png',
      stats: {
        models: '25+',
        performance: '99.9%',
        latency: '<100ms'
      }
    },
    {
      id: '02',
      title: 'For Parents',
      subtitle: 'Paperwork & Tracking',
      description: 'The Problem: Maintaining attendance registers, filling out results, and updating progress reports takes too much time.',
      features: [
        'EDUMAN’s Solution: Everything is digitised in Eduman, from attendance to grades. Just enter the data, and the system does the rest.'
      ],
      Image: '/images/partner.png',
      stats: {
        models: '15+',
        performance: '99.8%',
        latency: '<2s'
      }
    },
    {
      id: '03',
      title: 'For School Admins & Management',
      subtitle: 'Paperwork & Tracking',
      description: 'The Problem: Maintaining attendance registers, filling out results, and updating progress reports takes too much time.',
      features: [
        'EDUMAN’s Solution: Everything is digitised in Eduman, from attendance to grades. Just enter the data, and the system does the rest.'
      ],
      Image: '/images/partner.png',
      stats: {
        models: '8+',
        performance: '99.5%',
        latency: '<5s'
      }
    }
  ];

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

  return (
    <>

    <div className="container-fluid">
        <div className='relative'>
            <h3 className='text-[30px] fc-secondary'>Strategic Partners</h3>
            <hr className='border-white mb-8'/>
        </div>
    </div>
      <section ref={sectionRef} className="container-fluid min-h-screen">
        {/* Main Content Area */}
        <div className="flex">
          {/* Left Side - Fixed Navigation */}
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-lg">
              {/* <div className="mb-12">
                <h1 className="text-[30px] font-bold fc-secondary leading-tight mb-6">
                  What Problems Does EDUMAN Solve?
                </h1>
                <p className="text-[18px] text-gray-400 leading-relaxed">
                  EDUMAN was built around real-world challenges faced by school administrators, teachers, and parents. It’s not just about technology, but about solving everyday problems in education.
                </p>
              </div> */}

              <nav className="space-y-8">
                {sections.map((section, index) => (
                  <div key={section.id} className="relative group">
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`text-left w-full transition-all duration-500 ${
                        activeSection === section.id
                          ? 'opacity-100'
                          : 'hover:opacity-70'
                      }`}
                    >
                      <h5 className={`text-[18px] mb-0 transition-all duration-500 fc-secondary ${
                        activeSection === section.id
                          ? 'fc-secondary'
                          : 'fc-white'
                      }`}>
                        {section.id}
                      </h5>
                      <h3 className={`text-[20px] transition-all duration-500  fc-secondary ${
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
                    <div className="">
                        <div className="animate-fadeIn">
                            {/* Title */}
                            {/* <h2 className="text-[36px] font-bold text-white mb-3">
                            {section.title}
                            </h2> */}
                             <img
                                src={section.Image}
                                alt={`${section.title} main image`}
                                className="w-full h-auto mb-6"
                            />

                            {/* Subtitle */}
                            <p className="text-[20px] fc-primary mb-2 leading-relaxed">
                                {section.subtitle}
                            </p>

                            <p className="text-[16px] fc-primary mb-2 leading-relaxed">
                                {section.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-4 mb-10">
                            {section.features.map((feature, featureIndex) => (
                                <div
                                key={featureIndex}
                                className="flex items-start"
                                >
                                {/* <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div> */}
                                <span className="fc-primary text-[16px] leading-relaxed">
                                    {feature}
                                </span>
                                </div>
                            ))}
                            </div>
                        </div>
                    <hr className="border-white mb-8"/>
                </div>
              </div>
            ))}
          </div>
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
