import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-6 text-center text-xs text-muted-foreground bg-background border-t border-border">
        © 2025 FabricioLR. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;
