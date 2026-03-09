import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp } from "@/lib/animations";

const JuegoSection = () => (
  <section className="container py-16">
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8">
      <div className="flex items-center gap-3 mb-4">
        <Gamepad2 className="h-7 w-7 text-accent" />
        <h2 className="font-heading text-xl font-bold text-foreground">Juego Educativo</h2>
      </div>
      <p className="mb-3 text-muted-foreground leading-relaxed">
        Como parte de nuestro proyecto, también creamos un <strong className="text-foreground">juego educativo</strong> diseñado para sensibilizar a una población más joven sobre la importancia de la arqueología, la preservación del patrimonio cultural y el valor de la ciencia.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        Este juego busca que los niños aprendan de forma interactiva y divertida sobre los desafíos que enfrentan los arqueólogos y cómo la tecnología puede ayudar a proteger nuestro legado histórico.
      </p>
      <Link to="/juego-del-robot" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90">
        Conoce el Juego del Robot →
      </Link>
    </motion.div>
  </section>
);

export default JuegoSection;
