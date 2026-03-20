import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import DomeGallery from "@/components/DomeGallery";
import { textReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

import grupo1 from "@/assets/grupo1.jpeg";
import grupo2 from "@/assets/grupo2.jpeg";
import grupo3 from "@/assets/grupo3.jpeg";
import grupo4 from "@/assets/grupo4.jpeg";
import grupo5 from "@/assets/grupo5.jpeg";
import grupo6 from "@/assets/grupo6.jpeg";
import grupo7 from "@/assets/grupo7.jpeg";
import grupo8 from "@/assets/grupo8.jpeg";
import grupo9 from "@/assets/grupo9.jpeg";
import grupo10 from "@/assets/grupo10.jpeg";
import grupo11 from "@/assets/grupo11.jpeg";
import grupo12 from "@/assets/grupo12.jpeg";
import grupo13 from "@/assets/grupo_13.jpeg";
import grupo132 from "@/assets/grupo_13-2.jpeg";
import grupo14 from "@/assets/grupo14.jpeg";
import grupo15 from "@/assets/grupo15.jpeg";
import grupo16 from "@/assets/grupo16.jpeg";
import grupo17 from "@/assets/grupo17.jpeg";
import grupoCompleto1 from "@/assets/grupo_completo_1.jpeg";
import grupoCompleto2 from "@/assets/grupo_completo_2.jpeg";
import grupoCompleto12 from "@/assets/grupo_completo_1-2.jpeg";
import grupoCompleto22 from "@/assets/grupo_completo_2-2.jpeg";

const galleryImages = [
  { src: grupo1, alt: "Equipo Calibots en el aula" },
  { src: grupoCompleto1, alt: "Equipo completo con mesa FLL" },
  { src: grupo3, alt: "Trabajo en equipo" },
  { src: grupoCompleto2, alt: "Equipo completo al aire libre" },
  { src: grupo2, alt: "Equipo Calibots" },
  { src: grupo13, alt: "Práctica en mesa FLL" },
  { src: grupo4, alt: "Presentación del equipo" },
  { src: grupo5, alt: "Equipo Calibots 5" },
  { src: grupo6, alt: "Equipo Calibots 6" },
  { src: grupo7, alt: "Equipo Calibots 7" },
  { src: grupo8, alt: "Equipo Calibots 8" },
  { src: grupo9, alt: "Equipo Calibots 9" },
  { src: grupo10, alt: "Equipo Calibots 10" },
  { src: grupo11, alt: "Equipo Calibots 11" },
  { src: grupo12, alt: "Equipo Calibots 12" },
  { src: grupo14, alt: "Equipo Calibots 14" },
  { src: grupo15, alt: "Equipo Calibots 15" },
  { src: grupo16, alt: "Equipo Calibots 16" },
  { src: grupo17, alt: "Equipo Calibots 17" },
  { src: grupo132, alt: "Práctica en mesa FLL 2" },
  { src: grupoCompleto12, alt: "Equipo completo 3" },
  { src: grupoCompleto22, alt: "Equipo completo 4" },
];

const Galeria = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <BackButton />

      <section className="relative py-24 overflow-hidden section-dark">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1
            className="font-heading text-3xl font-black uppercase tracking-wider md:text-5xl lg:text-6xl"
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="text-gradient-gold">{t("gal.title")}</span>
          </motion.h1>
          <motion.p
            className="mt-5 font-subtitle text-lg text-muted-foreground/80"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4 }}
          >
            {t("gal.subtitle")}
          </motion.p>
        </div>
      </section>

      <SectionDivider variant="gold" />

      <section className="section-darker relative" style={{ height: "80vh", minHeight: "500px" }}>
        <DomeGallery
          images={galleryImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={20}
          dragDampening={2}
          overlayBlurColor="hsl(var(--background))"
        />
      </section>

      <SectionDivider variant="gradient" />
      <Footer />
    </div>
  );
};

export default Galeria;
