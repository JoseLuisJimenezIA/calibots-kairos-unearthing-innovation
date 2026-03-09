import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const JustificacionSection = () => (
  <section className="bg-muted/50 py-16">
    <div className="container max-w-4xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-center mb-8">
        <FileText className="mx-auto mb-4 h-10 w-10 text-secondary" />
        <h2 className="font-heading text-2xl font-bold">Justificación</h2>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-xl border border-border bg-card p-8 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          En la actualidad existen diferentes tipos de herramientas tecnológicas que aportan a la exploración de restos arqueológicos y detección de minerales, herramientas que suelen ser muy accesibles en la <strong className="text-foreground">minería</strong> (por su retribución económica) pero poco accesibles en la <strong className="text-foreground">arqueología</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          ARGOS, desde la tecnología, no solo aporta a esta exploración, sino que también es de <strong className="text-foreground">fácil acceso</strong> para diferentes arqueólogos, desde aficionados o principiantes hasta profesionales, democratizando el uso de herramientas tecnológicas en el campo arqueológico.
        </p>
      </motion.div>
    </div>
  </section>
);

export default JustificacionSection;
