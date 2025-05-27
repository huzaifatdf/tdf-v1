import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";

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
            <div className="container-fluid relative z-10 mt-[150px]">
                <div className="">
                    <div className="grid md:grid-cols-12 gap-12 items-center justify-center pb-[60px]">
                        <div className="lg:col-span-5 space-y-6">
                            <h1 className="text-[62px] fc-white leading-[1.1]">
                                Industries We Serve
                            </h1>
                        </div>
                        <div className="lg:col-span-5 space-y-6">
                            <div className="prose prose-lg prose-invert">
                            <h2 className="text-[32px] font-bold fc-secondary leading-tight">
                                Delivering Impact in Every Industry<br />Industries Powered by Our Expertise
                            </h2>
                            <p className="text-[18px] fc-primary leading-relaxed">
                               No matter your field, your challenges are unique - and so are our solutions. TDF helps businesses in every industry reimagine how their brands connect with their audiences.
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-white mb-8"></hr>
                </div>
            </div>
        </section>
      <Industriesmain/>
    </WebsiteLayout>
  );
}


// Indusrties Main //
function Industriesmain() {
  return (
    <div className="py-16 relative">
      <div className="container-fluid">
        <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pb-[60px]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] fc-secondary leading-tight">
              Financial & Development Financial Institutions (DFI)
            </h2>

            <p className="text-[18px] fc-primary leading-relaxed">
              The complex challenges that financial or DFI's institutions face are not going
              away. In fact, they're getting worse and more difficult, which makes it even
              more important to create a culture of compliance.
            </p>

            <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

          </div>

          {/* Middle Column - Services List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="fc-primary text-[20px] font-bold">
              How We Can Help
            </h3>

            <div className="space-y-3 pb-[60px]">
              <div className="text-[18px] fc-primary leading-relaxed">Branding & Design</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Multilingual Website Design & Development</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Internet Banking, Mobile Banking and Software</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Customer Journey (UX/UI)</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">ATM Screens Design & User Journey</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Digital Onboarding Solutions</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Social Media Marketing</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Search Engine Optimization (SEO)</div>

              <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
            </div>

            <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

          </div>

          {/* Right Column - Icon */}
          <div className="lg:col-span-2">
            <div
            className="h-[300px] flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background04.png')",
            }}
            >
            <div className="">
                <img
                src="/images/indus1.svg"
                alt="Bank Icon"
                className="w-24 h-24 mx-auto"
                />
            </div>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pt-[60px] pb-[60px]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] fc-secondary leading-tight">
              Fintech/Startups
            </h2>

            <p className="text-[18px] fc-primary leading-relaxed">
              Having a solid product isn't enough to succeed in the highly connected yet competitive market. You need strong, memorable branding, easy integration, digital strategies that work, and campaigns that reach your ideal audience and connect with them.
            </p>

            <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

          </div>

          {/* Middle Column - Services List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="fc-primary text-[20px] font-bold">
              Our Areas of Impact
            </h3>

            <div className="space-y-3 pb-[60px]">
              <div className="text-[18px] fc-primary leading-relaxed">Brand and Content Planning</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Developing MVPs (Minimum Viable Products)</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Full Digital Presence</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Website, App, SEO, and Social Channels</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Integrated CRM Solution </div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">UX/UI Design</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">End-to-End Marketing Strategy </div>

              <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
            </div>

            <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

          </div>

          {/* Right Column - Icon */}
          <div className="lg:col-span-2">
            <div
            className="h-[300px] flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background04.png')",
            }}
            >
            <div className="">
                <img
                src="/images/indus2.svg"
                alt="Bank Icon"
                className="w-24 h-24 mx-auto"
                />
            </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pt-[60px] pb-[60px]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] fc-secondary leading-tight">
              Fintech/Startups
            </h2>

            <p className="text-[18px] fc-primary leading-relaxed">
              Having a solid product isn't enough to succeed in the highly connected yet competitive market. You need strong, memorable branding, easy integration, digital strategies that work, and campaigns that reach your ideal audience and connect with them.
            </p>

            <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

          </div>

          {/* Middle Column - Services List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="fc-primary text-[20px] font-bold">
              Our Areas of Impact
            </h3>

            <div className="space-y-3 pb-[60px]">
              <div className="text-[18px] fc-primary leading-relaxed">Brand and Content Planning</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Developing MVPs (Minimum Viable Products)</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Full Digital Presence</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Website, App, SEO, and Social Channels</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Integrated CRM Solution </div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">UX/UI Design</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">End-to-End Marketing Strategy </div>

              <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
            </div>

            <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

          </div>

          {/* Right Column - Icon */}
          <div className="lg:col-span-2">
            <div
            className="h-[300px] flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background04.png')",
            }}
            >
            <div className="">
                <img
                src="/images/indus2.svg"
                alt="Bank Icon"
                className="w-24 h-24 mx-auto"
                />
            </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pt-[60px] pb-[60px]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] fc-secondary leading-tight">
              Fintech/Startups
            </h2>

            <p className="text-[18px] fc-primary leading-relaxed">
              Having a solid product isn't enough to succeed in the highly connected yet competitive market. You need strong, memorable branding, easy integration, digital strategies that work, and campaigns that reach your ideal audience and connect with them.
            </p>

            <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

          </div>

          {/* Middle Column - Services List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="fc-primary text-[20px] font-bold">
              Our Areas of Impact
            </h3>

            <div className="space-y-3 pb-[60px]">
              <div className="text-[18px] fc-primary leading-relaxed">Brand and Content Planning</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Developing MVPs (Minimum Viable Products)</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Full Digital Presence</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Website, App, SEO, and Social Channels</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Integrated CRM Solution </div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">UX/UI Design</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">End-to-End Marketing Strategy </div>

              <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
            </div>

            <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

          </div>

          {/* Right Column - Icon */}
          <div className="lg:col-span-2">
            <div
            className="h-[300px] flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background04.png')",
            }}
            >
            <div className="">
                <img
                src="/images/indus2.svg"
                alt="Bank Icon"
                className="w-24 h-24 mx-auto"
                />
            </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pt-[60px] pb-[60px]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] fc-secondary leading-tight">
              Fintech/Startups
            </h2>

            <p className="text-[18px] fc-primary leading-relaxed">
              Having a solid product isn't enough to succeed in the highly connected yet competitive market. You need strong, memorable branding, easy integration, digital strategies that work, and campaigns that reach your ideal audience and connect with them.
            </p>

            <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

          </div>

          {/* Middle Column - Services List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="fc-primary text-[20px] font-bold">
              Our Areas of Impact
            </h3>

            <div className="space-y-3 pb-[60px]">
              <div className="text-[18px] fc-primary leading-relaxed">Brand and Content Planning</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Developing MVPs (Minimum Viable Products)</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Full Digital Presence</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Website, App, SEO, and Social Channels</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Integrated CRM Solution </div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">UX/UI Design</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">End-to-End Marketing Strategy </div>

              <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
            </div>

            <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

          </div>

          {/* Right Column - Icon */}
          <div className="lg:col-span-2">
            <div
            className="h-[300px] flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background04.png')",
            }}
            >
            <div className="">
                <img
                src="/images/indus2.svg"
                alt="Bank Icon"
                className="w-24 h-24 mx-auto"
                />
            </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pt-[60px] pb-[60px]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] fc-secondary leading-tight">
              Fintech/Startups
            </h2>

            <p className="text-[18px] fc-primary leading-relaxed">
              Having a solid product isn't enough to succeed in the highly connected yet competitive market. You need strong, memorable branding, easy integration, digital strategies that work, and campaigns that reach your ideal audience and connect with them.
            </p>

            <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

          </div>

          {/* Middle Column - Services List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="fc-primary text-[20px] font-bold">
              Our Areas of Impact
            </h3>

            <div className="space-y-3 pb-[60px]">
              <div className="text-[18px] fc-primary leading-relaxed">Brand and Content Planning</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Developing MVPs (Minimum Viable Products)</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Full Digital Presence</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Website, App, SEO, and Social Channels</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">Integrated CRM Solution </div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">UX/UI Design</div>
              <div className="text-[18px] fc-primary leading-relaxed m-0">End-to-End Marketing Strategy </div>

              <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
            </div>

            <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

          </div>

          {/* Right Column - Icon */}
          <div className="lg:col-span-2">
            <div
            className="h-[300px] flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background04.png')",
            }}
            >
            <div className="">
                <img
                src="/images/indus2.svg"
                alt="Bank Icon"
                className="w-24 h-24 mx-auto"
                />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
