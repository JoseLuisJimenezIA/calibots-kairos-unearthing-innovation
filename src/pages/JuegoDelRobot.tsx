import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { textReveal, slideFromRight, staggerContainer, staggerItem } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const JuegoDelRobot = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("construccion");

  const tabs = [
    { id: "construccion", label: t("jr.tab.construccion"), sections: [
      { title: t("jr.construccion.hardware"), desc: t("jr.construccion.hardware.desc") },
      { title: t("jr.construccion.sensores"), desc: t("jr.construccion.sensores.desc") },
      { title: t("jr.construccion.3d"), desc: t("jr.construccion.3d.desc") },
    ]},
    { id: "misiones", label: t("jr.tab.misiones"), sections: [
      { title: t("jr.misiones.estrategia"), desc: t("jr.misiones.estrategia.desc") },
      { title: t("jr.misiones.plan"), desc: t("jr.misiones.plan.desc") },
    ]},
    { id: "attachments", label: t("jr.tab.attachments"), sections: [
      { title: t("jr.attachments.funcion"), desc: t("jr.attachments.funcion.desc") },
      { title: t("jr.attachments.diseno"), desc: t("jr.attachments.diseno.desc") },
      { title: t("jr.attachments.uso"), desc: t("jr.attachments.uso.desc") },
    ]},
    { id: "desarrollo", label: t("jr.tab.desarrollo"), sections: [
      { title: t("jr.desarrollo.software"), desc: t("jr.desarrollo.software.desc") },
      { title: t("jr.desarrollo.hardware"), desc: t("jr.desarrollo.hardware.desc") },
    ]},
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <BackButton />

      <section className="relative py-24 overflow-hidden section-dark">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div className="h-[400px] w-[400px] rounded-full bg-secondary/8 blur-[100px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1 className="font-heading text-3xl font-black uppercase tracking-wider md:text-5xl lg:text-6xl" variants={textReveal} initial="hidden" animate="visible" custom={0}>
            {t("jr.title1")}<span className="text-gradient-teal">{t("jr.title2")}</span>
          </motion.h1>
          <motion.p className="mt-5 font-subtitle text-lg text-muted-foreground/80" initial={{ opacity: 0, filter: "blur(6px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: 0.4 }}>
            {t("jr.subtitle")}
          </motion.p>
        </div>
      </section>

      <SectionDivider variant="teal" />

      <section className="section-darker py-20">
        <div className="container">
          <motion.div className="mb-12 flex flex-wrap justify-center gap-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`rounded-full px-5 py-2 font-subtitle text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id ? "bg-primary text-primary-foreground glow-gold scale-105" : "border border-primary/20 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"}`}>
                {tab.label}
              </button>
            ))}
          </motion.div>
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" animate="visible" key={activeTab}>
              {currentTab.sections.map((s) => (
                <motion.div key={s.title} className="glass-card p-6 group" variants={staggerItem}>
                  <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-secondary">{s.title}</h3>
                  <p className="font-subtitle text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="space-y-6" variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <PhotoPlaceholder aspectRatio="video" label="📷 Foto del robot aquí" />
              <PhotoPlaceholder aspectRatio="video" label="📷 Diagrama / plano aquí" />
              <VideoPlaceholder label="🎥 Video del robot en acción" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />
      <Footer />
    </div>
  );
};

export default JuegoDelRobot;
