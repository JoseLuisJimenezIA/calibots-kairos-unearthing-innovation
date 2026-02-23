import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Heart, HandHeart, Search } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const teamMembers = [
  { name: "Integrante 1", role: "Programación" },
  { name: "Integrante 2", role: "Construcción" },
  { name: "Integrante 3", role: "Investigación" },
  { name: "Integrante 4", role: "Diseño 3D" },
  { name: "Integrante 5", role: "Documentación" },
  { name: "Integrante 6", role: "Estrategia" },
];

const values = [
  { icon: Users, label: "Trabajo en equipo" },
  { icon: Lightbulb, label: "Innovación" },
  { icon: HandHeart, label: "Inclusión" },
  { icon: Heart, label: "Respeto" },
  { icon: Search, label: "Descubrimiento" },
];

const timeline = [
  { phase: "Entrenamientos", desc: "Formación en programación, construcción y valores FIRST." },
  { phase: "Preparación", desc: "Desarrollo del proyecto innovador y diseño del robot." },
  { phase: "Competencias", desc: "Participación en torneos regionales y nacionales FLL." },
];

const QuienesSomos = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="bg-[hsl(30,10%,15%)] py-20 text-white">
        <div className="container text-center">
          <motion.h1 className="font-heading text-3xl font-black md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Quiénes Somos</motion.h1>
          <motion.p className="mt-4 text-lg opacity-70" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.3 }}>Conoce al equipo detrás de Calibots Kairos</motion.p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-4 font-heading text-2xl font-bold">Nuestra Historia</h2>
            <p className="mb-4 text-muted-foreground">Calibots Kairos nació en el Colegio Comfandi El Prado como una iniciativa para acercar a los estudiantes al mundo de la robótica y la tecnología.</p>
            <p className="text-muted-foreground">Nuestro enfoque STEM combina ciencia, tecnología, ingeniería y matemáticas con los valores fundamentales de FIRST.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <PhotoPlaceholder aspectRatio="video" label="📷 Foto del equipo aquí" />
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold">Nuestro Equipo</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <Card className="overflow-hidden border-none shadow-md">
                  <PhotoPlaceholder aspectRatio="portrait" className="rounded-none" />
                  <CardContent className="p-5 text-center">
                    <h3 className="font-heading font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="mb-10 text-center font-heading text-2xl font-bold">Nuestro Recorrido</h2>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />
          {timeline.map((item, i) => (
            <motion.div key={item.phase} className="relative mb-10 pl-12 md:pl-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <div className="absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
              <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                <h3 className="font-heading font-bold text-primary">{item.phase}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[hsl(30,10%,15%)] py-16 text-white">
        <div className="container">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold">Valores FIRST</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((v, i) => (
              <motion.div key={v.label} className="flex flex-col items-center gap-2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary"><v.icon className="h-8 w-8" /></div>
                <span className="text-sm font-medium">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
