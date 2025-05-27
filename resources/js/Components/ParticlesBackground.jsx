
import React, { useEffect, useState, useRef, useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground (){
  const particlesInit = useCallback(async (engine) => {
    // Initialize with the slim version instead of loadFull
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#00141B" // Dark background
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#094662" }, // Lime green
          links: {
            color: "#094662",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.2,
            straight: false
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 0,
        top: 0,
        left: 0,
        pointerEvents: 'none' // Allow interaction with elements beneath
      }}
    />
  );
};
