import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-background px-6 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-serif text-2xl tracking-[0.15em] text-foreground">
              LUMINA COFFEE
            </p>
            <p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
              Onde cada xícara conta uma história. Desde 2019, cultivamos 
              experiências sensoriais no coração dos Jardins.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-muted-foreground transition-colors duration-300 hover:text-gold"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-muted-foreground transition-colors duration-300 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-foreground">
              Informações
            </p>
            <div className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Rua da Claridade, 450 — Jardins, SP
              </span>
              <span className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Diariamente: 08h às 20h
              </span>
              <span className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                (11) 99999-9999
              </span>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-foreground">
              Localização
            </p>
            <div className="h-48 overflow-hidden rounded-2xl bg-muted">
              <iframe
                title="Localização Lumina Coffee"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6623!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjAiUyA0NsKwMzknNDQuMyJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) opacity(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-border pt-8 text-center">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            © 2026 Lumina Coffee. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-[hsl(140_30%_75%)] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-foreground shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
        Peça pelo WhatsApp
      </a>
    </footer>
  );
};

export default FooterSection;
