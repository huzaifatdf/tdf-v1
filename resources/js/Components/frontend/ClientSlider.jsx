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

    //



  return (
    <div className="pb-4">
        <div className="container-fluid relative">
            <p className="text-[30px] mb-6 fc-secondary">Our Clients</p>
            <hr class="border-white mb-8"></hr>
           <div className="space-y-12">
            <div className="overflow-hidden  pb-5 mt-5">
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={false}>
                {upperourclients.map((client, index) => (
                <img
                    key={index}
                    src={`${appUrl}/${client.image}`}
                    alt={client}
                    className="mx-6 h-25 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </Marquee>
            </div>
            {/* <div className="overflow-hidden  pb-5 mt-2">
            <Marquee gradient={false} speed={40} direction="left" pauseOnHover={false}>
                {lowerourclients.map((client, index) => (
                <img
                    key={index}
                    src={`${appUrl}/${client.image}`}
                    alt={client}
                    className="mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </Marquee>
            </div> */}
        </div>
            <hr class="border-white mb-8"></hr>
        </div>
    </div>
  );
}

export default ClientSlider
