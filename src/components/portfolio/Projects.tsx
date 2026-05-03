import { motion } from "framer-motion";
import project1Img from "@/assets/project1.png";

import project3Img from "@/assets/project3.png";
import project4Img from "@/assets/project4.png";
import project5Img from "@/assets/project5.png";
import project6Img from "@/assets/project6.jpg";
import project7Img from "@/assets/project7.jpg";

const projects = [
  {
    title: "Web Storage",
    description:
      "Plataforma de gerenciamento de arquivos em nuvem com design Glassmorphism. Desenvolvido com PHP 8.4, PostgreSQL, Docker, CI/CD com Jenkins e GitHub Actions, e pair-programming com IA (Antigravity).",
    image: project5Img,
    link: "https://github.com/FabricioLR/antigravity_sample_project",
    tags: ["PHP", "PostgreSQL", "Docker", "CI/CD", "IA"],
  },
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
    title: "Grafana OCI Cost Plugin",
    description:
      "Plugin de backend para o Grafana desenvolvido em Go que permite a visualização detalhada e monitoramento de custos da Oracle Cloud Infrastructure (OCI), com filtros avançados, cache interno e foco em FinOps.",
    image: project6Img,
    link: "https://github.com/FabricioLR/grafana_oci_cost_plugin",
    tags: ["Go", "Grafana", "Oracle Cloud", "TypeScript"],
  },
  {
    title: "Blog Pessoal",
    description:
      "Blog pessoal criado para compartilhar meus estudos, anotações e descobertas sobre desenvolvimento de software, infraestrutura e novas tecnologias. Construído em WordPress com domínio próprio.",
    image: project7Img,
    link: "https://blog.fabriciolr.online/",
    tags: ["WordPress", "Blog", "Conteúdo"],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map(({ title, description, image, link, tags }, i) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer block"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
