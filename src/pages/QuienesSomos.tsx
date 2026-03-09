import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Heart, Search, Zap, PartyPopper, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const students = [
  { name: "Jose Luis Jiménez", role: "Integrante" },
  { name: "Sebastián Sánchez", role: "Integrante" },
  { name: "Samuel Monzalve", role: "Integrante" },
  { name: "Juan E. Gutiérrez", role: "Integrante" },
  { name: "Raúl A. Castillo", role: "Integrante" },
  { name: "Luisa F. Ávila", role: "Integrante" },
  { name: "Maria A. Zúñiga", role: "Integrante" },
  { name: "Sofia Vasco Riaño", role: "Integrante" },
  { name: "Bramdon Vizcaíno", role: "Integrante" },
  { name: "Ericka A. V. Viafara", role: "Integrante" },
];

const coaches = [
  { name: "Richard Suarez", role: "Profesor / Coach" },
  { name: "Diego Peña", role: "Profesor / Coach" },
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

const QuienesSomos = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <BackButton />
      <section className="bg-dark-brown py-20 text-primary-foreground">
        <div className="container text-center">
          <motion.h1 className="font-heading text-3xl font-black md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Quiénes Somos</motion.h1>
          <motion.p className="mt-4 font-subtitle text-lg opacity-80" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.3 }}>Conoce al equipo detrás de CaliBots Kairos</motion.p>
        </div>
      </section>

      {/* Historia */}
      <section className="container py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-4 font-heading text-2xl font-bold">Nuestra Esencia</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Somos CaliBots Kairos, un equipo de FIRST LEGO League Challenge de Cali, Colombia, estudiantes con orgullo de Comfandi.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Nuestro nombre define nuestra esencia: creemos en el <strong className="text-foreground">Kairos</strong>, el momento exacto para aprender, crear e innovar frente a los desafíos tecnológicos de hoy.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              En la temporada <strong className="text-foreground">Unearthed</strong> nos sumergimos en el presente para redescubrir los tesoros del pasado. A través de la investigación, la ciencia y la robótica honramos nuestras raíces y representamos a nuestra ciudad con creatividad y compromiso.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En CaliBots Kairos cada reto es la oportunidad perfecta para dejar huella y demostrar que desde nuestra región también se construye el futuro.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <PhotoPlaceholder aspectRatio="video" label="📷 Foto del equipo aquí" />
          </motion.div>
        </div>
      </section>

      {/* Estudiantes */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold">Nuestro Equipo</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {students.map((member, i) => (
              <motion.div key={member.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03]">
                  <PhotoPlaceholder aspectRatio="portrait" className="rounded-none" />
                  <CardContent className="p-4 text-center">
                    <h3 className="font-heading text-sm font-bold">{member.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-secondary/10 px-3 py-0.5 text-xs font-semibold text-secondary">{member.role}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="container py-16">
        <h2 className="mb-10 text-center font-heading text-2xl font-bold">Nuestros Coaches</h2>
        <div className="mx-auto grid max-w-lg gap-6 sm:grid-cols-2">
          {coaches.map((coach, i) => (
            <motion.div key={coach.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03]">
                <PhotoPlaceholder aspectRatio="portrait" className="rounded-none" />
                <CardContent className="p-4 text-center">
                  <h3 className="font-heading text-sm font-bold">{coach.name}</h3>
                  <span className="mt-1 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">{coach.role}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recorrido */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold">Nuestro Recorrido</h2>
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-secondary/30 md:left-1/2 md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <motion.div key={item.phase} className="relative mb-10 pl-12 md:pl-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div className="absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-secondary bg-background md:left-1/2 md:-translate-x-1/2" />
                <div className={`md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                  <h3 className="font-heading font-bold text-foreground">{item.phase}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores FIRST en Acción */}
      <section className="bg-dark-brown py-16 text-primary-foreground">
        <div className="container">
          <motion.h2 className="mb-3 text-center font-heading text-2xl font-bold" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            Valores FIRST en Acción
          </motion.h2>
          <motion.p className="mb-10 text-center text-sm opacity-60" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            Haz clic en cada valor para descubrir cómo lo vivimos
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valoresFIRST.map((v, i) => {
              const colorClass = v.color === "accent" ? "text-accent" : v.color === "secondary" ? "text-secondary" : "text-primary";
              const bgClass = v.color === "accent" ? "bg-accent/15" : v.color === "secondary" ? "bg-secondary/15" : "bg-primary/15";
              return (
                <motion.div key={v.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}>
                  <Link to={`/valores/${v.slug}`} className="group block rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:bg-primary-foreground/10 hover:shadow-lg hover:scale-[1.02]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgClass}`}>
                        <v.icon className={`h-6 w-6 ${colorClass}`} />
                      </div>
                      <h3 className="font-heading text-base font-bold">{v.label}</h3>
                    </div>
                    <p className="mb-3 text-sm opacity-70">{v.desc}</p>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${colorClass} group-hover:gap-2 transition-all`}>
                      Ver más <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
