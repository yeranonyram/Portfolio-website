import { useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  // Cargamos el engine una sola vez cuando el componente se monta
  useEffect(() => {
    loadSlim();
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
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
          color: { value: "#f1c40f" },
          links: {
            color: "#c0392b",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: { enable: true, width: 800, height: 800 },
            value: 100,
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
};