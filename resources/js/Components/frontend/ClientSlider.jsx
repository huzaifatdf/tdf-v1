import { usePage } from '@inertiajs/react';
import axios from 'axios';
import React from 'react'
import Marquee from "react-fast-marquee";

function ClientSlider() {
    const {appUrl} = usePage().props

    const [upperourclients , setUpperOurclients] = React.useState([]);

    React.useEffect(() => {
        axios.get('/api/v1/ourclient')
            .then(response => {
                //first get total ourclients then split them into 2 rows
                const totalOurclients = response.data;
                setUpperOurclients(totalOurclients);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="pb-4">
            <div className="container-fluid relative">
                <p className="text-[30px] mb-6 fc-secondary">Our Clients</p>
                <hr className="border-white mb-8"></hr>
                <div className="space-y-12">
                    <div className="overflow-hidden pb-5 mt-5">
                        <Marquee gradient={false} speed={100} direction="right" pauseOnHover={true}>
                            {upperourclients.map((client, index) => (
                                <div key={index} className="mx-6 flex items-center justify-center h-20 w-32 group relative">
                                    {/* White/Default Logo */}
                                    <img
                                        src={`${appUrl}/${client.image}`}
                                        alt={client.name || `Client ${index + 1}`}
                                        className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    {/* Colored Logo (shows on hover) */}
                                    {client.coloredimage && (
                                        <img
                                            src={`${appUrl}/${client.coloredimage}`}
                                            alt={client.name || `Client ${index + 1}`}
                                            className="max-h-full max-w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    {/* <div className="overflow-hidden pb-5 mt-2">
                        <Marquee gradient={false} speed={40} direction="left" pauseOnHover={false}>
                            {lowerourclients.map((client, index) => (
                                <div key={index} className="mx-6 flex items-center justify-center h-20 w-32 group relative">
                                    <img
                                        src={`${appUrl}/${client.image}`}
                                        alt={client.name || `Client ${index + 1}`}
                                        className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300 group-hover:opacity-0"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    {client.colored_image && (
                                        <img
                                            src={`${appUrl}/${client.colored_image}`}
                                            alt={client.name || `Client ${index + 1}`}
                                            className="max-h-full max-w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </Marquee>
                    </div> */}
                </div>
                <hr className="border-white mb-8"></hr>
            </div>
        </div>
    );
}

export default ClientSlider
