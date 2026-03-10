import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const weeklyTimeline = [
  { week: "Semana 1", task: "Organización del equipo de trabajo. Se da a conocer el enfoque de temporada, escuchando ideas de cada miembro." },
  { week: "Semana 2", task: "Contextualización y asignación de funciones de consulta. Recopilación de información desde Google Académico. Envío de correo al centro de arqueología en Bogotá para entrevista." },
  { week: "Semana 3", task: "Socialización sobre los diferentes problemas en excavaciones hoy día, enfocados hacia la arqueología y cuevas." },
  { week: "Semana 4", task: "Análisis del enfoque del proyecto. Se plantea una solución desde lo innovador, tecnológico y la seguridad, con apoyo de profesores de tecnología, informática, ciencias y física." },
  { week: "Semana 5", task: "Retroalimentación por parte del arqueólogo. Se validan 4 problemáticas fundamentales en el proceso de las excavaciones, fortaleciendo el concepto del proyecto." },
  { week: "Semana 6", task: "Llega la pista. Se procede al armado y cada una de las misiones. El grupo se separa en dos frentes: juego del robot y proyecto innovador." },
  { week: "Semana 7", task: "Pista terminada. Elaboración de attachments y primeros lanzamientos. En paralelo, inicio de la estructuración del prototipado e investigación del funcionamiento del dispositivo." },
  { week: "Semana 8", task: "Después de dos lanzamientos hay que modificar el attachment. Se recolecta información adicional sobre otras tecnologías y se plantea un mecanismo definitivo." },
  { week: "Semana 9", task: "Mejora del attachment en el juego del robot. Desde el proyecto innovador se determinan las tecnologías a emplear." },
  { week: "Semana 10", task: "Primeros resultados en el juego del robot. Investigación de sensores y determinación de tecnologías. Se concluye un Bot de desplazamiento terrestre." },
  { week: "Semana 11", task: "Pendiente" },
  { week: "Semana 12", task: "Pendiente" },
  { week: "Semana 13", task: "Pendiente" },
  { week: "Semana 14", task: "Diálogo sobre la base de la presentación, cartelera y exposición para la competencia. Preparación de la entrada dramática del proyecto." },
];

const TimelineSection = () => (
  <section className="section-dark py-16">
    <div className="container">
      <motion.h2 className="mb-2 text-center font-heading text-2xl font-bold uppercase tracking-wider" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        <Clock className="mx-auto mb-2 h-8 w-8 text-secondary drop-shadow-[0_0_10px_hsl(160_40%_45%/0.5)]" />
        Avances del <span className="text-gradient-teal">Proyecto</span>
      </motion.h2>
      <motion.p className="mb-10 text-center font-subtitle text-sm text-muted-foreground" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        Línea de tiempo de nuestro desarrollo
      </motion.p>
      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 md:left-1/2 md:-translate-x-1/2" />
        {weeklyTimeline.map((item, i) => (
          <motion.div key={item.week} className="relative mb-8 pl-12 md:pl-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
            <div className={`absolute left-2 top-1 h-5 w-5 rounded-full border-4 ${item.task === "Pendiente" ? "border-muted-foreground/40" : "border-primary"} bg-background md:left-1/2 md:-translate-x-1/2 ${item.task !== "Pendiente" ? "shadow-[0_0_10px_hsl(40_76%_50%/0.4)]" : ""}`} />
            <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-primary">{item.week}</h3>
              <p className={`font-subtitle text-sm ${item.task === "Pendiente" ? "text-muted-foreground/50 italic" : "text-muted-foreground"}`}>{item.task}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
