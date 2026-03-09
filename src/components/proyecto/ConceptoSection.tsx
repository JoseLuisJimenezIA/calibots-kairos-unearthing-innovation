import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { fadeUp } from "@/lib/animations";

const ConceptoSection = () => (
  <section className="container py-16">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        <h2 className="mb-4 font-heading text-2xl font-bold">Concepto Central: Espeleología</h2>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          La <strong className="text-foreground">espeleología</strong> (del griego σπηλαιου <em>spelaiou</em> que significa «cueva» y <em>-logía</em>, tratado) es la práctica de explorar y/o estudiar las cavidades naturales del subsuelo.
        </p>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          A partir de sus raíces griegas, se considera a la espeleología como el estudio científico que, apoyado en la geología, analiza el desarrollo, evolución y formaciones geológicas de las cavidades naturales (espeleotemas o espeleolitos). En ella se investigan, cartografían y catalogan todo tipo de descubrimientos en cavernas.
        </p>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Desde el punto de vista geológico, forma parte de la <strong className="text-foreground">geomorfología</strong> y sirve de apoyo a la <strong className="text-foreground">hidrogeología</strong>.
        </p>
        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="mb-1 font-heading text-sm font-bold text-foreground">⛏️ Excavaciones en cueva</h4>
          <p className="text-sm text-muted-foreground">Derrumbes de zanjas, derrumbes, caídas, caída de cargas, atmósferas peligrosas y contacto con líneas eléctricas aéreas son los principales riesgos.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
        <PhotoPlaceholder aspectRatio="video" label="📷 Robot ARGOS aquí" />
      </motion.div>
    </div>
  </section>
);

export default ConceptoSection;
