import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import parse from 'html-react-parser';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
    <WebsiteLayout title="Contact | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
        <section ref={introRef} className="flex relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
                <div className="container-fluid relative mt-[150px]">
                    <div className="">
                        <div className="grid md:grid-cols-12 gap-12 items-center justify-center pb-[60px]">
                            <div className="lg:col-span-6 space-y-6">
                                <h1 className="text-[50px] fc-white leading-[1.1]">
                                    Contact Us & Support
                                </h1>
                            </div>
                            <div className="lg:col-span-6 space-y-6">
                                <div className="prose prose-lg prose-invert">
                                <p className="text-[16px] fc-primary leading-tight mb-0">
                                    Have a project?
                                </p>
                                <p className="text-[16px] fc-primary leading-tight mb-0">
                                    Let’s make it happen together.
                                </p>
                                </div>
                            </div>
                        </div>
                        <hr class="border-white mb-8"></hr>
                    </div>
                </div>
        </section>
        <ContactSection />
        <MapSection />
    </WebsiteLayout>
  );
}

// Tabbing //
const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('Business development');

  const tabs = ['Business development', 'Support', 'Others'];

  return (
    <div className="relative sec-padding">
      <div className="container-fluid grid lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-6">
          <h3 className="text-[22px] fc-primary leading-tight mb-3">Tell us about your vision:</h3>
          <p className="text-[16px] fc-primary leading-tight mb-0">
            Which challenges are you facing? What are your goals and expectations? What would success look like and how much are you planning to spend to get there?
          </p>

            <div className="space-y-8 mt-5">
                {/* Email */}
                <div className="flex items-start gap-3 align-items-center">
                    <img style={{width: '60px'}} src="/images/email.svg" alt="Email Icon" />
                    <div>
                    <span className="text-[16px] fc-primary leading-tight block">Email</span>
                    <a href="mailto:info@thedesignfirm.com" className="text-[16px] text-white block">
                        Info@thedesignfirm.com
                    </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 align-items-center">
                    <img style={{width: '60px'}} src="/images/phone.svg" alt="Phone Icon" />
                    <div>
                    <span className="text-[16px] fc-primary leading-tight block">Phone number</span>
                    <span className="text-[16px] text-white block">+123 456 7890</span>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 align-items-center">
                    <img style={{width: '60px'}} src="/images/home.svg" alt="Address Icon" />
                    <div>
                    <span className="text-[16px] fc-primary leading-tight block">Address</span>
                    <span className="text-[16px] text-white block">
                        123 Business Road, City, Country
                    </span>
                    </div>
                </div>
                </div>
            </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-6">
          <h3 className="text-[30px] fc-secondary mb-9">Uncover the Benefits Now!</h3>

          {/* Tabs */}
            <div className="flex mb-6 mt-6 text-sm">
                {tabs.map((tab, idx) => (
                    <div key={tab} className="flex items-center">
                    <button
                        onClick={() => setActiveTab(tab)}
                        className="flex flex-col items-start pr-6 text-left"
                    >
                        <span className="fc-primary">0{idx + 1}</span>

                        <span
                        className={`relative text-[18px] ${
                            activeTab === tab ? 'text-lime-400' : 'text-white'
                        }`}
                        >
                        {tab}
                        {activeTab === tab && (
                            <span className="absolute left-0 -bottom-1 w-1/2 border-b-2 border-lime-400"></span>
                        )}
                        </span>
                    </button>

                    {/* Vertical separator except after last */}
                    {idx < tabs.length - 1 && (
                        <div className="border-r border-gray-600 h-6 mx-3"></div>
                    )}
                    </div>
                ))}
            </div>



          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className=""
              />
              <input
                type="text"
                placeholder="Company name"
                className=""
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className=""
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className=""
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full"
            ></textarea>

            <button type="button" class="d-block ml-auto group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer">Submit<span class="fc-purple group-hover:translate-x-1 transition-transform ml-3">→</span></button>
          </form>
        </div>
      </div>
    </div>
  );
};



// Map Section //
const MapSection = () => {
  return (
    <div className="container-fluid">
        <hr class="border-white mb-8"></hr>
        <div className=" sec-padding relative">
            <h4 className='text-[30px] mb-2 fc-secondary'>Delivering trusted solutions<br></br>on a global scale</h4>
            <div className="">
                <img
                src="/images/map.svg"
                alt="Map"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
  );
};
