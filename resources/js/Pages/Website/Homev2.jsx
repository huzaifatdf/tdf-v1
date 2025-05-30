import React, { useEffect, useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebsiteLayout from '@/Layouts/WebsiteLayout';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);


// Using the slim version for better compatibility

function ThreeModelOverlay() {
    // ThreeModelOverlay component code remains unchanged
    const mountRef = useRef(null);
    const modelRef = useRef(null); // To store reference to the loaded model

    useEffect(() => {
        // ThreeModelOverlay effect code remains unchanged
        let isModelActive = false;
        const handleMouseMove = (event) => {
        if (!isModelActive || !modelRef.current) return;

        const bounds = mount.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

        // Example movement (update model rotation based on cursor)
        modelRef.current.rotation.x = y * 0.5;
        modelRef.current.rotation.y = x * 0.5;
        };
        window.addEventListener('mousemove', handleMouseMove);
        ScrollTrigger.create({
        trigger: "#scroll-zoom-section",
        start: "top top",
        end: "bottom top",
        onEnter: () => { isModelActive = true; },
        onLeave: () => { isModelActive = false; },
        onEnterBack: () => { isModelActive = true; },
        onLeaveBack: () => { isModelActive = false; },
        });


        const mount = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.9, 1000);
        camera.position.z = 9;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Lights
        const light = new THREE.DirectionalLight(0xffffff, 1.5);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

     // Spot Light from above
        const spotLight = new THREE.SpotLight(0xffffff, 2);
        spotLight.position.set(0, 5, 5); // above and in front
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.3;
        spotLight.decay = 2;
        spotLight.distance = 20;
        spotLight.castShadow = true;

        // Target the spotlight to look at origin or model position
        spotLight.target.position.set(0, 0, 0);
        scene.add(spotLight.target); // ✅ This is required
        scene.add(spotLight);        // Don't forget this (you already had it)


        // Raycaster and mouse
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // Load GLB Model
        const loader = new GLTFLoader();
        loader.load('/images/ball.glb', gltf => {
            const model = gltf.scene;
            model.scale.set(0.5, 0.5, 0.5);
            model.position.set(0, -0.5, 0);
            model.name = 'BallModel'; // Optional: useful for identifying in raycasting
            scene.add(model);
            modelRef.current = model;
        });

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            if (modelRef.current) modelRef.current.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Scroll Zoom
        gsap.registerPlugin(ScrollTrigger);

        // Scroll-triggered zoom in
        gsap.to(camera.position, {
        z: 1, // Zoom in more (was 3)
        ease: "none",
        scrollTrigger: {
            trigger: "#scroll-zoom-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        onUpdate: () => {
            console.log("Camera Z:", camera.position.z);


            camera.position.z = Math.max(1, Math.min(9, camera.position.z)); // updated bounds
            renderer.render(scene, camera);
            //element state fade out after Camera Z 2.857022

        }
        });


        gsap.to(mount, {
            autoAlpha: 0,
            ease: "power4.inOut",         // starts slow, accelerates in middle, smooth end
            duration: 2,                  // just in case fallback is needed
            scrollTrigger: {
                trigger: "#scroll-zoom-section",
                start: "bottom bottom",   // starts fading as soon as bottom of section hits bottom of viewport
                end: "bottom top-=500",   // longer range to make fade-out slower
                scrub: true,
                onUpdate: () => {
                    renderer.render(scene, camera);
                }
            }
        });

        // Fade out after the section is scrolled past
        // gsap.to(mount, {
        //     autoAlpha: 0,              // fade out and disable interaction
        //     ease: "power2.out",        // smooth transition
        //     duration: 1.5,             // fade duration in seconds
        //     scrollTrigger: {
        //         trigger: "#scroll-zoom-section",
        //         start: "bottom top",     // when section scrolls out of view
        //         end: "bottom top+=300",  // longer scroll range for slower fade
        //         scrub: true,
        //         onUpdate: () => {
        //         renderer.render(scene, camera);
        //         }
        //     }
        // });


        // Click handler
        const handleClick = (event) => {
            // Calculate mouse position in normalized device coordinates
            const bounds = mount.getBoundingClientRect();
            mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
            mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            // if (modelRef.current) {
            //     const intersects = raycaster.intersectObject(modelRef.current, true);
            //     if (intersects.length > 0) {
            //         alert("You clicked on the 3D model!");
            //     }
            // }
        };

        mount.addEventListener('click', handleClick);

        // Resize handler
        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mount.removeEventListener('click', handleClick);
            mount.innerHTML = '';
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 start-0 w-100"
            style={{
                height: '100vh',       // full-screen coverage
                pointerEvents: 'auto',
                cursor: 'pointer',          // ensure it's on top
            }}
        />
    );
}

// Other component definitions remain unchanged
const SmartToolsSlider = () => {
  // SmartToolsSlider component code remains unchanged
  return (
    <div className="container-fluid relative">
      <div className='sec-padding pb-4'>
        <h2 className="text-[20px] mb-8 fc-primary">
        We Offer Smart Tools for Strategic Growth
      </h2>

      <hr className="border-white mb-8" />

      <div className="relative">
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row">
              {/* Left Side Image */}
              <div className="md:w-5/12 w-full">
                <img
                  src="/images/slider.png"
                  alt="Students in a smart classroom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side Content */}
                <div className="md:w-7/12 w-full flex flex-col justify-between pt-4 pl-4 pb-0">
                    <div>
                    <h3 className="text-[28px] font-light fc-secondary mb-2">Eduman</h3>
                    <p className="text-[18px] fc-primary mb-2">
                    For Control, Clarity, & Campus-Wide Confidence
                    </p>
                    <p className="text-[18px] fc-primary mb-2">
                    Eduman is a cloud-based, SaaS (Software as a Service) system
                    that simplifies the academic, administrative, and communication
                    workflows for modern schools.
                    </p>
                    </div>
                    <button className="group text-left text-[18px] fc-primary mb-2 flex items-center">
                    <span className="inline-block border-b-2 border-transparent group-hover:border-current transition-all duration-200">
                        Click to Explore
                    </span>
                    <span className="ml-3 fc-secondary transform transition-transform duration-200 group-hover:scale-125">
                        &rarr;
                    </span>
                    </button>

                    <div className="flex items-end justify-between">
                    <a
                        href="#"
                        className="inline-block text-left text-[18px] fc-secondary font-light border-b-2 border-transparent hover:border-current transition-all duration-200"
                        >
                        View All Products
                    </a>

                    <img
                        src="/images/slider2.png"
                        alt="Roundabout"
                        className="w-[50%] h-auto rounded"
                    />
                    </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-custom absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10" />
      </Swiper>
      </div>
      <hr className="border-white mb-8" />
      </div>
    </div>
  );
};

const services = [
  {
    title: "Brand Communication",
    subtitle: "shaping how the world sees you",
    image: "/images/ser1.png", // replace with your image path
  },
  {
    title: "Web & Mobile Apps",
    subtitle: "designed to grow and shift with your audience",
    image: "/images/ser2.png",
  },
  {
    title: "Digital Marketing Services",
    subtitle: "measurable, malleable, memorable",
    image: "/images/ser3.png",
  },
  {
    title: "UI/UX Design",
    subtitle: "thoughtfully created journeys for your users",
    image: "/images/ser4.png",
  },
  {
    title: "UI/UX Design",
    subtitle: "thoughtfully created journeys for your users",
    image: "/images/ser3.png",
  },
];

const ServiceSlider = () => {
  // ServiceSlider component code remains unchanged
  return (
    <div className="container-fluid relative">
      <div className='sec-padding pt-0 '>
        <div className="mb-8">
            <p className="text-[20px] mb-8 fc-primary">Strategy, creativity, technology - aligned in perfect sync<br />Always adjusting, always forward</p>
        </div>

        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            }}
        >
            {services.map((service, index) => (
            <SwiperSlide key={index}>
                <div className="overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-85 object-cover" />
                <div className="p-1 mt-2">
                    <h3 className="text-[22px] fc-primary mb-0">{service.title}</h3>
                    <p className="text-[14px] fc-primary mb-0">{service.subtitle}</p>
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

function TestimonialsSection() {
  // TestimonialsSection component code remains unchanged
  const [selected, setSelected] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Becky Nelson",
      rating: 4,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      // subtitle: "Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "John Brown",
      rating: 5,
      title: "Tech-savvy and user-focused",
      // subtitle: "Building seamless experiences",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Hannah Thompson",
      rating: 3,
      title: "Efficient, dedicated, consistent",
      // subtitle: "A reliable team player",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 4,
      name: "Chris King",
      rating: 5,
      title: "Vision meets execution",
      // subtitle: "Driving innovation every day",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 5,
      name: "Sarah Lopez",
      rating: 4,
      title: "Creative brilliance meets business sense",
      // subtitle: "On-point and always on time",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
  ]);


  const handleSwapWithCenter = (index) => {
    if (index === 0) return;

    const updated = [...testimonials];
    const temp = updated[0];
    updated[0] = updated[index];
    updated[index] = temp;

    setTestimonials(updated);
    setSelected(0); // keep center fixed
  };

  return (
    <div className="testimonial-wrapper sec-padding">
      {/* Floating Avatars */}
      <div className="floating-avatars">
        <div className="circle-avatar" style={{ top: "5%", left: "10%" }}>
          CK
        </div>

        {/* These indexes determine which avatars are visible */}
        {[1, 2, 3, 4].map((index, i) => (
          <img
            key={index}
            className="circle-avatar small"
            src={testimonials[index].image}
            onClick={() => handleSwapWithCenter(index)}
            alt=""
            style={
              i === 0
                ? { top: "15%", left: "25%" }
                : i === 1
                ? { top: "40%", left: "27%" }
                : i === 2
                ? { top: "15%", right: "25%" }
                : { top: "5%", right: "10%" }
            }
          />
        ))}

        <div className="circle-avatar" style={{ top: "40%", left: "10%" }}>
          JB
        </div>
        <div className="circle-avatar small" style={{ top: "40%", left: "70%" }}>
          HT
        </div>
        <div className="circle-avatar" style={{ top: "40%", right: "10%" }}>
          JB
        </div>
      </div>

      {/* Centered Testimonial */}
      <div className="center-profile">
        <img
          src={testimonials[0].image}
          alt="user"
          className="center-image"
        />
        <div className="stars">
          {"★".repeat(testimonials[0].rating)}
          {"☆".repeat(5 - testimonials[0].rating)}
        </div>
        <h3 className="text-[22px] fc-primary fw-bold">{testimonials[0].name}</h3>
        <p className="text-[18px] fc-primary mt-1">{testimonials[0].title}</p>
        <p className="subtitle text-white">{testimonials[0].subtitle}</p>

        {/* Dots */}
        <div className="dots">
        {testimonials.map((_, i) => (
            <span
            key={i}
            className={`dot ${i === selected ? "active" : ""}`}
            onClick={() => handleSwapWithCenter(i)}
            ></span>
        ))}
        </div>
      </div>
    </div>
  );
}
// VIDEO SECTION //


// Client Section //
const clientsRow1 = [
  "ibm", "pg", "bok", "bankak", "time", "authentik", "rbs", "christou", "saeed", "metro", "rayan", "payfast"
];
const clientsRow2 = [
  "sosafe", "sunrise", "ziauddin", "bok2", "nift", "radiant", "alliend", "idem", "askari", "blinkq", "bluebird", "zafra"
];

const imageMap = {
  ibm: "ibm.png",
  pg: "pg.png",
  bok: "bok.png",
  bankak: "bankak.png",
  time: "time.png",
  authentik: "authentik.png",
  christou: "christou.png",
  saeed: "saeed.png",
  metro: "metro.png",
  rayan: "rayan.png",
  payfast: "payfast.png",
  rbs: "rbs.png",
  sosafe: "sosafe.png",
  sunrise: "sunrise.png",
  ziauddin: "ziauddin.png",
  bok2: "bok2.png",
  nift: "nift.png",
  radiant: "radiant.png",
  alliend: "alliend.png",
  idem: "idem.png",
  askari: "askari.png",
  blinkq: "blinkq.png",
  bluebird: "bluebird.png",
  zafra: "zafra.png",
};

function ClientSlider() {
  return (
    <div className="pb-4">
        <div className="container-fluid relative">
            <p className="text-[20px] mb-8 fc-primary">Our Clients</p>
            {/* <hr class="border-white mb-8"></hr> */}
           <div className="space-y-12">
            <div className="overflow-hidden  pb-5 mt-5">
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={false}>
                {clientsRow1.map((client, index) => (
                <img
                    key={index}
                    src={`/images/${imageMap[client]}`}
                    alt={client}
                    className="mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </Marquee>
            </div>
            <div className="overflow-hidden  pb-5 mt-2">
            <Marquee gradient={false} speed={40} direction="left" pauseOnHover={false}>
                {clientsRow2.map((client, index) => (
                <img
                    key={index}
                    src={`/images/${imageMap[client]}`}
                    alt={client}
                    className="mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </Marquee>
            </div>
        </div>
            <hr class="border-white mb-8"></hr>
        </div>
    </div>
  );
}
// Client Section //


const ImageZoomSection = () => {
const imageWrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageWrapperRef.current,
      { scale: 1 },
      {
        scale: 1.01,       // minor zoom in scale
        duration: 4,       // duration of zoom in
        ease: "power1.inOut",
        yoyo: true,        // zoom back out smoothly
        repeat: -1,        // infinite repeat
        repeatDelay: 0.5,  // optional pause between zoom in/out
      }
    );
  }, []);

  return (
    <>
    <div className="container-fluid relative w-full h-screen overflow-hidden">
      <div
        ref={imageWrapperRef}
        className="absolute top-0 left-0 w-full h-full will-change-transform bg-center bg-cover mb-[80px]"
        style={{
          transformOrigin: "center center",
          backgroundImage: `url('/images/backhome.png')`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <p className="text-[30px] mb-0 fc-primary">
          We find the dots, draw the lines, and shape experiences
        </p>
      </div>
    </div>

    <div className="relative from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4 py-16">
      {/* Background overlay for darker effect */}
      <div className="absolute inset-0"></div>

      {/* Floating spheres container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mb-11">
        {/* Top sphere - Creativity */}
        <div className="absolute top-1 left-1/2 ">
          <div className="relative group">
            <img
              src="/images/creat.svg"
              alt="Creativity"
              className="w-70 h-70 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Left sphere - Strategy */}
        <div className="absolute top-20 left-40">
          <div className="relative group">
            <img
              src="/images/strat.svg"
              alt="Strategy"
              className="w-90 h-90 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right sphere - Technology */}
        <div className="absolute top-32 left-[50%] ">
          <div className="relative group">
            <img
              src="/images/tech.svg"
              alt="Technology"
              className="w-110 h-110 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Bottom text section */}
      <div className="relative z-10 mt-80 text-center max-w-2xl">
        <p className="text-[20px] leading-relaxed mb-2 fc-primary">
          Strategy, creativity, technology - aligned in perfect sync
        </p>
        <p className="text-[20px] leading-relaxed mb-2 fc-primary">
          Always adjusting, always forward
        </p>
      </div>

      {/* Subtle floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .absolute:nth-child(1) > div {
          animation: float 6s ease-in-out infinite;
        }
        .absolute:nth-child(2) > div {
          animation: floatLeft 8s ease-in-out infinite 2s;
        }
        .absolute:nth-child(3) > div {
          animation: floatRight 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>

    </>
  );
};

// VIDEO SECTION //


function Section() {
    // Section component code, now we removed the ParticlesBackground call from here
    return (
        <>
            <div id="scroll-zoom-section" className="relative h-[300vh] overflow-hidden">
                {/* ParticlesBackground removed from here as it's now global */}

                {/* Section 1 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-30">
                    <Parallax translateY={[0, 0]} opacity={[1, 0]} scale={[0.5, 1]}>
                    <div className="text-center">
                        <h1 className="text-[40px] mb-5 fc-primary">Look at this dot</h1>
                        <p className="text-[30px]  mb-0 fc-primary">it's like a planet in the vast universe <br /> At a distance, it seems like nothing <span className='font-weight-bold'><br />But zoom in </span></p>
                    </div>
                    </Parallax>
                </div>

                {/* Section 2 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-20">
                    <Parallax translateY={[0, 0]} opacity={[0, 1]} scale={[0.5, 1]}>
                    <div className="text-center">
                        <p className="text-[30px] mb-0 fc-primary">and you'll find life, movement, possibilities…</p>
                    </div>
                    </Parallax>
                </div>

                {/* Section 3 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-10">
                    <Parallax translateY={[0, 0]} opacity={[0, 1]} scale={[0.5, 1]}>
                    <div className="text-center">
                        <p className="text-[30px] mb-0 fc-primary">Just like the universe, the digital world is infinite<br />Multiple ideas with untapped potential floating around</p>
                    </div>
                    </Parallax>
                </div>
            </div>
        </>
    );
}



export default function Home() {
    const topsection = {
      translateY: [0, 30],
      scale: [1, 1.05, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="box hero-section position-relative">
          {/* Video container with overlay and wave effect */}
          <div className="video-overlay-container position-absolute top-0 start-0 w-100 h-100">
            <video
              className="w-100 h-100 object-fit-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/tdfvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="video-overlay position-absolute top-0 start-0 w-100 h-100" />
          </div>

          {/* Content */}
          <div className="hero-content relative text-white text-center d-flex flex-column justify-content-center align-items-center">
            <h1>Keeping You Ahead,</h1>
            <h2>Keeping You Relevant</h2>
          </div>
        </div>
      )
    };

    const gradientOverlay = {
      opacity: [0, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: <div className="gradient inset" />
    };



    return (
        <ParallaxProvider>
            <WebsiteLayout title="Home | TDF Agency" description="Welcome to TDF Agency - Your trusted digital partner.">
                {/* Global Particles Background */}
                <ParallaxBanner layers={[topsection, gradientOverlay]} className="full"/>
                <ThreeModelOverlay />
                <Section />
                <ImageZoomSection />
                <SmartToolsSlider />
                <ClientSlider />
                <ServiceSlider />
                <TestimonialsSection />
            </WebsiteLayout>
        </ParallaxProvider>
    );
}

