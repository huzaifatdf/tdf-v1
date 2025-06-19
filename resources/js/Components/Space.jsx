import React, { useEffect, useRef } from "react";

const Space = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const config = {
      stars_count: 400,
      nebula_count: 8,
      speed: 0.3,
      twinkle_speed: 0.02,
    };

    let canvas_center_x = 0;
    let canvas_center_y = 0;
    let stars = [];
    let nebulas = [];
    let time = 0;

    // Star colors matching the cosmic theme
    const starColors = [
      [255, 255, 255], // white
      [255, 215, 0],   // gold
      [135, 206, 235], // sky blue
      [221, 160, 221], // plum
      [240, 230, 140], // khaki
      [152, 251, 152], // pale green
      [255, 160, 122], // light salmon
      [230, 230, 250]  // lavender
    ];

    // Nebula colors for cosmic clouds matching the screenshot
    const nebulaColors = [
      [75, 0, 130, 0.08],    // indigo
      [128, 0, 128, 0.06],   // magenta
      [72, 61, 139, 0.05],   // dark slate blue
      [138, 43, 226, 0.04],  // blue violet
      [147, 0, 211, 0.07],   // dark violet
      [85, 26, 139, 0.05],   // purple
    ];

    const start = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      canvas_center_x = canvas.width / 2;
      canvas_center_y = canvas.height / 2;

      // Initialize stars
      stars = [];
      for (let i = 0; i < config.stars_count; i++) {
        const colorIndex = Math.floor(Math.random() * starColors.length);
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000 + 1,
          size: Math.random() * 2 + 0.5,
          color: starColors[colorIndex],
          twinkle_offset: Math.random() * Math.PI * 2,
          twinkle_speed: Math.random() * 0.02 + 0.005,
          brightness: Math.random() * 0.8 + 0.2,
        });
      }

      // Initialize nebulas
      nebulas = [];
      for (let i = 0; i < config.nebula_count; i++) {
        const colorIndex = Math.floor(Math.random() * nebulaColors.length);
        nebulas.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 200 + 100,
          color: nebulaColors[colorIndex],
          drift_x: (Math.random() - 0.5) * 0.2,
          drift_y: (Math.random() - 0.5) * 0.2,
          pulse_offset: Math.random() * Math.PI * 2,
        });
      }

      canvas.style.opacity = 1;
      render();
    };

    const createGradientBackground = () => {
      // Create multiple gradient layers to match the screenshot
      context.fillStyle = "#0a0510";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Purple nebula-like gradients
      const gradient1 = context.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.6
      );
      gradient1.addColorStop(0, "rgba(75, 0, 130, 0.4)");
      gradient1.addColorStop(0.5, "rgba(50, 0, 80, 0.2)");
      gradient1.addColorStop(1, "rgba(20, 0, 40, 0.05)");

      context.fillStyle = gradient1;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Blue-purple gradient
      const gradient2 = context.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.7, 0,
        canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.5
      );
      gradient2.addColorStop(0, "rgba(25, 25, 112, 0.3)");
      gradient2.addColorStop(0.6, "rgba(15, 15, 60, 0.15)");
      gradient2.addColorStop(1, "rgba(10, 5, 30, 0.05)");

      context.fillStyle = gradient2;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Additional magenta tint
      const gradient3 = context.createRadialGradient(
        canvas.width * 0.6, canvas.height * 0.2, 0,
        canvas.width * 0.6, canvas.height * 0.2, canvas.width * 0.4
      );
      gradient3.addColorStop(0, "rgba(128, 0, 128, 0.2)");
      gradient3.addColorStop(0.7, "rgba(64, 0, 64, 0.1)");
      gradient3.addColorStop(1, "rgba(32, 0, 32, 0.03)");

      context.fillStyle = gradient3;
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawNebula = (nebula) => {
      const pulseIntensity = Math.sin(time * 0.01 + nebula.pulse_offset) * 0.3 + 0.7;

      // Create radial gradient for nebula
      const gradient = context.createRadialGradient(
        nebula.x, nebula.y, 0,
        nebula.x, nebula.y, nebula.size * pulseIntensity
      );

      const [r, g, b, a] = nebula.color;
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a * pulseIntensity})`);
      gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${a * 0.3 * pulseIntensity})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(nebula.x, nebula.y, nebula.size * pulseIntensity, 0, Math.PI * 2);
      context.fill();

      // Update nebula position for subtle drift
      nebula.x += nebula.drift_x;
      nebula.y += nebula.drift_y;

      // Wrap around screen
      if (nebula.x < -nebula.size) nebula.x = canvas.width + nebula.size;
      if (nebula.x > canvas.width + nebula.size) nebula.x = -nebula.size;
      if (nebula.y < -nebula.size) nebula.y = canvas.height + nebula.size;
      if (nebula.y > canvas.height + nebula.size) nebula.y = -nebula.size;
    };

    const drawStar = (star) => {
      // Calculate twinkling effect
      const twinkle = Math.sin(time * star.twinkle_speed + star.twinkle_offset) * 0.5 + 0.5;
      const opacity = star.brightness * (0.4 + twinkle * 0.6);

      // Calculate perspective effect
      const perspective_scale = 1000 / (1000 + star.z);
      const star_x = (star.x - canvas_center_x) * perspective_scale + canvas_center_x;
      const star_y = (star.y - canvas_center_y) * perspective_scale + canvas_center_y;
      const star_size = star.size * perspective_scale;

      // Move star towards viewer
      star.z -= config.speed;

      // Reset star when it gets too close
      if (star.z <= 0) {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
        star.z = 1000;
      }

      // Draw star with glow effect
      const [r, g, b] = star.color;

      // Draw glow
      const glowSize = star_size * 3;
      const glowGradient = context.createRadialGradient(
        star_x, star_y, 0,
        star_x, star_y, glowSize
      );
      glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`);
      glowGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
      glowGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      context.fillStyle = glowGradient;
      context.beginPath();
      context.arc(star_x, star_y, glowSize, 0, Math.PI * 2);
      context.fill();

      // Draw star core
      context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      context.beginPath();
      context.arc(star_x, star_y, star_size, 0, Math.PI * 2);
      context.fill();
    };

    const render = () => {
      animationRef.current = requestAnimationFrame(render);
      time += 1;

      // Clear and draw background
      createGradientBackground();

      // Draw nebulas first (background layer)
      context.globalCompositeOperation = "lighter";
      for (let i = 0; i < nebulas.length; i++) {
        drawNebula(nebulas[i]);
      }

      // Draw stars
      context.globalCompositeOperation = "lighter";
      for (let i = 0; i < stars.length; i++) {
        drawStar(stars[i]);
      }

      context.globalCompositeOperation = "source-over";
    };

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      start();
    };

    start();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        background: "#0a0510",
      }}
    />
  );
};

export default Space;
