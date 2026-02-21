import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl text-section-title mb-12"
        >
          Sobre Mim
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-skill-border rounded-lg p-8 md:p-10"
        >
          <p className="text-foreground leading-relaxed text-base md:text-lg mb-6">
            Estudante de Ciência da Computação com experiência em manutenção de hardware, software,
            gerenciamento de servidores Linux e redes de computadores. Programador autodidata com
            conhecimento em JavaScript, PHP, Python, SQL e Git.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaMapMarkerAlt className="text-primary flex-shrink-0" />
              <span className="text-sm">Ceilândia – DF</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaGraduationCap className="text-primary flex-shrink-0" />
              <span className="text-sm">Ciência da Computação – Estácio</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaEnvelope className="text-primary flex-shrink-0" />
              <span className="text-sm">fabriciolongodearaujo@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
