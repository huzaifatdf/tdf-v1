import React, { useEffect, useState, useRef, useCallback } from 'react';

function TestimonialsSection() {
  // TestimonialsSection component code remains unchanged
  const [selected, setSelected] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Becky Nelson",
      rating: 4,
      title: "Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",
      // subtitle: "Always adjusting, always forward",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "John Brown",
      rating: 5,
      title: "Tech-savvy and user-focused",
      // subtitle: "Building seamless experiences",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Hannah Thompson",
      rating: 3,
      title: "Efficient, dedicated, consistent",
      // subtitle: "A reliable team player",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 4,
      name: "Chris King",
      rating: 5,
      title: "Vision meets execution",
      // subtitle: "Driving innovation every day",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 5,
      name: "Sarah Lopez",
      rating: 4,
      title: "Creative brilliance meets business sense",
      // subtitle: "On-point and always on time",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
  ]);


  const handleSwapWithCenter = (index) => {
    if (index === 0) return;

    const updated = [...testimonials];
    const temp = updated[0];
    updated[0] = updated[index];
    updated[index] = temp;

    setTestimonials(updated);
    setSelected(0); // keep center fixed
  };

  return (
    <div className="testimonial-wrapper sec-padding">
      {/* Floating Avatars */}
      <div className="floating-avatars">
        <div className="circle-avatar" style={{ top: "5%", left: "10%" }}>
          CK
        </div>

        {/* These indexes determine which avatars are visible */}
        {[1, 2, 3, 4].map((index, i) => (
          <img
            key={index}
            className="circle-avatar small"
            src={testimonials[index].image}
            onClick={() => handleSwapWithCenter(index)}
            alt=""
            style={
              i === 0
                ? { top: "15%", left: "25%" }
                : i === 1
                ? { top: "40%", left: "27%" }
                : i === 2
                ? { top: "15%", right: "25%" }
                : { top: "5%", right: "10%" }
            }
          />
        ))}

        <div className="circle-avatar" style={{ top: "40%", left: "10%" }}>
          JB
        </div>
        <div className="circle-avatar small" style={{ top: "40%", left: "70%" }}>
          HT
        </div>
        <div className="circle-avatar" style={{ top: "40%", right: "10%" }}>
          JB
        </div>
      </div>

      {/* Centered Testimonial */}
      <div className="center-profile">
        <img
          src={testimonials[0].image}
          alt="user"
          className="center-image"
        />
        <div className="stars">
          {"★".repeat(testimonials[0].rating)}
          {"☆".repeat(5 - testimonials[0].rating)}
        </div>
        <h3 className="text-[22px] fc-primary fw-bold">{testimonials[0].name}</h3>
        <p className="text-[18px] fc-primary mt-1">{testimonials[0].title}</p>
        <p className="subtitle text-white">{testimonials[0].subtitle}</p>

        {/* Dots */}
        <div className="dots">
        {testimonials.map((_, i) => (
            <span
            key={i}
            className={`dot ${i === selected ? "active" : ""}`}
            onClick={() => handleSwapWithCenter(i)}
            ></span>
        ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection
