import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ChevronDown } from 'lucide-react';
import { usePage,Link } from "@inertiajs/react";
import axios from "axios";
import parse from 'html-react-parser';



function SmoothProductSection() {
  const [activeSection, setActiveSection] = useState('text-to-text');
  const sectionRef = useRef(null);
  const sectionsRefs = useRef({});



    const {appUrl} = usePage().props
    //laravel api axios api/v1/services
    const [sections , setSection] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/v1/products')
            .then(response => {
                console.log(response.data);
                setSection(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);



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
          threshold: 0.6,
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
        block: 'center'
      });
    }
  };

  const currentSection = sections.find(s => s.section_no === activeSection);

  return (
    <>
    <FiltersWithSearch/>
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
                        {section.section_no}
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
                className="min-h-screen flex items-center"
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
                    {/* <h2 className="text-[36px] font-bold text-white mb-3">
                      {section.title}
                    </h2> */}

                    {/* Subtitle */}
                    <p className="text-[18px] fc-primary mb-4 leading-relaxed">
                      {parse(section.description)}
                    </p>

                    {/* Features */}
                    {/* <div className="mb-10">
                      {section.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start"
                        >

                          <span className="fc-primary text-[16px] leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div> */}

                    <Link className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer" href={route('web.product.show', {slug: section.slug})}>Read more <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span></Link>
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

export default SmoothProductSection;


// Filter //

const industries = ["Finance", "Healthcare", "Education", "Retail"];
const services = ["Consulting", "Development", "Marketing", "Support"];
const names = ["Alpha", "Beta", "Gamma", "Delta"];

function FiltersWithSearch() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Toggle dropdown open/close
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Filter function for search
  const filterItems = (items) =>
    items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="container-fluid">
        <div className="text-white flex items-center justify-between border-t border-b border-[#91A7BA] relative px-4 py-2 bg-dark-950">
            <div className="flex items-center gap-6">
                {/* Dropdown 1 */}
                <div className="relative">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:text-[#9BE500] transition-colors select-none"
                    onClick={() => toggleDropdown("industries")}
                >
                    <span>Select Industries</span>
                    <ChevronDown size={16} />
                </div>
                {openDropdown === "industries" && (
                    <ul className="absolute z-20 mt-2 w-40 max-h-48 overflow-auto rounded bg-gray-800 text-white shadow-lg">
                    {filterItems(industries).map((industry) => (
                        <li
                        key={industry}
                        className="px-4 py-2 hover:bg-[#9BE500]/30 cursor-pointer"
                        >
                        {industry}
                        </li>
                    ))}
                    </ul>
                )}
                </div>

                {/* Dropdown 2 */}
                <div className="relative">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:text-[#9BE500] transition-colors select-none"
                    onClick={() => toggleDropdown("services")}
                >
                    <span>Select Services</span>
                    <ChevronDown size={16} />
                </div>
                {openDropdown === "services" && (
                    <ul className="absolute z-20 mt-2 w-40 max-h-48 overflow-auto rounded bg-gray-800 text-white shadow-lg">
                    {filterItems(services).map((service) => (
                        <li
                        key={service}
                        className="px-4 py-2 hover:bg-[#9BE500]/30 cursor-pointer"
                        >
                        {service}
                        </li>
                    ))}
                    </ul>
                )}
                </div>

                {/* Dropdown 3 */}
                <div className="relative">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:text-[#9BE500] transition-colors select-none"
                    onClick={() => toggleDropdown("names")}
                >
                    <span>Select by Name</span>
                    <ChevronDown size={16} />
                </div>
                {openDropdown === "names" && (
                    <ul className="absolute z-20 mt-2 w-40 max-h-48 overflow-auto rounded bg-gray-800 text-white shadow-lg">
                    {filterItems(names).map((name) => (
                        <li
                        key={name}
                        className="px-4 py-2 hover:bg-[#9BE500]/30 cursor-pointer"
                        >
                        {name}
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </div>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 ml-4 min-w-[180px]"
            />
            </div>
    </div>
  );
}

