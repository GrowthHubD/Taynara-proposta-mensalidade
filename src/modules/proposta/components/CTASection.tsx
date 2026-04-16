import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative rounded-[3rem] glass-dark p-12 sm:p-20 border border-white/5 overflow-hidden group shadow-premium"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-6"
          >
            VAMOS CONTINUAR JUNTOS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 tracking-tight"
          >
            Pronta para tirar a manutenção <br className="hidden sm:block" />
            da sua <span className="text-gradient-primary">lista de preocupações</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-foreground/75 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Escolha o plano que faz mais sentido agora e deixa a continuidade
            do Materna Forte com quem já conhece cada linha do código.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              type="button"
              className="group relative inline-flex items-center gap-4 bg-primary text-primary-foreground font-bold text-base px-10 py-5 min-h-[52px] rounded-full shadow-glow transition-colors duration-200 overflow-hidden hover:bg-primary-glow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative z-10">Escolher meu plano</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
