import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const objectives = [
  "Analizar las principales problemáticas que hay hoy en día en la exploración para los arqueólogos, determinando en cuál de ellas podemos intervenir directamente (desde lo tecnológico).",
  "Diseñar un Bot terrestre que permita la exploración, verificación y análisis de las zonas difíciles de exploración para los arqueólogos.",
  "Implementar un Bot terrestre eléctrico radiocontrolado con la implementación de IA que permita garantizar condiciones seguras a los arqueólogos.",
];

const ObjetivosSection = () => (
  <section className="section-darker py-16">
    <div className="container">
      <motion.h2 className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Objetivos</motion.h2>
      <div className="mx-auto max-w-3xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="mb-8 glass-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <Target className="h-6 w-6 text-accent drop-shadow-[0_0_10px_hsl(8_70%_52%/0.5)]" />
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">Objetivo General</h3>
          </div>
          <p className="font-subtitle text-muted-foreground">
            Aportar a la exploración y seguridad de los arqueólogos por medio del desarrollo de un Bot terrestre que permita la exploración en zonas de difícil acceso como cuevas inexploradas, entre otros. Permitiendo determinar qué tan pertinente es la intervención de la zona y qué tan segura es para su exploración.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="glass-card p-6">
          <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider">Objetivos Específicos</h3>
          <ul className="list-inside list-disc space-y-2 font-subtitle text-sm text-muted-foreground">
            {objectives.map((obj) => <li key={obj}>{obj}</li>)}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ObjetivosSection;
