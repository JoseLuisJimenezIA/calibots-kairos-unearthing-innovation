import { motion } from "framer-motion";
import { AlertTriangle, Pickaxe } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const problems = [
  {
    area: "Cultural",
    desc: "Aquí surge un desafío ético fundamental: desde la intervención de sitios arqueológicos que las comunidades locales consideran sagrados, donde el manejo de restos humanos y objetos ancestrales no es solo un proceso técnico, sino una acción que impacta directamente en la identidad y las creencias de poblaciones que ven en esos hallazgos a sus propios antepasados.",
    color: "text-primary",
  },
  {
    area: "Económica",
    desc: "Este es otro de los grandes desafíos, ya que desde el ámbito de la minería sí se efectúa buena inversión debido a la retribución, sin embargo la arqueología y similares no cuentan con mucha inversión debido a la retribución económica que puede generar.",
    color: "text-primary",
  },
  {
    area: "Seguridad",
    desc: "Dentro de las excavaciones podemos encontrar materiales poco rígidos con precipitaciones, lugares de difícil acceso y también con condiciones de aire contaminado por diferentes tipos de gases, ocasionando problemas respiratorios a corto y largo plazo.",
    color: "text-accent",
  },
  {
    area: "Tecnológica",
    desc: "Aunque existen herramientas como el LIDAR o el Georradar (GPR), estas tecnologías a menudo enfrentan dificultades en terrenos con alta densidad de vegetación, humedad extrema o suelos con alta mineralización. También están los sistemas robóticos con retroalimentación háptica y un tercer enfoque es la interoperabilidad: cómo procesar y almacenar modelos 3D de forma accesible para investigadores de todo el mundo.",
    color: "text-secondary",
  },
];

const miningProblems = [
  "Desertización: deforestación, erosión, pérdida de suelo fértil",
  "Modificación del relieve, impacto visual, alteración de la dinámica de los procesos de ladera",
  "Aumento de la escorrentía y erosión",
  "Alteraciones en el nivel freático",
];

const ProblematicasSection = () => (
  <section className="bg-muted/50 py-16">
    <div className="container">
      <motion.h2 className="mb-2 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        Problemáticas en Arqueología
      </motion.h2>
      <motion.p className="mb-10 text-center text-sm text-muted-foreground" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        Desafíos que enfrentan los arqueólogos en la exploración subterránea
      </motion.p>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {problems.map((p, i) => (
          <motion.div key={p.area} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className={`h-5 w-5 ${p.color}`} />
              <h3 className="font-heading font-bold text-foreground">Desde lo {p.area}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Problemas de la minería */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-3">
          <Pickaxe className="h-6 w-6 text-accent" />
          <h3 className="font-heading font-bold text-foreground">¿Qué problemas puede causar la minería?</h3>
        </div>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          {miningProblems.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ProblematicasSection;
