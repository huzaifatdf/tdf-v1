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
import WhatsAppFloatButton from '@/Components/WhatsAppFloatButton';
import BacktoTop from '@/Components/BacktoTop';


export default function WebsiteLayout({ children, title = 'TDF Agency', description = 'Your trusted digital partner' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(true); // set true to bypass Preloader for now
      const { auth, flash } = usePage().props;
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const { toast } = useToast()



    //useEffect for session flash toast
   useEffect(() => {
        // Handle success messages
        if (flash?.success) {
            toast({
                title: "Success",
                description: flash.success,
                variant: "default", // or "success" if you have custom variant
                 duration: 1000,
            });
        }

        // Handle error messages
        if (flash?.error) {
            toast({
                title: "Error",
                description: flash.error,
                variant: "destructive",
                 duration: 1000,
            });
        }

        // Handle warning messages
        if (flash?.warning) {
            toast({
                title: "Warning",
                description: flash.warning,
                variant: "default", // You might want to create a warning variant
                 duration: 1000,
            });
        }

        // Handle info messages
        if (flash?.info) {
            toast({
                title: "Information",
                description: flash.info,
                variant: "default",
                 duration: 1000,
            });
        }

        // Handle generic messages
        if (flash?.message) {
            toast({
                title: "Notification",
                description: flash.message,
                variant: "default",
                 duration: 1000,
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
                    <CustomCursor />
                    {/* <BacktoTop /> */}

                    {/* Navbar */}
                    <nav className="sticky-menu navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 w-100 shadow-none" style={{ zIndex: 3 }}>
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
                                            { href: "/services", label: "Services", icon: "/images/services.svg" },
                                            { href: "/products", label: "Solutions", icon: "/images/products.svg" },
                                            { href: "/industries", label: "Industries", icon: "/images/industries.svg" },
                                            { href: "/case-studies", label: "Case Studies", icon: "/images/case.svg" },
                                            { href: "/about", label: "About Us", icon: "/images/about.svg" },
                                            { href: "/partners", label: "Partners", icon: "/images/partner.svg" },
                                            { href: "https://app.myhcm.pk/CareerPortal/Careers?q=lquGlsZPq1NxJlf9S%2B8LjQ%3D%3D&lang=En", target: "_blank", label: "Careers", icon: "/images/careers.svg" }, //Careers
                                            { href: "/contact", label: "Contact", icon: "/images/contact.svg" },


                                        ].map((item, index) => (
                                            <li
                                            key={index}
                                            className="transition-transform duration-200 hover:scale-105 "
                                            >
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-3 text-white"
                                            >
                                                <img src={item.icon} alt={item.label} width="35" height="35"/>
                                                <span className=' hover:text-[#9747FF] '>{item.label}</span>
                                            </a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>

                                    {/* Bottom Fixed Social Icons */}
                                    <div className="pt-4 pb-4 social-icons-footer">
                                    <h5 className="text-[20px] text-white mb-2 text-center">Get in Touch</h5>
                                    <div className="flex justify-center gap-3">
                                        <a href="https://www.facebook.com/thedesignsfirm" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M32 15.5388C32 6.9614 24.832 0 16 0C7.168 0 0 6.9614 0 15.5388C0 23.0596 5.504 29.3218 12.8 30.7669V20.2005H9.6V15.5388H12.8V11.6541C12.8 8.65514 15.312 6.21554 18.4 6.21554H22.4V10.8772H19.2C18.32 10.8772 17.6 11.5764 17.6 12.4311V15.5388H22.4V20.2005H17.6V31C25.68 30.2231 32 23.6035 32 15.5388Z" fill="white"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/thedesignfirm" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 0C7.43948 0 0.5 6.93948 0.5 15.5C0.5 24.0605 7.43948 31 16 31C24.5605 31 31.5 24.0605 31.5 15.5C31.5 6.93948 24.5605 0 16 0ZM12.2057 21.9244H9.06698V11.8236H12.2057V21.9244ZM10.617 10.5836C9.62562 10.5836 8.98464 9.88125 8.98464 9.0126C8.98464 8.1262 9.645 7.44484 10.6573 7.44484C11.6697 7.44484 12.2897 8.1262 12.3091 9.0126C12.3091 9.88125 11.6697 10.5836 10.617 10.5836ZM23.6693 21.9244H20.5305V16.3267C20.5305 15.0237 20.0752 14.1389 18.9402 14.1389C18.0731 14.1389 17.5581 14.7379 17.3304 15.3143C17.2465 15.5194 17.2255 15.81 17.2255 16.099V21.9228H14.0851V15.0447C14.0851 13.7837 14.0447 12.7294 14.0028 11.822H16.7298L16.8735 13.2251H16.9365C17.3498 12.5663 18.3621 11.5943 20.0558 11.5943C22.1209 11.5943 23.6693 12.978 23.6693 15.9521V21.9244Z" fill="white"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/thedesignfirmtdf/" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.4956 15.8767C18.4863 16.3677 18.3313 16.8448 18.0505 17.2477C17.7696 17.6506 17.3755 17.961 16.918 18.1396C16.4605 18.3182 15.9603 18.3569 15.4808 18.2509C15.0013 18.1449 14.564 17.8989 14.2245 17.5441C13.8849 17.1893 13.6583 16.7417 13.5734 16.258C13.4886 15.7743 13.5492 15.2762 13.7477 14.827C13.9462 14.3778 14.2736 13.9977 14.6884 13.7348C15.1032 13.4719 15.5867 13.338 16.0777 13.3502C16.73 13.3744 17.3474 13.6517 17.7988 14.1233C18.2501 14.5949 18.5001 15.2238 18.4956 15.8767Z" fill="white"/>
                                                <path d="M20.2821 8.11115H11.8735C11.0415 8.11115 10.2435 8.44167 9.65518 9.03C9.06685 9.61833 8.73633 10.4163 8.73633 11.2483V19.846C8.73633 20.258 8.81747 20.666 8.97513 21.0466C9.13279 21.4272 9.36387 21.773 9.65518 22.0644C9.94649 22.3557 10.2923 22.5868 10.6729 22.7444C11.0536 22.9021 11.4615 22.9832 11.8735 22.9832H20.2821C20.6941 22.9832 21.1021 22.9021 21.4827 22.7444C21.8633 22.5868 22.2091 22.3557 22.5004 22.0644C22.7918 21.773 23.0228 21.4272 23.1805 21.0466C23.3381 20.666 23.4193 20.258 23.4193 19.846V11.2638C23.4209 10.8506 23.341 10.4412 23.1841 10.059C23.0272 9.67676 22.7965 9.32926 22.505 9.03638C22.2136 8.74351 21.8672 8.51103 21.4858 8.35226C21.1043 8.19349 20.6953 8.11155 20.2821 8.11115ZM16.077 20.0816C15.2446 20.1004 14.4255 19.8708 13.7242 19.422C13.0229 18.9732 12.4712 18.3256 12.1396 17.5619C11.808 16.7982 11.7114 15.953 11.8622 15.1342C12.013 14.3154 12.4044 13.56 12.9864 12.9646C13.5684 12.3692 14.3146 11.9607 15.1297 11.7912C15.9449 11.6218 16.7921 11.699 17.5632 12.0131C18.3342 12.3273 18.9942 12.864 19.4589 13.5549C19.9236 14.2458 20.1719 15.0594 20.1721 15.892C20.1788 16.4362 20.0782 16.9763 19.876 17.4815C19.6737 17.9867 19.3739 18.447 18.9935 18.8362C18.6131 19.2253 18.1597 19.5356 17.6593 19.7493C17.1588 19.9631 16.6212 20.076 16.077 20.0816ZM20.6278 11.704C20.5255 11.704 20.4242 11.6836 20.33 11.644C20.2357 11.6044 20.1502 11.5464 20.0786 11.4734C20.007 11.4003 19.9507 11.3137 19.913 11.2187C19.8753 11.1236 19.8569 11.022 19.859 10.9197C19.859 10.7117 19.9416 10.5122 20.0887 10.3651C20.2358 10.2181 20.4353 10.1354 20.6433 10.1354C20.8513 10.1354 21.0508 10.2181 21.1979 10.3651C21.3449 10.5122 21.4276 10.7117 21.4276 10.9197C21.4306 11.0304 21.4098 11.1405 21.3663 11.2424C21.3229 11.3443 21.258 11.4356 21.176 11.5101C21.094 11.5846 20.9969 11.6405 20.8913 11.674C20.7857 11.7074 20.6742 11.7177 20.5642 11.704H20.6278Z" fill="white"/>
                                                <path d="M16.0775 0.000194017C11.9667 -0.02036 8.01609 1.59294 5.09478 4.48518C2.17347 7.37743 0.520748 11.3117 0.500194 15.4225C0.47964 19.5333 2.09294 23.4839 4.98518 26.4052C7.87743 29.3265 11.8117 30.9793 15.9225 30.9998C17.958 31.01 19.9755 30.6191 21.8599 29.8496C23.7443 29.0801 25.4587 27.9469 26.9052 26.5148C28.3517 25.0827 29.502 23.3797 30.2903 21.5031C31.0786 19.6265 31.4896 17.613 31.4998 15.5775C31.51 13.542 31.1191 11.5245 30.3496 9.64008C29.5801 7.75566 28.4469 6.04127 27.0148 4.59478C25.5827 3.1483 23.8797 1.99804 22.0031 1.2097C20.1265 0.421363 18.113 0.0103713 16.0775 0.000194017ZM25.4905 19.688C25.4949 20.3834 25.3611 21.0727 25.097 21.716C24.833 22.3593 24.4438 22.9438 23.9522 23.4356C23.4605 23.9274 22.8762 24.3167 22.233 24.5809C21.5897 24.8452 20.9005 24.9792 20.2051 24.975H11.953C11.2576 24.9794 10.5683 24.8456 9.92502 24.5815C9.28172 24.3175 8.69724 23.9283 8.20546 23.4367C7.71367 22.945 7.32437 22.3607 7.06011 21.7175C6.79585 21.0742 6.6619 20.385 6.66602 19.6896V11.436C6.6617 10.7406 6.79545 10.0513 7.05952 9.40797C7.32359 8.76467 7.71272 8.18019 8.20436 7.68841C8.696 7.19662 9.28037 6.80732 9.92358 6.54306C10.5668 6.2788 11.2561 6.14485 11.9515 6.14897H20.2051C20.9003 6.14485 21.5895 6.27876 22.2326 6.54292C22.8757 6.80708 23.46 7.19624 23.9516 7.68786C24.4433 8.17948 24.8324 8.76378 25.0966 9.4069C25.3607 10.05 25.4946 10.7392 25.4905 11.4344V19.688Z" fill="white"/>
                                            </svg>
                                        </a>
                                        {/* <a href="https://www.youtube.com/@TheDesignFirm" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5882 15.2304L14.9618 13.5383C14.6454 13.3914 14.3854 13.556 14.3854 13.9064V17.0936C14.3854 17.444 14.6454 17.6086 14.9618 17.4617L18.5866 15.7696C18.9046 15.6211 18.9046 15.3789 18.5882 15.2304ZM16 0C7.43948 0 0.5 6.93948 0.5 15.5C0.5 24.0605 7.43948 31 16 31C24.5605 31 31.5 24.0605 31.5 15.5C31.5 6.93948 24.5605 0 16 0ZM16 21.7969C8.06594 21.7969 7.92708 21.0816 7.92708 15.5C7.92708 9.91839 8.06594 9.20312 16 9.20312C23.9341 9.20312 24.0729 9.91839 24.0729 15.5C24.0729 21.0816 23.9341 21.7969 16 21.7969Z" fill="white"/>
                                            </svg>
                                        </a> */}
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

                    <WhatsAppFloatButton
                            phoneNumber="+923030808833" // with country code but no +
                            message="Hello, I have a question"
                            businessName="My Business"
                            position="bottom-right"
                            />

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

                                <div className="flex space-x-4 mobile-ffoter-menu">
                                    <Link href="/services" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Services</Link>
                                    <Link href="/products" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Solutions</Link>
                                    <Link href="/industries" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Industries</Link>
                                    <Link href="/case-studies" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Case Studies</Link>
                                    <Link href="/about" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">About Us</Link>
                                    <Link href="/partners" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Partners</Link>
                                    <a href="https://app.myhcm.pk/CareerPortal/Careers?q=lquGlsZPq1NxJlf9S%2B8LjQ%3D%3D&lang=En" target='_blank' className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Career</a>
                                    <Link href="/contact" className="hover:text-[#9747FF] inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200">Contact</Link>
                                </div>

                                <div className="items-center space-x-4 social-icons-footer">
                                    <h5 className="text-[20px] fc-primary mb-2">Get in Touch</h5>
                                    <div className="flex ml-0">
                                        <a href="https://www.facebook.com/thedesignsfirm" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M32 15.5388C32 6.9614 24.832 0 16 0C7.168 0 0 6.9614 0 15.5388C0 23.0596 5.504 29.3218 12.8 30.7669V20.2005H9.6V15.5388H12.8V11.6541C12.8 8.65514 15.312 6.21554 18.4 6.21554H22.4V10.8772H19.2C18.32 10.8772 17.6 11.5764 17.6 12.4311V15.5388H22.4V20.2005H17.6V31C25.68 30.2231 32 23.6035 32 15.5388Z" fill="white"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/thedesignfirm" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 0C7.43948 0 0.5 6.93948 0.5 15.5C0.5 24.0605 7.43948 31 16 31C24.5605 31 31.5 24.0605 31.5 15.5C31.5 6.93948 24.5605 0 16 0ZM12.2057 21.9244H9.06698V11.8236H12.2057V21.9244ZM10.617 10.5836C9.62562 10.5836 8.98464 9.88125 8.98464 9.0126C8.98464 8.1262 9.645 7.44484 10.6573 7.44484C11.6697 7.44484 12.2897 8.1262 12.3091 9.0126C12.3091 9.88125 11.6697 10.5836 10.617 10.5836ZM23.6693 21.9244H20.5305V16.3267C20.5305 15.0237 20.0752 14.1389 18.9402 14.1389C18.0731 14.1389 17.5581 14.7379 17.3304 15.3143C17.2465 15.5194 17.2255 15.81 17.2255 16.099V21.9228H14.0851V15.0447C14.0851 13.7837 14.0447 12.7294 14.0028 11.822H16.7298L16.8735 13.2251H16.9365C17.3498 12.5663 18.3621 11.5943 20.0558 11.5943C22.1209 11.5943 23.6693 12.978 23.6693 15.9521V21.9244Z" fill="white"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/thedesignfirmtdf/" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.4956 15.8767C18.4863 16.3677 18.3313 16.8448 18.0505 17.2477C17.7696 17.6506 17.3755 17.961 16.918 18.1396C16.4605 18.3182 15.9603 18.3569 15.4808 18.2509C15.0013 18.1449 14.564 17.8989 14.2245 17.5441C13.8849 17.1893 13.6583 16.7417 13.5734 16.258C13.4886 15.7743 13.5492 15.2762 13.7477 14.827C13.9462 14.3778 14.2736 13.9977 14.6884 13.7348C15.1032 13.4719 15.5867 13.338 16.0777 13.3502C16.73 13.3744 17.3474 13.6517 17.7988 14.1233C18.2501 14.5949 18.5001 15.2238 18.4956 15.8767Z" fill="white"/>
                                                <path d="M20.2821 8.11115H11.8735C11.0415 8.11115 10.2435 8.44167 9.65518 9.03C9.06685 9.61833 8.73633 10.4163 8.73633 11.2483V19.846C8.73633 20.258 8.81747 20.666 8.97513 21.0466C9.13279 21.4272 9.36387 21.773 9.65518 22.0644C9.94649 22.3557 10.2923 22.5868 10.6729 22.7444C11.0536 22.9021 11.4615 22.9832 11.8735 22.9832H20.2821C20.6941 22.9832 21.1021 22.9021 21.4827 22.7444C21.8633 22.5868 22.2091 22.3557 22.5004 22.0644C22.7918 21.773 23.0228 21.4272 23.1805 21.0466C23.3381 20.666 23.4193 20.258 23.4193 19.846V11.2638C23.4209 10.8506 23.341 10.4412 23.1841 10.059C23.0272 9.67676 22.7965 9.32926 22.505 9.03638C22.2136 8.74351 21.8672 8.51103 21.4858 8.35226C21.1043 8.19349 20.6953 8.11155 20.2821 8.11115ZM16.077 20.0816C15.2446 20.1004 14.4255 19.8708 13.7242 19.422C13.0229 18.9732 12.4712 18.3256 12.1396 17.5619C11.808 16.7982 11.7114 15.953 11.8622 15.1342C12.013 14.3154 12.4044 13.56 12.9864 12.9646C13.5684 12.3692 14.3146 11.9607 15.1297 11.7912C15.9449 11.6218 16.7921 11.699 17.5632 12.0131C18.3342 12.3273 18.9942 12.864 19.4589 13.5549C19.9236 14.2458 20.1719 15.0594 20.1721 15.892C20.1788 16.4362 20.0782 16.9763 19.876 17.4815C19.6737 17.9867 19.3739 18.447 18.9935 18.8362C18.6131 19.2253 18.1597 19.5356 17.6593 19.7493C17.1588 19.9631 16.6212 20.076 16.077 20.0816ZM20.6278 11.704C20.5255 11.704 20.4242 11.6836 20.33 11.644C20.2357 11.6044 20.1502 11.5464 20.0786 11.4734C20.007 11.4003 19.9507 11.3137 19.913 11.2187C19.8753 11.1236 19.8569 11.022 19.859 10.9197C19.859 10.7117 19.9416 10.5122 20.0887 10.3651C20.2358 10.2181 20.4353 10.1354 20.6433 10.1354C20.8513 10.1354 21.0508 10.2181 21.1979 10.3651C21.3449 10.5122 21.4276 10.7117 21.4276 10.9197C21.4306 11.0304 21.4098 11.1405 21.3663 11.2424C21.3229 11.3443 21.258 11.4356 21.176 11.5101C21.094 11.5846 20.9969 11.6405 20.8913 11.674C20.7857 11.7074 20.6742 11.7177 20.5642 11.704H20.6278Z" fill="white"/>
                                                <path d="M16.0775 0.000194017C11.9667 -0.02036 8.01609 1.59294 5.09478 4.48518C2.17347 7.37743 0.520748 11.3117 0.500194 15.4225C0.47964 19.5333 2.09294 23.4839 4.98518 26.4052C7.87743 29.3265 11.8117 30.9793 15.9225 30.9998C17.958 31.01 19.9755 30.6191 21.8599 29.8496C23.7443 29.0801 25.4587 27.9469 26.9052 26.5148C28.3517 25.0827 29.502 23.3797 30.2903 21.5031C31.0786 19.6265 31.4896 17.613 31.4998 15.5775C31.51 13.542 31.1191 11.5245 30.3496 9.64008C29.5801 7.75566 28.4469 6.04127 27.0148 4.59478C25.5827 3.1483 23.8797 1.99804 22.0031 1.2097C20.1265 0.421363 18.113 0.0103713 16.0775 0.000194017ZM25.4905 19.688C25.4949 20.3834 25.3611 21.0727 25.097 21.716C24.833 22.3593 24.4438 22.9438 23.9522 23.4356C23.4605 23.9274 22.8762 24.3167 22.233 24.5809C21.5897 24.8452 20.9005 24.9792 20.2051 24.975H11.953C11.2576 24.9794 10.5683 24.8456 9.92502 24.5815C9.28172 24.3175 8.69724 23.9283 8.20546 23.4367C7.71367 22.945 7.32437 22.3607 7.06011 21.7175C6.79585 21.0742 6.6619 20.385 6.66602 19.6896V11.436C6.6617 10.7406 6.79545 10.0513 7.05952 9.40797C7.32359 8.76467 7.71272 8.18019 8.20436 7.68841C8.696 7.19662 9.28037 6.80732 9.92358 6.54306C10.5668 6.2788 11.2561 6.14485 11.9515 6.14897H20.2051C20.9003 6.14485 21.5895 6.27876 22.2326 6.54292C22.8757 6.80708 23.46 7.19624 23.9516 7.68786C24.4433 8.17948 24.8324 8.76378 25.0966 9.4069C25.3607 10.05 25.4946 10.7392 25.4905 11.4344V19.688Z" fill="white"/>
                                            </svg>
                                        </a>
                                        {/* <a href="https://www.youtube.com/@TheDesignFirm" target="_blank" className="hover:text-gray-300 rotate-hover">
                                            <svg width="40" height="40" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5882 15.2304L14.9618 13.5383C14.6454 13.3914 14.3854 13.556 14.3854 13.9064V17.0936C14.3854 17.444 14.6454 17.6086 14.9618 17.4617L18.5866 15.7696C18.9046 15.6211 18.9046 15.3789 18.5882 15.2304ZM16 0C7.43948 0 0.5 6.93948 0.5 15.5C0.5 24.0605 7.43948 31 16 31C24.5605 31 31.5 24.0605 31.5 15.5C31.5 6.93948 24.5605 0 16 0ZM16 21.7969C8.06594 21.7969 7.92708 21.0816 7.92708 15.5C7.92708 9.91839 8.06594 9.20312 16 9.20312C23.9341 9.20312 24.0729 9.91839 24.0729 15.5C24.0729 21.0816 23.9341 21.7969 16 21.7969Z" fill="white"/>
                                            </svg>
                                        </a> */}
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
