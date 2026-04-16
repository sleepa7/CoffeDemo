import { motion } from "framer-motion";
import { Mountain, Flower2, Lightbulb, Thermometer, Timer, Award } from "lucide-react";

const cards = [
  {
    icon: Mountain,
    title: "Origem Controlada",
    description: "Grãos colhidos a mais de 1.200m de altitude, rastreados da fazenda à sua xícara.",
  },
  {
    icon: Flower2,
    title: "Artesanal",
    description: "Métodos de preparo que preservam notas florais, frutadas e achocolatadas.",
  },
  {
    icon: Lightbulb,
    title: "Conexão",
    description: "O espaço ideal para sua próxima grande ideia, reunião criativa ou momento de pausa.",
  },
  {
    icon: Thermometer,
    title: "Torra Perfeita",
    description: "Micro-lotes torrados semanalmente em nosso atelier para frescor absoluto.",
  },
  {
    icon: Timer,
    title: "Extração Precisa",
    description: "Cada método calibrado ao segundo para extrair o melhor de cada grão.",
  },
  {
    icon: Award,
    title: "Premiado",
    description: "Reconhecido entre as melhores cafeterias especiais de São Paulo.",
  },
];

const DetailsSection = () => {
  return (
    <section id="especialidades" className="bg-cream px-6 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            O Diferencial
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-wide text-foreground md:text-5xl">
            Detalhes que Importam
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl bg-background p-10 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <card.icon
                className="mb-6 h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1}
              />
              <h3 className="mb-3 font-serif text-lg font-medium tracking-wide text-foreground">
                {card.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
