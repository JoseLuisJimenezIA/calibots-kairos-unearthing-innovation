import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { textReveal, slideFromLeft, slideFromRight, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const ObjetivosSection = () => {
  const { t } = useLanguage();
  const objectives = [t("obj.specific.1"), t("obj.specific.2"), t("obj.specific.3")];

  return (
    <section className="section-darker py-20">
      <div className="container">
        <motion.h2 className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          {t("obj.title")}
        </motion.h2>
        <motion.div className="mx-auto mb-12 h-1 w-16 rounded-full bg-accent" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <div className="mx-auto max-w-3xl space-y-6">
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Target className="h-7 w-7 text-accent drop-shadow-[0_0_12px_hsl(8_70%_52%/0.5)]" />
              </motion.div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">{t("obj.general.title")}</h3>
            </div>
            <p className="font-subtitle text-muted-foreground leading-relaxed">{t("obj.general.desc")}</p>
          </motion.div>
          <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-8">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">{t("obj.specific.title")}</h3>
            <ul className="space-y-3">
              {objectives.map((obj, i) => (
                <motion.li key={i} className="flex items-start gap-3 font-subtitle text-sm text-muted-foreground" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {obj}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ObjetivosSection;
