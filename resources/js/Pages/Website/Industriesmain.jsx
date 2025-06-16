import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import IndustrySection from "@/Components/frontend/IndustrySection";

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
    <WebsiteLayout title="Industries | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
        <section ref={introRef} className="flex relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
            <div className="container-fluid relative mt-[150px]">
                <div className="">
                    <div className="grid md:grid-cols-12 items-center justify-center pb-[60px]">
                        <div className="lg:col-span-5 space-y-6">
                            <h1 className="mobile-banner-heading text-[50px] fc-white leading-[1.1]">
                                Industries We Serve
                            </h1>
                        </div>
                        <div className="lg:col-span-5 space-y-6">
                            <div className="prose prose-lg prose-invert">
                            <h2 className="mobile-banner-sub-heading text-[30px] fc-secondary leading-tight">
                                Delivering Impact in Every Industry<br />Industries Powered by Our Expertise
                            </h2>
                            <p className="mobile-banner-para text-[16px] fc-primary leading-relaxed mb-0">
                               No matter your field, your challenges are unique - and so are our solutions. TDF helps businesses in every industry reimagine how their brands connect with their audiences.
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-white mb-8"></hr>
                </div>
            </div>
        </section>
      <IndustrySection/>
    </WebsiteLayout>
  );
}


// Indusrties Main //

