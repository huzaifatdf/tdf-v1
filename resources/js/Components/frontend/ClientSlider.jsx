import { usePage } from '@inertiajs/react';
import axios from 'axios';
import React from 'react'
import Marquee from "react-fast-marquee";
function ClientSlider() {
    const {appUrl} = usePage().props
    const [upperourclients , setUpperOurclients] = React.useState([]);
    const [lowerourclients , setLowerOurclients] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/v1/ourclient')
            .then(response => {
                //first get total ourclients then split them into 2 rows
                const totalOurclients = response.data;
                const middleIndex = Math.ceil(totalOurclients.length / 2);
                const upperOurclients = totalOurclients.slice(0, middleIndex);
                const lowerOurclients = totalOurclients.slice(middleIndex);
                setUpperOurclients(upperOurclients);
                setLowerOurclients(lowerOurclients);
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
                                <div key={index} className="box client-logos mx-6 flex items-center justify-center h-20 w-32">
                                    <img
                                        src={`${appUrl}/${client.image}`}
                                        alt={client.name || `Client ${index + 1}`}
                                        className="hide-img max-h-full max-w-full object-contain transition duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                     <img
                                        src={`${appUrl}/${client.coloredimage}`}
                                        alt={client.name || `Client ${index + 1}`}
                                        className="show-img max-h-full max-w-full object-contain transition duration-300"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    {/* <div className="overflow-hidden pb-5 mt-2">
                        <Marquee gradient={false} speed={40} direction="left" pauseOnHover={false}>
                            {lowerourclients.map((client, index) => (
                                <div key={index} className="mx-6 flex items-center justify-center h-20 w-32">
                                    <img
                                        src={`${appUrl}/${client.image}`}
                                        alt={client.name || `Client ${index + 1}`}
                                        className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
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
