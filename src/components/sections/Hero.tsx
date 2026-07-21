import { motion } from "framer-motion";
import { FaChevronDown, FaFileDownload } from "react-icons/fa";
import { ParticlesBackground } from "../ui/ParticlesBackground";
import yerkoImage from "../../assets/images/yerko.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >

      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>


      <div className="container mx-auto px-6 z-10">

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">


          {/* TEXTO */}
          <div className="text-center md:text-left flex-1">


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-metal text-6xl md:text-8xl lg:text-9xl tracking-wider"
            >
              <span className="text-primary">Y</span>erko{" "}
              <span className="text-secondary">F</span>lores
            </motion.h1>


            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-2xl md:text-4xl font-semibold text-primary"
            >
              Full Stack Developer
            </motion.h2>


            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-5 text-xl md:text-2xl text-muted"
            >
              Especializado en{" "}

              <span className="text-secondary font-semibold">
                Backend
              </span>

              {" "}con{" "}

              <span className="text-primary">
                Node.js, NestJS y TypeScript
              </span>

            </motion.p>



            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 text-muted max-w-2xl leading-relaxed"
            >
              Desarrollo APIs escalables, arquitecturas backend y sistemas
              empresariales utilizando Node.js, NestJS, PostgreSQL, Docker
              y tecnologías cloud.
            </motion.p>



            {/* BOTONES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >


              <a
                href="#proyectos"
                className="
                px-8 py-3
                bg-primary
                text-background
                font-bold
                rounded-full
                shadow-metal
                hover:shadow-glow
                transition-all
                hover:scale-105
                "
              >
                Ver proyectos
              </a>



              <a
                href="/Portfolio-website/CV-Yerko-Flores.pdf"
                download
                className="
                px-8 py-3
                border border-secondary
                text-secondary
                font-bold
                rounded-full
                hover:bg-secondary/10
                transition-all
                hover:scale-105
                flex
                items-center
                justify-center
                gap-2
                "
              >
                <FaFileDownload />
                Descargar CV
              </a>



              <a
                href="#contacto"
                className="
                px-8 py-3
                border border-primary
                text-primary
                font-bold
                rounded-full
                hover:bg-primary/10
                transition-all
                hover:scale-105
                "
              >
                Contactarme
              </a>


            </motion.div>



            {/* REDES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex justify-center md:justify-start gap-6"
            >

            </motion.div>

          </div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-center"
          >

            <img
              src={yerkoImage}
              alt="Yerko Flores - Full Stack Developer"
              className="
                w-64
                h-64
                md:w-80
                md:h-80
                rounded-full
                object-cover
                border-4
                border-primary
                shadow-glow
              "
            />



            {/* ESPECIALIDAD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="
                mt-6
                text-center
                px-6
                py-3
                rounded-full
                border
                border-secondary/40
                bg-surface/50
              "
            >

              <p className="text-secondary font-bold text-lg">
                Backend Engineer
              </p>


              <p className="text-muted text-sm mt-1">
                Node.js • NestJS • PostgreSQL
              </p>


            </motion.div>


          </motion.div>


        </div>




        {/* FLECHA */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
            text-primary
            text-3xl
          "
        >

          <FaChevronDown />

        </motion.div>


      </div>


    </section>
  );
};