import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const services = [
  {
    title: "Brand Communication",
    subtitle: "shaping how the world sees you",
    image: "/images/ser1.png",
  },
  {
    title: "Web & Mobile Apps",
    subtitle: "designed to grow and shift with your audience",
    image: "/images/ser2.png",
  },
  {
    title: "Digital Marketing Services",
    subtitle: "measurable, malleable, memorable",
    image: "/images/ser3.png",
  },
  {
    title: "UI/UX Design",
    subtitle: "thoughtfully created journeys for your users",
    image: "/images/ser4.png",
  },
  {
    title: "UI/UX Design",
    subtitle: "thoughtfully created journeys for your users",
    image: "/images/ser3.png",
  },
];

function ServiceSlider() {
  return (
    <div className="container-fluid relative">
      <div className='sec-padding pt-0'>
        <div className="mb-8">
          <p className="text-[20px] mb-8 fc-primary">
            Strategy, creativity, technology - aligned in perfect sync<br />
            Always adjusting, always forward
          </p>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-85 object-cover" />
                <div className="p-1 mt-2">
                  <h3 className="text-[22px] fc-primary mb-0">{service.title}</h3>
                  <p className="text-[14px] fc-primary mb-0">{service.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceSlider;
