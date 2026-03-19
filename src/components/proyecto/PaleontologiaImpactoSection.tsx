import { motion } from "framer-motion";
import { Bone, Users } from "lucide-react";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const PaleontologiaImpactoSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-darker py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card-hover p-8 group">
            <div className="flex items-center gap-3 mb-4">
              <motion.div whileHover={{ rotate: -10, scale: 1.1 }} transition={{ type: "spring" }}>
                <Bone className="h-7 w-7 text-secondary drop-shadow-[0_0_12px_hsl(160_40%_45%/0.5)]" />
              </motion.div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">{t("paleo.title")}</h3>
            </div>
            <p className="font-subtitle text-sm text-muted-foreground leading-relaxed">{t("paleo.p1")}</p>
            <p className="mt-3 font-subtitle text-sm text-muted-foreground leading-relaxed">{t("paleo.p2")}</p>
          </motion.div>
          <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card-hover p-8 group">
            <div className="flex items-center gap-3 mb-4">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                <Users className="h-7 w-7 text-accent drop-shadow-[0_0_12px_hsl(8_70%_52%/0.5)]" />
              </motion.div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">{t("paleo.social.title")}</h3>
            </div>
            <p className="font-subtitle text-sm text-muted-foreground leading-relaxed">{t("paleo.social.p1")}</p>
            <p className="mt-3 font-subtitle text-sm text-muted-foreground leading-relaxed">{t("paleo.social.p2")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaleontologiaImpactoSection;
