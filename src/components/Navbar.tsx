import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import GooeyNav from "./GooeyNav";
import StaggeredMenu from "./StaggeredMenu";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes Somos", path: "/quienes-somos" },
  { label: "Proyecto Innovador", path: "/proyecto-innovador" },
  { label: "Juego del Robot", path: "/juego-del-robot" },
  { label: "Galería", path: "/galeria" },
  { label: "Contacto", path: "/contacto" },
];

const menuItems = navItems.map((item) => ({
  label: item.label,
  ariaLabel: `Ir a ${item.label}`,
  link: item.path,
}));

const socialItems = [
  { label: "Instagram", link: "https://www.instagram.com/calibots_?igsh=cjh4ZHlpZXE5bG4z" },
  { label: "TikTok", link: "#" },
  { label: "YouTube", link: "#" },
];

const Navbar = () => {
  const location = useLocation();

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

          {/* Desktop nav - GooeyNav */}
          <div className="hidden lg:block">
            <GooeyNav
              items={gooeyItems}
              initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Spacer for mobile - toggle is inside StaggeredMenu */}
          <div className="lg:hidden w-10" />
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
