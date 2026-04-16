import { motion } from "framer-motion";
import croissant from "@/assets/croissant.jpg";
import espresso from "@/assets/espresso.jpg";
import coldBrew from "@/assets/cold-brew.jpg";

const items = [
  { src: croissant, alt: "Croissant dourado artesanal", label: "Croissants Artesanais" },
  { src: espresso, alt: "Espresso com crema densa", label: "Espresso Clássico" },
  { src: coldBrew, alt: "Cold brew cristalino com gelo", label: "Cold Brew" },
];

const GallerySection = () => {
  return (
    <section id="carta" className="bg-cream px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center font-serif text-3xl font-medium tracking-wide text-foreground md:text-4xl"
        >
          Vitrine de Delícias
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl shadow-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-background p-6 text-center">
                <p className="font-serif text-lg tracking-wide text-foreground">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
