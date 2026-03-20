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
import grupo13 from "@/assets/grupo_13.jpeg";
import grupo132 from "@/assets/grupo_13-2.jpeg";
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
  { src: grupo132, alt: "Práctica en mesa FLL 2" },
  { src: grupoCompleto12, alt: "Equipo completo 3" },
  { src: grupoCompleto22, alt: "Equipo completo 4" },
];

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
