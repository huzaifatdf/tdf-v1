import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const SmartToolsSlider = () => {
  return (
    <div className="container-fluid relative">
      <div className='sec-padding pb-4'>
        <h2 className="text-[34px] mb-6 fc-secondary">
          We Offer Smart Tools for Strategic Growth
        </h2>

        <hr className="border-white mb-8" />

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000} // transition duration in ms
            spaceBetween={30}
            slidesPerView={1}
            className="w-full custom-swiper"
          >
            {[1, 2, 3].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row">
                  {/* Left Side Image */}
                  <div className="md:w-5/12 w-full">
                    <img
                      src="/images/slider.png"
                      alt="Students in a smart classroom"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>

                  {/* Right Side Content */}
                  <div className="md:w-7/12 w-full flex flex-col justify-between pt-4 pl-4 pb-0">
                    <div>
                      <h3 className="text-[30px] font-light fc-secondary mb-2">Eduman</h3>
                      <p className="text-[24px] fc-primary mb-2">
                        For Control, Clarity, & Campus-Wide Confidence
                      </p>
                      <p className="text-[18px] fc-primary mb-2">
                        Eduman is a cloud-based, SaaS (Software as a Service) system
                        that simplifies the academic, administrative, and communication
                        workflows for modern schools.
                      </p>
                    </div>
                    <button className="group text-left text-[18px] fc-primary mb-2 flex items-center">
                      <span className="inline-block border-b-2 border-transparent group-hover:border-current transition-all duration-200">
                        Click to Explore
                      </span>
                      <span className="ml-3 fc-secondary transform transition-transform duration-200 group-hover:scale-125">
                        &rarr;
                      </span>
                    </button>

                    <div className="flex items-end justify-between">
                      <a
                        href="#"
                        className="inline-block text-left text-[18px] fc-purple font-light border-b-2 border-transparent hover:border-current transition-all duration-200"
                      >
                        View All Products
                      </a>

                      <img
                        src="/images/slider2.png"
                        alt="Roundabout"
                        className="w-[50%] h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination-custom absolute flex flex-col gap-2 z-10 align-items-end" />
          </Swiper>
        </div>
        <hr className="border-white mb-8" />
      </div>
    </div>
  );
};

export default SmartToolsSlider;
