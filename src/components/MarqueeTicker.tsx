import { motion } from "framer-motion";

interface MarqueeTickerProps {
  reverse?: boolean;
}

const TICKER_TEXT = "IA NA SAÚDE • AGENDAMENTO AUTOMÁTICO • GESTÃO DE PACIENTES • ATENDIMENTO 24/7 • FOLLOW-UP INTELIGENTE • REDUÇÃO DE FALTAS • ";

export const MarqueeTicker = ({ reverse = false }: MarqueeTickerProps) => {
  return (
    <div className="overflow-hidden py-3 sm:py-4 bg-primary/90 backdrop-blur-sm border-y border-white/10 relative z-20">
      <motion.div
        animate={{
          x: reverse ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.6em] text-slate-950 uppercase">
          {TICKER_TEXT.repeat(10)}
        </span>
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.6em] text-slate-950 uppercase">
          {TICKER_TEXT.repeat(10)}
        </span>
      </motion.div>
    </div>
  );
};
