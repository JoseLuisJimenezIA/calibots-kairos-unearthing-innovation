import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Youtube, MapPin, Mail, School } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const Contacto = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="bg-foreground py-20 text-background">
        <div className="container text-center">
          <motion.h1 className="font-heading text-3xl font-black md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Contacto</motion.h1>
          <motion.p className="mt-4 text-lg opacity-70" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.3 }}>¿Quieres saber más? ¡Escríbenos!</motion.p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="mb-6 font-heading text-xl font-bold">Envíanos un mensaje</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div><Label htmlFor="name">Nombre</Label><Input id="name" placeholder="Tu nombre" className="mt-1" /></div>
              <div><Label htmlFor="email">Correo electrónico</Label><Input id="email" type="email" placeholder="tu@correo.com" className="mt-1" /></div>
              <div><Label htmlFor="message">Mensaje</Label><Textarea id="message" placeholder="Escribe tu mensaje..." rows={5} className="mt-1" /></div>
              <Button type="submit" variant="secondary" className="font-bold">Enviar mensaje</Button>
            </form>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="space-y-8">
            <div>
              <h2 className="mb-4 font-heading text-xl font-bold">Información</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3"><School className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span>Colegio Comfandi El Prado<br />Club de Robótica Calibots Kairos</span></li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span>Ciudad, Colombia</span></li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span>contacto@calibotskairos.com</span></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-heading text-lg font-bold">Redes Sociales</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/calibots_?igsh=cjh4ZHlpZXE5bG4z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"><Instagram className="h-4 w-4" /> Instagram</a>
                <a href="#" className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z"/></svg> TikTok
                </a>
                <a href="#" className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"><Youtube className="h-4 w-4" /> YouTube</a>
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-heading text-lg font-bold">Ubicación</h3>
              <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/50 text-muted-foreground">
                <div className="text-center"><MapPin className="mx-auto mb-2 h-8 w-8 opacity-40" /><span className="text-sm opacity-60">🗺️ Mapa de Google Maps aquí</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacto;
