import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import GooeyNav from "./GooeyNav";
import StaggeredMenu from "./StaggeredMenu";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const navItems = [
    { label: t("nav.inicio"), path: "/" },
    { label: t("nav.quienes"), path: "/quienes-somos" },
    { label: t("nav.proyecto"), path: "/proyecto-innovador" },
    { label: t("nav.juego"), path: "/juego-del-robot" },
    { label: t("nav.galeria"), path: "/galeria" },
    { label: t("nav.contacto"), path: "/contacto" },
  ];

  const menuItems = navItems.map((item) => ({
    label: item.label,
    ariaLabel: `${item.label}`,
    link: item.path,
  }));

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/calibots_?igsh=cjh4ZHlpZXE5bG4z" },
    { label: "TikTok", link: "#" },
    { label: "YouTube", link: "#" },
  ];

  const gooeyItems = navItems.map((item) => ({
    label: item.label,
    href: item.path,
  }));

  const activeIndex = navItems.findIndex((item) => item.path === location.pathname);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/70 backdrop-blur-2xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Calibots Kairos" className="h-10 w-auto drop-shadow-[0_0_10px_hsl(40_76%_50%/0.4)]" />
            <span className="hidden font-heading text-sm font-bold tracking-wider text-foreground sm:inline uppercase">
              Calibots Kairos
            </span>
          </Link>

          {/* Desktop nav - GooeyNav + Lang toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <GooeyNav
              items={gooeyItems}
              initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-subtitle text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary/15 hover:scale-105"
              aria-label="Toggle language"
            >
              {lang === "es" ? "🇬🇧 EN" : lang === "en" ? "🇯🇵 JP" : "🇪🇸 ES"}
            </button>
          </div>

          {/* Mobile: lang toggle + spacer for StaggeredMenu */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-subtitle text-[10px] font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary/15"
              aria-label="Toggle language"
            >
              {lang === "es" ? "🇬🇧 EN" : lang === "en" ? "🇯🇵 JP" : "🇪🇸 ES"}
            </button>
            <div className="w-10" />
          </div>
        </div>
      </header>

      {/* Mobile nav - StaggeredMenu overlay */}
      <div className="lg:hidden fixed inset-0 z-[60] pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#E8E2D4"
          openMenuButtonColor="#E8E2D4"
          changeMenuColorOnOpen
          colors={["#1A1308", "#D4A017"]}
          logoUrl="/logo.png"
          accentColor="#D4A017"
          isFixed
          closeOnClickAway
        />
      </div>
    </>
  );
};

export default Navbar;
