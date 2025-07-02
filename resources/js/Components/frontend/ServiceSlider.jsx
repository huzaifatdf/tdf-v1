import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import parse from 'html-react-parser';

function ServiceSlider() {
  const { appUrl } = usePage().props;
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/v1/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container-fluid relative">
      <div className='sec-padding --large pt-0'>
        <div className="mb-8">
          <p className="text-[30px] mb-6 fc-secondary">
            Our Services
          </p>
        </div>

        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            loop={true} // enables infinite loop
            autoplay={{
                delay: 0, // continuous movement
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={3000} // smooth speed for transition
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            >
          {services.map((service, index) => (
            <SwiperSlide key="web-apps">
                <div className="relative w-full h-[420px] overflow-hidden group box services">
                    <img
                        src={`${appUrl}/${service.image}`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#00141b]/80 flex flex-col justify-center items-center text-center px-8 text-inner">
                        <h3 className="text-[22px] fc-secondary mb-2">{service.title}</h3>
                        <p className="text-[14px] fc-white">{parse(service.short_description)}</p>
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
