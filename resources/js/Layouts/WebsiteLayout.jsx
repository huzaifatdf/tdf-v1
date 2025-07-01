import React, { useState, useRef, useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Preloader from '@/components/Preloader';
import Contact from '@/Components/frontend/Contact';
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import ContactFormFloating from '@/Components/ContactFormFloating';


export default function WebsiteLayout({ children, title = 'TDF Agency', description = 'Your trusted digital partner' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(true); // set true to bypass Preloader for now
      const { auth, flash } = usePage().props;
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const { toast } = useToast()



    //useEffect for session flash toast
  //useEffect for session flash toast
   useEffect(() => {
        // Handle success messages
        if (flash?.success) {
            toast({
                title: "Success",
                description: flash.success,
                variant: "default",
                duration: 1000, // 2 seconds
            });
        }

        // Handle error messages
        if (flash?.error) {
            toast({
                title: "Error",
                description: flash.error,
                variant: "destructive",
                duration: 1000, // 2 seconds
            });
        }

        // Handle warning messages
        if (flash?.warning) {
            toast({
                title: "Warning",
                description: flash.warning,
                variant: "default",
                duration: 1000, // 2 seconds
            });
        }

        // Handle info messages
        if (flash?.info) {
            toast({
                title: "Information",
                description: flash.info,
                variant: "default",
                duration: 1000, // 2 seconds
            });
        }

        // Handle generic messages
        if (flash?.message) {
            toast({
                title: "Success",
                description: flash.message,
                variant: "default",
                duration: 1000, // 2 seconds
            });
        }
    }, [flash, toast]);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
         <Toaster />


            <Preloader onFinish={() => setLoaded(true)} />


            {/* Main layout */}
            {loaded && (
                <>
                    <Head>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="stylesheet" href="/css/sass/style.css" />
                    </Head>

                    {/* Global Components */}
                    <ParticlesBackground />
                    {/* <CustomCursor /> */}

                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 w-100 shadow-none" style={{ zIndex: 3 }}>
                        <div className="container-fluid">
                            <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
                                <img
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    width="120"
                                    className="me-2"
                                />
                            </a>

                            {/* Burger Icon */}
                            <svg
                                ref={burgerRef}
                                className={`burger ${menuOpen ? 'open' : ''}`}
                                viewBox="0 0 100 80"
                                fill="#000"
                                onClick={toggleMenu}
                                style={{ cursor: 'pointer' }}
                                >
                                <rect className="bar bar1" x="0" y="0" width="100" height="8" rx="4" />
                                <rect className="bar bar2" x="0" y="30" width="100" height="8" rx="4" />
                                <rect className="bar bar3" x="0" y="60" width="100" height="8" rx="4" />
                            </svg>

                            {/* Side Menu */}
                            <div
                                ref={menuRef}
                                className={`side-menu ${menuOpen ? 'open' : ''}`}
                                id="sideMenu"
                                >
                                <div className="flex flex-col justify-between h-full">
                                    {/* Centered Menu Links */}
                                    <div className="flex-1 flex items-center justify-center">
                                    <ul className="space-y-4 w-[80%] px-6 m-0">
                                        {[
                                            { href: "/casestudiesmain", label: "Case Studies", icon: "/images/case.svg" },
                                            { href: "/Servicesmain", label: "Services", icon: "/images/services.svg" },
                                            { href: "/Productmain", label: "Product", icon: "/images/products.svg" },
                                            { href: "/Industriesmain", label: "Industries", icon: "/images/industries.svg" },
                                            { href: "/Contact", label: "Contact", icon: "/images/contact.svg" },
                                            { href: "/About", label: "About Us", icon: "/images/about.svg" },
                                            { href: "/partners", label: "Partners", icon: "/images/partner.svg" },
                                        ].map((item, index) => (
                                            <li
                                            key={index}
                                            className="transition-transform duration-200 hover:scale-105"
                                            >
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-3 text-white"
                                            >
                                                <img src={item.icon} alt={item.label} width="40" height="40"/>
                                                <span>{item.label}</span>
                                            </a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>

                                    {/* Bottom Fixed Social Icons */}
                                    <div className="pt-4 pb-4">
                                    <h5 className="text-[20px] text-white mb-2 text-center">Get in Touch</h5>
                                    <div className="flex justify-center gap-3">
                                        <a href="https://www.facebook.com/thedesignsfirm" className="hover:text-gray-300 rotate-hover">
                                        <img src="/images/facebook.svg" alt="Facebook" width="40" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/thedesignfirm" className="hover:text-gray-300 rotate-hover">
                                        <img src="/images/linkedin.svg" alt="LinkedIn" width="40" />
                                        </a>
                                        <a href="https://www.instagram.com/thedesignfirmtdf/" className="hover:text-gray-300 rotate-hover">
                                        <img src="/images/insta.svg" alt="Instagram" width="40" />
                                        </a>
                                        <a href="https://www.youtube.com/@TheDesignFirm" className="hover:text-gray-300 rotate-hover">
                                        <img src="/images/youtube.svg" alt="YouTube" width="40" />
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>

                        </div>
                    </nav>

                    {/* Page Content */}
                    <main>
                        <div>
                            {children}
                            {/* <ContactFormFloating /> */}
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="text-white pt-8">
                        <div className="container-fluid">
                            <Contact />

                            <div className="flex flex-col md:flex-row justify-between items-center pt-6 pb-6 mobile-footer">
                                <div className="flex items-center space-x-4 mb-4 md:mb-0 img-margin-mobile">
                                    <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
                                        <img
                                            src="/images/footerlogo.svg"
                                            alt="Logo"
                                            width="150"
                                        />
                                    </a>
                                </div>

                                <div className="flex space-x-6">
                                    <Link href="/" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Home</Link>
                                    <Link href={"/About"} className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">About Us</Link>
                                    <Link href="/Servicesmain" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Services</Link>
                                    {/* <a href="#" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Insights</a> */}
                                    <a href="https://app.myhcm.pk/CareerPortal/Careers?q=lquGlsZPq1NxJlf9S%2B8LjQ%3D%3D&lang=En" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Career</a>
                                </div>

                                <div className="items-center space-x-4">
                                    <h5 className="text-[20px] fc-primary mb-2">Get in Touch</h5>
                                    <div className="flex ml-0">
                                        <a href="https://www.facebook.com/thedesignsfirm" className="hover:text-gray-300 rotate-hover"><img src="/images/facebook.svg" alt="Facebook" width="40" className="me-2" /></a>
                                        <a href="https://www.linkedin.com/company/thedesignfirm" className="hover:text-gray-300 rotate-hover"><img src="/images/linkedin.svg" alt="LinkedIn" width="40" className="me-2" /></a>
                                        <a href="https://www.instagram.com/thedesignfirmtdf/" className="hover:text-gray-300 rotate-hover"><img src="/images/insta.svg" alt="Instagram" width="40" className="me-2" /></a>
                                        <a href="https://www.youtube.com/@TheDesignFirm" className="hover:text-gray-300 rotate-hover"><img src="/images/youtube.svg" alt="YouTube" width="40" className="me-2" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
            )}
        </>
    );
}
