import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Beatriz",
    role: "Arquiteta",
    text: "A Lumina transformou minha rotina matinal. O cappuccino é impecável e o ambiente me inspira todos os dias. Já trouxe todos os meus clientes para reuniões aqui.",
    stars: 5,
  },
  {
    name: "Rafael Mendes",
    role: "Escritor",
    text: "Escrevi metade do meu último livro sentado na mesa ao lado da janela. O cold brew de 12 horas é simplesmente o melhor de São Paulo. Lugar mágico.",
    stars: 5,
  },
  {
    name: "Camila Torres",
    role: "Sommelier de Café",
    text: "Poucos lugares respeitam tanto o grão quanto a Lumina. A extração é impecável, o atendimento é caloroso e o croissant é honesto como um abraço.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background px-6 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-wide text-foreground md:text-5xl">
            O Que Dizem Sobre Nós
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="rounded-2xl bg-cream p-10"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-gold text-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="mb-8 text-sm font-light italic leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs font-light text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
