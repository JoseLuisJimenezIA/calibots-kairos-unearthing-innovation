import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { textReveal, slideFromLeft, slideFromRight, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const EvolucionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-darker py-20">
      <div className="container">
        <motion.h2 className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          {t("evo.title1")}<span className="text-gradient-gold">{t("evo.title2")}</span>
        </motion.h2>
        <motion.div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 font-heading text-xs font-bold text-primary">V1</span>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">{t("evo.v1.title")}</h3>
            </div>
            <p className="mb-4 font-subtitle text-sm text-muted-foreground">{t("evo.v1.desc")}</p>
            <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V1 aquí" />
          </motion.div>
          <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 font-heading text-xs font-bold text-secondary">V2</span>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">{t("evo.v2.title")}</h3>
            </div>
            <p className="mb-4 font-subtitle text-sm text-muted-foreground">{t("evo.v2.desc")}</p>
            <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V2 aquí" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EvolucionSection;
