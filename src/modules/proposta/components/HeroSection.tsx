import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-growthhub.png";

export const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("escopo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.18, 0.06],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 left-1/4 w-[min(500px,70vw)] h-[min(500px,70vw)] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center px-4 max-w-5xl mt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Growth Hub" className="h-12 md:h-16 w-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="glass px-6 py-2 rounded-full"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary/90">
            MANUTENÇÃO MENSAL · MATERNA FORTE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="space-y-5"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            A continuidade que o <br />
            <span className="text-gradient-primary">Materna Forte</span> merece.
          </h1>
          <p className="text-base md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Plano de manutenção dedicado: sistema sempre ativo, dashboard em tempo real
            e novas funcionalidades implementadas junto com a evolução das suas alunas.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 cursor-pointer group min-h-[44px] justify-center"
        onClick={scrollToContent}
        role="button"
        aria-label="Ver o que está incluído no plano de manutenção"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/60 font-medium group-hover:text-primary transition-colors duration-200">
          O que está incluído
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-200" />
        </motion.div>
      </motion.div>
    </section>
  );
};
