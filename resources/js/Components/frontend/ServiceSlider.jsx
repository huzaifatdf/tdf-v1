import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { usePage } from '@inertiajs/react';
import axios from 'axios';



function ServiceSlider() {

    const {appUrl} = usePage().props

    //laravel api axios api/v1/services
    const [services , setServices] = React.useState([]);

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
                <img src={`${appUrl}/${service.image}`} alt={service.title} className="w-full h-85 object-cover" />
                <div className="p-1 mt-2">
                  <h3 className="text-[22px] fc-primary mb-0">{service.title}</h3>
                  <p className="text-[14px] fc-primary mb-0">{service.short_description}</p>
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
