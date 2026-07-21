import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiSwagger,
  SiSequelize,
} from "react-icons/si";

import {
  FaLaravel,
  FaPython,
  FaAws,
} from "react-icons/fa6";

const skills = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Django", icon: <FaPython /> },
      { name: "Swagger / OpenAPI", icon: <SiSwagger /> },
    ],
  },

  {
    category: "Bases de Datos",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    category: "ORM / Data Access",
    items: [
      { name: "TypeORM", icon: <SiPostgresql /> },
      { name: "Sequelize", icon: <SiSequelize /> },
    ],
  },

  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },

  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "AWS Cloud", icon: <FaAws /> },
      { name: "Git", icon: <SiGit /> },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="habilidades"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-primary mb-12 text-center"
        >
          Tecnologías
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                bg-surface/50
                rounded-xl
                p-6
                border
                border-primary/20
                hover:border-primary/50
                transition
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                  text-secondary
                  mb-6
                "
              >
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-3
                      text-muted
                      hover:text-primary
                      transition
                    "
                  >
                    <span className="text-2xl">{skill.icon}</span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};