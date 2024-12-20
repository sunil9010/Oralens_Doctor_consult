import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParcelBackground = () => {
  const particlesInit = async (main) => {
    console.log("Particles Loaded:", main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#2980b9" }, // Background color
        },
        particles: {
          number: {
            value: 60, // Number of particles
            density: {
              enable: true,
              area: 800, // Density area
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: "circle", // Shape of the particles
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true, // Animation (movement) enabled
            speed: 2, // Movement speed
            direction: "none",
            random: false,
            straight: false,
            outModes: "bounce", // Behavior at edge
          },
          links: {
            enable: true, // Enable connections
            color: "#ffffff",
            distance: 150,
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // Interaction on hover
            onClick: { enable: true, mode: "push" }, // Interaction on click
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 }, // Repulse effect
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParcelBackground;
