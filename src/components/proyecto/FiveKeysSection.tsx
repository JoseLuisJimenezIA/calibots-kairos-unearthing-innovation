import { motion } from "framer-motion";
import { HelpCircle, Lightbulb, Cog, MapPin, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem, textReveal, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const FiveKeysSection = () => {
  const { t } = useLanguage();
  const fiveKeys = [
    { icon: HelpCircle, label: t("fk.what"), text: t("fk.what.text") },
    { icon: Lightbulb, label: t("fk.why"), text: t("fk.why.text") },
    { icon: Cog, label: t("fk.how"), text: t("fk.how.text") },
    { icon: MapPin, label: t("fk.where"), text: t("fk.where.text") },
    { icon: TrendingUp, label: t("fk.impact"), text: t("fk.impact.text") },
  ];

  return (
    <section className="section-darker py-20 border-t border-primary/10">
      <div className="container">
        <motion.h2 className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          {t("fk.title1")}<span className="text-gradient-gold">{t("fk.title2")}</span>
        </motion.h2>
        <motion.div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {fiveKeys.map((key) => (
            <motion.div key={key.label} variants={staggerItem}>
              <div className="glass-card-hover h-full p-6 text-center group">
                <motion.div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15" whileHover={{ scale: 1.15, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <key.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary">{key.label}</h3>
                <p className="font-subtitle text-xs leading-relaxed text-muted-foreground">{key.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FiveKeysSection;
