import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePage, Link } from "@inertiajs/react";
import axios from "axios";
import parse from 'html-react-parser';

export default function IndustrySection() {


      const {appUrl} = usePage().props

    const [data , setData] = React.useState([]);

    React.useEffect(() => {
        axios.get('/api/v1/industries')
            .then(response => {
                //first get total ourclients then split them into 2 rows
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    //


  return (
    <div className="py-16 relative">
      <div className="container-fluid">
        {data.length > 0 && data.map((data, index) =>  {
            const jsonData = JSON.parse(data.data);
            return(
            <div className="grid md:grid-cols-12 gap-12 border-b border-gray-800 pb-[60px]" key={index}>
            {/* Left Column - Main Content */}
            <div className="lg:col-span-5 space-y-6">
                <h2 className="text-[30px] fc-secondary leading-tight">
                {data.title || ''}
                </h2>

                <p className="text-[16px] fc-primary leading-relaxed">
                {data.description || ''}
                </p>

                <div class="mt-6"><a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Read More<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a></div>

            </div>

            {/* Middle Column - Services List */}
            <div className="lg:col-span-4 space-y-6">
                <h3 className="fc-primary text-[20px] font-bold">
                 {jsonData["Our Work"]["title"] || ''}
                </h3>

                <div className="space-y-3 pb-[60px]">
                <div className="text-[16px] fc-primary leading-relaxed">{parse(jsonData["Our Work"]["description"]) || ''}</div>

                <a href="#" target="_blank" rel="noopener noreferrer" class="text-[18px] inline-flex items-center gap-2 text-purple-400 underline decoration-purple-400 transition-colors duration-300 hover:text-[#91A7BA] hover:decoration-[#91A7BA]">View Our Work</a>
                </div>

                <a href="#" class="group flex items-center gap-2 bg-transparent border-none fc-primary hover:text-green-300 transition-colors duration-300 text-lg font-medium cursor-pointer">Explore Services<span class="fc-purple group-hover:translate-x-1 transition-transform">→</span></a>

            </div>

            {/* Right Column - Icon */}
            <div className="lg:col-span-2">
                <div
                className="h-[300px] flex justify-center items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/background04.png')",
                }}
                >
                <div className="">
                    <img
                    src={`${appUrl}/${data?.image || ''}`}
                    alt="Bank Icon"
                    className="w-24 h-24 mx-auto"
                    />
                </div>
                </div>
            </div>
            </div>
        )})}

      </div>
    </div>
  );
}
