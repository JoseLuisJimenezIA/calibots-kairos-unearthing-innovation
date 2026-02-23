import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-[hsl(30,10%,15%)] text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & credit */}
          <div className="flex flex-col gap-3">
            <img src="/logo.png" alt="Calibots Kairos" className="h-12 w-auto self-start brightness-0 invert" />
            <p className="text-sm opacity-70">
              Calibots Kairos – FIRST LEGO League
            </p>
            <p className="text-xs opacity-50">
              Club de Robótica · Colegio Comfandi El Prado
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider opacity-60">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", path: "/" },
                { label: "Quiénes Somos", path: "/quienes-somos" },
                { label: "Proyecto Innovador", path: "/proyecto-innovador" },
                { label: "Juego del Robot", path: "/juego-del-robot" },
                { label: "Galería", path: "/galeria" },
                { label: "Contacto", path: "/contacto" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="opacity-70 transition-opacity hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider opacity-60">
              Redes Sociales
            </h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full bg-background/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="TikTok" className="rounded-full bg-background/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="rounded-full bg-background/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-background/10 pt-6 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Calibots Kairos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
