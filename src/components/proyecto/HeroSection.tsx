import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const HeroSection = () => (
  <section className="relative py-20 overflow-hidden section-dark">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />
    </div>
    <div className="container relative z-10 text-center">
      <motion.p className="mb-2 font-subtitle text-sm font-semibold uppercase tracking-[0.2em] text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Proyecto Innovador · Temporada UNEARTHED
      </motion.p>
      <motion.h1 className="font-heading text-4xl font-black md:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <Eye className="mx-auto mb-4 h-12 w-12 text-primary drop-shadow-[0_0_20px_hsl(40_76%_50%/0.5)]" />
        <span className="text-gradient-gold">ARGOS</span>
      </motion.h1>
      <motion.p className="mt-4 mx-auto max-w-2xl font-subtitle text-lg text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        Robot explorador para seguridad en espeleología — los ojos de los arqueólogos en la oscuridad
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
