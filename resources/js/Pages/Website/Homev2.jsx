import React, { useEffect, useState, useRef, useCallback } from 'react';
import gsap from "gsap";
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
import ClientSlider from '@/Components/frontend/ClientSlider';
import ServiceSlider from '@/Components/frontend/ServiceSlider';
import SmartToolsSlider from '@/Components/frontend/SmartToolsSlider';
import TestimonialsSection from '@/Components/frontend/TestimonialsSection';
import ParticleCanvas from "@/components/Space";

// Register GSAP plugins only once at the top level
gsap.registerPlugin(ScrollTrigger);

function ThreeModelOverlay() {
    const mountRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        // Store cleanup functions
        const cleanupFunctions = [];

        let isModelActive = false;
        const handleMouseMove = (event) => {
            if (!isModelActive || !modelRef.current) return;

            const mount = mountRef.current;
            if (!mount) return;

            const bounds = mount.getBoundingClientRect();
            const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
            const y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

            modelRef.current.rotation.x = y * 0.5;
            modelRef.current.rotation.y = x * 0.5;
        };

        window.addEventListener('mousemove', handleMouseMove);
        cleanupFunctions.push(() => window.removeEventListener('mousemove', handleMouseMove));

        // Create ScrollTrigger with proper cleanup
        const scrollTrigger = ScrollTrigger.create({
            trigger: "#scroll-zoom-section",
            start: "top top",
            end: "bottom top",
            onEnter: () => { isModelActive = true; },
            onLeave: () => { isModelActive = false; },
            onEnterBack: () => { isModelActive = true; },
            onLeaveBack: () => { isModelActive = false; },
        });
        cleanupFunctions.push(() => scrollTrigger.kill());

        const mount = mountRef.current;
        if (!mount) return;

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

        const spotLight = new THREE.SpotLight(0xffffff, 2);
        spotLight.position.set(0, 5, 5);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.3;
        spotLight.decay = 2;
        spotLight.distance = 20;
        spotLight.castShadow = true;
        spotLight.target.position.set(0, 0, 0);
        scene.add(spotLight.target);
        scene.add(spotLight);

        // Raycaster and mouse
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // Load GLB Model
        const loader = new GLTFLoader();
        loader.load('/images/ball.glb', gltf => {
            const model = gltf.scene;
            model.scale.set(0.5, 0.5, 0.5);
            model.position.set(0, -0.5, 0);
            model.name = 'BallModel';
            scene.add(model);
            modelRef.current = model;
        });

        // Animation loop
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            if (modelRef.current) modelRef.current.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
        cleanupFunctions.push(() => {
            if (animationId) cancelAnimationFrame(animationId);
        });

        // GSAP ScrollTrigger animations
        const cameraAnimation = gsap.to(camera.position, {
            z: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "#scroll-zoom-section",
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: () => {
                    camera.position.z = Math.max(1, Math.min(9, camera.position.z));
                    renderer.render(scene, camera);
                }
            },
        });

        const fadeAnimation = gsap.to(mount, {
            autoAlpha: 0,
            ease: "power4.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: "#scroll-zoom-section",
                start: "bottom bottom",
                end: "bottom top-=80",
                scrub: true,
                onUpdate: () => {
                    renderer.render(scene, camera);
                }
            }
        });

        // Click handler
        const handleClick = (event) => {
            const bounds = mount.getBoundingClientRect();
            mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
            mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
        };

        mount.addEventListener('click', handleClick);
        cleanupFunctions.push(() => mount.removeEventListener('click', handleClick));

        // Resize handler
        const handleResize = () => {
            if (!mount) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);
        cleanupFunctions.push(() => window.removeEventListener('resize', handleResize));

        // Cleanup function
        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
            if (mount && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            scene.clear();
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
            }}
        />
    );
}

// Rest of your component code remains the same...
const services = [
  {
    title: "Brand Communication",
    subtitle: "shaping how the world sees you",
    image: "/images/ser1.png",
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

const ImageZoomSection = () => {
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imageWrapperRef.current, {
                y: 20,
                duration: 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                repeatDelay: 0.5,
            });

            gsap.fromTo(
                imageWrapperRef.current,
                {
                    scale: 1.9,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 3.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageWrapperRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const creativityRef = useRef(null);
    const strategyRef = useRef(null);
    const technologyRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const spheres = [
                { ref: creativityRef, delay: 0 },
                { ref: strategyRef, delay: 0.2 },
                { ref: technologyRef, delay: 0.4 },
            ];

            spheres.forEach(({ ref, delay }) => {
                gsap.fromTo(
                    ref.current,
                    { y: 60, opacity: 0, scale: 0.8 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 3.8,
                        ease: 'power3.out',
                        delay,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top 80%',
                        },
                    }
                );

                gsap.to(ref.current, {
                    y: '-=10',
                    duration: 3.8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: delay + 1.2,
                });
            });
        });

        return () => ctx.revert();
    }, []);

    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current.querySelectorAll('p'),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 85%',
                    },
                }
            );
        });

        return () => ctx.revert();
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

            <div className="relative px-4 ">
                <div className="relative z-10 w-full max-w-4xl mx-auto mb-11 py-16">
                    <div ref={creativityRef} className="absolute top-1 left-1/2 ">
                        <div className="relative group">
                            <img
                                src="/images/creat.svg"
                                alt="Creativity"
                                className="w-[260px] h-[260px] object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <div ref={strategyRef} className="absolute top-20 left-40">
                        <div className="relative group">
                            <img
                                src="/images/strat.svg"
                                alt="Strategy"
                                className="w-[300px] h-[300px] object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <div ref={technologyRef} className="absolute top-[130%] left-[40%] ">
                        <div className="relative group">
                            <img
                                src="/images/tech.svg"
                                alt="Technology"
                                className="w-[300px] h-[300px] object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center '>
                <div ref={textRef} className="relative z-10 mt-80 text-center max-w-2xl">
                    <p className="text-[20px] leading-relaxed mb-2 fc-primary">
                        Strategy, creativity, technology - aligned in perfect sync
                    </p>
                    <p className="text-[20px] leading-relaxed mb-2 fc-primary">
                        Always adjusting, always forward
                    </p>
                </div>

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


const AnimatedIconText = ({ id, iconSrc, words }) => {
  const [text, setText] = useState("");
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const getInitialDelay = () => {
    switch (id) {
      case "one":
        return 0;
      case "two":
        return 1.5;
      case "three":
        return 3;
      default:
        return 0;
    }
  };
    useEffect(() => {
    const delay = getInitialDelay();
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, delay });

    // Set initial styles
    gsap.set(iconRef.current, { opacity: 1, scale: 1 });
    gsap.set(textRef.current, { opacity: 0, rotateX: -90, transformPerspective: 1000 });

    // Hide icon
    tl.to(iconRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
    });

    // Animate through each word
    words.forEach((word) => {
        tl.call(() => setText(word)); // Set new word
        tl.fromTo(
        textRef.current,
        { opacity: 0, rotateX: -90 },
        {
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            transformPerspective: 1000,
        }
        );
        tl.to(textRef.current, {
        opacity: 0,
        rotateX: 90,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.in",
        transformPerspective: 1000,
        });
    });

    // Show icon again
    tl.to(iconRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
    });
    }, [id]);

    return (
    <>
    <div className="text-center text-lime-400 relative min-w-[350px] h-[100px]">
        <div className="w-full h-full relative flex items-center justify-center">
            <div ref={iconRef} className="absolute inset-0 flex items-center justify-center">
            <img src={iconSrc} alt="icon" className="w-16" />
            </div>
            <h2
            ref={textRef}
            className="text-[34px] tracking-wide absolute inset-0 flex items-center justify-center"
            style={{ opacity: 0 }}
            >
            {text}
            </h2>
        </div>
    </div>
    </>
  );
};


function Section() {
    return (
        <>
            <div id="scroll-zoom-section" className="relative h-[300vh] overflow-hidden">
                {/* Section 1 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-30">
                    <Parallax speed={10} scale={[0.8, 1.5]} opacity={[1, 0]}>
                    <div className="text-center">
                        <h1 className="text-[40px] mb-5 fc-primary">Look at this dot</h1>
                        <p className="text-[30px] mb-0 fc-primary">
                        it's like a planet in the vast universe <br />
                        At a distance, it seems like nothing
                        <br />
                        <span className="font-weight-bold">But zoom in</span>
                        </p>
                    </div>
                    </Parallax>
                </div>

                {/* Section 2 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-20">
                    <Parallax speed={10} scale={[0.8, 1.5]} opacity={[0, 1]}>
                    <div className="text-center">
                        <p className="text-[30px] mb-0 fc-primary">
                        and you'll find life, movement, possibilities…
                        </p>
                    </div>
                    </Parallax>
                </div>

                {/* Section 3 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-10">
                    <Parallax speed={10} scale={[0.8, 1.5]} opacity={[0, 1]}>
                    <div className="text-center">
                        <p className="text-[30px] mb-0 fc-primary">
                        Just like the universe, the digital world is infinite
                        <br />
                        Multiple ideas with untapped potential floating around
                        </p>
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
                    <div className="video-overlay position-absolute top-0 start-0 w-100 h-100" />
                </div>

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


    const sectionRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
        if (!sectionRef.current) return;
        gsap.fromTo(
            sectionRef.current,
            { scale: 0.2, opacity: 0 },
            {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: 'top center',
                toggleActions: 'play none none reverse',
            },
            }
        );
        }, sectionRef);
        return () => ctx.revert();
    }, []);


    return (
        <ParallaxProvider>
            <WebsiteLayout title="Home | TDF Agency" description="Welcome to TDF Agency - Your trusted digital partner.">
                <ParallaxBanner layers={[topsection, gradientOverlay]} className="full"/>
                <ThreeModelOverlay />
                <Section />
                <div
                    className="relative overflow-hidden bg-black min-h-screen w-full"
                    >
                    <ParticleCanvas />
                    <div className="relative z-10">
                        <div ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center text-center gap-y-20">
                            <div className="flex justify-center items-center gap-20">
                                <AnimatedIconText
                                id="one"
                                iconSrc="/images/icon1.svg"
                                words={["Strategy", "Creativity", "Technology"]}
                                />
                                <AnimatedIconText
                                id="two"
                                iconSrc="/images/icon1.svg"
                                words={["Creativity", "Technology", "Strategy"]}
                                />
                                <AnimatedIconText
                                id="three"
                                iconSrc="/images/icon1.svg"
                                words={["Technology", "Strategy", "Creativity"]}
                                />
                            </div>

                            <p className="text-[22px] fc-primary">
                                aligned in perfect sync — Always adjusting, always forward
                            </p>
                        </div>
                        <SmartToolsSlider />
                        <ClientSlider />
                        <ServiceSlider />
                        <TestimonialsSection />
                    </div>
                </div>
            </WebsiteLayout>
        </ParallaxProvider>
    );
}
