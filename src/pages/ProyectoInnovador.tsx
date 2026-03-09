import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/proyecto/HeroSection";
import FiveKeysSection from "@/components/proyecto/FiveKeysSection";
import JustificacionSection from "@/components/proyecto/JustificacionSection";
import ConceptoSection from "@/components/proyecto/ConceptoSection";
import NombreSection from "@/components/proyecto/NombreSection";
import ObjetivosSection from "@/components/proyecto/ObjetivosSection";
import ProblematicasSection from "@/components/proyecto/ProblematicasSection";
import PaleontologiaImpactoSection from "@/components/proyecto/PaleontologiaImpactoSection";
import CasosRealesSection from "@/components/proyecto/CasosRealesSection";
import EvolucionSection from "@/components/proyecto/EvolucionSection";
import TecnologiaSection from "@/components/proyecto/TecnologiaSection";
import JuegoSection from "@/components/proyecto/JuegoSection";
import TimelineSection from "@/components/proyecto/TimelineSection";

const ProyectoInnovador = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <BackButton />
      <HeroSection />
      <FiveKeysSection />
      <JustificacionSection />
      <ConceptoSection />
      <NombreSection />
      <ObjetivosSection />
      <ProblematicasSection />
      <PaleontologiaImpactoSection />
      <CasosRealesSection />
      <EvolucionSection />
      <TecnologiaSection />
      <JuegoSection />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default ProyectoInnovador;
