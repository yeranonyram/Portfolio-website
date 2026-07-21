import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setSending(true);

    emailjs.sendForm(
      "service_80hxitp",
      "template_2j6c7zb",
      form.current,
      "fGFnjWI04AKS4s0Pd"
    )
      .then(() => {
        alert("Mensaje enviado correctamente 🚀");

        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Error al enviar el mensaje");
      })
      .finally(() => {
        setSending(false);
      });
  };


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section id="contacto" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-primary text-center mb-4"
        >
          Contacto
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted max-w-2xl mx-auto mb-12"
        >
          ¿Tienes un proyecto, una oportunidad laboral o deseas colaborar
          conmigo? Estaré encantado de conversar y ayudarte a convertir tus
          ideas en soluciones reales.
        </motion.p>


        <div className="grid lg:grid-cols-2 gap-10">


          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-surface rounded-2xl p-8 border border-primary/20"
          >

            <h3 className="text-2xl font-bold text-secondary mb-8">
              Información de contacto
            </h3>


            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />

                <div>
                  <p className="text-sm text-muted">Correo</p>
                  <p>toxicusfumo@gmail.com</p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <FaPhone className="text-primary text-2xl" />

                <div>
                  <p className="text-sm text-muted">Teléfono</p>
                  <p>+591 75732297</p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />

                <div>
                  <p className="text-sm text-muted">Ubicación</p>
                  <p>Potosí, Bolivia</p>
                </div>
              </div>

            </div>


            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/yeranonyram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-primary transition"
              >
                <FaGithub />
              </a>


              <a
                href="https://www.linkedin.com/in/yerko-flores-70a94a160/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-primary transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>



          {/* Formulario */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >


            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Nombre"
              required
              className="w-full rounded-lg border border-primary/20 bg-surface px-4 py-3 outline-none focus:border-primary"
            />


            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Correo electrónico"
              required
              className="w-full rounded-lg border border-primary/20 bg-surface px-4 py-3 outline-none focus:border-primary"
            />


            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Cuéntame sobre tu proyecto..."
              required
              className="w-full rounded-lg border border-primary/20 bg-surface px-4 py-3 resize-none outline-none focus:border-primary"
            />


            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-background font-bold py-3 rounded-lg hover:scale-105 transition disabled:opacity-50"
            >
              {sending ? "Enviando..." : "Enviar 🚀"}
            </button>


          </motion.form>


        </div>
      </div>
    </section>
  );
};