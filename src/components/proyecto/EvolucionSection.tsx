import { motion } from "framer-motion";
import { textReveal, slideFromLeft, slideFromRight, scaleReveal } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { type CarouselApi } from "@/components/ui/carousel";

import argosV2_1 from "@/assets/argos_v2_1.jpeg";
import argosV2_2 from "@/assets/argos_v2_2.jpeg";
import argosV2_3 from "@/assets/argos_v2_3.jpeg";
import argosV2_4 from "@/assets/argos_v2_4.jpeg";
import argosV2_5 from "@/assets/argos_v2_5.jpeg";
import argosV2_6 from "@/assets/argos_v2_6.jpeg";
import argosV3 from "@/assets/argos_v3.jpeg";
import argosV4 from "@/assets/argos_v4.jpeg";
import argosV4_1 from "@/assets/argos_v4_1.jpeg";
import argosV4_2 from "@/assets/argos_v4_2.jpeg";

const v2Images = [argosV2_1, argosV2_2, argosV2_3, argosV2_4, argosV2_5, argosV2_6];
const v4Images = [argosV4, argosV4_1, argosV4_2];

const DotIndicators = ({ count, current }: { count: number; current: number }) => (
  <div className="mt-4 flex justify-center gap-2">
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        className={`h-2 rounded-full transition-all duration-300 ${
          i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
        }`}
        aria-label={`Slide ${i + 1}`}
      />
    ))}
  </div>
);

const EvolucionSection = () => {
  const { t } = useLanguage();
  const autoplayV2 = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const autoplayV4 = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));

  const [v2Current, setV2Current] = useState(0);
  const [v4Current, setV4Current] = useState(0);

  const onV2Select = useCallback((api: CarouselApi) => {
    if (!api) return;
    setV2Current(api.selectedScrollSnap());
  }, []);

  const onV4Select = useCallback((api: CarouselApi) => {
    if (!api) return;
    setV4Current(api.selectedScrollSnap());
  }, []);

  return (
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
          {t("evo.title1")}
          <span className="text-gradient-gold">{t("evo.title2")}</span>
        </motion.h2>
        <motion.div
          className="mx-auto mb-16 h-1 w-16 rounded-full bg-primary"
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {/* V2 — Carrusel dinámico */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="glass-card p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 font-heading text-xs font-bold text-primary">
                V2
              </span>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                {t("evo.v2.title")}
              </h3>
            </div>
            <p className="mb-6 font-subtitle text-sm text-muted-foreground">
              {t("evo.v2.desc")}
            </p>
            <div className="relative px-8 md:px-12">
              <Carousel
                plugins={[autoplayV2.current]}
                opts={{ loop: true }}
                setApi={(api) => {
                  api?.on("select", () => onV2Select(api));
                }}
                className="w-full"
              >
                <CarouselContent>
                  {v2Images.map((img, i) => (
                    <CarouselItem key={i}>
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={img}
                          alt={`ARGOS V2 - ${i + 1}`}
                          className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-primary/20 bg-card/80 text-primary hover:bg-primary/20" />
                <CarouselNext className="border-primary/20 bg-card/80 text-primary hover:bg-primary/20" />
              </Carousel>
              <DotIndicators count={v2Images.length} current={v2Current} />
            </div>
          </motion.div>

          {/* V3 — Imagen destacada */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 font-heading text-xs font-bold text-secondary">
                V3
              </span>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                {t("evo.v3.title")}
              </h3>
            </div>
            <p className="mb-6 font-subtitle text-sm text-muted-foreground">
              {t("evo.v3.desc")}
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl shadow-lg transition-shadow duration-500 hover:shadow-[0_0_40px_hsl(40_76%_50%/0.2)]">
              <img
                src={argosV3}
                alt="ARGOS V3"
                className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* V4 — Carrusel premium */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="relative rounded-xl p-[2px] animate-border-rotate" style={{
              background: "conic-gradient(from var(--border-angle), hsl(var(--primary)) 0%, hsl(var(--secondary)) 33%, hsl(var(--accent)) 66%, hsl(var(--primary)) 100%)"
            }}>
              <div className="rounded-xl bg-card p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 font-heading text-xs font-bold text-accent">
                      V4
                    </span>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                      {t("evo.v4.title")}
                    </h3>
                  </div>
                  <Badge className="animate-pulse bg-primary/20 text-primary border-primary/30 font-heading text-[10px] uppercase tracking-widest">
                    {t("evo.v4.badge")}
                  </Badge>
                </div>
                <p className="mb-6 font-subtitle text-sm text-muted-foreground">
                  {t("evo.v4.desc")}
                </p>
                <div className="relative px-8 md:px-12">
                  <Carousel
                    plugins={[autoplayV4.current]}
                    opts={{ loop: true }}
                    setApi={(api) => {
                      api?.on("select", () => onV4Select(api));
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {v4Images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={img}
                              alt={`ARGOS V4 - ${i + 1}`}
                              className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="border-primary/30 bg-card/80 text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(40_76%_50%/0.3)]" />
                    <CarouselNext className="border-primary/30 bg-card/80 text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(40_76%_50%/0.3)]" />
                  </Carousel>
                  <DotIndicators count={v4Images.length} current={v4Current} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EvolucionSection;
