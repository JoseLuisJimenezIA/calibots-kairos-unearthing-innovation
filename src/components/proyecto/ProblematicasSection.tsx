import { motion } from "framer-motion";
import { AlertTriangle, Pickaxe } from "lucide-react";
import { textReveal, flipIn, slideFromLeft, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblematicasSection = () => {
  const { t } = useLanguage();
  const problems = [
    { area: t("prob.cultural.area"), desc: t("prob.cultural.desc"), color: "text-primary" },
    { area: t("prob.economic.area"), desc: t("prob.economic.desc"), color: "text-primary" },
    { area: t("prob.security.area"), desc: t("prob.security.desc"), color: "text-accent" },
    { area: t("prob.tech.area"), desc: t("prob.tech.desc"), color: "text-secondary" },
  ];
  const miningProblems = [t("prob.mining.1"), t("prob.mining.2"), t("prob.mining.3"), t("prob.mining.4")];

  return (
    <section className="section-dark py-20">
      <div className="container">
        <motion.h2 className="mb-3 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          {t("prob.title1")}<span className="text-gradient-crimson">{t("prob.title2")}</span>
        </motion.h2>
        <motion.p className="mb-4 text-center font-subtitle text-sm text-muted-foreground/70" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {t("prob.subtitle")}
        </motion.p>
        <motion.div className="mx-auto mb-12 h-1 w-16 rounded-full bg-accent" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div key={p.area} variants={flipIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="glass-card-hover p-6 group">
              <div className="flex items-center gap-2 mb-3">
                <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring" }}>
                  <AlertTriangle className={`h-5 w-5 ${p.color}`} />
                </motion.div>
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider">{t("prob.from")}{p.area}</h3>
              </div>
              <p className="font-subtitle text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mx-auto mt-12 max-w-3xl glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <Pickaxe className="h-6 w-6 text-accent" />
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider">{t("prob.mining.title")}</h3>
          </div>
          <ul className="space-y-2">
            {miningProblems.map((p, i) => (
              <motion.li key={i} className="flex items-start gap-3 font-subtitle text-sm text-muted-foreground" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblematicasSection;
