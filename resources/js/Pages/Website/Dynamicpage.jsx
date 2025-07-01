import React, { useEffect, useState, useRef, useCallback, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebsiteLayout from '@/Layouts/WebsiteLayout';
import "swiper/css";
import "swiper/css/pagination";
import { usePage } from '@inertiajs/react';

gsap.registerPlugin(ScrollTrigger);

// Pre-define your component imports to avoid dynamic import issues
const componentMap = {
    'ClientSlider' : lazy(() => import('@/Components/frontend/ClientSlider.jsx')),
    'Contact': lazy(() => import('@/Components/frontend/Contact.jsx')),
    'DynamicForm': lazy(() => import('@/Components/frontend/DynamicForm.jsx')),
    'IndustrySection': lazy(() => import('@/Components/frontend/IndustrySection.jsx')),
    'ServiceSlider' : lazy(() => import('@/Components/frontend/ServiceSlider.jsx')),
    'SmartToolsSlider': lazy(() => import('@/Components/frontend/SmartToolsSlider.jsx')),
    'SmoothCaseStudiesSection': lazy(() => import('@/Components/frontend/SmoothCaseStudiesSection.jsx')),
    'SmoothExperienceSection': lazy(() => import('@/Components/frontend/SmoothExperienceSection.jsx')),
    'SmoothProductSection': lazy(() => import('@/Components/frontend/SmoothProductSection.jsx')),
    'TestimonialsSection': lazy(() => import('@/Components/frontend/TestimonialsSection.jsx')),
};


export default function Home() {
    const { page, appUrl } = usePage().props;
    const sections = page.published_sections;

    const introRef = useRef(null);

    console.log(sections);


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

    // Fallback component for unknown components
    const UnknownComponent = ({ componentName }) => (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <strong>Warning:</strong> Component '{componentName}' not found.
            Please add it to the componentMap in your Home component.
        </div>
    );

    return (
        <WebsiteLayout
            title={`${page.title} | TDF Agency`}
            description={`Welcome to TDF Agency - ${page.description || "Your trusted digital partner."}`}
        >
              <section ref={introRef} className="flex items-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-50" />
                <div className="container-fluid relative mt-[150px]">
                    {sections?.map((section, index) => {
                        if (section.type === 'form'){
                            return (
                                <DynamicForm
                                    key={`${section.content}-${section.priority || index}`}
                                    section={section}
                                    index={index}
                                    appUrl={appUrl}
                                />
                            );
                        }
                        if (section.type === 'component' && section.content) {
                            const ComponentToRender = componentMap[section.content];

                            if (!ComponentToRender) {
                                return (
                                    <UnknownComponent
                                        key={`unknown-${section.priority || index}`}
                                        componentName={section.content}
                                    />
                                );
                            }

                            return (
                                <Suspense
                                    fallback={
                                        <div className="flex items-center justify-center p-8">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                            <span className="ml-2">Loading {section.content}...</span>
                                        </div>
                                    }
                                    key={`${section.content}-${section.priority || index}`}
                                >
                                    <ComponentToRender
                                        section={section}
                                        index={index}
                                        appUrl={appUrl}
                                    />
                                </Suspense>
                            );
                        }
                         if (section.type === 'image' && section.content) {
                            return (
                                <img
                                    key={`${section.content}-${section.priority || index}`}
                                    src={`${appUrl}/${section.content}`}
                                    alt={section.content}
                                    height={`${JSON.parse(section.properties).height}px`||"auto"}
                                    width={`${JSON.parse(section.properties).width}px`||"auto"}

                                />
                            );
                         }
                        return null;
                    })}
                </div>

            </section>
        </WebsiteLayout>
    );
}
