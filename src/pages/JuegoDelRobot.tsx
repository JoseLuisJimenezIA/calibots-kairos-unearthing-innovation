import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { fadeUp } from "@/lib/animations";

const tabs = [
  { id: "construccion", label: "Construcción", sections: [
    { title: "Hardware", desc: "Describe los componentes de hardware utilizados: motores, estructura, materiales." },
    { title: "Sensores", desc: "Detalla los sensores implementados y su función en el robot." },
    { title: "Diseño 3D", desc: "Explica las piezas diseñadas en 3D, software utilizado y proceso de impresión." },
  ]},
  { id: "misiones", label: "Misiones", sections: [
    { title: "Estrategia", desc: "Describe la estrategia general del equipo para abordar las misiones del tapete." },
    { title: "Plan de Juego", desc: "Detalla el plan de juego: orden de misiones, tiempo estimado, puntuación objetivo." },
  ]},
  { id: "attachments", label: "Attachments", sections: [
    { title: "Función", desc: "Explica la función de cada aditamento y qué misión resuelve." },
    { title: "Diseño", desc: "Detalla el proceso de diseño de los attachments." },
    { title: "Uso en Misiones", desc: "Describe cómo se utilizan los attachments durante el juego del robot." },
  ]},
  { id: "desarrollo", label: "Desarrollo Tecnológico", sections: [
    { title: "Software", desc: "Describe el entorno de programación, lenguajes y lógica utilizada." },
    { title: "Hardware", desc: "Componentes tecnológicos adicionales del robot." },
  ]},
];

const JuegoDelRobot = () => {
  const [activeTab, setActiveTab] = useState("construccion");
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <BackButton />

      <section className="relative py-20 overflow-hidden section-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[300px] rounded-full bg-secondary/8 blur-[80px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1 className="font-heading text-3xl font-black uppercase tracking-wider md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Juego del <span className="text-gradient-teal">Robot</span>
          </motion.h1>
          <motion.p className="mt-4 font-subtitle text-lg text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Diseño, construcción y estrategia de nuestro robot</motion.p>
        </div>
      </section>

      <section className="section-darker py-16">
        <div className="container">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`rounded-full px-5 py-2 font-subtitle text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id ? "bg-primary text-primary-foreground glow-gold" : "border border-primary/20 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {currentTab.sections.map((s, i) => (
                <motion.div key={s.title} className="glass-card p-6" variants={fadeUp} initial="hidden" animate="visible" custom={i}>
                  <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-secondary">{s.title}</h3>
                  <p className="font-subtitle text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <PhotoPlaceholder aspectRatio="video" label="📷 Foto del robot aquí" />
              <PhotoPlaceholder aspectRatio="video" label="📷 Diagrama / plano aquí" />
              <VideoPlaceholder label="🎥 Video del robot en acción" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JuegoDelRobot;
