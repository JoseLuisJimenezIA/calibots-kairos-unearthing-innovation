import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Mountain, Eye, Shield, Lightbulb, Gamepad2, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import LegoModel3D from "@/components/LegoModel3D";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden section-dark">
        {/* Radial glow behind LEGO */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="container relative z-10 flex flex-col items-center gap-8 text-center">
          {/* LEGO Explorer 3D */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="animate-float" style={{ perspective: "1000px" }}>
              <img
                src={legoExplorer}
                alt="LEGO Explorer CaliBots Kairos"
                className="h-48 w-auto drop-shadow-[0_20px_60px_hsl(40_76%_50%/0.4)] md:h-64 lg:h-72"
                style={{ filter: "drop-shadow(0 0 40px hsl(40 76% 50% / 0.3))" }}
              />
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-8 rounded-full animate-glow-pulse opacity-50" />
          </motion.div>

          <motion.span
            className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 font-subtitle text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Temporada UNEARTHED · FIRST LEGO League
          </motion.span>

          <motion.h1
            className="max-w-3xl font-heading text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Explorando cuevas,{" "}
            <span className="text-gradient-gold">protegiendo arqueólogos</span>{" "}
            con robótica
          </motion.h1>

          <motion.p
            className="max-w-xl font-subtitle text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Conoce a ARGOS, nuestro robot explorador diseñado para la seguridad en espeleología y arqueología
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground px-8 font-subtitle text-base font-bold uppercase tracking-wider shadow-lg glow-gold transition-all duration-300 hover:scale-105">
              <Link to="/proyecto-innovador">Conoce ARGOS</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary/50 text-secondary px-8 font-subtitle text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-secondary/10 hover:border-secondary">
              <Link to="/quienes-somos">Nuestro equipo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro cards */}
      <section className="section-darker py-20">
        <div className="container">
          <motion.h2
            className="mb-12 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          >
            ¿Qué <span className="text-gradient-gold">hacemos</span>?
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Mountain, title: "Espeleología & Arqueología", desc: "Investigamos los desafíos que enfrentan los arqueólogos al explorar cuevas y cavidades naturales con fósiles y restos históricos.", gradient: "crimson" },
              { icon: Eye, title: "Proyecto ARGOS", desc: "Desarrollamos un robot terrestre explorador que analiza zonas peligrosas antes de que los arqueólogos ingresen, siendo sus ojos en la oscuridad.", gradient: "gold" },
              { icon: Shield, title: "Seguridad Primero", desc: "Nuestro robot integra sensores para detectar gases tóxicos, inestabilidad estructural y condiciones adversas en cuevas y cavernas.", gradient: "teal" },
            ].map((card, i) => (
              <motion.div key={card.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
                <div className={`glass-card-hover h-full p-8 text-center`}>
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${card.gradient === "gold" ? "bg-primary/15 glow-gold" : card.gradient === "teal" ? "bg-secondary/15 glow-teal" : "bg-accent/15 glow-crimson"}`}>
                    <card.icon className={`h-7 w-7 ${card.gradient === "gold" ? "text-primary" : card.gradient === "teal" ? "text-secondary" : "text-accent"}`} />
                  </div>
                  <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider">{card.title}</h3>
                  <p className="font-subtitle text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo vivimos FIRST LEGO League */}
      <section className="section-dark py-16">
        <div className="container">
          <motion.h2
            className="mb-3 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          >
            Cómo Vivimos <span className="text-gradient-teal">FIRST LEGO League</span>
          </motion.h2>
          <motion.p
            className="mb-10 text-center font-subtitle text-sm text-muted-foreground"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          >
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
                <Link to={item.link} className="group block h-full glass-card-hover p-6">
                  <item.icon className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider">{item.title}</h3>
                  <p className="font-subtitle text-sm text-muted-foreground">{item.desc}</p>
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
