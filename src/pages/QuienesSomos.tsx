import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CircularProfileGallery from "@/components/CircularProfileGallery";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import GlassIcons from "@/components/GlassIcons";
import { Users, Lightbulb, Heart, Search, Zap, PartyPopper, ArrowRight } from "lucide-react";
import { fadeUp, textReveal, slideFromLeft, slideFromRight, scaleReveal, staggerContainer, staggerItem, flipIn } from "@/lib/animations";

import richardImg from "@/assets/team/richard.png";
import diegoImg from "@/assets/team/diego.png";
import joseLuisImg from "@/assets/team/jose_luis.png";
import sebastianImg from "@/assets/team/sebastian.png";
import monsalveImg from "@/assets/team/monsalve.png";
import gutierrezImg from "@/assets/team/gutierrez.png";
import raulImg from "@/assets/team/raul1.png";
import luisaImg from "@/assets/team/luisa.png";
import mariaImg from "@/assets/team/maria_alejandra.png";
import sofiaImg from "@/assets/team/sofia.png";
import erickaImg from "@/assets/team/ericka.png";

const teamMembers = [
  { name: "Richard Suarez", role: "Profesor / Coach", avatarUrl: richardImg },
  { name: "Diego Peña", role: "Profesor / Coach", avatarUrl: diegoImg },
  { name: "Jose Luis Jiménez", role: "Integrante", avatarUrl: joseLuisImg },
  { name: "Sebastián Sánchez", role: "Integrante", avatarUrl: sebastianImg },
  { name: "Samuel Monzalve", role: "Integrante", avatarUrl: monsalveImg },
  { name: "Juan E. Gutiérrez", role: "Integrante", avatarUrl: gutierrezImg },
  { name: "Raúl A. Castillo", role: "Integrante", avatarUrl: raulImg },
  { name: "Luisa F. Ávila", role: "Integrante", avatarUrl: luisaImg },
  { name: "Maria A. Zúñiga", role: "Integrante", avatarUrl: mariaImg },
  { name: "Sofia Vasco Riaño", role: "Integrante", avatarUrl: sofiaImg },
  { name: "Ericka A. V. Viafara", role: "Integrante", avatarUrl: erickaImg },
];

const valoresFIRST = [
  { icon: Search, label: "Descubrimiento", slug: "descubrimiento", color: "primary", desc: "Exploramos nuevas habilidades, ideas y conceptos." },
  { icon: Lightbulb, label: "Innovación", slug: "innovacion", color: "accent", desc: "Usamos creatividad y perseverancia para resolver problemas." },
  { icon: Zap, label: "Impacto", slug: "impacto", color: "secondary", desc: "Aplicamos lo aprendido para mejorar nuestro mundo." },
  { icon: Heart, label: "Inclusión", slug: "inclusion", color: "primary", desc: "Nos respetamos y valoramos nuestras diferencias." },
  { icon: Users, label: "Trabajo en Equipo", slug: "trabajo-en-equipo", color: "secondary", desc: "Somos más fuertes cuando trabajamos juntos." },
  { icon: PartyPopper, label: "Diversión", slug: "diversion", color: "accent", desc: "¡Disfrutamos y celebramos lo que hacemos!" },
];

const timeline = [
  { phase: "Entrenamientos", desc: "Formación en programación, construcción y valores FIRST." },
  { phase: "Preparación", desc: "Desarrollo del proyecto innovador ARGOS y diseño del robot." },
  { phase: "Competencias", desc: "Participación en torneos regionales y nacionales FLL." },
];

const ValoresGlassIcons = () => {
  const navigate = useNavigate();
  const glassItems = valoresFIRST.map((v) => ({
    icon: <v.icon className="h-6 w-6" />,
    color: v.color,
    label: v.label,
    onClick: () => navigate(`/valores/${v.slug}`),
  }));

  return <GlassIcons items={glassItems} />;
};

const QuienesSomos = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <BackButton />

      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden section-dark">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1
            className="font-heading text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-5xl lg:text-6xl"
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Quiénes <span className="text-gradient-gold">Somos</span>
          </motion.h1>
          <motion.p
            className="mt-5 font-subtitle text-lg text-muted-foreground/80"
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Conoce al equipo detrás de CaliBots Kairos
          </motion.p>
        </div>
      </section>

      <SectionDivider variant="gold" />

      {/* Historia */}
      <section className="section-darker py-12 sm:py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl">Nuestra <span className="text-gradient-teal">Esencia</span></h2>
              <div className="space-y-4">
                <p className="font-subtitle text-muted-foreground leading-relaxed">
                  Somos CaliBots Kairos, un equipo de FIRST LEGO League Challenge de Cali, Colombia. Representamos a nuestro colegio <strong className="text-primary">Comfandi El Prado</strong> con una propuesta que une investigación, robótica, diseño y trabajo en equipo. Nuestro nombre refleja una idea que nos identifica: el <strong className="text-primary">kairos</strong>, el momento oportuno para aprender, crear y actuar frente a un desafío real.
                </p>
                <p className="font-subtitle text-muted-foreground leading-relaxed">
                  En la temporada <strong className="text-primary">UNEARTHED</strong>, decidimos conectar tecnología y patrimonio desde una pregunta concreta: ¿cómo puede la robótica ayudar a explorar primero, reducir riesgos y aportar información antes del ingreso humano?
                </p>
              </div>
            </motion.div>
            <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <PhotoPlaceholder aspectRatio="video" label="📷 Foto del equipo aquí" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="teal" />

      {/* Equipo - Profile Cards */}
      <section className="section-dark py-12 sm:py-20">
        <div className="container">
          <motion.h2
            className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Nuestro <span className="text-gradient-gold">Equipo</span> y <span className="text-gradient-crimson">Coaches</span>
          </motion.h2>
          <motion.div className="mx-auto mb-8 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.p
            className="mb-8 text-center font-subtitle text-xs sm:text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="hidden sm:inline">Arrastra para girar · Pasa el cursor para pausar</span>
            <span className="sm:hidden">Desliza para girar</span>
          </motion.p>
          <div className="h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
            <CircularProfileGallery
              items={teamMembers.map(m => ({
                name: m.name,
                role: m.role,
                avatarUrl: m.avatarUrl,
                isCoach: m.role.includes("Coach"),
              }))}
              autoRotateSpeed={0.12}
              radius={480}
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="teal" />

      {/* Recorrido */}
      <section className="section-dark py-20">
        <div className="container">
          <motion.h2
            className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Nuestro <span className="text-gradient-teal">Recorrido</span>
          </motion.h2>
          <motion.div className="mx-auto mb-12 h-1 w-16 rounded-full bg-secondary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <div className="relative mx-auto max-w-2xl">
            <motion.div
              className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-secondary/50 via-primary/50 to-secondary/50 md:left-1/2 md:-translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
            {timeline.map((item, i) => (
              <motion.div
                key={item.phase}
                className="relative mb-10 pl-12 md:pl-0"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-secondary bg-background shadow-[0_0_12px_hsl(160_40%_45%/0.4)] md:left-1/2 md:-translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                />
                <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-secondary">{item.phase}</h3>
                  <p className="font-subtitle text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gold" />

      {/* Valores FIRST */}
      <section className="section-darker py-20">
        <div className="container">
          <motion.h2
            className="mb-4 text-center font-heading text-2xl font-bold uppercase tracking-wider md:text-3xl"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Valores FIRST en <span className="text-gradient-gold">Acción</span>
          </motion.h2>
          <motion.p
            className="mb-4 text-center font-subtitle text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Haz clic en cada valor para descubrir cómo lo vivimos
          </motion.p>
          <motion.div className="mx-auto mb-8 h-1 w-16 rounded-full bg-primary" variants={scaleReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <ValoresGlassIcons />
        </div>
      </section>

      <SectionDivider variant="gradient" />
      <Footer />
    </div>
  );
};

export default QuienesSomos;
