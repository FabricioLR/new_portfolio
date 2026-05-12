import { FaComputer } from "react-icons/fa6";
import { FaServer, FaShieldAlt, FaDatabase, FaCloud, FaRobot, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skillKeys = ["backend", "infra", "security", "db", "cloud", "automation", "ai"] as const;
const skillIcons: Record<(typeof skillKeys)[number], typeof FaServer> = {
  backend: FaComputer,
  infra: FaServer,
  security: FaShieldAlt,
  db: FaDatabase,
  cloud: FaCloud,
  automation: FaRobot,
  ai: FaBrain,
};

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl md:text-4xl text-section-title mb-16"
        >
          {t("skills.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skillKeys.map((key, i) => {
            const Icon = skillIcons[key];
            return (
              <motion.div
                key={key}
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
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {t(`skills.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t(`skills.items.${key}.subtitle`)}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`skills.items.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
