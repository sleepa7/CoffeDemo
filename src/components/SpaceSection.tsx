import { motion } from "framer-motion";
import interiorImg from "@/assets/interior.jpg";
import terraceImg from "@/assets/terrace.jpg";

const SpaceSection = () => {
  return (
    <section id="espaco" className="bg-cream px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            O Espaço
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-wide text-foreground md:text-5xl">
            Um Refúgio na Cidade
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light text-muted-foreground">
            Cada detalhe do nosso espaço foi projetado para estimular seus sentidos e 
            proporcionar momentos de calma e inspiração.
          </p>
        </motion.div>

        {/* Full-width interior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-8 overflow-hidden rounded-3xl shadow-card"
        >
          <img
            src={interiorImg}
            alt="Interior minimalista da Lumina Coffee"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </motion.div>

        {/* Terrace + text */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-card"
          >
            <img
              src={terraceImg}
              alt="Terraço da Lumina Coffee"
              loading="lazy"
              width={1920}
              height={900}
              className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8 py-4"
          >
            <div>
              <h3 className="mb-2 font-serif text-xl text-foreground">Ambiente Interno</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Mármore italiano, madeira clara e plantas vivas compõem um cenário 
                acolhedor. Iluminação natural abundante e acústica pensada para 
                conversas tranquilas.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-serif text-xl text-foreground">Terraço ao Ar Livre</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Nosso terraço arborizado é o lugar perfeito para aproveitar a brisa 
                da manhã com um espresso ou relaxar ao final do dia com um cold brew 
                gelado.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-serif text-xl text-foreground">Wi-Fi & Tomadas</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Internet de alta velocidade e tomadas em todas as mesas. Ideal para 
                trabalho remoto, reuniões informais ou momentos de estudo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
