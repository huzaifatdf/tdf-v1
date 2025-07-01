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
        <section ref={introRef} className="banner-inner-page flex relative overflow-hidden">
            <div className="container-fluid relative mt-[150px]">
                <div className="">
                    <div className="flex flex-col md:flex-row gap-12 pb-[20px]">
                        <div className="md:w-1/2">
                            <h1 className="mobile-banner-heading text-[60px] fc-secondary leading-tight mb-0">
                                Industries We Serve
                            </h1>
                        </div>
                        <div className="md:w-1/2">
                            <div className="prose prose-lg prose-invert">
                            <h2 className="mobile-banner-sub-heading text-[30px] fc-white leading-tight">
                                Delivering Impact in Every Industry<br />Industries Powered by Our Expertise
                            </h2>
                            <p className="mobile-banner-para text-[20px] fc-primary leading-relaxed mb-0">
                               No matter your field, your challenges are unique - and so are our solutions. TDF helps businesses in every industry reimagine how their brands connect with their audiences.
                            </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={"/images/industries.png"}
                        alt="HabibMetro Bank Project Overview"
                        className="w-full h-[50vh] object-cover mt-5 mb-5"
                    />
                    <hr class="border-white mb-8"></hr>
                </div>
            </div>
        </section>
      <IndustrySection/>

      <div className="industtry-page container-fluid relative mb-9">
        <h1 className="text-[60px] fc-secondary text-center mb-0 leading-quote">Your needs are unique,<br/>So is our approach</h1>
      </div>
    </WebsiteLayout>
  );
}


// Indusrties Main //

