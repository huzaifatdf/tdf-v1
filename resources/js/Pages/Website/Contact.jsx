import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import parse from 'html-react-parser';
import DynamicForm from '@/Components/frontend/DynamicForm';

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
        <section ref={introRef} className="banner-inner-page min-h-[40vh] flex items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
            <div className="container-fluid ">
                <div className="relative mt-[120px] mb-[80px]">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h1 className="mobile-banner-heading text-[50px] fc-secondary leading-tight mb-0">
                                Contact Us
                            </h1>
                        </div>
                        <div className="md:w-1/2">
                            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                                Have a project?
                            </p>
                            <p className="mobile-banner-para text-[18px] fc-primary leading-relaxed mb-0">
                                Let’s make it happen together.
                            </p>
                        </div>
                    </div>
                </div>
                <hr class="border-white mb-8"></hr>
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
    <div className="mobile-screens relative sec-padding pt-0">
      <div className="container-fluid grid lg:grid-cols-12 gap-20">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-6">
          <h3 className="text-[22px] fc-primary leading-tight mb-3">Tell us about your vision:</h3>
          <p className="text-[18px] fc-primary mb-0">
            Which challenges are you facing? What are your goals and expectations? What would success look like and how much are you planning to spend to get there?
          </p>

            <div className="space-y-8 mt-5">
                {/* Email */}
                <div className="flex items-start gap-3 align-items-center">
                    <img style={{width: '60px'}} src="/images/email.svg" alt="Email Icon" />
                    <div>
                    <span className="text-[18px] fc-primary leading-tight block">Email</span>
                    <a href="mailto:info@thedesignfirm.com" className="text-[18px] text-white block">
                        Info@thedesignfirm.com
                    </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 align-items-center">
                    <img style={{width: '60px'}} src="/images/phone.svg" alt="Phone Icon" />
                    <div>
                    <span className="text-[18px] fc-primary leading-tight block">Phone number</span>
                    <span className="text-[18px] text-white block">+123 456 7890</span>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 align-items-center">
                    <img style={{width: '60px'}} src="/images/home.svg" alt="Address Icon" />
                    <div>
                    <span className="text-[18px] fc-primary leading-tight block">Address</span>
                    <span className="text-[18px] text-white block">
                        123 Business Road, City, Country
                    </span>
                    </div>
                </div>
                </div>
            </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-6">
          <h3 className="text-[30px] fc-secondary mb-9">Uncover the Benefits Now!</h3>

          <DynamicForm formSlug="queries"/>
        </div>
      </div>
    </div>
  );
};



// Map Section //
const MapSection = () => {
  return (
    <div className="mobile-screens container-fluid">
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
