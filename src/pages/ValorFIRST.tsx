import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Search, Zap, Users, Heart, PartyPopper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const slugToKey: Record<string, string> = {
  descubrimiento: "discovery",
  innovacion: "innovation",
  impacto: "impact",
  inclusion: "inclusion",
  "trabajo-en-equipo": "teamwork",
  diversion: "fun",
};

const slugToIcon: Record<string, typeof Lightbulb> = {
  descubrimiento: Search,
  innovacion: Lightbulb,
  impacto: Zap,
  inclusion: Heart,
  "trabajo-en-equipo": Users,
  diversion: PartyPopper,
};

const slugToColor: Record<string, string> = {
  descubrimiento: "primary",
  innovacion: "accent",
  impacto: "secondary",
  inclusion: "primary",
  "trabajo-en-equipo": "secondary",
  diversion: "accent",
};

const ValorFIRST = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const key = slug ? slugToKey[slug] : null;

  if (!key || !slug) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <BackButton />
        <div className="container flex flex-1 flex-col items-center justify-center gap-4 py-20">
          <h1 className="font-heading text-2xl font-bold uppercase tracking-wider">{t("vf.notfound")}</h1>
          <Button asChild><Link to="/quienes-somos">{t("vf.back")}</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComp = slugToIcon[slug];
  const color = slugToColor[slug];
  const title = t(`val.${key}`);
  const colorClass = color === "accent" ? "text-accent" : color === "secondary" ? "text-secondary" : "text-primary";
  const bgColorClass = color === "accent" ? "bg-accent/15" : color === "secondary" ? "bg-secondary/15" : "bg-primary/15";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <BackButton />

      <section className="relative py-16 overflow-hidden section-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`h-[300px] w-[300px] rounded-full ${color === "accent" ? "bg-accent/8" : color === "secondary" ? "bg-secondary/8" : "bg-primary/8"} blur-[80px]`} />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${bgColorClass}`}>
              <IconComp className={`h-10 w-10 ${colorClass}`} />
            </div>
          </motion.div>
          <motion.h1 className="font-heading text-3xl font-black uppercase tracking-wider md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {title}
          </motion.h1>
          <motion.p className="mt-2 font-subtitle text-sm uppercase tracking-[0.2em] text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {t("vf.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="section-darker py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <h2 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider">{t("vf.meaning")}</h2>
              <p className="font-subtitle text-muted-foreground leading-relaxed">{t(`vf.${key}.desc`)}</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="glass-card p-6">
              <h2 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider">{t("vf.apply")}</h2>
              <p className="font-subtitle text-muted-foreground leading-relaxed">{t(`vf.${key}.apply`)}</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="mb-6 font-heading text-lg font-bold uppercase tracking-wider">{t("vf.evidence")}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <PhotoPlaceholder aspectRatio="video" label={`📷 ${title} - 1`} />
                <PhotoPlaceholder aspectRatio="video" label={`📷 ${title} - 2`} />
                <PhotoPlaceholder aspectRatio="video" label={`📷 ${title} - 3`} />
                <PhotoPlaceholder aspectRatio="video" label={`📷 ${title} - 4`} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="glass-card p-8 text-center glow-gold">
              <p className="font-subtitle text-lg italic text-muted-foreground">{t(`vf.${key}.quote`)}</p>
            </motion.div>

            <div className="text-center">
              <Button asChild variant="outline" className="gap-2 border-primary/30 font-subtitle uppercase tracking-wider hover:bg-primary/10">
                <Link to="/quienes-somos"><ArrowLeft className="h-4 w-4" /> {t("vf.backqs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValorFIRST;
