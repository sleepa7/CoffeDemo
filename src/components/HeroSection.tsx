import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Zoom background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Latte art em xícara de porcelana branca sobre mármore"
          className="hero-zoom h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30_5%_10%/0.45)] via-[hsl(30_5%_10%/0.3)] to-[hsl(30_5%_10%/0.55)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 h-px w-12 bg-[hsl(var(--gold-light))]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-xs font-light uppercase tracking-[0.5em] text-[hsl(40_30%_88%)]"
        >
          Lumina Coffee — Est. 2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl font-serif text-4xl font-medium leading-[1.15] tracking-wide text-[hsl(40_20%_95%)] md:text-6xl lg:text-7xl"
        >
          A PUREZA DE UM
          <br />
          GRÃO SELECIONADO.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-lg text-base font-light leading-relaxed text-[hsl(40_15%_80%)] md:text-lg"
        >
          Experiências sensoriais únicas em um ambiente desenhado para o seu
          bem-estar.
        </motion.p>

        <motion.a
          href="#cardapio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 inline-block border border-[hsl(40_30%_70%/0.4)] bg-[hsl(40_20%_95%/0.12)] px-12 py-4 text-xs font-medium uppercase tracking-[0.3em] text-[hsl(40_30%_88%)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[hsl(40_20%_95%/0.2)] hover:shadow-lg"
        >
          Conheça Nossa Carta
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[hsl(40_15%_70%)]">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-[hsl(40_30%_70%/0.5)] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
