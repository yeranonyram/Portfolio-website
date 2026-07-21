import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesLoaded(true);
    });
  }, []);

  if (!particlesLoaded) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        particles: {
          color: {
            value: "#f1c40f",
          },
          links: {
            color: "#c0392b",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            outModes: {
              default: "out",
            },
          },
          number: {
            value: 100,
            density: {
              enable: true,
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
};