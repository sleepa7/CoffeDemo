import { motion } from "framer-motion";
import espresso from "@/assets/espresso.jpg";
import croissant from "@/assets/croissant.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import matcha from "@/assets/matcha.jpg";
import brunch from "@/assets/brunch.jpg";

const menuItems = [
  {
    category: "Cafés Especiais",
    items: [
      { name: "Espresso Clássico", desc: "Blend da casa, crema dourada intensa", price: "R$ 14" },
      { name: "Cappuccino Lumina", desc: "Espuma de leite aveludada, canela em pó", price: "R$ 18" },
      { name: "Pour Over — Etiópia", desc: "Notas cítricas e florais, corpo médio", price: "R$ 22" },
      { name: "Cold Brew 12h", desc: "Extração a frio, suave e refrescante", price: "R$ 20" },
    ],
  },
  {
    category: "Comidinhas",
    items: [
      { name: "Croissant Clássico", desc: "Massa folhada artesanal, fermentação natural 24h", price: "R$ 16" },
      { name: "Avocado Toast", desc: "Pão artesanal, ovo pochê, microgreens", price: "R$ 32" },
      { name: "Bolo de Cenoura", desc: "Receita da vovó, cobertura de chocolate belga", price: "R$ 18" },
      { name: "Granola Bowl", desc: "Frutas frescas, iogurte grego, mel orgânico", price: "R$ 28" },
    ],
  },
];

const menuImages = [
  { src: espresso, alt: "Espresso com crema" },
  { src: matcha, alt: "Matcha latte" },
  { src: croissant, alt: "Croissant artesanal" },
  { src: brunch, alt: "Avocado toast" },
  { src: coldBrew, alt: "Cold brew" },
];

const MenuSection = () => {
  return (
    <section id="cardapio" className="bg-background px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
            Cardápio
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-wide text-foreground md:text-5xl">
            Vitrine de Delícias
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-muted-foreground">
            Uma seleção cuidadosa de sabores para cada momento do seu dia.
          </p>
        </motion.div>

        {/* Image mosaic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2"
        >
          {/* Large image spanning 2 rows */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-card">
            <img
              src={menuImages[0].src}
              alt={menuImages[0].alt}
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {menuImages.slice(1).map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>

        {/* Menu lists */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {menuItems.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: ci * 0.15 }}
            >
              <h3 className="mb-8 font-serif text-2xl tracking-wide text-foreground">
                {cat.category}
              </h3>
              <div className="flex flex-col gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between border-b border-border pb-6"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-light text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <p className="ml-4 shrink-0 font-serif text-sm text-gold">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
