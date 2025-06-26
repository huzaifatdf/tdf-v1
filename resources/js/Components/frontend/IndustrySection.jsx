import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePage, Link } from "@inertiajs/react";
import axios from "axios";
import parse from 'html-react-parser';

export default function IndustrySection() {
  const { appUrl } = usePage().props;

  const [data, setData] = React.useState([]);
  const [expandedItems, setExpandedItems] = useState({}); // key = index, value = boolean

  React.useEffect(() => {
    axios.get('/api/v1/industries')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="mobile-screens py-16 relative">
      <div className="container-fluid">
        {data.length > 0 && data.map((dataItem, index) => {
          const jsonData = JSON.parse(dataItem.data);
          const isExpanded = expandedItems[index] || false;

          return (
            <div className={`grid md:grid-cols-12 gap-12 border-b border-gray-800 pb-[60px] ${index === 0 ? 'pt-0' : 'pt-[60px]'}`} key={index}>
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-[30px] fc-secondary leading-tight">
                  {dataItem.title || ''}
                </h2>

                <p className="text-[18px] fc-primary leading-relaxed">
                  {dataItem.description || ''}
                </p>

                {isExpanded && (
                  <p className="text-[16px] fc-primary leading-relaxed">
                    {jsonData["Detail"]["more_detail"] || ''}
                  </p>
                )}

                <div className="mt-6">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                    <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Middle Column */}
              <div className="lg:col-span-4 space-y-6">
                <h3 className="fc-primary text-[20px] font-bold">
                  {jsonData["Our Work"]["title"] || ''}
                </h3>

                <div className="space-y-3 pb-[60px]">
                  <div className="text-[18px] fc-primary leading-relaxed">
                    {parse(jsonData["Our Work"]["description"] || '')}
                  </div>

                  <Link href={'casestudiesmain'} className="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</Link>
                </div>

                <Link href={'Servicesmain'} className="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span className="fc-purple group-hover:translate-x-1 transition-transform">→</span></Link>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2">
                <div className="h-[300px] flex justify-center items-center bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/background04.png')" }}>
                  <img
                    src={`${appUrl}/${dataItem?.image || ''}`}
                    alt="Industry Icon"
                    className="w-24 h-24 mx-auto"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
