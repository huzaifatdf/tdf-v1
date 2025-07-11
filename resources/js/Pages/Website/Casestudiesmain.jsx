import React, { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { ChevronDown } from 'lucide-react';
import { Link, usePage } from "@inertiajs/react";
import SmoothCaseStudiesSection from "@/Components/frontend/SmoothCaseStudiesSection";
import TestimonialsSection from "@/Components/frontend/TestimonialsSection";
import ClientSlider from "@/Components/frontend/ClientSlider";

gsap.registerPlugin(ScrollTrigger);

export default function Casestudiesmain(props) {
  const introRef = useRef(null);
  const { metaTitle, metaDescription ,page} = usePage().props;


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
    <WebsiteLayout title={metaTitle} description={metaDescription}
      metaSchema={page?.meta_schema}
            customScripts={page?.customscripts}
            socialMeta={page?.social_meta}
            metaKeywords={page?.meta_keywords}
            customStyles={page?.customstyles}
            canonicalUrl={page?.canonical_url}
    >
      <section ref={introRef} className="banner-inner-page min-h-[40vh] flex items-center relative overflow-hidden">
        <div className="container-fluid relative mt-[100px] mb-[30px]">
            <div className="">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h1 className="mobile-banner-heading text-[50px] fc-secondary leading-tight mb-0">
                            Behind the Work
                        </h1>
                    </div>
                    <div className="md:w-1/2">
                        <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                            Bold concepts. Strategic execution. Lasting impact. We turn vision into reality—so you can lead your industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <div className="container-fluid">
        <hr className="border-white mb-8"/>
      </div>

      <SmoothCaseStudiesSection/>
      <ClientSlider />
    </WebsiteLayout>
  );
}



// fixed hight section //
// function SmoothExperienceSection({ data }) {
//   const [activeSection, setActiveSection] = useState(data && data.length > 0 ? String(1).padStart(2, '0') : null);
//   const sectionRef = useRef(null);
//   const sectionsRefs = useRef({});
// const [sections,setSections] = useState( data
//   ? data.map((item, index) => ({
//     id: String(index + 1).padStart(2, '0'), // "01", "02", "03", ...,
//       title: item.title ,
//       slug: item.slug,
//       //set description to 10 words max
//       subtitle: item.description.length > 10 ? item.description.split(' ').slice(0, 10).join(' ') + '...' : item.description,
//       logo: '/images/logo.svg',
//       mainImage: '/images/case4.png',
//       features: Array.isArray(item.services) ? item.services : [],
//       stats: {
//         models: '25+',
//         performance: '99.9%',
//         latency: '<100ms',
//       },
//     }))
//   : []);



//   // Scroll observer to update active section based on scroll position
//   useEffect(() => {
//     const observers = [];

//     sections.forEach((section) => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveSection(section.id);
//           }
//         },
//         {
//           threshold: 0.6,
//           rootMargin: '-20% 0px -20% 0px'
//         }
//       );

//       const element = sectionsRefs.current[section.id];
//       if (element) {
//         observer.observe(element);
//         observers.push(observer);
//       }
//     });

//     return () => {
//       observers.forEach(observer => observer.disconnect());
//     };
//   }, [sections]);

//   // GSAP entrance animation
//   useEffect(() => {
//     const section = sectionRef.current;

//     gsap.from(section, {
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         end: "bottom center",
//         toggleActions: "play none none reverse"
//       }
//     });
//   }, []);

//   const handleSectionClick = (sectionId) => {
//     const element = sectionsRefs.current[sectionId];
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center'
//       });
//     }
//   };

//   const currentSection = sections.find(s => s.id === activeSection);

//   return (
//     <>
//       <section ref={sectionRef} className="container-fluid min-h-screen">
//         <div className="flex sec-padding pt-0">
//           <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center">
//             <div className="max-w-lg">

//               <nav className="space-y-8 pl-6 h-[650px] overflow-y-auto custom-scrollbar custom-mobile-height"
//                 style={{ direction: 'rtl' }}
//                 >
//                 {sections.map((section, index) => (
//                   <div key={section.id} className="relative group" style={{ direction: 'ltr' }}>
//                     <button
//                       onClick={() => handleSectionClick(section.id)}
//                       className={`text-left w-full transition-all duration-500 ${
//                         activeSection === section.id
//                           ? 'opacity-100'
//                           : 'hover:opacity-70'
//                       }`}
//                     >
//                       <h5 className={`text-[18px] mb-0 transition-all duration-500 ${
//                         activeSection === section.id
//                           ? 'fc-secondary'
//                           : 'fc-white'
//                       }`}>
//                         {section.id}
//                       </h5>
//                       <h3 className={`text-[20px] transition-all duration-500  ${
//                         activeSection === section.id
//                           ? 'fc-secondary'
//                           : 'fc-white'
//                       }`}>
//                         {section.title}
//                       </h3>
//                       {/* <p className={`text-[14px] leading-relaxed transition-all duration-500 ${
//                         activeSection === section.id
//                           ? 'text-gray-300'
//                           : 'text-gray-500'
//                       }`}>
//                         {section.subtitle}
//                       </p> */}
//                     </button>

//                     {/* Active indicator */}
//                     {activeSection === section.id && (
//                       <div className="absolute bottom-0 left-0 h-1 w-10 bg-[#9BE500] transition-all duration-500"></div>

//                     )}
//                   </div>
//                 ))}
//               </nav>

//               {/* Progress indicator */}
//               {/* <div className="mt-12 flex items-center space-x-2">
//                 {sections.map((section, index) => (
//                   <div
//                     key={section.id}
//                     className={`h-1 rounded-full transition-all duration-500 ${
//                       sections.findIndex(s => s.id === activeSection) >= index
//                         ? 'bg-blue-500 w-8'
//                         : 'bg-gray-700 w-4'
//                     }`}
//                   />
//                 ))}
//               </div> */}
//             </div>
//           </div>

//           {/* Right Side - Scrollable Content */}
//           <div className="w-1/2">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 ref={el => sectionsRefs.current[section.id] = el}
//                 className="min-h-screen flex items-center"
//               >
//                 <div className="">
//                   <div className="animate-fadeIn">
//                       <img
//                         src={section.logo}
//                         alt={`${section.title} logo`}
//                         className="w-32 h-auto mb-4"
//                     />

//                     {/* Main Image */}
//                     <img
//                         src={section.mainImage}
//                         alt={`${section.title} main image`}
//                         className="w-full h-auto mb-6"
//                     />
//                     {/* Title */}
//                     {/* <h2 className="text-[36px] font-bold text-white mb-3">
//                       {section.title}
//                     </h2> */}

//                     {/* Subtitle */}
//                     <p className="text-[18px] fc-primary mb-4 leading-relaxed">
//                         <div dangerouslySetInnerHTML={{ __html: section.subtitle }} />
//                     </p>

//                     {/* Features */}
//                     <div className="mb-10">
//                       {section.features.map((feature, featureIndex) =>{
//                         //break after 3 features and add "and more" if there are more than 3 features
//                         if (featureIndex >= 3) {
//                           if (featureIndex === 3) {
//                             return (
//                               <div key={featureIndex} className="flex items-start">
//                                 <span className="fc-primary text-[18px] leading-relaxed mt-2">
//                                   and more...
//                                 </span>
//                               </div>
//                             );
//                           }
//                           return null;
//                         }

//                         return (
//                         <div
//                           key={featureIndex}
//                           className="flex items-start"
//                         >
//                           {/* <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div> */}
//                           <span className="fc-primary text-[16px] leading-relaxed">
//                             {feature["title"]}
//                           </span>
//                         </div>
//                       )})}


//                     </div>

//                     <Link className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer" href={route('casestudy.show', section.slug)}>Read more <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span></Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <hr className="border-white mb-8"/>
//         </div>
//       </section>
//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
//       `}</style>
//     </>
//   );
// }



// Filter //


