import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Pickaxe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M35 45c0-8 6-14 14-14s14 6 14 14-6 14-14 14c-5 0-9-2-11-6' fill='none' stroke='%23000000' stroke-opacity='0.15' stroke-width='2'/%3E%3Cpath d='M40 45c0-5 4-9 9-9s9 4 9 9-4 9-9 9' fill='none' stroke='%23000000' stroke-opacity='0.15' stroke-width='1.5'/%3E%3Cpath d='M44 45c0-3 2-5 5-5s5 2 5 5' fill='none' stroke='%23000000' stroke-opacity='0.15' stroke-width='1.5'/%3E%3Cellipse cx='140' cy='30' rx='6' ry='4' fill='%23000000' fill-opacity='0.1'/%3E%3Crect x='137' y='30' width='6' height='20' rx='2' fill='%23000000' fill-opacity='0.1'/%3E%3Cellipse cx='140' cy='50' rx='6' ry='4' fill='%23000000' fill-opacity='0.1'/%3E%3Cpath d='M160 100c-10-15 0-35 15-40c-5 20 5 30 0 40z' fill='%23000000' fill-opacity='0.08'/%3E%3Cline x1='165' y1='65' x2='165' y2='100' stroke='%23000000' stroke-opacity='0.1' stroke-width='1'/%3E%3Cline x1='160' y1='75' x2='165' y2='80' stroke='%23000000' stroke-opacity='0.08' stroke-width='0.8'/%3E%3Cline x1='170' y1='78' x2='165' y2='83' stroke='%23000000' stroke-opacity='0.08' stroke-width='0.8'/%3E%3Cline x1='160' y1='88' x2='165' y2='90' stroke='%23000000' stroke-opacity='0.08' stroke-width='0.8'/%3E%3Ccircle cx='50' cy='140' r='4' fill='%23000000' fill-opacity='0.08'/%3E%3Cellipse cx='44' cy='132' rx='2.5' ry='4' transform='rotate(-20 44 132)' fill='%23000000' fill-opacity='0.08'/%3E%3Cellipse cx='50' cy='130' rx='2.5' ry='4' fill='%23000000' fill-opacity='0.08'/%3E%3Cellipse cx='56' cy='132' rx='2.5' ry='4' transform='rotate(20 56 132)' fill='%23000000' fill-opacity='0.08'/%3E%3Cpath d='M120 160c0-6 5-10 10-10s10 5 10 10-5 10-10 10' fill='none' stroke='%23000000' stroke-opacity='0.12' stroke-width='1.5'/%3E%3Cpath d='M124 160c0-3 3-6 6-6s6 3 6 6' fill='none' stroke='%23000000' stroke-opacity='0.1' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />
        <div className="container relative z-10 flex flex-col items-center gap-8 text-center">
          <motion.img src="/logo.png" alt="Calibots Kairos" className="h-32 w-auto drop-shadow-2xl md:h-44" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
          <motion.h1 className="max-w-3xl font-heading text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            Explorando el pasado,{" "}<span className="text-primary">construyendo el futuro</span> con robótica
          </motion.h1>
          <motion.p className="max-w-xl text-lg opacity-70 md:text-xl" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.6, duration: 0.7 }}>
            Club de Robótica del Colegio Comfandi El Prado<br />FIRST LEGO League – Temporada UNEARTHED
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground px-8 text-base font-bold shadow-lg hover:bg-accent/90">
              <Link to="/proyecto-innovador">Conoce nuestro proyecto</Link>
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
            { icon: Users, title: "Quiénes Somos", desc: "Un equipo apasionado de jóvenes innovadores del Colegio Comfandi El Prado, unidos por la robótica y la tecnología." },
            { icon: Trophy, title: "FIRST LEGO League", desc: "Participamos en la competencia internacional más importante de robótica educativa para jóvenes de todo el mundo." },
            { icon: Pickaxe, title: "Temporada UNEARTHED", desc: "Esta temporada exploramos los misterios del pasado, combinando arqueología y tecnología para resolver problemas reales." },
          ].map((card, i) => (
            <motion.div key={card.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
              <Card className="h-full border-none bg-card shadow-md transition-shadow hover:shadow-xl">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
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

      <Footer />
    </div>
  );
};

export default Index;
