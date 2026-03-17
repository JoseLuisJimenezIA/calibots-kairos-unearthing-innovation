import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Mountain, Eye, Shield, Lightbulb, Gamepad2, Heart, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Orb from "@/components/Orb";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import GemPit from "@/components/GemPit";
import { fadeUp, slideFromLeft, slideFromRight, scaleReveal, staggerContainer, staggerItem, textReveal, flipIn } from "@/lib/animations";


const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* GemPit interactive background layer */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-auto" style={{ minHeight: '100vh' }}>
        <GemPit count={50} gravity={0.005} friction={0.998} followCursor />
      </div>

      <div className="relative z-10">
      <Navbar />

      {/* Hero — cinematic */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src="https://videos.pexels.com/video-files/3015531/3015531-hd_1920_1080_24fps.mp4"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        </div>

        {/* Orb WebGL background */}
        <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
          <div className="pointer-events-auto" style={{ width: '500px', height: '500px' }}>
            <Orb
              hue={0}
              hoverIntensity={1.5}
              rotateOnHover
              forceHoverState={false}
              backgroundColor="#0F0B07"
            />
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ y: ["-100%", "100vh"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />
        </div>

        <div className="container relative z-10 flex flex-col items-center gap-6 text-center">
          <motion.span
            className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 font-subtitle text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Temporada UNEARTHED · FIRST LEGO League
          </motion.span>

          <motion.h1
            className="max-w-3xl font-heading text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl drop-shadow-[0_2px_20px_hsl(0_0%_0%/0.8)]"
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Explorando cuevas,{" "}
            <span className="text-gradient-gold">protegiendo arqueólogos</span>{" "}
            con robótica
          </motion.h1>

          <motion.p
            className="max-w-xl font-subtitle text-lg text-muted-foreground/80 md:text-xl drop-shadow-[0_2px_10px_hsl(0_0%_0%/0.6)]"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Conoce a <span className="text-primary font-semibold">ARGOS</span>, nuestro robot explorador diseñado para la seguridad en espeleología y arqueología
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground px-8 font-subtitle text-base font-bold uppercase tracking-wider shadow-lg glow-gold transition-all duration-300 hover:scale-105">
              <Link to="/proyecto-innovador">Conoce ARGOS</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary/50 text-secondary px-8 font-subtitle text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-secondary/10 hover:border-secondary">
              <Link to="/quienes-somos">Nuestro equipo</Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground/30" />
          </motion.div>
        </div>
      </section>

      {/* Stats counter band */}
      <section className="border-y border-primary/10 bg-muted/20 py-10 backdrop-blur-sm">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          <AnimatedCounter value={10} label="Integrantes" />
          <AnimatedCounter value={14} label="Semanas de trabajo" />
          <AnimatedCounter value={4} label="Sensores integrados" />
          <AnimatedCounter value={2} suffix="+" label="Prototipos" />
        </div>
      </section>

      <SectionDivider variant="gold" />

      {/* ScrollStack Section */}
      <section className="py-24 section-darker">
        <div className="container">
          <motion.div className="mb-4 text-center" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider md:text-4xl">
              Cómo Vivimos <span className="text-gradient-teal">FIRST LEGO League</span>
            </h2>
          </motion.div>
          <motion.p
            className="mb-14 text-center font-subtitle text-base text-muted-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nuestra experiencia integra investigación, robótica, valores y aprendizaje
          </motion.p>

          <ScrollStack itemDistance={120} itemScale={0.04} itemStackDistance={25} baseScale={0.88} blurAmount={2}>
            {[
              { icon: Lightbulb, title: "Proyecto Innovador", desc: "ARGOS nació de una investigación real sobre los riesgos en la exploración arqueológica subterránea.", link: "/proyecto-innovador", gradient: "gold" },
              { icon: Gamepad2, title: "Juego del Robot", desc: "Diseñamos, construimos y programamos soluciones robóticas para los desafíos de la temporada UNEARTHED.", link: "/juego-del-robot", gradient: "teal" },
              { icon: Heart, title: "Valores FIRST", desc: "Descubrimiento, innovación, impacto, inclusión, trabajo en equipo y diversión guían cada paso.", link: "/quienes-somos", gradient: "crimson" },
              { icon: Users, title: "Aprendizaje del Equipo", desc: "Cada integrante crece en habilidades técnicas, sociales y de liderazgo a lo largo de la temporada.", link: "/quienes-somos", gradient: "gold" },
            ].map((item) => (
              <ScrollStackItem key={item.title}>
                <Link to={item.link} className="group block glass-card-hover p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-700" />
                  <div className="relative flex flex-col md:flex-row items-start gap-6">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${item.gradient === "gold" ? "bg-primary/15" : item.gradient === "teal" ? "bg-secondary/15" : "bg-accent/15"}`}>
                      <item.icon className={`h-8 w-8 ${item.gradient === "gold" ? "text-primary" : item.gradient === "teal" ? "text-secondary" : "text-accent"}`} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider md:text-base">{item.title}</h3>
                      <p className="font-subtitle text-sm text-muted-foreground md:text-base">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <SectionDivider variant="teal" />

      {/* ¿Qué hacemos? */}
      <section className="section-dark py-24">
        <div className="container">
          <motion.div
            className="mb-16 text-center"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider md:text-4xl">
              ¿Qué <span className="text-gradient-gold">hacemos</span>?
            </h2>
            <motion.div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </motion.div>
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Mountain, title: "Espeleología & Arqueología", desc: "Investigamos los desafíos que enfrentan los arqueólogos al explorar cuevas y cavidades naturales con fósiles y restos históricos.", gradient: "crimson" },
              { icon: Eye, title: "Proyecto ARGOS", desc: "Desarrollamos un robot terrestre explorador que analiza zonas peligrosas antes de que los arqueólogos ingresen, siendo sus ojos en la oscuridad.", gradient: "gold" },
              { icon: Shield, title: "Seguridad Primero", desc: "Nuestro robot integra sensores para detectar gases tóxicos, inestabilidad estructural y condiciones adversas en cuevas y cavernas.", gradient: "teal" },
            ].map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <div className="glass-card-hover h-full p-8 text-center group">
                  <motion.div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${card.gradient === "gold" ? "bg-primary/15" : card.gradient === "teal" ? "bg-secondary/15" : "bg-accent/15"}`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <card.icon className={`h-8 w-8 ${card.gradient === "gold" ? "text-primary" : card.gradient === "teal" ? "text-secondary" : "text-accent"}`} />
                  </motion.div>
                  <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider">{card.title}</h3>
                  <p className="font-subtitle text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      <Footer />
    </div>
  );
};

export default Index;
