import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Preloader from '@/components/Preloader';
import Contact from '@/Components/frontend/Contact';

export default function WebsiteLayout({ children, title = 'TDF Agency', description = 'Your trusted digital partner' }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const [loaded, setLoaded] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Show preloader until loaded is true */}
            {!loaded && (
                <Preloader
                    logoSrc="/images/logo.svg"
                    onFinish={() => setLoaded(true)}
                />
            )}

            {/* Show main layout only when loaded */}
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
                    <a className="navbar-brand d-flex align-items-center fw-bold" href="/home">
                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            width="150"
                            className="me-2"
                        />
                    </a>

                    {/* Burger Icon */}
                    <svg
                        className={`burger ${menuOpen ? 'open' : ''}`}
                        viewBox="0 0 100 80"
                        fill="#000"
                        onClick={toggleMenu}
                        style={{ cursor: 'pointer' }}
                        >
                        <rect className="bar bar1" width="130" height="15" />
                        <rect className="bar bar2" y="30" width="130" height="15" />
                        <rect className="bar bar3" y="60" width="130" height="15" />
                    </svg>

                    {/* Side Menu */}
                    <div className={`side-menu ${menuOpen ? 'open' : ''}`} id="sideMenu">
                        <ul>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/casestudiesmain">Case Studies</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/Servicesmain">Services</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/Productmain">Product</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/Industriesmain">Industries</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/Contact">Contact</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/About">About Us</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="/partners">Partners</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="">
                <div className="">
                    {children}
                </div>
            </main>


            {/* Footer */}
            <footer className="text-white pt-8">
                <div className="container-fluid">
                {/* Top Line */}
               <Contact/>

                {/* Footer Links and Social */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 pb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
                            <img
                                src="/images/footerlogo.svg"
                                alt="Logo"
                                width="150"
                                className=""
                            />
                        </a>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Home</a>
                        <a href="#" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">About Us</a>
                        <a href="#" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Services</a>
                        <a href="#" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Insights</a>
                        <a href="#" className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Career</a>
                    </div>

                    <div className="items-center space-x-4">
                        <h5 className="text-[22px] fc-primary mb-2 ml-2">Get in Touch</h5>
                        <div className="flex ml-0">
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/facebook.svg" alt="Logo" width="40" className="me-2" /></a>
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/linkedin.svg" alt="Logo" width="40" className="me-2" /></a>
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/insta.svg" alt="Logo" width="40" className="me-2" /></a>
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/youtube.svg" alt="Logo" width="40" className="me-2" /></a>
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
