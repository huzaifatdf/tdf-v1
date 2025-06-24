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
import TestimonialsSection from '@/Components/frontend/TestimonialsSection';
import ServiceSlider from '@/Components/frontend/ServiceSlider';
import ClientSlider from '@/Components/frontend/ClientSlider';
import SmartToolsSlider from '@/Components/frontend/SmartToolsSlider';

gsap.registerPlugin(ScrollTrigger);


// Using the slim version for better compatibility

function ThreeModelOverlay() {
   const mountRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        let isVideoActive = false;

        const handleMouseMove = (event) => {
            if (!isVideoActive || !videoRef.current) return;
            // Optional: Add any mouse interaction effects here if needed
        };

        window.addEventListener('mousemove', handleMouseMove);

        ScrollTrigger.create({
            trigger: "#scroll-zoom-section",
            start: "top top",
            end: "bottom top",
            onEnter: () => {
                isVideoActive = true;
                if (videoRef.current) {
                    videoRef.current.play();
                }
            },
            onLeave: () => {
                isVideoActive = false;
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
            onEnterBack: () => {
                isVideoActive = true;
                if (videoRef.current) {
                    videoRef.current.play();
                }
            },
            onLeaveBack: () => {
                isVideoActive = false;
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
        });

        const mount = mountRef.current;

        // Create video element
        const video = document.createElement('video');
        video.src = '/images/objectvideo.webm'; // Replace with your WebM file path
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.style.width = '12vw';
        video.style.height = '12vh';
        video.style.objectFit = 'contain';
        video.style.position = 'absolute';
        video.style.top = '50%';
        video.style.left = '50%';
        video.style.transform = ''; // Start larger
        video.style.transformOrigin = 'center center';

        mount.appendChild(video);
        videoRef.current = video;

        // Scroll Zoom Effect
        gsap.registerPlugin(ScrollTrigger);

        // Scroll-triggered zoom in
        gsap.fromTo(video,
            {
                scale: 1.5, // Start scale
                x: '-50%',
                y: '-50%'
            },
            {
                scale: 4, // End scale - zoom in more
                x: '-50%',
                y: '-50%',
                ease: "none",
                scrollTrigger: {
                    trigger: "#scroll-zoom-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                onUpdate: () => {
                    console.log("Video scale:", video.style.transform);
                }
            }
        );

        // Fade out effect
        gsap.to(mount, {
            autoAlpha: 0,
            ease: "power4.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: "#scroll-zoom-section",
                start: "bottom bottom",
                end: "bottom top-=500",
                scrub: true,
            }
        });

        // Click handler (optional)
        const handleClick = (event) => {
            console.log("Video clicked");
            // Add any click functionality here
        };

        mount.addEventListener('click', handleClick);

        // Resize handler
        const handleResize = () => {
            // Video will automatically resize due to 100% width/height
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            mount.removeEventListener('click', handleClick);
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.src = '';
            }
            mount.innerHTML = '';
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 start-0 w-100"
            style={{
                height: '100vh',
                pointerEvents: 'auto',
                cursor: 'pointer',
                backgroundColor: 'transparent', // No background
                overflow: 'hidden'
            }}
        />
    );
}
// Other component definitions remain unchanged



const VideoZoomSection = () => {
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    // GSAP zoom-in effect on the video wrapper
    gsap.fromTo(
      videoWrapperRef.current,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 4,
        ease: "power2.out"
      }
    );
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div
        ref={videoWrapperRef}
        className="absolute top-0 left-0 w-full h-full will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/background2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <p className="text-2xl text-white font-semibold">
          We find the dots, draw the lines, and shape experiences
        </p>
      </div>

      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
    </div>
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
                <VideoZoomSection />
                <SmartToolsSlider />
                <ClientSlider />
                <ServiceSlider />
                <TestimonialsSection />
            </WebsiteLayout>
        </ParallaxProvider>
    );
}

