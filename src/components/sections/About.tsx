import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" ref={ref} className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-secondary mb-12 text-center"
        >
          Sobre mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted leading-relaxed text-lg"
          >
          <p>
            Soy <span className="text-primary font-semibold">Yerko Flores</span>,
            Ingeniero Informático titulado por la{" "}
            <span className="text-primary font-semibold">
              Universidad Autónoma Tomás Frías
            </span>.
            Especializado en desarrollo{" "}
            <span className="text-secondary font-semibold">
              Backend
            </span>{" "}
            y construcción de aplicaciones web modernas, escalables y seguras.
          </p>

          <p>
            Me especializo en diseñar arquitecturas limpias, construir APIs REST,
            implementar autenticación con JWT, trabajar con bases de datos relacionales,
            documentación mediante Swagger, pruebas con Jest y despliegues automatizados
            utilizando Docker, GitHub Actions y Render.
          </p>

          <p>
            Mi objetivo es crear software que no solo funcione correctamente,
            sino que sea mantenible, eficiente y preparado para crecer en entornos
            profesionales.
          </p>

          <p>
            Además del desarrollo de software, la música forma parte de mi identidad
            desde hace muchos años. Esa combinación entre creatividad, disciplina y
            resolución de problemas es la que reflejo en cada proyecto que desarrollo.
          </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 p-8 flex flex-col justify-center shadow-glow">

              <h3 className="text-2xl font-bold text-primary mb-6">
                Perfil Profesional
              </h3>

              <ul className="space-y-3 text-muted">
                <li>✔ Full Stack Developer</li>
                <li>✔ React + TypeScript</li>
                <li>✔ NestJS + Node.js</li>
                <li>✔ PostgreSQL · MySQL</li>
                <li>✔ Docker · GitHub Actions</li>
                <li>✔ AWS Cloud (En formación)</li>
              </ul>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};