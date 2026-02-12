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
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
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
