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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <BackButton />
      <section className="bg-foreground py-20 text-background">
        <div className="container text-center">
          <motion.h1 className="font-heading text-3xl font-black md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Juego del Robot</motion.h1>
          <motion.p className="mt-4 text-lg opacity-70" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.3 }}>Diseño, construcción y estrategia de nuestro robot</motion.p>
        </div>
      </section>

      <section className="container py-16">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {currentTab.sections.map((s, i) => (
              <motion.div key={s.title} className="rounded-lg border border-border bg-card p-6" variants={fadeUp} initial="hidden" animate="visible" custom={i}>
                <h3 className="mb-2 font-heading text-lg font-bold text-secondary">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            <PhotoPlaceholder aspectRatio="video" label="📷 Foto del robot aquí" />
            <PhotoPlaceholder aspectRatio="video" label="📷 Diagrama / plano aquí" />
            <VideoPlaceholder label="🎥 Video del robot en acción" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JuegoDelRobot;
