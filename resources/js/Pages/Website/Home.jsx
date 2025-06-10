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

