import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <span className="font-display text-lg font-bold text-foreground tracking-wide">
        FabricioLR
      </span>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Início</a>
        <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</a>
        <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Habilidades</a>
        <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experiência</a>
        <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a>
      </nav>
      <div className="flex items-center gap-3">
        <FaGithubSquare
          fontSize={28}
          className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
          onClick={() => window.open("https://github.com/FabricioLR", "_blank")}
        />
        <FaLinkedin
          fontSize={28}
          className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
          onClick={() => window.open("https://www.linkedin.com/in/fabricio-arauj/", "_blank")}
        />
      </div>
    </motion.header>
  );
};

export default Header;
