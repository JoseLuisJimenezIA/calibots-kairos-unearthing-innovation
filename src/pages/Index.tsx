import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Mountain, Eye, Shield, Lightbulb, Gamepad2, Heart, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import MagicBento, { type BentoCard } from "@/components/MagicBento";
import { scaleReveal, staggerContainer, staggerItem, textReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import argosLogo from "@/assets/logo_argos.png";

// Lazy load heavy WebGL components
const Orb = lazy(() => import("@/components/Orb"));
const ShapeBlur = lazy(() => import("@/components/ShapeBlur"));

/** Defers rendering children until after first paint */
const DeferredRender = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestIdleCallback?.(() => setReady(true)) ?? setTimeout(() => setReady(true), 100);
    return () => {
      if (typeof id === "number" && requestIdleCallback) cancelIdleCallback(id);
    };
  }, []);
  return ready ? <>{children}</> : null;
};

const Index = () => {
  const { t } = useLanguage();

  const bentoCards: BentoCard[] = [
    { title: t("bento.safe.title"), description: t("bento.safe.desc"), label: t("bento.safe.label"), icon: <Shield className="h-5 w-5 text-primary" /> },
    { title: t("bento.sensors.title"), description: t("bento.sensors.desc"), label: t("bento.sensors.label"), icon: <Eye className="h-5 w-5 text-secondary" /> },
    { title: t("bento.research.title"), description: t("bento.research.desc"), label: t("bento.research.label"), icon: <Mountain className="h-5 w-5 text-accent" /> },
    { title: t("bento.team.title"), description: t("bento.team.desc"), label: t("bento.team.label"), icon: <Users className="h-5 w-5 text-primary" /> },
    { title: t("bento.values.title"), description: t("bento.values.desc"), label: t("bento.values.label"), icon: <Heart className="h-5 w-5 text-accent" /> },
    { title: t("bento.robot.title"), description: t("bento.robot.desc"), label: t("bento.robot.label"), icon: <Gamepad2 className="h-5 w-5 text-secondary" /> },
  ];

  const scrollCards = [
    { icon: Lightbulb, title: t("scroll.card1.title"), desc: t("scroll.card1.desc"), link: "/proyecto-innovador", gradient: "gold" },
    { icon: Gamepad2, title: t("scroll.card2.title"), desc: t("scroll.card2.desc"), link: "/juego-del-robot", gradient: "teal" },
    { icon: Heart, title: t("scroll.card3.title"), desc: t("scroll.card3.desc"), link: "/quienes-somos", gradient: "crimson" },
    { icon: Users, title: t("scroll.card4.title"), desc: t("scroll.card4.desc"), link: "/quienes-somos", gradient: "gold" },
  ];

  const whatCards = [
    { icon: Mountain, title: t("what.card1.title"), desc: t("what.card1.desc"), gradient: "crimson" },
    { icon: Eye, title: t("what.card2.title"), desc: t("what.card2.desc"), gradient: "gold" },
    { icon: Shield, title: t("what.card3.title"), desc: t("what.card3.desc"), gradient: "teal" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="relative z-10">
      <Navbar />

      {/* Hero — cinematic */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DeferredRender>
            <video autoPlay muted loop playsInline preload="none" className="h-full w-full object-cover" src="https://videos.pexels.com/video-files/3015531/3015531-hd_1920_1080_24fps.mp4" />
          </DeferredRender>
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        </div>




        <div className="container relative z-10 flex flex-col items-center gap-6 text-center">
          <motion.span
            className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 font-subtitle text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("hero.badge")}
          </motion.span>

          <motion.h1
            className="max-w-3xl font-heading text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_20px_hsl(0_0%_0%/0.8)]"
            variants={textReveal} initial="hidden" animate="visible" custom={1}
          >
            {t("hero.title1")}
            <span className="text-gradient-gold">{t("hero.title.highlight")}</span>
            {t("hero.title2")}
          </motion.h1>

          <motion.p
            className="max-w-xl font-subtitle text-base text-muted-foreground/80 sm:text-lg md:text-xl drop-shadow-[0_2px_10px_hsl(0_0%_0%/0.6)]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
          >
            {t("hero.subtitle1")}<img src={argosLogo} alt="ARGOS" className="inline-block h-6 sm:h-7 md:h-8 w-auto align-middle mx-1" />{t("hero.subtitle2")}
          </motion.p>

          <motion.div
            className="relative flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
          >
            <DeferredRender>
              <Suspense fallback={null}>
                <div className="absolute -inset-x-6 -inset-y-4 sm:-inset-x-8 sm:-inset-y-5 z-0 pointer-events-none opacity-50">
                  <ShapeBlur variation={0} shapeSize={0.8} roundness={0.6} borderSize={0.08} circleSize={0.4} circleEdge={0.6} />
                </div>
              </Suspense>
            </DeferredRender>
            <Button asChild size="lg" className="relative z-10 bg-primary text-primary-foreground px-6 sm:px-8 font-subtitle text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg glow-gold transition-all duration-300 hover:scale-105">
              <Link to="/proyecto-innovador">{t("hero.cta1")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="relative z-10 border-secondary/50 text-secondary px-6 sm:px-8 font-subtitle text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-secondary/10 hover:border-secondary">
              <Link to="/quienes-somos">{t("hero.cta2")}</Link>
            </Button>
          </motion.div>

          <motion.div className="mt-8" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="h-6 w-6 text-muted-foreground/30" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-primary/10 bg-muted/20 py-10 backdrop-blur-sm">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          <AnimatedCounter value={10} label={t("stats.members")} />
          <AnimatedCounter value={14} label={t("stats.weeks")} />
          <AnimatedCounter value={4} label={t("stats.sensors")} />
          <AnimatedCounter value={2} suffix="+" label={t("stats.prototypes")} />
        </div>
      </section>

      <SectionDivider variant="gold" />

      {/* ScrollStack */}
      <section className="py-12 sm:py-24 section-darker">
        <div className="container">
          <motion.div className="mb-4 text-center" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider md:text-4xl">
              {t("scroll.title1")}<span className="text-gradient-teal">{t("scroll.title2")}</span>
            </h2>
          </motion.div>
          <motion.p className="mb-14 text-center font-subtitle text-base text-muted-foreground/70" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}>
            {t("scroll.subtitle")}
          </motion.p>

          <ScrollStack itemDistance={120} itemScale={0.04} itemStackDistance={25} baseScale={0.88} blurAmount={2}>
            {scrollCards.map((item) => (
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
      <section className="section-dark py-12 sm:py-24">
        <div className="container">
          <motion.div className="mb-16 text-center" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider md:text-4xl">
              {t("what.title1")}<span className="text-gradient-gold">{t("what.title2")}</span>{t("what.title3")}
            </h2>
            <motion.div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {whatCards.map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <div className="glass-card-hover h-full p-8 text-center group">
                  <motion.div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${card.gradient === "gold" ? "bg-primary/15" : card.gradient === "teal" ? "bg-secondary/15" : "bg-accent/15"}`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }} transition={{ duration: 0.5 }}
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

      {/* MagicBento */}
      <section className="bento-section section-dark py-12 sm:py-24">
        <div className="container">
          <motion.div className="mb-16 text-center" variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider md:text-4xl">
              {t("bento.title1")}<span className="text-gradient-gold">{t("bento.title2")}</span>
            </h2>
            <motion.div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </motion.div>
          <div className="flex justify-center">
            <MagicBento cards={bentoCards} textAutoHide enableStars enableSpotlight enableBorderGlow clickEffect spotlightRadius={400} particleCount={12} glowColor="212, 160, 23" disableAnimations={false} />
          </div>
        </div>
      </section>

      <SectionDivider variant="crimson" />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
