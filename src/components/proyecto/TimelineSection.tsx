import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { textReveal, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const TimelineSection = () => {
  const { t } = useLanguage();
  const weeklyTimeline = [
    { week: "Semana 1", task: t("tl.w1") },
    { week: "Semana 2", task: t("tl.w2") },
    { week: "Semana 3", task: t("tl.w3") },
    { week: "Semana 4", task: t("tl.w4") },
    { week: "Semana 5", task: t("tl.w5") },
    { week: "Semana 6", task: t("tl.w6") },
    { week: "Semana 7", task: t("tl.w7") },
    { week: "Semana 8", task: t("tl.w8") },
    { week: "Semana 9", task: t("tl.w9") },
    { week: "Semana 10", task: t("tl.w10") },
    { week: "Semana 11", task: t("tl.pending") },
    { week: "Semana 12", task: t("tl.pending") },
    { week: "Semana 13", task: t("tl.pending") },
    { week: "Semana 14", task: t("tl.w14") },
  ];

  return (
    <section className="section-dark py-20">
      <div className="container">
        <motion.h2 className="mb-3 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="inline-block mr-3">
            <Clock className="inline h-8 w-8 text-secondary drop-shadow-[0_0_12px_hsl(160_40%_45%/0.5)]" />
          </motion.div>
          {t("tl.title1")}<span className="text-gradient-teal">{t("tl.title2")}</span>
        </motion.h2>
        <motion.p className="mb-4 text-center font-subtitle text-sm text-muted-foreground/70" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {t("tl.subtitle")}
        </motion.p>
        <motion.div className="mx-auto mb-12 h-1 w-16 rounded-full bg-secondary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <div className="relative mx-auto max-w-2xl">
          <motion.div className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 md:left-1/2 md:-translate-x-1/2" initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} />
          {weeklyTimeline.map((item, i) => {
            const isPending = item.task === t("tl.pending");
            return (
              <motion.div key={item.week} className="relative mb-8 pl-12 md:pl-0" initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, filter: "blur(4px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <motion.div className={`absolute left-2 top-1 h-5 w-5 rounded-full border-4 ${isPending ? "border-muted-foreground/40" : "border-primary"} bg-background md:left-1/2 md:-translate-x-1/2`} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 + 0.2, type: "spring", stiffness: 300 }} style={!isPending ? { boxShadow: "0 0 12px hsl(40 76% 50% / 0.4)" } : {}} />
                <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-primary">{item.week}</h3>
                  <p className={`font-subtitle text-sm ${isPending ? "text-muted-foreground/50 italic" : "text-muted-foreground"}`}>{item.task}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
