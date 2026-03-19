import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const ConceptoSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-darker py-20">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl">{t("con.title1")}<span className="text-gradient-teal">{t("con.title2")}</span></h2>
            <div className="space-y-4">
              <p className="font-subtitle text-muted-foreground leading-relaxed">{t("con.p1")}</p>
              <p className="font-subtitle text-muted-foreground leading-relaxed">{t("con.p2")}</p>
              <p className="font-subtitle text-muted-foreground leading-relaxed">{t("con.p3")}</p>
            </div>
            <motion.div className="glass-card p-4 mt-6" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
              <h4 className="mb-1 font-heading text-xs font-bold uppercase tracking-wider text-accent">{t("con.excavation.title")}</h4>
              <p className="font-subtitle text-sm text-muted-foreground">{t("con.excavation.desc")}</p>
            </motion.div>
          </motion.div>
          <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <PhotoPlaceholder aspectRatio="video" label="📷 Robot ARGOS aquí" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptoSection;
