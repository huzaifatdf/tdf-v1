import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { ChevronDown } from 'lucide-react';
import SmoothExperienceSection from "@/Components/frontend/SmoothExperienceSection";

gsap.registerPlugin(ScrollTrigger);




export default function Casestudiesmain() {
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
    <WebsiteLayout title="Services | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
      <section ref={introRef} className="banner-inner-page min-h-[40vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" />
            <div className="container-fluid relative mt-[150px] mb-[30px]">
                <div className="">
                    <div className="flex flex-col md:flex-row items-center  mb-[100px] mar-mob-0 gap-12">
                        <div className="md:w-1/2">
                            <h1 className="mobile-banner-heading text-[50px] fc-secondary leading-[1.1]">
                                From Vision to Reality
                            </h1>
                        </div>
                        <div className="md:w-1/2">
                            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                                Bold concepts. Strategic execution. Lasting impact. We turn vision into reality—so you can lead your industry.
                            </p>
                        </div>
                    </div>
                    <p class="text-[32px] fc-secondary leading-tight">Services</p>
                    <hr class="border-white mb-8"></hr>
                </div>
            </div>
      </section>
      <SmoothExperienceSection />
    </WebsiteLayout>
  );
}



// fixed hight section //




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
                className="mobilehide bg-transparent border-none outline-none text-white placeholder-gray-400 ml-4 min-w-[180px]"
            />
            </div>
    </div>
  );
}

