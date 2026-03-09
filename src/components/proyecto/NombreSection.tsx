import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const NombreSection = () => (
  <section className="bg-muted/50 py-16">
    <div className="container max-w-3xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-center">
        <Eye className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h2 className="mb-6 font-heading text-2xl font-bold">Significado del Nombre</h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-2 font-heading text-lg font-bold text-foreground">ARGOS 👁️</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hace referencia al gigante de cien ojos de la mitología griega que todo lo ve. Nuestro robot busca convertirse en los ojos de los arqueólogos en zonas peligrosas, observando donde los humanos no pueden llegar con seguridad.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-2 font-heading text-lg font-bold text-foreground">KAIROS ⏳</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kairos es una palabra del griego antiguo que significa "el momento oportuno" o "el tiempo perfecto para que algo suceda". Juntos, ARGOS y Kairos representan la visión y el momento perfecto para innovar.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default NombreSection;
