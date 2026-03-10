import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const cases = [
  { title: "Tumba de Tutankamón", location: "Egipto 🇪🇬", desc: "Según Sayed Hemeda, jefe del Departamento de Conservación Arquitectónica de la Universidad de El Cairo, el cambio climático ha hecho que cambien las condiciones de este sitio arqueológico. Un aumento en la humedad causado por el agua que se cuela por las grietas ha creado un ambiente propicio para el crecimiento de hongos que podrían dañar las pinturas y ornamentos de la tumba del faraón." },
  { title: "Pompeya", location: "Italia 🇮🇹", desc: "La arqueología en Pompeya enfrenta una crisis continua de preservación, marcada por el rápido deterioro de sus estructuras expuestas a la intemperie, la humedad y el turismo masivo, lo que ha provocado colapsos estructurales como el de la Casa de los Gladiadores." },
  { title: "Machu Picchu", location: "Perú 🇵🇪", desc: "El reconocido arqueólogo peruano Fernando Astete advirtió en 2019, en su obra \"30 años de experiencia al frente de Machupicchu\", que el cambio climático y la gestión de turismo masivo son los retos mayores a los que tendrá que enfrentarse la ciudadela." },
];

const CasosRealesSection = () => (
  <section className="section-dark py-16">
    <div className="container">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-center mb-10">
        <Landmark className="mx-auto mb-4 h-10 w-10 text-primary drop-shadow-[0_0_15px_hsl(40_76%_50%/0.5)]" />
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">Problemática Arqueológica en el <span className="text-gradient-gold">Mundo</span></h2>
        <p className="mt-2 font-subtitle text-sm text-muted-foreground">Casos reales que evidencian la necesidad de innovar</p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div key={c.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
            <div className="glass-card-hover h-full p-6">
              <p className="mb-1 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{c.location}</p>
              <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider">{c.title}</h3>
              <p className="font-subtitle text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CasosRealesSection;
