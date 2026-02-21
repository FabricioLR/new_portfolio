import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Envie-me uma mensagem
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          action="https://formspree.io/f/xqaelaew"
          method="POST"
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-muted-foreground">Seu nome</span>
              <input
                type="text"
                name="name"
                required
                className="bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="João Silva"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-muted-foreground">Email</span>
              <input
                type="email"
                name="email"
                required
                className="bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="joao@email.com"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-muted-foreground">Sua Mensagem</span>
            <textarea
              name="message"
              minLength={30}
              maxLength={1000}
              rows={5}
              className="bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Escreva sua mensagem aqui..."
            />
          </label>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:brightness-110 transition-all"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
