import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp } from "@/lib/animations";

const JuegoSection = () => (
  <section className="section-darker py-16">
    <div className="container">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mx-auto max-w-3xl glass-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <Gamepad2 className="h-7 w-7 text-accent drop-shadow-[0_0_10px_hsl(8_70%_52%/0.5)]" />
          <h2 className="font-heading text-lg font-bold uppercase tracking-wider">Juego Educativo</h2>
        </div>
        <p className="mb-3 font-subtitle text-muted-foreground leading-relaxed">
          Como parte de nuestro proyecto, también creamos un <strong className="text-primary">juego educativo</strong> diseñado para sensibilizar a una población más joven sobre la importancia de la arqueología, la preservación del patrimonio cultural y el valor de la ciencia.
        </p>
        <p className="mb-4 font-subtitle text-muted-foreground leading-relaxed">
          Este juego busca que los niños aprendan de forma interactiva y divertida sobre los desafíos que enfrentan los arqueólogos y cómo la tecnología puede ayudar a proteger nuestro legado histórico.
        </p>
        <Link to="/juego-del-robot" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-subtitle text-sm font-bold text-accent-foreground uppercase tracking-wider transition-all duration-300 hover:glow-crimson hover:scale-105">
          Conoce el Juego del Robot →
        </Link>
      </motion.div>
    </div>
  </section>
);

export default JuegoSection;
