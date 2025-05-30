import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";

gsap.registerPlugin(ScrollTrigger);

export default function Productinner() {
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
    <WebsiteLayout title="Case Studies | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
          <section ref={introRef} className="flex items-center bg-dark-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
            <div className="container-fluid relative mt-[150px]">
                <div className="flex flex-col md:flex-row gap-12 items-start align-items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-[30px] fc-secondary leading-tight mb-6">
                            Eduman<br className="hidden md:block" />A Saas-Based School Management System
                        </h1>
                        <img
                            src="/images/productinner.png"
                            alt="HabibMetro Bank Project Overview"
                            className="w-full h-[50vh] object-cover mt-3 mb-5"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <div className="prose prose-lg prose-invert">
                        <p className="text-[20px] font-bold fc-primary leading-relaxed  mb-2">
                            Quick Highlights
                        </p>
                        <p className="text-[16px] fc-primary leading-relaxed mb-6">
                            100% Cloud-Based: No servers or installations required.
                            Mobile App: Easy to use on smartphones and tablets.
                            Modular & Customizable: Choose the features that work best for you.
                            Multilingual Support: Available in English, Arabic, Urdu, and more.
                            Easy Management of Fees, Exams, and Attendance: Everything in one place.
                            Trusted Worldwide: 200+ institutions and more than 1.4 million students globally.
                        </p>
                        <p className="text-[20px] font-bold fc-primary leading-relaxed mb-2">
                            Curious how it works for your school?
                        </p>
                        <p className="text-[16px] fc-primary leading-relaxed">
                            Provide a few quick details, and we’ll give you access to a full walkthrough + demo video.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <BenefitsContactForm />
        <DetailedOverview />
        <WhatProblem />
        <EdumanDemoSection />
        <FloatIcon />
        </WebsiteLayout>
  );
}



// Form //
function BenefitsContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    mobileNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="relative py-16 bg-[#040404]">
      <div className="container-fluid">
        <h2 className="text-[30px] font-bold fc-secondary leading-tight mb-9">
          Uncover the Benefits Now!
        </h2>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full bg-transparent border-b-2 border-gray-600 py-2 px-0 text-white transition-colors duration-300"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                required
              />
            </div>

            {/* Company */}
            <div className="relative">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full bg-transparent border-b-2 border-gray-600 py-2 px-0 text-white transition-colors duration-300"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-gray-600 py-2 px-0 text-white transition-colors duration-300"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="relative">
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="w-full bg-transparent border-b-2 border-gray-600 py-2 px-0 text-white transition-colors duration-300"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-12">
            <button
              type="button"
              onClick={handleSubmit}
              className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer"
            >
              Submit
              <span class="fc-purple group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// Detailed Overview //
function DetailedOverview() {
  return (
    <div className="container-fluid ">
      <div className="py-16 relative">
        <h2 className="text-[30px] font-bold fc-secondary leading-tight mb-6">
          Detailed Overview
        </h2>

        <div className="text-gray-300 leading-relaxed">
            <p className="text-[16px] fc-primary leading-relaxed mb-2">
                Managing a school is not easy. Behind the scenes, a lot is going on, including managing teacher schedules, tracking fee collections, and keeping an eye on student performance. 
            </p>
            <p className="text-[16px] fc-primary leading-relaxed mb-2">
                EDUMAN, a cloud-based, SaaS (Software as a Service) School Management and Learning Management System (LMS), is developed to make all of this simpler. 
            </p>
            <p className="text-[16px] fc-primary leading-relaxed mb-2">
                As a strategic partner, The Design Firm (TDF) helps bring EDUMAN to educational institutions that want to simplify operations and improve the learning experience.
            </p>
        </div>
      </div>

        <hr className="border-white mb-8"/>
    </div>
  );
}


// What PRoblem //
function WhatProblem() {
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
      <section ref={sectionRef} className="container-fluid min-h-screen">
        {/* Main Content Area */}
        <div className="flex">
          {/* Left Side - Fixed Navigation */}
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-lg">
              <div className="mb-12">
                <h1 className="text-[30px] font-bold fc-secondary leading-tight mb-6">
                  What Problems Does EDUMAN Solve?
                </h1>
                <p className="text-[16px] fc-primary leading-relaxed">
                  EDUMAN was built around real-world challenges faced by school administrators, teachers, and parents. It’s not just about technology, but about solving everyday problems in education.
                </p>
              </div>

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
                    <div className="max-w-xl">
                    <div className="animate-fadeIn">
                        {/* Title */}
                        {/* <h2 className="text-[36px] font-bold text-white mb-3">
                        {section.title}
                        </h2> */}

                        {/* Subtitle */}
                        <p className="text-[20px] fc-primary mb-8 leading-relaxed">
                        {section.subtitle}
                        </p>

                        <p className="text-[16px] fc-primary mb-8 leading-relaxed">
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


// Ready TO See Demo//
const EdumanDemoSection = () => {
  return (
    <section className="container-fluid flex flex-col md:flex-row items-center justify-between gap-10 relative">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-[30px] font-bold fc-secondary leading-tight mb-6">
          Ready to See It in Action?
        </h2>
        <p className="text-[18px] text-gray-400 leading-relaxed">
          Let us show you how <strong>EDUMAN</strong> can simplify your school’s operations.<br />
          <span className="text-lime-400 font-medium">Book a Demo</span> today!
        </p>
        <div className="mt-6">
          <a href="#" className="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">
            See Our Work
            <span class="fc-purple group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src="/images/productinner2.png"
          alt="Eduman Demo Devices"
          className="w-full"
        />
      </div>
    </section>
  );
};

// Float Icon //
const FloatIcon = () => {
  return (
    <>
    <div className="fixed top-0 bottom-0 right-[-25px] flex items-center">
      <a href="#">
        <img
            src="/images/right.svg"
            alt="Float Icon"
            className="w-24 h-24"
        />
      </a>
    </div>

    <div className="fixed top-0 bottom-0 left-[-25px] flex items-center">
      <a href="#">
        <img
            src="/images/left.svg"
            alt="Float Icon"
            className="w-24 h-24"
        />
      </a>
    </div>
    </>
  );
};
