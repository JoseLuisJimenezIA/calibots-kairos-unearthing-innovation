import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Mountain, Eye, Shield, Lightbulb, Gamepad2, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-dark-brown text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.15' stroke-width='1'%3E%3Cpath d='M0 250 Q75 200 150 230 Q225 260 300 220'/%3E%3Cpath d='M0 270 Q75 220 150 250 Q225 280 300 240'/%3E%3Cpath d='M0 290 Q75 240 150 270 Q225 300 300 260'/%3E%3Ccircle cx='50' cy='80' r='8'/%3E%3Ccircle cx='50' cy='80' r='3'/%3E%3Ccircle cx='200' cy='60' r='6'/%3E%3Ccircle cx='200' cy='60' r='2'/%3E%3Crect x='120' y='120' width='15' height='20' rx='2'/%3E%3Cline x1='127' y1='125' x2='127' y2='135'/%3E%3Cpath d='M240 150 l10-20 l10 20z'/%3E%3Cpath d='M80 180 l15-30 l15 30z'/%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: "300px 300px" }} />
        <div className="container relative z-10 flex flex-col items-center gap-8 text-center">
          <motion.img src="/logo.png" alt="CaliBots Kairos" className="h-32 w-auto drop-shadow-2xl md:h-44" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
          <motion.span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 font-subtitle text-xs font-semibold uppercase tracking-widest text-primary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            Temporada UNEARTHED · FIRST LEGO League
          </motion.span>
          <motion.h1 className="max-w-3xl font-heading text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            Explorando cuevas,{" "}<span className="text-primary">protegiendo arqueólogos</span> con robótica
          </motion.h1>
          <motion.p className="max-w-xl text-lg opacity-80 md:text-xl" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.6, duration: 0.7 }}>
            Conoce a ARGOS, nuestro robot explorador diseñado para la seguridad en espeleología y arqueología
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground px-8 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/90">
              <Link to="/proyecto-innovador">Conoce ARGOS</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="px-8 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105">
              <Link to="/quienes-somos">Nuestro equipo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro cards */}
      <section className="container py-20">
        <motion.h2 className="mb-12 text-center font-heading text-2xl font-bold md:text-3xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          ¿Qué hacemos?
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Mountain, title: "Espeleología & Arqueología", desc: "Investigamos los desafíos que enfrentan los arqueólogos al explorar cuevas y cavidades naturales con fósiles y restos históricos.", color: "accent" },
            { icon: Eye, title: "Proyecto ARGOS", desc: "Desarrollamos un robot terrestre explorador que analiza zonas peligrosas antes de que los arqueólogos ingresen, siendo sus ojos en la oscuridad.", color: "secondary" },
            { icon: Shield, title: "Seguridad Primero", desc: "Nuestro robot integra sensores para detectar gases tóxicos, inestabilidad estructural y condiciones adversas en cuevas y cavernas.", color: "secondary" },
          ].map((card, i) => (
            <motion.div key={card.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
              <Card className="h-full border-none bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${card.color === "secondary" ? "bg-secondary/10 text-secondary" : card.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cómo vivimos FIRST LEGO League */}
      <section className="bg-dark-brown py-16 text-primary-foreground">
        <div className="container">
          <motion.h2 className="mb-3 text-center font-heading text-2xl font-bold md:text-3xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            Cómo Vivimos FIRST LEGO League
          </motion.h2>
          <motion.p className="mb-10 text-center text-sm opacity-60" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            Nuestra experiencia integra investigación, robótica, valores y aprendizaje
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Lightbulb, title: "Proyecto Innovador", desc: "ARGOS nació de una investigación real sobre los riesgos en la exploración arqueológica subterránea.", link: "/proyecto-innovador" },
              { icon: Gamepad2, title: "Juego del Robot", desc: "Diseñamos, construimos y programamos soluciones robóticas para los desafíos de la temporada UNEARTHED.", link: "/juego-del-robot" },
              { icon: Heart, title: "Valores FIRST", desc: "Descubrimiento, innovación, impacto, inclusión, trabajo en equipo y diversión guían cada paso.", link: "/quienes-somos" },
              { icon: Users, title: "Aprendizaje del Equipo", desc: "Cada integrante crece en habilidades técnicas, sociales y de liderazgo a lo largo de la temporada.", link: "/quienes-somos" },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
                <Link to={item.link} className="group block h-full rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:bg-primary-foreground/10 hover:shadow-lg">
                  <item.icon className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-heading text-base font-bold">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
