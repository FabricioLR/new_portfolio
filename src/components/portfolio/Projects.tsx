import { motion } from "framer-motion";
import project1Img from "@/assets/project1.png";
import project2Img from "@/assets/project2.png";
import project3Img from "@/assets/project3.png";
import project4Img from "@/assets/project4.png";

const projects = [
  {
    title: "Notícias Diárias",
    description:
      "Automação com n8n que captura notícias via RSS, resume com IA (Google Gemini) e envia diariamente pelo WhatsApp usando Evolution API.",
    image: project4Img,
    link: "https://github.com/FabricioLR/noticias-diarias",
    tags: ["n8n", "Gemini AI", "WhatsApp", "Automação"],
  },
  {
    title: "Estética",
    description:
      "Site de estética feminina. Permite visualizar serviços de uma loja fictícia. Utilizando-se de Javascript e PHP.",
    image: project1Img,
    link: "https://github.com/FabricioLR/Estetica",
    tags: ["PHP", "JavaScript", "CSS"],
  },
  {
    title: "Portfólio",
    description:
      "Site pessoal para apresentação de projetos. Escrito em JavaScript com o framework React, hospedado na Vercel.",
    image: project3Img,
    link: "https://github.com/FabricioLR/portfolio",
    tags: ["React", "JavaScript", "Vercel"],
  },
  {
    title: "Chat",
    description:
      "Site para troca de mensagens feito em React e TypeScript que permite aos usuários enviarem mensagens em tempo real por meio do uso de Web Sockets.",
    image: project2Img,
    link: "https://github.com/FabricioLR/Chat-front",
    tags: ["React", "TypeScript", "WebSocket"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16"
        >
          Meus Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ title, description, image, link, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.open(link, "_blank")}
            >
              <div className="overflow-hidden rounded-lg mb-4 border border-border">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-project-muted mt-1 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
