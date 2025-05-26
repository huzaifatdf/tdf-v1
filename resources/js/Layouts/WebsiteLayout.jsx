import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

export default function WebsiteLayout({ children, title = 'TDF Agency', description = 'Your trusted digital partner' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="/css/sass/style.css" />
            </Head>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 w-100 shadow-none" style={{ zIndex: 3 }}>
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            width="150"
                            className="me-2"
                        />
                    </a>

                    {/* Burger Icon */}
                    <svg
                        className="burger"
                        viewBox="0 0 100 80"
                        fill="#000"
                        onClick={toggleMenu}
                        style={{ cursor: 'pointer' }}
                    >
                        <rect fill='#fff' width="130" height="15"></rect>
                        <rect fill='#fff' y="30" width="130" height="15"></rect>
                        <rect fill='#fff' y="60" width="130" height="15"></rect>
                    </svg>

                    {/* Side Menu */}
                    <div className={`side-menu ${menuOpen ? 'open' : ''}`} id="sideMenu">
                        <ul>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="#">Work</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="#">Services</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="#">Product</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="#">Industries</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="#">Contact</a></li>
                            <li className="transition-transform duration-200 hover:scale-105"><a href="#">About Us</a></li>
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
                <div className="flex justify-between items-center border-b border-gray-700 pb-6">
                    <p className="text-[22px] fc-primary mb-0">Stay Ahead. Stay Relevant...</p>
                    <div className="flex items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                    <h2 className="text-[80px] font-[400] fc-primary mr-6">let's talk</h2>
                    <div className={`w-20 h-20 rounded-full svg-icon-footer flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-12 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    </div>
                </div>

                {/* Expandable Box */}
                {isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 ">
                    <div className='row'>
                        <p className="text-[22px] fc-primary mb-0">Start a Conversation</p>
                        <div className="mt-4 col-md-6">
                            <p className="text-[22px] fc-primary mb-0">Email:</p>
                            <a
                                href="mailto:info@thedesignfirm.com"
                                className="inline-block text-[18px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200"
                            >
                                info@thedesignfirm.com
                            </a>
                        </div>

                        <div className="mt-4 col-md-6" >
                            <p className="text-[22px] fc-primary mb-0">USA:</p>
                            <a className="inline-block text-[18px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+12393565070'>+12393565070</a>
                        </div>
                        <div className="mt-4">
                            <p className="text-[22px] fc-primary mb-0">Pakistan:</p>
                            <a className="inline-block text-[18px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+92 303 080 8833'>+92 303 080 8833</a>
                        </div>
                    </div>

                    <form className="flex flex-col md:flex-row md:flex-wrap gap-4 text-white">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full md:w-[48%] "
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full md:w-[48%]"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#9ce602] text-black py-2 px-6 rounded font-semibold hover:bg-lime-400 transition-colors w-fit mt-2"
                        >
                            Send Message
                        </button>
                    </form>

                    </div>
                )}

                {/* Footer Links and Social */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 pb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
                            <img
                                src="/images/footerlogo.svg"
                                alt="Logo"
                                width="150"
                                className="me-2"
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
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/linkedin.svg" alt="Logo" width="41" className="me-2" /></a>
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/insta1.svg" alt="Logo" width="40" className="me-2" /></a>
                            <a href="#" className="hover:text-gray-300 rotate-hover"><img src="/images/youtube.svg" alt="Logo" width="41" className="me-2" /></a>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        </>
    );
}
