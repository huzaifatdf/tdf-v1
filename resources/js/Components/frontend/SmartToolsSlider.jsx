import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { Link, usePage } from '@inertiajs/react';
import parse from 'html-react-parser';

const SmartToolsSlider = () => {

  const [sections , setSection] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/v1/products')
      .then(response => {
        console.log(response.data);
        setSection(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    const { appUrl } = usePage().props;

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
              delay: 12000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000} // transition duration in ms
            spaceBetween={30}
            slidesPerView={1}
            className="w-full custom-swiper"
          >
            {sections.map((section, index) => {

                const jsonData = section.data ? JSON.parse(section.data) : {};

              return (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row">
                  {/* Left Side Image */}
                  <div className="md:w-5/12 w-full">
                    <img
                      src={`${appUrl}/${section.image}`}
                      alt="Students in a smart classroom"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>

                  {/* Right Side Content */}
                  <div className="md:w-7/12 w-full flex flex-col justify-between pt-4 pl-4 pb-0">
                    <div>
                      <h3 className="text-[30px] font-light fc-secondary mb-2"> {section.title}</h3>
                      {/* <p className="text-[24px] fc-primary mb-2">
                        For Control, Clarity, & Campus-Wide Confidence
                      </p> */}
                      <p className="text-[18px] fc-primary mb-2 w-[70%] line-clamp-6 mobile-screens only-li">
                        {parse(section.description)}
                      </p>
                    </div>

                    <div className="flex items-end justify-between">
                        <Link href={route('web.product.show', { slug: section.slug })}  className="group text-left text-[18px] fc-primary flex items-center">
                      <span className="inline-block border-b-2 border-transparent  hover:text-[#9747FF] transition-all duration-200">
                        Click to Explore
                      </span>
                      <span className="ml-3 fc-purple hover:text-[#9747FF] transform transition-transform duration-200 group-hover:scale-125">
                        →
                      </span>
                    </Link>
                      <Link
                        href={'products'}
                        className="inline-block text-left text-[18px] fc-white font-light border-b-2 border-transparent hover:text-[#9747FF] transition-all duration-200"
                      >
                        View All Products
                        <span className="ml-3 fc-purple hover:text-[#9747FF] transform transition-transform duration-200 group-hover:scale-125">
                        →
                      </span>
                      </Link>
                        {jsonData["Video"] && jsonData["Video"]["video_path"] && (
                     <video
                        width="320"
                        height="240"
                        className="w-[45%] h-auto rounded"
                        autoPlay
                        loop
                        muted
                        playsInline
                        >
                        <source src={appUrl + "/" + jsonData["Video"]["video_path"]} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )})}
            <div className="swiper-pagination-custom absolute flex flex-col gap-2 z-10 align-items-end" />
          </Swiper>
        </div>
        <hr className="border-white mb-8" />
      </div>
    </div>
  );
};

export default SmartToolsSlider;
