import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ChevronDown } from 'lucide-react';
import SmoothProductSection from "@/Components/frontend/SmoothProductSection";
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { usePage } from "@inertiajs/react";

gsap.registerPlugin(ScrollTrigger);

export default function Productmain() {
  const introRef = useRef(null);
    const { metaTitle, metaDescription,page } = usePage().props;
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
      <section ref={introRef} className="banner-inner-page min-h-[40vh] flex items-center bg-dark-950 relative overflow-hidden">
        <div className="container-fluid relative mt-[100px] mb-[30px]">
            <div className="">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h1 className="mobile-banner-heading text-[50px] fc-secondary leading-tight mb-0">
                            Solutions
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

      <SmoothProductSection />
    </WebsiteLayout>
  );
}



