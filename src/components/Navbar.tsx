import { useEffect, useState } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa História", href: "#historia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Espaço", href: "#espaco" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-soft backdrop-blur-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-serif text-xl tracking-[0.2em] text-foreground"
        >
          LUMINA COFFEE
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full bg-background/95 px-6 py-8 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
