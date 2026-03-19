import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Radar, Cpu, Zap } from "lucide-react";
import { textReveal, scaleReveal, staggerContainer, staggerItem } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const ShapeBlur = lazy(() => import("@/components/ShapeBlur"));

const floatingParticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: `${15 + i * 14}%`,
  y: `${20 + (i % 3) * 25}%`,
  delay: i * 0.8,
  size: 3 + (i % 3) * 2,
}));

const ArgosPortalSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* ShapeBlur WebGL Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Suspense fallback={null}>
          <ShapeBlur
            variation={1}
            shapeSize={1.4}
            roundness={0.6}
            borderSize={0.05}
            circleSize={0.4}
            circleEdge={0.6}
          />
        </Suspense>
      </div>

      {/* Animated golden particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <motion.line
          x1="10%" y1="50%" x2="35%" y2="50%"
          stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="65%" y1="50%" x2="90%" y2="50%"
          stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </svg>

      <div className="container relative z-10">
        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mx-auto max-w-3xl"
        >
          {/* Portal Card */}
          <div className="relative p-[2px] rounded-2xl animate-border-rotate group">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--border-angle),hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)),hsl(var(--primary)))] opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ "--border-angle": "0deg" } as React.CSSProperties} />

            <div className="relative glass-card rounded-2xl p-10 md:p-14 overflow-hidden">
              {/* Inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

              {/* Top animated line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Badge */}
                <motion.div variants={staggerItem} className="flex items-center gap-2 mb-6">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {t("argos.badge")}
                  </span>
                  <Zap className="h-4 w-4 text-primary" />
                </motion.div>

                {/* Icons row */}
                <motion.div variants={staggerItem} className="flex items-center gap-6 mb-8">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                    <Cpu className="h-8 w-8 text-secondary drop-shadow-[0_0_12px_hsl(160_40%_45%/0.5)]" />
                  </motion.div>
                  <div className="h-8 w-[1px] bg-border" />
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                    <Radar className="h-8 w-8 text-primary drop-shadow-[0_0_12px_hsl(40_76%_50%/0.5)]" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  variants={textReveal}
                  custom={0}
                  className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-4"
                >
                  <span className="text-gradient-gold">{t("argos.title")}</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  variants={textReveal}
                  custom={1}
                  className="font-subtitle text-lg md:text-xl text-muted-foreground mb-4"
                >
                  {t("argos.subtitle")}
                </motion.p>

                {/* Description */}
                <motion.p
                  variants={staggerItem}
                  className="font-subtitle text-sm text-muted-foreground/80 max-w-lg mb-10 leading-relaxed"
                >
                  {t("argos.desc")}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="https://argoss.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-heading text-sm font-bold text-primary-foreground uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_hsl(40_76%_50%/0.4)] group/btn"
                >
                  {t("argos.cta")}
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArgosPortalSection;
