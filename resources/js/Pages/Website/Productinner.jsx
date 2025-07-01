import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import { Link, usePage } from "@inertiajs/react";
import parse from 'html-react-parser';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import ProductForm from "@/Components/ProductForm";

gsap.registerPlugin(ScrollTrigger);

export default function Productinner() {
  const introRef = useRef(null);
  const {product,appUrl,previousSlug,nextSlug} = usePage().props;
  const jsonParseData = JSON.parse(product.data);


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
                <div className="banner-inner-page  flex flex-col md:flex-row gap-12 items-start align-items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-[34px] fc-secondary leading-tight mb-6">
                            {/* Eduman<br className="hidden md:block" />A Saas-Based School Management System */}
                            {product.title}
                        </h1>
                        <img
                            src={`${appUrl}/${product?.thumbnail}`}
                            alt="HabibMetro Bank Project Overview"
                            className="w-full h-[50vh] object-cover mt-3 mb-5"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <div className="prose prose-lg prose-invert">
                        <p className="mobile-banner-sub-heading text-[30px] fc-white leading-tight">
                            Quick Highlights
                        </p>
                        {/* <p className="text-[16px] fc-primary leading-relaxed mb-6">
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
                        </p> */}
                       <p className="mobile-banner-para text-[20px] fc-primary leading-relaxed mb-6"> {parse(product.description)}</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <BenefitsContactForm product={product.title}/>
          <div className="container-fluid ">
            <div className="py-16 relative">
                <h2 className="text-[32px] fc-secondary leading-tight mb-6">
                Detailed Overview
                </h2>

                <div className="leading-relaxed mobile-screens">
                    <p className="text-[18px] fc-primary leading-relaxed mb-2">
                        {parse(jsonParseData.Detail.detail_overview)}
                    </p>

                </div>
            </div>

                <hr className="border-white mb-8"/>
            </div>
        <WhatProblem problem={jsonParseData.Problem} solutions={jsonParseData["problem Solutions"]} />
           <section className="container-fluid flex flex-col md:flex-row items-center justify-between gap-10 relative">
      {/* Left Content */}
        <div className="flex-1">
            <h2 className="text-[30px] font-bold fc-secondary leading-tight mb-6">
            {jsonParseData["Our Work"]["title"]}
            </h2>
            <p className="text-[18px] text-white leading-relaxed">
            {/* Let us show you how <strong>EDUMAN</strong> can simplify your school’s operations.<br />
            <span className="text-lime-400 font-medium">Book a Demo</span> today! */}
            {parse(jsonParseData["Our Work"]["description"])}
            </p>
            <div className="mt-6">
            <Link href="/casestudiesmain" className="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">
                See Our Work
                <span class="fc-purple group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
            <img
            src={`${appUrl}/${product?.image}`}
            alt="Eduman Demo Devices"
            className="w-full"
            />
        </div>
        </section>
        <FloatIcon preSlug={previousSlug} nextSlug={nextSlug} />
        </WebsiteLayout>
  );
}



// Form //
function BenefitsContactForm(props) {
    const { product} = props;

  return (
    <div className="relative py-16 bg-[#040404]">
      <div className="container-fluid">
        <h2 className="text-[32px] fc-secondary leading-tight mb-9">
          Uncover the Benefits Now!
        </h2>

        <div className="space-y-8">
        <ProductForm product={product}/>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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

          <div className="flex justify-end mt-12">
            <button
              type="button"
              onClick={handleSubmit}
              className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer"
            >
              Submit
              <span class="fc-purple group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}







function parseData(data) {
  if (!data || typeof data !== 'object') return [];

  const grouped = {};

  Object.keys(data).forEach(key => {
    const match = key.match(/(label|description)_(\d+)/);
    if (!match) return;

    const [, type, index] = match;
    if (!grouped[index]) grouped[index] = { id: `0${index}` };
    grouped[index][type] = data[key];
  });

  return Object.values(grouped)
    .filter(obj => obj.label != null)
    .map(obj => ({
      id: obj.id.padStart(2, '0'), // Ensure two-digit id like '01', '02'
      title: obj.label,
      description: obj.description || ''
    }));
}

// What Problem //
function WhatProblem(props) {
  const [activeSection, setActiveSection] = useState('01'); // Set default to first section
  const sectionRef = useRef(null);
  const { problem, solutions } = props;
  const sections = parseData(solutions);

  // Set default active section to first section if sections exist
  useEffect(() => {
    if (sections.length > 0 && !sections.find(s => s.id === activeSection)) {
      setActiveSection(sections[0].id);
    }
  }, [sections]);

  // GSAP entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
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
    }
  }, []);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <>
      <section ref={sectionRef} className="container-fluid min-h-screen content-style mobile-screens">
        {/* Main Content Area */}
        <div className="flex">
          {/* Left Side - Fixed Navigation */}
          <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-lg">
              <div className="mb-12">
                <h1 className="text-[32px] fc-secondary leading-tight mb-6">
                  {problem?.problem || 'What Problem?'}
                </h1>
                <p className="text-[18px] fc-primary leading-relaxed">
                  {problem?.problem_description ? parse(problem?.problem_description) : '...'}
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
                    {/* Active indicator */}
                    {activeSection === section.id && (
                      <div className="absolute bottom-0 left-0 h-1 w-10 bg-[#9BE500] transition-all duration-500"></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Side - Tab Content */}
          <div className="w-1/2 flex items-center justify-center min-h-screen">
            <div className="max-w-xl w-full">
              {currentSection && (
                <div className="animate-fadeIn">
                  <p className="text-[16px] fc-primary mb-8 leading-relaxed">
                    {parse(currentSection.description)}
                  </p>
                  <hr className="border-white mb-8"/>
                </div>
              )}

              {/* Show message if no content */}
              {!currentSection && (
                <div className="text-center">
                  <p className="text-[16px] fc-primary">
                    Select a section to view content
                  </p>
                </div>
              )}
            </div>
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


// Float Icon //
const FloatIcon = ({preSlug,nextSlug}) => {
  return (
    <>
    {nextSlug && (
    <div className="fixed top-0 bottom-0 right-[-25px] flex items-center">
      <Link  href={route('web.product.show', { slug: nextSlug })} >
        <img
            src="/images/right.svg"
            alt="Float Icon"
            className="w-24 h-24"
        />
      </Link>
    </div>
    ) }

    {preSlug && (
    <div className="fixed top-0 bottom-0 left-[-25px] flex items-center">
      <Link href={route('web.product.show', { slug: preSlug })}>
        <img
            src="/images/left.svg"
            alt="Float Icon"
            className="w-24 h-24"
        />

      </Link>
    </div>
    )}
    </>
  );
};
