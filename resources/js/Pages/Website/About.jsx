import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
import WebsiteLayout from "@/Layouts/WebsiteLayout";
import CountUp from 'react-countup';
import parse from 'html-react-parser';
import { usePage } from '@inertiajs/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const introRef = useRef(null);
  const {metaTitle , metaDescription} = usePage().props;

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
    <WebsiteLayout title={metaTitle} description={metaDescription}>
        <section ref={introRef} className="banner-inner-page flex relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" />
                <div className="container-fluid relative mt-[150px]">
                    <div className="">
                        <div className="flex flex-col md:flex-row gap-12 pb-[60px]">
                            <div className="md:w-1/2">
                                <h1 className="mobile-banner-heading text-[50px] fc-secondary leading-tight mb-0">
                                    About Us
                                </h1>
                            </div>
                            <div className="md:w-1/2">
                                <div className="prose prose-lg prose-invert">
                                <h2 className="mobile-banner-sub-heading text-[30px] fc-primary leading-tight">
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
    <WhatDrivesUs />
    <MissionVisionProposition/>
    <MeetTheMissfits />
    <Experience />
    </WebsiteLayout>
  );
}



function AboutSection() {
  return (
    <section className="about-mobile-screens relative sec-padding">
      <div className="container-fluid">
        <h2 className="fc-secondary text-[32px] mb-6">
          Creative Thinkers. Strategic Doers.
        </h2>
        <p className="fc-primary text-[18px]">
          With a history dating back to 2002, The Design Firm has been a trusted partner for several startups and organizations when it comes to marketing, technology and innovation.
        </p>
        <p className="fc-primary text-[18px]">
          From startups to legacy organizations, we've worked with clients from all industries to help them scale and engage meaningfully with their audiences.
        </p>
        <p className="fc-primary text-[18px]">
          With over <strong>300+</strong> impactful websites and <strong>600+</strong> custom digital assets in our portfolio, we bring a rare mix of experience and agility to every project we touch.
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
    <section className="about-mobile-screens relative bg-[#040404] sec-padding">
      <div className="container-fluid">
        <h2 className="fc-secondary text-[32px] mb-5">Numbers Don’t Lie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                <div className="w-20 h-20 flex items-center justify-center">
                    {stat.icon}
                </div>
                <div>
                    <p className="fc-white mb-0 text-[18px] ">{stat.label}</p>
                    <h3 className="fc-white text-[32px]">
                    <CountUp end={stat.value} duration={2.5} />{stat.suffix}
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
        <div className="about-mobile-screens container-fluid">
            <div className="sec-padding relative">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="fc-secondary text-[32px] mb-4">
                            Industries Who Trust Us
                        </h2>

                        <p className="text-[18px] fc-primary leading-relaxed">
                            Finance & Banking | Technology | Logistics | Energy Sector | MNCs | Retail | Manufacturing | Real Estate | Health | Payment Industry | Water Industry
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

// Accordian //
const timelineData = [
  {
    id: '01',
    range: '2002-2006',
    title: 'TDF was established in 2002',
    description: "TDF was established in 2002, providing graphic design and ATM screen UI design services globally.",
    image: '/images/abac1.png',
  },
  {
    id: '02',
    range: '2007-2009',
    title: 'Extended our services to website design',
    description: 'Extended our services to website design and development and started serving clients in Qatar and the African markets.',
    image: '/images/abac1.png',
  },
  {
    id: '03',
    range: '2010-2016',
    title: 'Entered into software development',
    description: 'Entered into software development and designed Intranet portals for renowned financial institutions.',
    image: '/images/abac1.png',
  },
  {
    id: '04',
    range: '2016-2020',
    title: 'Ventured into Event Management',
    description: 'Ventured into Event Management and Stall Fabrication services from design to execution, having worked with clients such as the World Bank, USAID, IBM, ICAP, and more.',
    image: '/images/abac1.png',
  },
  {
    id: '05',
    range: '2021-2023',
    title: 'We included social media marketing in our portfolio',
    description: `We included social media marketing in our portfolio to serve our diverse clientele. Registered in the USA and now leveraging AI and ML technologies to drive our clients' success as a full-service zmarketing agency.`,
    image: '/images/abac1.png',
  },
  {
    id: '06',
    range: '2024 - Onwards ',
    title: 'Onboarded strategic partners in KSA',
    description: 'Onboarded strategic partners in KSA and Oman. Extended our services in Tajkistanthe market. ',
    image: '/images/abac1.png',
  },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="about-mobile-screens container-fluid">
        <div className="relative sec-padding">
            <h3 className="text-[32px] fc-secondary mb-1">Timeline</h3>
            <p className='fc-primary text-[18px] leading-relaxed mb-6'>From pixels to partnerships – evolving since 2002 into a global, AI-powered creative force.</p>
            {/* Desktop Version - Horizontal Timeline */}
            <div className="hidden lg:flex overflow-x-auto no-scrollbar h-[400px] space-x-4">
            {timelineData.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all duration-500 ease-in-out flex-shrink-0 border-l border-gray-700 cursor-pointer overflow-hidden relative m-0 ${
                    isActive
                        ? "w-[650px] lg:w-[630px] h-full"
                        : "w-[100px] lg:w-[100px] h-full flex flex-col items-center justify-center text-center"
                    }`}
                >
                    {!isActive && (
                    <div className="flex flex-col items-center justify-between h-full rotate-180">
                        <div className="for-padd transform -rotate-90 whitespace-nowrap">
                        <p className="text-[20px] fc-primary mb-0 text-left">{item.id}</p>
                        <p className="fc-secondary text-[30px] mb-0 text-right">{item.range}</p>
                        </div>
                        <div className="rotate-180 text-[32px] fc-secondary">+</div>
                    </div>
                    )}

                    {isActive && (
                    <div className="p-6 flex flex-col justify-center h-full">
                        <div>
                        <p className="fc-primary text-[18px] mb-0">{item.id}</p>
                        <p className="fc-secondary text-[30px] mb-0">{item.range}</p>
                        <p className="fc-primary text-[18px] mb-0 leading-relaxed">
                            {item.description}
                        </p>
                        </div>
                        {/* <div className="">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover mb-6 h-[350px]"
                        />
                        </div> */}
                    </div>
                    )}
                </div>
                );
            })}
            </div>

            {/* Mobile Version - Accordion */}
            <div className="lg:hidden space-y-2">
            {timelineData.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                <div
                    key={item.id}
                    className="border border-gray-700 rounded-lg overflow-hidden"
                >
                    {/* Accordion Header */}
                    <div
                    onClick={() => setActiveIndex(isActive ? -1 : idx)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                    >
                    <div className="flex items-center space-x-3">
                        <div>
                        <p className="text-[16px] fc-primary mb-0 font-medium">{item.id}</p>
                        <p className="fc-secondary text-[20px] mb-0">{item.range}</p>
                        </div>
                    </div>
                    <div
                        className={`text-[24px] fc-secondary transition-transform duration-300 ${
                        isActive ? 'rotate-45' : 'rotate-0'
                        }`}
                    >
                        +
                    </div>
                    </div>

                    {/* Accordion Content */}
                    <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    >
                    <div className="p-4 pt-0 border-t border-gray-700">
                        <div className="mb-4">
                        <p className="fc-primary text-[16px] mb-0 leading-relaxed">
                            {item.description}
                        </p>
                        </div>
                        {/* <div className="mb-0">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover rounded-lg h-[250px]"
                        />
                        </div> */}
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        <hr className="border-white mb-8"/>
    </section>
  );
};


function WhatDrivesUs () {
  return (
    <div className='about-mobile-screens container-fluid mobile-screens'>
        <div className="relative flex flex-col lg:flex-row items-center sec-padding">
            {/* Left Side Content */}
            <div className="lg:w-1/2">
                <h2 className="text-[32px] fc-secondary mb-2">What Drives Us</h2>
                <p className="fc-primary text-[18px] leading-relaxed mb-4">
                We’re driven by the belief that digital isn’t just a platform,  it’s a playground for ideas, creativity, and innovation.
                </p>
                <p className="fc-primary text-[18px] mb-0 leading-relaxed">Our work is guided by three simple rules:</p>
                <ul className="fc-primary text-[18px] mb-0 leading-relaxed mt-2 mb-2">
                <li>Keep It Human</li>
                <li>Make It Meaningful</li>
                <li>Never Phone It in</li>
                </ul>
            </div>

            {/* Right Side Image */}
            <div className="lg:w-1/2">
                <img
                src="/images/team.png" // Replace with your correct path
                alt="Team"
                className="w-full object-cover"
                />
            </div>
        </div>
        <hr className="border-white mb-8"/>
    </div>
  );
};


// Mission Vision //
const MissionVisionProposition = () => {
  return (
    <div className="about-mobile-screens container-fluid">
        <div className="sec-padding relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image - 5 columns */}
            <div className="lg:col-span-6">
                <div className="overflow-hidden shadow-2xl">
                <h3 className="text-[32px] fc-secondary mb-3">The Why, The How, and The What Next</h3>
                <img
                    src="/images/aboutnew.png" // Replace with actual image path
                    alt="Team collaboration in modern office"
                    className="w-full object-cover"
                />
                </div>
            </div>

            {/* Right Content - 7 columns */}
            <div className="lg:col-span-6">
                <div className="mb-3">
                <h3 className="text-[30px] fc-secondary mb-3">Mission</h3>
                <p className="fc-primary text-[20px] leading-relaxed mb-1 font-[700]">
                    We connect creativity with technology to build smart, impactful solutions
                </p>
                <p className="fc-primary text-[18px] leading-relaxed">
                    We approach every project with a sense of curiosity, flexibility, and a fresh perspective, because the best results often come from ideas that break away from the norm.
                </p>
                </div>

                <div className="mb-3">
                <h3 className="text-[30px] fc-secondary mb-3 mt-8">Vision</h3>
                <p className="fc-primary text-[20px] leading-relaxed mb-1 font-[700]">
                    To be the go-to creative tech partner for bold brands
                </p>
                <p className="fc-primary text-[18px] leading-relaxed">
                    We’re here to push boundaries, stay ahead, and deliver work that’s not only innovative but truly meaningful.
                </p>
                </div>

                <div className="mb-4">
                <h3 className="text-[30px] fc-secondary mb-3 mt-8">Key Proposition</h3>
                <p className="fc-primary text-[20px] leading-relaxed mb-1 font-[700]">
                    Helping brands grow louder, sharper, and stronger
                </p>
                <p className="fc-primary text-[18px] leading-relaxed mb-2">
                    We help brands connect with the right people in the right places, through strategies that grow and adapt with the world around them.
                </p>
                </div>
            </div>
            </div>
        </div>
        <hr className="border-white mb-8" />
        </div>

  );
};


// Meet the missfits //
const missfits = [
  {
    id: '01',
    range: 'Founder & Chief Executive Officer (CEO)',
    title: 'Naumeena Suhail',
    description:
      `Naumeena Suhail, Founder & CEO - doesn’t just lead with vision, she leads with intent. With over two decades in the creative industry, she has shaped The Design Firm not just into an agency, but into a mindset that digital experiences should be meaningful, human, and never superficial.<br></br><i>“My aim is to provide creative, innovative solutions to our clients by strategically using the latest technology to fuel the businesses towards the achievement of their goals.”
</i>`,
    image: '/images/Maam.png',
  },
  {
    id: '02',
    range: 'Partner, Chief Operating Officer (COO)',
    title: 'Nazish Yousuf',
    description:
      "Nazish doesn’t just manage operations, she fine-tunes the rhythm that keeps The Design Firm moving with purpose. Since joining TDF in 2014, she’s brought more than just experience to the table, she’s brought vision, consistency, and a sixth sense for what makes a brand truly resonate. With over 18 years in creative marketing and advertising, Nazish has a gift for seeing what others miss. <br><br>Her philosophy is simple but powerful: <br><br><strong>“Brands do have voices,”</strong> she says. <strong>“I help them find theirs and use it in ways people remember.”</strong>",
    image: '/images/Maam2.png',
  }
];


const MeetTheMissfits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="about-mobile-screens container-fluid">
        <div className="relative sec-padding">
            <h3 className="text-[32px] fc-secondary mb-0">Meet the Misfits</h3>
            <p className='fc-primary text-[18px] mb-6 leading-relaxed'>The Visionaries Behind Every Perfect Fit</p>
            <hr className="border-white mb-8" />

            {/* Desktop Version - Your Original Code */}
            <div className="hidden lg:flex overflow-x-auto no-scrollbar h-[600px] space-x-4">
            {missfits.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all duration-500 ease-in-out border-l border-gray-700 cursor-pointer overflow-hidden relative m-0 ${
                    isActive
                        ? "w-[650px] lg:w-[900px] h-full"
                        : "w-[100px] lg:w-[350px] h-full flex flex-col items-center justify-center text-center"
                    }`}
                >
                    {!isActive && (
                    <div className="flex flex-col items-center justify-between h-full">
                        <div className="absolute top-0 right-20 text-[32px] rotate-180 fc-secondary">+</div>
                        <div className="p-6">
                        <img src={item.image} alt="" />
                        <p className="text-[20px] fc-primary mb-0 text-left">{item.range}</p>
                        <p className="fc-secondary text-[30px] mb-0 text-left">{item.title}</p>
                        </div>
                    </div>
                    )}

                    {isActive && (
                    <div className="p-6 h-full relative">
                        {/* Minus icon on the top-right */}
                        <div className="absolute top-0 right-20 text-[32px] rotate-180 fc-secondary">
                        −
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
                        {/* Image - 4 columns */}
                        <div className="lg:col-span-5">
                            <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover mb-6 h-[600px]"
                            />
                        </div>

                        {/* Text - 8 columns */}
                        <div className="lg:col-span-7">
                            <p className="fc-secondary text-[30px] mb-0">{item.title}</p>
                            <p className="fc-primary text-[20px] mb-4 font-[700]">{item.range}</p>
                            <p className="fc-primary text-[18px] mb-0 leading-relaxed">
                            {parse(item.description)}
                            </p>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                );
            })}
            </div>

            {/* Mobile Version - Accordion */}
            <div className="lg:hidden space-y-2">
            {missfits.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                <div
                    key={item.id}
                    className="border border-gray-700 rounded-lg overflow-hidden"
                >
                    {/* Accordion Header */}
                    <div
                    onClick={() => setActiveIndex(isActive ? -1 : idx)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                    >
                    <div className="flex items-center space-x-3">
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                        <p className="text-[16px] fc-secondary mb-0 font-medium">{item.title}</p>
                        <p className="fc-primary text-[14px] mb-0">{item.range}</p>
                        </div>
                    </div>
                    <div
                        className={`text-[24px] fc-secondary transition-transform duration-300 ${
                        isActive ? 'rotate-45' : 'rotate-0'
                        }`}
                    >
                        +
                    </div>
                    </div>

                    {/* Accordion Content */}
                    <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    >
                    <div className="p-4 pt-0 border-t border-gray-700">
                        <div className="mb-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover rounded-lg h-[320px] mb-4"
                        />
                        <p className="fc-primary text-[16px] mb-0 leading-relaxed">
                            {parse(item.description)}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        <hr className="border-white mb-8"/>
        </section>
  );
};


// 20 + Years //
const Experience = () => {
    return (
        <div className="about-mobile-screens  relative sec-padding">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Heading */}
                <div className="lg:col-span-6">
                    <h2 className="text-[50px] leading-[1.1] fc-secondary">
                    20+ Years in, <br className="hidden lg:block" /> and We’re Just Getting Started
                    </h2>
                </div>

                {/* Right Text */}
                <div className="lg:col-span-6">
                    <p className="fc-primary text-[18px] mb-0 leading-relaxed">
                        We’re proud to have spent over two decades helping brands grow through thoughtful strategy, creative thinking, and consistent results.
                    </p>
                    <p className="fc-primary text-[18px] mb-0 leading-relaxed font-bold mt-3">
                        Impressed By Our Legacy?
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}
