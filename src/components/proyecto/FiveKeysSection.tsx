import { motion } from "framer-motion";
import { HelpCircle, Lightbulb, Cog, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/animations";

const fiveKeys = [
  { icon: HelpCircle, label: "Qué", text: "Un robot terrestre explorador llamado ARGOS, equipado con sensores para analizar cuevas y cavidades naturales antes del ingreso humano." },
  { icon: Lightbulb, label: "Por qué", text: "Los arqueólogos enfrentan riesgos como derrumbes, gases tóxicos y zonas estructuralmente inestables al explorar cuevas con valor histórico." },
  { icon: Cog, label: "Cómo", text: "ARGOS integra sensores como el MQ-7 (monóxido de carbono), cámaras y plataformas como Arduino para monitorear condiciones en tiempo real." },
  { icon: MapPin, label: "Dónde", text: "En cuevas, cavernas y sitios arqueológicos subterráneos donde las condiciones pueden ser peligrosas para las personas." },
  { icon: TrendingUp, label: "Impacto", text: "Proteger vidas humanas, preservar patrimonio cultural y democratizar el acceso tecnológico en la exploración arqueológica." },
];

const FiveKeysSection = () => (
  <section className="bg-dark-brown/95 py-16 text-primary-foreground border-t border-primary/10">
    <div className="container">
      <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        ARGOS en 5 Claves
      </motion.h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {fiveKeys.map((key, i) => (
          <motion.div key={key.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
            <Card className="h-full border-primary/20 bg-primary-foreground/5 backdrop-blur text-primary-foreground shadow-lg">
              <CardContent className="flex flex-col items-center gap-3 p-5 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <key.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-primary">{key.label}</h3>
                <p className="text-xs leading-relaxed opacity-80">{key.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FiveKeysSection;
