import React, { useEffect, useState, useRef, useCallback, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebsiteLayout from '@/Layouts/WebsiteLayout';
import "swiper/css";
import "swiper/css/pagination";
import { usePage } from '@inertiajs/react';
//parse
import parse from 'html-react-parser';
import Iframe from 'react-iframe'

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
    const { page, appUrl ,metaTitle, metaDescription } = usePage().props;
    const sections = page.published_sections;

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

    // Fallback component for unknown components
    const UnknownComponent = ({ componentName }) => (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <strong>Warning:</strong> Component '{componentName}' not found.
            Please add it to the componentMap in your Home component.
        </div>
    );

    return (
        <WebsiteLayout
            title={metaTitle}
            description={metaDescription}
            metaSchema={page?.meta_schema}
            customScripts={page?.customscripts}
            socialMeta={page?.social_meta}
            metaKeywords={page?.meta_keywords}
            customStyles={page?.customstyles}
            canonicalUrl={page?.canonical_url}
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
                          if (section.type === 'video' && section.content) {
                            return (
                                <iframe width={`${JSON.parse(section.properties).width}%`||"auto"} style={{height:`${JSON.parse(section.properties).height}vh`}} src={section.content} title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            );
                         }

    if (section.type === 'html' && section.content) {
    const properties = JSON.parse(section.properties || '{}');
    const width = properties.width || '100';

    return (
        <div>
            <Iframe
                url={section.content}
                width="100%"
                height="400px" // Set a reasonable default height
                id={`iframe-${index}`}
                className="border-0"
                display="block"
                position="relative"
                frameBorder="0"
                scrolling="auto" // Allow scrolling as fallback
                styles={{
                    overflow: 'hidden',
                    border: 'none',
                    minHeight: '400px' // Reasonable minimum height
                }}
                onLoad={(event) => {
                    const iframe = event.target;

                    // Check if this is a same-origin iframe
                    const isSameOrigin = () => {
                        try {
                            // This will throw an error if cross-origin
                            iframe.contentDocument;
                            return true;
                        } catch (e) {
                            return false;
                        }
                    };

                    // Only attempt dynamic resizing for same-origin iframes
                    if (isSameOrigin()) {
                        const resizeIframe = () => {
                            try {
                                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                                const height = Math.max(
                                    iframeDoc.body.scrollHeight,
                                    iframeDoc.documentElement.scrollHeight
                                );
                                iframe.style.height = height + 'px';
                            } catch (e) {
                                console.warn('Error resizing iframe:', e);
                            }
                        };

                        // Initial resize
                        setTimeout(resizeIframe, 100); // Small delay to ensure content is loaded

                        // Add event listener for content changes (same-origin only)
                        try {
                            iframe.contentWindow.addEventListener('resize', resizeIframe);

                            // MutationObserver for DOM changes
                            const observer = new MutationObserver(resizeIframe);
                            observer.observe(
                                iframe.contentDocument.body,
                                {
                                    childList: true,
                                    subtree: true,
                                    attributes: true,
                                    characterData: true
                                }
                            );

                            // Store cleanup function
                            iframe._cleanup = () => {
                                iframe.contentWindow.removeEventListener('resize', resizeIframe);
                                observer.disconnect();
                            };
                        } catch (e) {
                            console.warn('Could not add iframe event listeners:', e);
                        }
                    } else {
                        // Cross-origin iframe - use PostMessage API if available
                        console.log('Cross-origin iframe detected, using fallback height');

                        // Listen for postMessage from iframe content
                        const handleMessage = (event) => {
                            // Verify origin for security
                            if (event.origin !== new URL(section.content).origin) {
                                return;
                            }

                            if (event.data && event.data.type === 'resize') {
                                iframe.style.height = event.data.height + 'px';
                            }
                        };

                        window.addEventListener('message', handleMessage);

                        // Store cleanup function
                        iframe._cleanup = () => {
                            window.removeEventListener('message', handleMessage);
                        };
                    }
                }}
                onError={(event) => {
                    console.error('Iframe load error:', event);
                    // Fallback: ensure iframe has reasonable height
                    event.target.style.height = '400px';
                }}
            />
        </div>
    );
}

                          if (section.type === 'text' && section.content) {
                            return (
                               parse(section.content)
                            );
                          }
                        return null;
                    })}
                </div>

            </section>
        </WebsiteLayout>
    );
}
