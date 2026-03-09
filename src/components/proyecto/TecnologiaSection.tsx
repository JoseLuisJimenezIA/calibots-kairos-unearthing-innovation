import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { fadeUp } from "@/lib/animations";

const TecnologiaSection = () => (
  <section className="bg-muted/50 py-16">
    <div className="container">
      <motion.h2 className="mb-10 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        Tecnología
      </motion.h2>
      <div className="mx-auto max-w-3xl space-y-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="h-6 w-6 text-secondary" />
            <h3 className="font-heading font-bold text-foreground">Sensores y Plataformas</h3>
          </div>
          <p className="mb-3 text-muted-foreground leading-relaxed">El robot integra sensores para analizar el entorno de las cuevas y garantizar la seguridad antes del ingreso humano.</p>
          <p className="mb-3 text-muted-foreground leading-relaxed">
            Uno de los sensores evaluados es el <strong className="text-foreground">sensor MQ-7</strong> para detección de monóxido de carbono, un gas peligroso común en cuevas poco ventiladas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Este sensor puede conectarse a plataformas como <strong className="text-foreground">Arduino</strong> o <strong className="text-foreground">Raspberry Pi</strong> para monitorear condiciones del aire en tiempo real.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-3 font-heading font-bold text-foreground">🔬 ¿Por qué el sensor MQ-7?</h3>
          <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
            Para comprobar la calidad del oxígeno con aparatos electrónicos, se usan analizadores de pureza para gas (midiendo el % de O₂) o sensores de oxígeno disuelto para líquidos, usando tecnologías como láseres (TDL) o fluorescencia.
          </p>
          <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
            Para el cuerpo humano se usa un <strong className="text-foreground">oxímetro de pulso</strong> que mide la saturación (SpO₂) en sangre, no la calidad del gas en sí, aunque un gas de mala calidad afectaría el resultado del oxímetro.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            El sensor óptico tiene muchas desventajas, por lo que se optó por un <strong className="text-foreground">sensor electroquímico</strong>: el <strong className="text-foreground">Paradisetronic.com MQ-7</strong>, un módulo de sensor de CO a 5V con salida analógica y digital, compatible con Arduino y Raspberry Pi.
          </p>
        </motion.div>
      </div>

      <motion.div className="mt-10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
        <VideoPlaceholder label="🎥 Video del proyecto ARGOS aquí" />
      </motion.div>
    </div>
  </section>
);

export default TecnologiaSection;
