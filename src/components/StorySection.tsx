import { motion } from "framer-motion";
import beansImg from "@/assets/beans.jpg";
import baristaImg from "@/assets/barista.jpg";

const StorySection = () => {
  return (
    <section id="historia" className="bg-background px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            Nossa História
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-wide text-foreground md:text-5xl">
            Da Semente à Xícara
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={beansImg}
                alt="Grãos de café selecionados sobre mármore"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-4 w-48 overflow-hidden rounded-xl shadow-card md:-right-8 md:w-56">
              <img
                src={baristaImg}
                alt="Barista preparando latte art"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="mb-6 text-sm font-light leading-[1.9] text-muted-foreground">
              Em 2019, nascemos de uma obsessão simples: encontrar a xícara perfeita. 
              Viajamos pelas montanhas da Colômbia, Etiópia e do sul de Minas Gerais 
              em busca de grãos que carregassem história em cada nota aromática.
            </p>
            <p className="mb-6 text-sm font-light leading-[1.9] text-muted-foreground">
              Cada detalhe da Lumina Coffee foi pensado para transformar um simples café 
              em um ritual. Do design minimalista do espaço aos métodos de extração 
              artesanais — tudo converge para um momento de puro prazer.
            </p>
            <p className="mb-10 text-sm font-light leading-[1.9] text-muted-foreground">
              Nossos baristas são treinados nas melhores escolas de café do mundo e 
              dominam técnicas que vão do pour-over ao sifão, sempre respeitando o 
              perfil sensorial de cada origem.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="font-serif text-3xl text-foreground">12+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Origens
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">6</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Anos
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">50k+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Xícaras/mês
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
