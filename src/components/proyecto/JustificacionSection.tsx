import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { slideFromLeft, slideFromRight, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const JustificacionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-dark py-20">
      <div className="container max-w-4xl">
        <motion.div variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-center mb-10">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <FileText className="mx-auto mb-4 h-12 w-12 text-secondary drop-shadow-[0_0_20px_hsl(160_40%_45%/0.5)]" />
          </motion.div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl">{t("just.title")}</h2>
          <motion.div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </motion.div>
        <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-8 mb-4">
          <p className="font-subtitle text-muted-foreground leading-relaxed">{t("just.p1")}</p>
        </motion.div>
        <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-8">
          <p className="font-subtitle text-muted-foreground leading-relaxed">{t("just.p2")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default JustificacionSection;
