import React, { useEffect, useRef, useState } from "react";

const Space = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Track if the section is visible
  useEffect(() => {
    const section = document.getElementById("space-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const config = {
      perspective: 3,
      star_color: "255, 255, 255",
      speed: 1,
      stars_count: 2,
    };

    let canvas_center_x = 0;
    let canvas_center_y = 0;
    let stars_count = 0;
    let focal_length = 0;
    let speed = 0;
    let stars = [];

    const cow = new Image();
    cow.src =
      "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Hamburger_PNG_Vector_Picture.png?m=1507172108";

    const start = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      canvas_center_x = canvas.width / 2;
      canvas_center_y = canvas.height / 2;

      stars_count = canvas.width / config.stars_count;
      focal_length = canvas.width / config.perspective;
      speed = (config.speed * canvas.width) / 2000;

      stars = [];
      for (let i = 0; i < stars_count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }

      canvas.style.opacity = 1;
      if (cow.complete) render();
      else cow.onload = render;
    };

    const render = () => {
      animationRef.current = requestAnimationFrame(render);
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          stars[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: canvas.width,
          };
          star = stars[i];
        }

        const star_x =
          (star.x - canvas_center_x) * (focal_length / star.z) +
          canvas_center_x;
        const star_y =
          (star.y - canvas_center_y) * (focal_length / star.z) +
          canvas_center_y;
        const star_radius = Math.max(
          0,
          1.4 * (focal_length / star.z) / 2
        );
        const star_opacity = 1.2 - star.z / canvas.width;
        const cow_width = Math.max(0.1, 100 * (focal_length / star.z) / 2);

        context.fillStyle = `rgba(${config.star_color},${star_opacity})`;
        context.beginPath();
        context.arc(star_x, star_y, star_radius, 0, Math.PI * 2);
        context.fill();
      }
    };

    start();
    window.addEventListener("resize", start);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", start);
    };
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
        background: "#0a0510",
      }}
    />
  );
};

export default Space;
