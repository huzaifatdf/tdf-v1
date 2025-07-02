import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import parse from 'html-react-parser';
import DynamicForm from '@/Components/frontend/DynamicForm';

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
    <WebsiteLayout title="Partners | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
        <section ref={introRef} className="banner-inner-page flex relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
                <div className="container-fluid relative mt-[150px]">
                    <div className="">
                        <div className="flex flex-col md:flex-row gap-12 pb-[60px]">
                            <div className="md:w-1/2">
                                <h1 className="mobile-banner-heading text-[50px] fc-secondary leading-tight mb-0">
                                     Meet Our Partners
                                </h1>
                            </div>
                            <div className="md:w-1/2">
                                <div className="prose prose-lg prose-invert">
                                    <h2 className="mobile-banner-sub-heading text-[30px] fc-primary leading-tight">
                                    Strategic Partnerships Fuel Meaningful Progress
                                    </h2>
                                    <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
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
    <div className="banner-inner-page relative sec-padding">
      <div className="container-fluid grid lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-6">
            <h2 className="mobile-banner-sub-heading text-[30px] fc-secondary leading-tight">
                Why You Should Become Our Partner
            </h2>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                Collaboration is powerful, and we believe it. When you partner with TDF, you join a network that delivers innovative, scalable, and sustainable solutions. Here’s what you get:
            </p>

            <h3 className="text-[22px] font-bold fc-primary leading-tight mb-1 mt-4">Business Growth:</h3>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                 Explore untapped markets and increase your service offerings.
            </p>

            <h3 className="text-[22px] font-bold fc-primary leading-tight mb-1 mt-4">Collaborative Innovation:</h3>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                Co-create digital solutions to address complex challenges.
            </p>

            <h3 className="text-[22px] font-bold fc-primary leading-tight mb-1 mt-4">Shared Success:</h3>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                Align with our vision for long-term, mutually beneficial relationships.
            </p>

            <h3 className="text-[22px] font-bold fc-primary leading-tight mb-1 mt-4">Marketing and Branding Support:</h3>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                Increase visibility through joint marketing initiatives.
            </p>

            <h3 className="text-[22px] font-bold fc-primary leading-tight mb-1 mt-4">Knowledge Sharing:</h3>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                Access technical resources, tools, and ongoing training.
            </p>

            <div className="space-y-8 mt-5"></div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-6">
          <h2 className="mobile-banner-sub-heading text-[30px] fc-secondary leading-tight">
                Uncover the Benefits Now!
            </h2>
            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                There are so many ways we can work together to create exponential digital impact. Let’s get in touch!
            </p>

           <DynamicForm formSlug="partner-form"/>
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
      title: 'Above Horizon',
      subtitle: 'Saudi Arabia',
      description: 'Yasser Shamma <br> Chief Operations Officer',
      features: [
        'yasser.shamma@thedesignsfirm.com <br> Riyadh, Saudi Arabia – Al Malaz',
      ],
      Image: '/images/horizonpartner.png',
      stats: {
        models: '25+',
        performance: '99.9%',
        latency: '<100ms'
      }
    },
    {
      id: '02',
      title: 'E&E Business Solutions',
      subtitle: 'Oman',
      description: 'Mr. Ali Almarjibi',
      features: [
        'Ali.marjibi@e-ebs.com / info@e-ebs.com <br> Riyadh, Muscat, Oman',
      ],
      Image: '/images/businesspartner.png',
      stats: {
        models: '15+',
        performance: '99.8%',
        latency: '<2s'
      }
    },
    {
      id: '03',
      title: 'Elkhidir Abderlasoul',
      subtitle: 'Oman',
      description: '',
      features: [
        'elkhidir@outlook.com <br> +968 9218 4151 <br> Al Seeb, Way 3451, Muscat, Oman',
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

    <div className="banner-inner-page container-fluid">
        <div className='relative'>
            <h3 className='mobile-banner-sub-heading text-[30px] fc-secondary leading-tight'>Our Strategic Partners</h3>
            <hr className='border-white mb-8'/>
        </div>
    </div>
      <section ref={sectionRef} className="container-fluid min-h-screen mobile-screens">
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
                      <h5 className={`text-[18px] mb-0 transition-all duration-500 ${
                        activeSection === section.id
                          ? 'fc-purple'
                          : 'fc-white'
                      }`}>
                        {section.subtitle}
                      </h5>
                      <h3 className={`text-[20px] transition-all duration-500  ${
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
                    <div className="w-full">
                        <div className="animate-fadeIn">
                            {/* Title */}
                            {/* <h2 className="text-[36px] font-bold text-white mb-3">
                            {section.title}
                            </h2> */}
                             <img
                                src={section.Image}
                                alt={`${section.title} main image`}
                                className="w-full h-[40vh] object-cover mb-6  mobile-height-img"
                            />

                            {/* Subtitle */}
                            <p className="text-[22px] font-bold fc-primary mb-2 leading-relaxed">
                                {section.title}
                            </p>

                            <p className="text-[18px] fc-primary leading-relaxed mb-0">
                                {parse(section.description)}
                            </p>

                            {/* Features */}
                            <div className="space-y-4 mb-10">
                            {section.features.map((feature, featureIndex) => (
                                <div
                                key={featureIndex}
                                className="flex items-start"
                                >
                                {/* <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div> */}
                                <span className="text-[18px] fc-primary leading-relaxed">
                                    {parse(feature)}
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
