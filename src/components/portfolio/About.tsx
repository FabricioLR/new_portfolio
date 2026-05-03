import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaDownload, FaWhatsapp } from "react-icons/fa";

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
            Estudante de Ciência da Computação, programador autodidata focado em desenvolvimento PHP
            e administrador de servidores Linux. Com experiência em infraestrutura On-Premise/Cloud,
            ambientes Docker e monitoramento avançado (Zabbix/Prometheus/Grafana).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaMapMarkerAlt className="text-primary flex-shrink-0" />
              <span className="text-sm">Brasília – DF</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaGraduationCap className="text-primary flex-shrink-0" />
              <span className="text-sm">Ciência da Computação</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FaEnvelope className="text-primary flex-shrink-0" />
              <span className="text-sm">fabriciolongodearaujo@gmail.com</span>
            </div>
            <a
              href="https://wa.me/5561995798701"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaWhatsapp className="text-primary flex-shrink-0" />
              <span className="text-sm">+55 61 99579-8701</span>
            </a>
          </div>

          <div className="mt-6">
            <a
              href="https://share.fabriciolr.online/ac4cd7ce-5214-428d-b053-624339b6c411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-all text-sm"
              onClick={(e) => {
                const url = "https://share.fabriciolr.online/ac4cd7ce-5214-428d-b053-624339b6c411";
                fetch(url, { method: "HEAD", mode: "no-cors" }).catch(() => {
                  e.preventDefault();
                  const link = document.createElement("a");
                  link.href = "/fabriciolongodearaujo.pdf";
                  link.download = "fabriciolongodearaujo.pdf";
                  link.click();
                });
              }}
            >
              <FaDownload className="text-xs" />
              Download Currículo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
