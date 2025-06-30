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
import { Space } from 'lucide-react';

// Register GSAP plugins only once at the top level
gsap.registerPlugin(ScrollTrigger);


function ThreeModelOverlay() {
    const [loading, setLoading] = useState(true);
    const mountRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        const clock = new THREE.Clock();
        let mixer = null;
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

        // Create ScrollTrigger with proper cleanup (assuming GSAP is available)
        if (typeof ScrollTrigger !== 'undefined') {
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
        }

        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const rotatingGroup = new THREE.Group();
        scene.add(rotatingGroup);
        const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.9, 1000);
        camera.position.z = 9;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.5;
        renderer.outputEncoding = THREE.sRGBEncoding;
        mount.appendChild(renderer.domElement);

        // Enhanced lighting setup for metallic appearance
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        // Main key light - brighter and better positioned
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

        // Fill light from opposite side
        const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
        fillLight.position.set(-5, 3, 2);
        scene.add(fillLight);

        // Top light for additional illumination
        const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
        topLight.position.set(0, 5, 0);
        scene.add(topLight);

        // Spot light for focused illumination
        const spotLight = new THREE.SpotLight(0xffffff, 2.5);
        spotLight.position.set(0, 8, 5);
        spotLight.angle = Math.PI / 3;
        spotLight.penumbra = 0.3;
        spotLight.decay = 1;
        spotLight.distance = 25;
        spotLight.castShadow = true;
        scene.add(spotLight);

        // Additional point lights for metallic highlights
        const pointLight1 = new THREE.PointLight(0xffffff, 1.0, 20);
        pointLight1.position.set(4, 4, 4);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 20);
        pointLight2.position.set(-4, -2, 4);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xffffff, 0.6, 15);
        pointLight3.position.set(0, -4, 2);
        scene.add(pointLight3);

        // Raycaster and mouse
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // Load GLB Model
        const loader = new GLTFLoader();
        loader.load('/images/stone.glb', gltf => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, -0.5, 0);
        model.name = 'BallModel';

        // Apply blue metallic material to match first image
        model.traverse((child) => {
            if (child.isMesh) {
                const blueMaterial = new THREE.MeshStandardMaterial({
                    color: 0xc0c0c0, // Blue color similar to first image
                    roughness: 0.3,
                    metalness: 0.7,
                    transparent: false,
                    opacity: 1.0,
                    envMapIntensity: 1.2,
                });
                child.material = blueMaterial;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        // Setup animation mixer
        if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
        }

       rotatingGroup.add(model);
        modelRef.current = model;
        setLoading(false);
    }, undefined, (error) => {
        console.error('Error loading model:', error);
    });


        // Animation loop
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);
            rotatingGroup.rotation.y += 0.005; // smooth 360° spin
            renderer.render(scene, camera);
        };

        animate();

        cleanupFunctions.push(() => {
            if (animationId) cancelAnimationFrame(animationId);
        });

        // GSAP ScrollTrigger animations (if GSAP is available)
        if (typeof gsap !== 'undefined') {
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
        }

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
        <>
        <div>
            {loading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
                <p className="text-white text-lg animate-pulse">Loading 3D Model...</p>
            </div>
            )}
        </div>

        <div
            ref={mountRef}
            className="fixed top-0 start-0 w-100"
            style={{
                height: '100vh',
                pointerEvents: 'auto',
                cursor: 'pointer',
            }}
        />
        </>
    );
}



const ImageZoomSection = () => {
    const imageWrapperRef = useRef(null);
    const textContentRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // Track if the section is visible (using the same ID as Space component)
    useEffect(() => {
        const section = document.getElementById("space-section");
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (section) observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (visible) {
                // Apply floating animation to the image wrapper
                gsap.to(imageWrapperRef.current, {
                    y: 20,
                    duration: 2,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 0.5,
                });

                // Apply scale/fade animation to image
                gsap.fromTo(
                    imageWrapperRef.current,
                    {
                        scale: 1.9,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.8,
                        ease: "power3.out",
                        delay: 0.2,
                    }
                );

                // Apply fade-in animation to text content
                gsap.fromTo(
                    textContentRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                        delay: 2, // Start after image animation is well underway
                    }
                );
            } else {
                // Kill all animations when not visible
                gsap.killTweensOf([imageWrapperRef.current, textContentRef.current]);
                // Reset to hidden state
                gsap.set(imageWrapperRef.current, {
                    scale: 1.9,
                    opacity: 0,
                    y: 0,
                });
                gsap.set(textContentRef.current, {
                    opacity: 0,
                    y: 30,
                });
            }
        });

        return () => ctx.revert();
    }, [visible]);

    return (
        <>
            <div
                className="container-fluid relative w-full h-screen overflow-hidden"
            >
                <div
                    ref={imageWrapperRef}
                    className="absolute top-0 left-0 w-full h-full will-change-transform bg-center bg-contain bg-no-repeat mb-[80px]"
                    style={{
                        transformOrigin: "center center",
                        backgroundImage: `url('/images/backhome.png')`,
                        opacity: visible ? 1 : 0,
                        transition: "opacity 0.5s ease",
                    }}
                />

                <div
                    ref={textContentRef}
                    className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
                    style={{
                        opacity: 0, // Start hidden
                    }}
                >
                    <p className="text-[30px] mb-0 fc-primary">
                        We connect relevant ideas to shape complete experiences
                    </p>
                </div>
            </div>
        </>
    );
};


const layers = [
  { text: "Strategy", className: "" },
  { text: "Creativity", className: "" },
  { text: "Technology", className: "" },
  {
    text: "Aligned in perfect sync always adjusting, always forward",
    className: "last-scroll text-[40px] font-medium text-center",
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + containerRef.current.offsetWidth,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        ref={sectionRef}
        className="flex w-[400vw] h-screen" // dynamically wide enough for all panels
      >
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`panel w-screen h-screen flex items-center justify-center px-8 text-stroke text-[150px] font-extrabold uppercase text-transparent leading-tight ${layer.className}`}
          >
            {layer.text}
          </div>
        ))}
      </div>
    </div>
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
                        <h1 className="text-[40px] mb-2 fc-primary">Look at this dot</h1>
                        <p className="text-[30px] mb-0 fc-primary">
                        It’s like a planet in the vast universe
                        <br />
                        {/* <span className="font-weight-bold">But zoom in</span> */}
                        </p>
                    </div>
                    </Parallax>
                </div>

                {/* Section 2 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-20">
                    <Parallax speed={10} scale={[0.8, 1.5]} opacity={[0, 1]}>
                    <div className="text-center">
                        <p className="text-[30px] mb-0 fc-primary">
                        Full of life, movement, and possibilities
                        </p>
                    </div>
                    </Parallax>
                </div>

                {/* Section 3 */}
                <div className="sticky top-0 h-screen flex justify-center items-center z-10">
                    <Parallax speed={10} scale={[0.8, 1.5]} opacity={[0, 1]}>
                    <div className="text-center">
                        <p className="text-[30px] mb-0 fc-primary">
                        In the digital universe, each dot is a potential idea
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


    return (
        <ParallaxProvider>
            <WebsiteLayout title="Home | TDF Agency" description="Welcome to TDF Agency - Your trusted digital partner.">
                <ParallaxBanner layers={[topsection, gradientOverlay]} className="full"/>
                <ThreeModelOverlay />
                <Section />
                <div
                    className="relative overflow-hidden min-h-screen w-full"
                    >
                    <ParticleCanvas />
                    <div className="relative z-10">
                        {/* Fixed Background */}
                        <Space />

                        {/* Foreground Content */}
                        <div className="relative z-10 isolate">
                            <div className="min-h-screen" id="space-section">
                                <div id="image-zoom-section">
                                    <ImageZoomSection />
                                </div>
                                <HorizontalScroll />
                                <SmartToolsSlider />
                                <ClientSlider />
                                <ServiceSlider />
                                <TestimonialsSection />
                            </div>
                        </div>
                    </div>
                </div>
            </WebsiteLayout>
        </ParallaxProvider>
    );
}
