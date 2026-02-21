import { FaComputer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpo } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    Icon: FaComputer,
    title: "Backend Dev",
    subtitle: "NodeJS, Java e PHP",
    description: "Programação funcional e orientada a objetos. APIs REST, autenticação e integração com bancos de dados.",
  },
  {
    Icon: FaReact,
    title: "Frontend Dev",
    subtitle: "React",
    description: "Experiência em desenvolvimento Web com HTML, CSS, JS e React framework. Interfaces responsivas e performáticas.",
  },
  {
    Icon: SiExpo,
    title: "Mobile Dev",
    subtitle: "Expo & React Native",
    description: "Entusiasta na programação de aplicativos Android com React Native e Expo.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl text-section-title mb-16"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ Icon, title, subtitle, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-skill-border rounded-lg p-8 transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="text-primary text-3xl flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
