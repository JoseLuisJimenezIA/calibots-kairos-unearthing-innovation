import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { fadeUp } from "@/lib/animations";
import { Eye, Target, AlertTriangle, Cpu, Clock } from "lucide-react";

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
          <motion.p className="mb-2 font-subtitle text-sm font-semibold uppercase tracking-widest text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Proyecto Innovador</motion.p>
          <motion.h1 className="font-heading text-4xl font-black md:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <Eye className="mx-auto mb-4 h-12 w-12 text-primary" />
            ARGOS
          </motion.h1>
          <motion.p className="mt-4 font-subtitle text-lg opacity-70" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.4 }}>Robot explorador para seguridad en espeleología · Temporada UNEARTHED</motion.p>
        </div>
      </section>

      {/* Descripción */}
      <section className="container py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-4 font-heading text-2xl font-bold">¿Qué es ARGOS?</h2>
            <p className="mb-3 text-muted-foreground">
              El proyecto innovador se centra en la <strong className="text-foreground">espeleología</strong>, el estudio científico de cuevas y cavidades naturales.
            </p>
            <p className="mb-3 text-muted-foreground">
              Las cuevas pueden contener fósiles, restos arqueológicos y formaciones geológicas importantes para comprender la historia del planeta. Sin embargo, muchas presentan condiciones peligrosas para los arqueólogos.
            </p>
            <p className="text-muted-foreground">
              Para enfrentar este desafío desarrollamos <strong className="text-primary">ARGOS</strong>, un robot terrestre diseñado para explorar estos entornos antes de que los arqueólogos ingresen.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <PhotoPlaceholder aspectRatio="video" label="📷 Robot ARGOS aquí" />
          </motion.div>
        </div>
      </section>

      {/* Significado del nombre */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <Eye className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-6 font-heading text-2xl font-bold">Significado del Nombre</h2>
            <p className="mb-4 text-muted-foreground">
              <strong className="text-foreground">ARGOS</strong> hace referencia al gigante de cien ojos de la mitología griega que todo lo ve. Nuestro robot busca convertirse en los ojos de los arqueólogos en zonas peligrosas.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Kairos</strong> significa el momento oportuno para actuar. Juntos, ARGOS y Kairos representan la visión y el momento perfecto para innovar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="container py-16">
        <motion.h2 className="mb-4 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Objetivos</motion.h2>
        <div className="mx-auto max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="mb-8 rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="font-heading font-bold text-primary">Objetivo General</h3>
            </div>
            <p className="text-muted-foreground">Aportar a la exploración y seguridad de los arqueólogos mediante el desarrollo de un robot terrestre que permita analizar zonas de difícil acceso como cuevas.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-3 font-heading font-bold text-secondary">Objetivos Específicos</h3>
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
          <motion.p className="mb-10 text-center text-muted-foreground" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Desafíos que enfrentan los arqueólogos en la exploración subterránea</motion.p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {problems.map((p, i) => (
              <motion.div key={p.area} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className={`h-5 w-5 ${p.color === "accent" ? "text-accent" : p.color === "secondary" ? "text-secondary" : "text-primary"}`} />
                  <h3 className="font-heading font-bold">Desde lo {p.area}</h3>
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 font-heading text-lg font-bold text-primary">Prototipo V1</h3>
            <p className="mb-4 text-sm text-muted-foreground">Primer modelo conceptual utilizado para analizar la forma general del robot y sus posibilidades de exploración.</p>
            <PhotoPlaceholder aspectRatio="video" label="📷 Prototipo V1 aquí" />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 font-heading text-lg font-bold text-primary">Prototipo V2</h3>
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
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-secondary" />
                <h3 className="font-heading font-bold">Sensores y Plataformas</h3>
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

      {/* Avances - Timeline */}
      <section className="container py-16">
        <motion.h2 className="mb-2 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <Clock className="mx-auto mb-2 h-8 w-8 text-primary" />
          Avances del Proyecto
        </motion.h2>
        <motion.p className="mb-10 text-center text-muted-foreground" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Línea de tiempo de nuestro desarrollo</motion.p>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />
          {weeklyTimeline.map((item, i) => (
            <motion.div key={item.week} className="relative mb-8 pl-12 md:pl-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <div className="absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
              <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                <h3 className="font-subtitle text-sm font-semibold text-primary">{item.week}</h3>
                <p className="text-sm text-muted-foreground">{item.task}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProyectoInnovador;
