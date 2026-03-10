import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const filters = ["Todo", "Proyecto", "Equipo", "Robot", "Competencia", "Investigación"];

const galleryItems = [
  { id: 1, type: "photo" as const, category: "Equipo", label: "📷 Foto del equipo" },
  { id: 2, type: "photo" as const, category: "Proyecto", label: "📷 Proyecto ARGOS" },
  { id: 3, type: "photo" as const, category: "Robot", label: "📷 Robot explorador" },
  { id: 4, type: "video" as const, category: "Proyecto", label: "🎥 Video del proyecto" },
  { id: 5, type: "photo" as const, category: "Equipo", label: "📷 Foto grupal" },
  { id: 6, type: "photo" as const, category: "Robot", label: "📷 Prototipo V1" },
  { id: 7, type: "photo" as const, category: "Robot", label: "📷 Prototipo V2" },
  { id: 8, type: "photo" as const, category: "Competencia", label: "📷 Torneo regional" },
  { id: 9, type: "photo" as const, category: "Investigación", label: "📷 Investigación de campo" },
  { id: 10, type: "photo" as const, category: "Investigación", label: "📷 Entrevista con arqueólogos" },
  { id: 11, type: "video" as const, category: "Competencia", label: "🎥 Video de competencia" },
  { id: 12, type: "photo" as const, category: "Equipo", label: "📷 Sesión de trabajo" },
];

const Galeria = () => {
  const [active, setActive] = useState("Todo");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "Todo" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <BackButton />

      <section className="relative py-20 overflow-hidden section-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[300px] rounded-full bg-primary/8 blur-[80px]" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1 className="font-heading text-3xl font-black uppercase tracking-wider md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gradient-gold">Galería</span>
          </motion.h1>
          <motion.p className="mt-4 font-subtitle text-lg text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Momentos, logros y registros de CaliBots Kairos</motion.p>
        </div>
      </section>

      <section className="section-darker py-16">
        <div className="container">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)} className={`rounded-full px-5 py-2 font-subtitle text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${active === f ? "bg-primary text-primary-foreground glow-gold" : "border border-primary/20 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"}`}>{f}</button>
            ))}
          </div>
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="cursor-pointer glass-card-hover" onClick={() => item.type === "photo" && setLightbox(item.id)}>
                  {item.type === "photo" ? <PhotoPlaceholder aspectRatio="video" label={item.label} /> : <VideoPlaceholder label={item.label} />}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <motion.div className="relative mx-4 w-full max-w-2xl" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-foreground transition-opacity hover:opacity-70" aria-label="Cerrar"><X className="h-8 w-8" /></button>
              <PhotoPlaceholder aspectRatio="video" label={galleryItems.find((g) => g.id === lightbox)?.label || "📷 Foto aquí"} className="text-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Galeria;
