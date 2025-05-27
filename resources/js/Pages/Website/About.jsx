import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import CountUp from 'react-countup';

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
    <WebsiteLayout title="About | TDF Agency" description="Explore our portfolio of successful digital transformations and client success stories.">
        <section ref={introRef} className="flex relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
            <div className="container-fluid relative z-10 mt-[150px]">
                <div className="">
                    <div className="grid md:grid-cols-12 gap-12 items-center justify-center pb-[60px]">
                        <div className="lg:col-span-5 space-y-6">
                            <h1 className="text-[62px] fc-white leading-[1.1]">
                                About Us - TDF
                            </h1>
                        </div>
                        <div className="lg:col-span-6 space-y-6">
                            <div className="prose prose-lg prose-invert">
                            <h2 className="text-[32px] font-bold fc-secondary leading-tight">
                                Curiosity Brought You Here,<br />Now Let’s Show You What We’re All About.
                            </h2>
                            </div>
                        </div>
                    </div>
                    <hr class="border-white mb-8"></hr>
                </div>
            </div>
        </section>

    <AboutSection />
    <StatsSection />
    <Trusted />
    <TimelineSection />
    </WebsiteLayout>
  );
}



function AboutSection() {
  return (
    <section className="relative sec-padding --small">
      <div className="container-fluid">
        <h2 className="fc-secondary text-[30px] font-semibold mb-6">
          Creative Thinkers. Strategic Doers
        </h2>
        <p className="mb-4 fc-primary text-[18px]">
          With a history dating back to 2002, The Design Firm has been a trusted partner for several startups and organizations when it comes to marketing, technology and innovation.
        </p>
        <p className="mb-4 fc-primary text-[18px]">
          From startups to legacy organizations, we’ve worked with clients from all industries to help them scale and engage meaningfully with their audiences.
        </p>
        <p className="fc-primary text-[18px]">
          With over 300+ impactful websites and 600+ custom digital assets in our portfolio, we bring a rare mix of experience and agility to every project we touch.
        </p>
      </div>
    </section>
  );
};


function StatsSection() {
  const stats = [
    {
      icon: <img src="/images/ab1.svg" alt="Briefcase Icon" className="" />,
      label: 'Years in Business',
      value: 22,
      suffix: '+ Years'
    },
    {
      icon: <img src="/images/ab2.svg" alt="Briefcase Icon" className="" />,
      label: 'Domestic Clients',
      value: 200,
      suffix: '+'
    },
    {
      icon: <img src="/images/ab3.svg" alt="Briefcase Icon" className="" />,
      label: 'Global Presence',
      value: 10,
      suffix: '+ Countries'
    },
    {
      icon: <img src="/images/ab4.svg" alt="Briefcase Icon" className="" />,
      label: 'International Clients',
      value: 60,
      suffix: '+'
    },
    {
      icon: <img src="/images/ab5.svg" alt="Briefcase Icon" className="" />,
      label: 'Projects Executed',
      value: 5000,
      suffix: '+'
    }
  ];

  return (
    <section className="relative bg-[#040404] sec-padding">
      <div className="container-fluid">
        <h2 className="fc-secondary text-[34px] mb-5">Numbers Don’t Lie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                <div className="w-20 h-20 flex items-center justify-center">
                    {stat.icon}
                </div>
                <div>
                    <p className="fc-white mb-0 text-[18px] ">{stat.label}</p>
                    <h3 className="fc-white text-[36px]">
                    <CountUp end={stat.value} duration={2.5} /> {stat.suffix}
                    </h3>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};


function Trusted () {
    return (
        <div className="container-fluid relative">
            <div className="sec-padding">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-[34px] fc-secondary leading-tight">
                            Industries Who Trust Us
                        </h2>

                        <p className="text-[20px] fc-primary leading-relaxed">
                            Finance & Banking  |  Technology  |  Logistics  |  Energy Sector  |  MNCs  |  Retail  |  Manufacturing  |  Real Estate  |  Health  |  Payment Industry  |  Water Industry  |  Associations  |  NGO  |  Travel
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-6"></div>

                    {/* Right Column - Icon */}
                    <div className="lg:col-span-3">
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
            </div>
            <hr className="border-white mb-8"/>
        </div>
    )
}


const timelineData = [
  {
    id: '01',
    range: '2002–2006',
    title: 'TDF was established in 2002',
    description:
      "TDF was established in 2002, providing graphic design and ATM screen UI design services globally. Extended our services to website design and development and started serving clients in Qatar and the African markets.",
    image: '/images/timeline-office.jpg',
  },
  {
    id: '02',
    range: '2007–2009',
    title: 'Expansion Phase',
    description: 'TDF grew its team and client base across the GCC region and diversified services.',
    image: '/images/phase2.jpg',
  },
  {
    id: '03',
    range: '2010–2016',
    title: 'Development Milestones',
    description: 'Major projects launched including enterprise platforms and partnerships with fintechs.',
    image: '/images/phase3.jpg',
  },
  {
    id: '04',
    range: '2016–2020',
    title: 'Digital Shift',
    description: 'Focused on UX/UI, app development, and automation tools.',
    image: '/images/phase4.jpg',
  },
  {
    id: '05',
    range: '2021–2023',
    title: 'Post-COVID Innovation',
    description: 'Launched AI-based tools and cloud services for remote business models.',
    image: '/images/phase5.jpg',
  },
  {
    id: '06',
    range: '2024 – Onwards',
    title: 'Future Ready',
    description: 'Expanding in KSA and UAE with next-gen AI solutions and custom platforms.',
    image: '/images/phase6.jpg',
  },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timelineData[activeIndex];

  return (
    <section className="relative bg-[#01111A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 transition-all duration-500">
          <div>
            <p className="text-sm text-gray-400">{active.id}</p>
            <h3 className="text-[22px] text-lime-400 font-semibold">{active.range}</h3>
            <p className="text-gray-300 mt-2">{active.description}</p>
          </div>
          <div className="overflow-hidden transition-all duration-700 ease-in-out">
            <img
              src={active.image}
              alt={active.title}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Timeline Years */}
        <div className="lg:col-span-5 flex flex-col items-end justify-start text-right">
          {timelineData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center space-x-4 justify-end mb-6 transition-all duration-300 ${
                activeIndex === idx ? 'opacity-100 scale-105' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div className="text-lime-400 text-xl">+</div>
              <div className="border-l border-gray-700 h-12"></div>
              <div>
                <p className="text-xs text-gray-500">{item.id}</p>
                <p className={`font-medium ${
                  activeIndex === idx ? 'text-lime-400 text-lg' : 'text-gray-400'
                }`}>{item.range}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
