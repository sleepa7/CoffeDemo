import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coffee.jpg";

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-[hsl(30_5%_8%/0.7)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[hsl(40_30%_70%)]">
          Visite-nos
        </p>
        <h2 className="mb-6 font-serif text-3xl font-medium tracking-wide text-[hsl(40_20%_95%)] md:text-5xl">
          Seu Momento Lumina
          <br />
          Começa Aqui.
        </h2>
        <p className="mb-10 text-sm font-light leading-relaxed text-[hsl(40_15%_75%)]">
          Reserve uma mesa, peça pelo delivery ou simplesmente apareça. 
          Estamos esperando você com um café fresquinho.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contato"
            className="inline-block border border-[hsl(40_30%_70%/0.4)] bg-[hsl(40_20%_95%/0.12)] px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(40_30%_88%)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[hsl(40_20%_95%/0.2)]"
          >
            Como Chegar
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[hsl(140_30%_75%/0.9)] px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(30_5%_15%)] transition-all duration-300 hover:-translate-y-1 hover:bg-[hsl(140_30%_75%)]"
          >
            Peça pelo WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
