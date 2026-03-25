import { FaComputer } from "react-icons/fa6";
import { FaServer, FaShieldAlt, FaDatabase, FaCloud, FaRobot, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    Icon: FaComputer,
    title: "Backend Dev",
    subtitle: "NodeJS, Java, PHP e Python",
    description: "Programação funcional e orientada a objetos. APIs REST, autenticação e integração com bancos de dados.",
  },
  {
    Icon: FaServer,
    title: "Infraestrutura",
    subtitle: "Linux, Docker, Proxmox",
    description: "Gerenciamento de servidores Linux (Cloud e on-premise), virtualização com Proxmox, containers Docker, Nginx, Bind e Zabbix.",
  },
  {
    Icon: FaShieldAlt,
    title: "Redes & Segurança",
    subtitle: "Mikrotik, OpenVPN, Samba",
    description: "Conhecimento em segurança e redes de computadores, configuração de equipamentos Mikrotik e monitoramento de infraestrutura.",
  },
  {
    Icon: FaDatabase,
    title: "Banco de Dados",
    subtitle: "MySQL & PostgreSQL",
    description: "Modelagem, consultas e administração de bancos de dados relacionais com MySQL e PostgreSQL.",
  },
  {
    Icon: FaCloud,
    title: "Cloud Computing",
    subtitle: "AWS & Oracle Cloud",
    description: "Experiência com serviços de computação em nuvem da Amazon Web Services e Oracle Cloud Infrastructure.",
  },
  {
    Icon: FaRobot,
    title: "Automação",
    subtitle: "n8n, APIs & IA",
    description: "Criação de fluxos automatizados com n8n, integração com APIs externas e uso de inteligência artificial para automação de processos.",
  },
  {
    Icon: FaBrain,
    title: "IA & Pair Programming",
    subtitle: "Antigravity, Gemini, Lovable",
    description: "Uso de agentes de IA como assistentes de desenvolvimento para arquitetura, refatoração, debugging e aceleração de projetos via pair-programming.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl text-section-title mb-16"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map(({ Icon, title, subtitle, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
