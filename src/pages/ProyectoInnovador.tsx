import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { fadeUp } from "@/lib/animations";
import { Eye, Target, AlertTriangle, Cpu, Clock, HelpCircle, Lightbulb, Cog, MapPin, TrendingUp, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const fiveKeys = [
  { icon: HelpCircle, label: "Qué", text: "Un robot terrestre explorador llamado ARGOS, equipado con sensores para analizar cuevas y cavidades naturales antes del ingreso humano." },
  { icon: Lightbulb, label: "Por qué", text: "Los arqueólogos enfrentan riesgos como derrumbes, gases tóxicos y zonas estructuralmente inestables al explorar cuevas con valor histórico." },
  { icon: Cog, label: "Cómo", text: "ARGOS integra sensores como el MQ-7 (monóxido de carbono), cámaras y plataformas como Arduino para monitorear condiciones en tiempo real." },
  { icon: MapPin, label: "Dónde", text: "En cuevas, cavernas y sitios arqueológicos subterráneos donde las condiciones pueden ser peligrosas para las personas." },
  { icon: TrendingUp, label: "Impacto", text: "Proteger vidas humanas, preservar patrimonio cultural y democratizar el acceso tecnológico en la exploración arqueológica." },
];

const objectives = [
  "Analizar problemáticas actuales en la exploración arqueológica.",
  "Diseñar un robot terrestre explorador.",
  "Implementar sensores y sistemas tecnológicos que permitan evaluar condiciones de seguridad antes de que una persona ingrese.",
];

const problems = [
  { area: "Cultural", desc: "Intervención en sitios sagrados y patrimonio histórico.", color: "primary" },
  { area: "Económica", desc: "Poca inversión tecnológica en herramientas de exploración.", color: "primary" },
  { area: "Seguridad", desc: "Derrumbes, gases tóxicos y zonas estructuralmente inestables.", color: "accent" },
  { area: "Tecnológica", desc: "Limitaciones de las herramientas actuales para exploración subterránea.", color: "secondary" },
];

const weeklyTimeline = [
  { week: "Semana 1", task: "Organización del equipo" },
  { week: "Semana 2", task: "Investigación y contacto con arqueólogos" },
  { week: "Semana 3", task: "Análisis de problemáticas" },
  { week: "Semana 4", task: "Definición de solución" },
  { week: "Semana 5", task: "Retroalimentación de expertos" },
  { week: "Semana 6", task: "Inicio trabajo pista y proyecto" },
  { week: "Semana 7", task: "Primeros attachments" },
  { week: "Semana 8", task: "Mejoras del robot" },
  { week: "Semana 9", task: "Selección de tecnologías" },
  { week: "Semana 10", task: "Primeros resultados" },
  { week: "Semana 14", task: "Preparación presentación final" },
];

const ProyectoInnovador = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-dark-brown py-20 text-primary-foreground">
        <div className="container text-center">
          <motion.p className="mb-2 font-subtitle text-sm font-semibold uppercase tracking-widest text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Proyecto Innovador · Temporada UNEARTHED</motion.p>
          <motion.h1 className="font-heading text-4xl font-black md:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <Eye className="mx-auto mb-4 h-12 w-12 text-primary" />
            ARGOS
          </motion.h1>
          <motion.p className="mt-4 mx-auto max-w-2xl font-subtitle text-lg opacity-80" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.4 }}>
            Robot explorador para seguridad en espeleología — los ojos de los arqueólogos en la oscuridad
          </motion.p>
        </div>
      </section>

      {/* ARGOS en 5 claves */}
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

      {/* Concepto Central + ARGOS */}
      <section className="container py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-4 font-heading text-2xl font-bold">Concepto Central: Espeleología</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Nuestro proyecto innovador se concentra en la <strong className="text-foreground">espeleología</strong>, el estudio científico de cuevas y cavidades naturales. Las cuevas pueden contener fósiles, restos arqueológicos y formaciones geológicas importantes para comprender la historia del planeta.
            </p>
            <div className="mb-4 rounded-lg border border-border bg-card p-4">
              <h4 className="mb-1 font-heading text-sm font-bold text-foreground">📖 ¿Qué es una cavidad natural?</h4>
              <p className="text-sm text-muted-foreground">Una cavidad natural es una cueva o espacio subterráneo formado naturalmente, que puede contener valor geológico, arqueológico o paleontológico.</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Sin embargo, muchas cuevas presentan condiciones peligrosas: gases tóxicos, derrumbes y zonas inestables. Para enfrentar este desafío desarrollamos <strong className="text-foreground">ARGOS</strong>, un robot terrestre diseñado para explorar estos entornos antes de que los arqueólogos ingresen.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <PhotoPlaceholder aspectRatio="video" label="📷 Robot ARGOS aquí" />
          </motion.div>
        </div>
      </section>

      {/* Significado del nombre */}
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

      {/* Objetivos */}
      <section className="container py-16">
        <motion.h2 className="mb-4 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Objetivos</motion.h2>
        <div className="mx-auto max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="mb-8 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="h-6 w-6 text-accent" />
              <h3 className="font-heading font-bold text-foreground">Objetivo General</h3>
            </div>
            <p className="text-muted-foreground">Aportar a la exploración y seguridad de los arqueólogos mediante el desarrollo de un robot terrestre que permita analizar zonas de difícil acceso como cuevas.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-3 font-heading font-bold text-foreground">Objetivos Específicos</h3>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              {objectives.map((obj) => <li key={obj}>{obj}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Problemáticas */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <motion.h2 className="mb-2 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Problemáticas en Arqueología</motion.h2>
          <motion.p className="mb-10 text-center text-sm text-muted-foreground" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Desafíos que enfrentan los arqueólogos en la exploración subterránea</motion.p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {problems.map((p, i) => (
              <motion.div key={p.area} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className={`h-5 w-5 ${p.color === "accent" ? "text-accent" : p.color === "secondary" ? "text-secondary" : "text-foreground"}`} />
                  <h3 className="font-heading font-bold text-foreground">Desde lo {p.area}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolución del robot */}
      <section className="container py-16">
        <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Evolución del Robot ARGOS</motion.h2>
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

      {/* Tecnología */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Tecnología</motion.h2>
          <div className="mx-auto max-w-3xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-secondary" />
                <h3 className="font-heading font-bold text-foreground">Sensores y Plataformas</h3>
              </div>
              <p className="mb-3 text-muted-foreground">El robot integrará sensores para analizar el entorno de las cuevas y garantizar la seguridad antes del ingreso humano.</p>
              <p className="mb-3 text-muted-foreground">Uno de los sensores evaluados es el <strong className="text-foreground">sensor MQ-7</strong> para detección de monóxido de carbono, un gas peligroso común en cuevas poco ventiladas.</p>
              <p className="text-muted-foreground">Este sensor puede conectarse a plataformas como <strong className="text-foreground">Arduino</strong> o <strong className="text-foreground">Raspberry Pi</strong> para monitorear condiciones del aire en tiempo real.</p>
            </motion.div>
          </div>
          <motion.div className="mt-10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <VideoPlaceholder label="🎥 Video del proyecto ARGOS aquí" />
          </motion.div>
        </div>
      </section>

      {/* Juego Educativo */}
      <section className="container py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 className="h-7 w-7 text-accent" />
            <h2 className="font-heading text-xl font-bold text-foreground">Juego Educativo</h2>
          </div>
          <p className="mb-3 text-muted-foreground leading-relaxed">
            Como parte de nuestro proyecto, también creamos un <strong className="text-foreground">juego educativo</strong> diseñado para sensibilizar a una población más joven sobre la importancia de la arqueología, la preservación del patrimonio cultural y el valor de la ciencia.
          </p>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Este juego busca que los niños aprendan de forma interactiva y divertida sobre los desafíos que enfrentan los arqueólogos y cómo la tecnología puede ayudar a proteger nuestro legado histórico.
          </p>
          <Link to="/juego-del-robot" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90">
            Conoce el Juego del Robot →
          </Link>
        </motion.div>
      </section>

      {/* Avances - Timeline */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <motion.h2 className="mb-2 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <Clock className="mx-auto mb-2 h-8 w-8 text-secondary" />
            Avances del Proyecto
          </motion.h2>
          <motion.p className="mb-10 text-center text-sm text-muted-foreground" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Línea de tiempo de nuestro desarrollo</motion.p>
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-secondary/30 md:left-1/2 md:-translate-x-1/2" />
            {weeklyTimeline.map((item, i) => (
              <motion.div key={item.week} className="relative mb-8 pl-12 md:pl-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div className="absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-secondary bg-background md:left-1/2 md:-translate-x-1/2" />
                <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                  <h3 className="font-subtitle text-sm font-semibold text-foreground">{item.week}</h3>
                  <p className="text-sm text-muted-foreground">{item.task}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProyectoInnovador;
