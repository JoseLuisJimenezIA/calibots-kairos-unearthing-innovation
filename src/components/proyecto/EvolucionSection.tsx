import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { fadeUp } from "@/lib/animations";

const EvolucionSection = () => (
  <section className="container py-16">
    <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
      Evolución del Robot ARGOS
    </motion.h2>
    <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-2 font-heading text-lg font-bold text-foreground">Prototipo V1</h3>
        <p className="mb-4 text-sm text-muted-foreground">Primer modelo conceptual utilizado para analizar la forma general del robot y sus posibilidades de exploración.</p>
        <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V1 aquí" />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-2 font-heading text-lg font-bold text-foreground">Prototipo V2</h3>
        <p className="mb-4 text-sm text-muted-foreground">Versión mejorada con ruedas más grandes, suspensión y mejor estabilidad para terrenos irregulares como cuevas.</p>
        <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V2 aquí" />
      </motion.div>
    </div>
  </section>
);

export default EvolucionSection;
