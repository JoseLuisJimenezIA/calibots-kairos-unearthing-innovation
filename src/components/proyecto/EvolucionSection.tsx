import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { fadeUp } from "@/lib/animations";

const EvolucionSection = () => (
  <section className="section-darker py-16">
    <div className="container">
      <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold uppercase tracking-wider" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        Evolución del Robot <span className="text-gradient-gold">ARGOS</span>
      </motion.h2>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="glass-card p-6">
          <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider">Prototipo V1</h3>
          <p className="mb-4 font-subtitle text-sm text-muted-foreground">Primer modelo conceptual utilizado para analizar la forma general del robot y sus posibilidades de exploración.</p>
          <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V1 aquí" />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="glass-card p-6">
          <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider">Prototipo V2</h3>
          <p className="mb-4 font-subtitle text-sm text-muted-foreground">Versión mejorada con ruedas más grandes, suspensión y mejor estabilidad para terrenos irregulares como cuevas.</p>
          <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V2 aquí" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default EvolucionSection;
