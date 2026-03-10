import { motion } from "framer-motion";
import { HelpCircle, Lightbulb, Cog, MapPin, TrendingUp } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const fiveKeys = [
  { icon: HelpCircle, label: "Qué", text: "Un robot terrestre explorador llamado ARGOS, equipado con sensores para analizar cuevas y cavidades naturales antes del ingreso humano." },
  { icon: Lightbulb, label: "Por qué", text: "Los arqueólogos enfrentan riesgos como derrumbes, gases tóxicos y zonas estructuralmente inestables al explorar cuevas con valor histórico." },
  { icon: Cog, label: "Cómo", text: "ARGOS integra sensores como el MQ-7 (monóxido de carbono), cámaras y plataformas como Arduino para monitorear condiciones en tiempo real." },
  { icon: MapPin, label: "Dónde", text: "En cuevas, cavernas y sitios arqueológicos subterráneos donde las condiciones pueden ser peligrosas para las personas." },
  { icon: TrendingUp, label: "Impacto", text: "Proteger vidas humanas, preservar patrimonio cultural y democratizar el acceso tecnológico en la exploración arqueológica." },
];

const FiveKeysSection = () => (
  <section className="section-darker py-16 border-t border-primary/10">
    <div className="container">
      <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold uppercase tracking-wider" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        ARGOS en <span className="text-gradient-gold">5 Claves</span>
      </motion.h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {fiveKeys.map((key, i) => (
          <motion.div key={key.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
            <div className="glass-card-hover h-full p-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                <key.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary">{key.label}</h3>
              <p className="font-subtitle text-xs leading-relaxed text-muted-foreground">{key.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FiveKeysSection;
