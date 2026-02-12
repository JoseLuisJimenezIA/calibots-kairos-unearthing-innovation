import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { fadeUp } from "@/lib/animations";

const ProyectoInnovador = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="bg-foreground py-20 text-background">
        <div className="container text-center">
          <motion.p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Proyecto Innovador</motion.p>
          <motion.h1 className="font-heading text-3xl font-black md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>Nombre del Proyecto</motion.h1>
          <motion.p className="mt-4 text-lg opacity-70" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.4 }}>Temporada UNEARTHED – FIRST LEGO League</motion.p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-4 font-heading text-2xl font-bold">Descripción General</h2>
            <p className="mb-3 text-muted-foreground">Describe aquí el proyecto innovador del equipo. ¿Qué problema aborda? ¿Cuál es su relación con la temporada UNEARTHED?</p>
            <p className="text-muted-foreground">Explica el enfoque del equipo y cómo combina la investigación con la tecnología para proponer una solución innovadora.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <PhotoPlaceholder aspectRatio="video" label="📷 Foto del proyecto aquí" />
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container max-w-3xl">
          <motion.h2 className="mb-8 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Investigación</motion.h2>
          <motion.div className="space-y-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div>
              <h3 className="mb-2 font-heading text-lg font-bold text-secondary">Problema Identificado</h3>
              <p className="text-muted-foreground">Describe el problema que el equipo identificó durante la fase de investigación.</p>
            </div>
            <div>
              <h3 className="mb-2 font-heading text-lg font-bold text-secondary">Análisis</h3>
              <p className="text-muted-foreground">Explica el análisis realizado: entrevistas, encuestas, revisión bibliográfica, datos recopilados.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container py-16">
        <motion.h2 className="mb-8 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Objetivos</motion.h2>
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-3 font-heading font-bold text-primary">Generales</h3>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground"><li>Objetivo general 1</li><li>Objetivo general 2</li></ul>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-3 font-heading font-bold text-secondary">Específicos</h3>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground"><li>Objetivo específico 1</li><li>Objetivo específico 2</li><li>Objetivo específico 3</li></ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container">
          <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Desarrollo Tecnológico</motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {["Software", "Hardware", "Diseño 3D"].map((t, i) => (
              <motion.div key={t} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 font-heading font-bold">{t}</h3>
                <p className="mb-4 text-sm text-muted-foreground">Describe el desarrollo de {t.toLowerCase()} del proyecto.</p>
                <PhotoPlaceholder aspectRatio="video" label={`📷 ${t} aquí`} />
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
            <VideoPlaceholder label="🎥 Video del proyecto aquí" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProyectoInnovador;
