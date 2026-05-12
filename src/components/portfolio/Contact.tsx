import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          {t("contact.title")}
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
              <span className="text-sm text-muted-foreground">{t("contact.name")}</span>
              <input
                type="text"
                name="name"
                required
                className="bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder={t("contact.namePlaceholder")}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-muted-foreground">{t("contact.email")}</span>
              <input
                type="email"
                name="email"
                required
                className="bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder={t("contact.emailPlaceholder")}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-muted-foreground">{t("contact.message")}</span>
            <textarea
              name="message"
              minLength={30}
              maxLength={1000}
              rows={5}
              className="bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder={t("contact.messagePlaceholder")}
            />
          </label>
          <button
            type="submit"
            className="w-full border border-primary/50 text-primary font-medium py-3 rounded-md hover:bg-primary/10 transition-all"
          >
            {t("contact.send")}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{t("contact.or")}</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.a
          href="https://wa.me/5561995798701"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 border border-primary/50 text-primary font-medium py-3 rounded-md hover:bg-primary/10 transition-all"
        >
          <FaWhatsapp className="text-lg" />
          {t("contact.whatsapp")}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
