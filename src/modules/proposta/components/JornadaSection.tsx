import { motion } from "framer-motion";
import { Dumbbell, Heart, Flower2, Plus } from "lucide-react";

const possibilities = [
  {
    icon: Dumbbell,
    title: "Treinos em grupo ao vivo",
    description:
      "Aulas semanais com personal trainer conectando as mães em sessões de funcional, crossfit e mobilidade. Movimento em comunidade na rotina do pós parto.",
    tag: "Comunidade",
  },
  {
    icon: Flower2,
    title: "Aulas de yoga online",
    description:
      "Módulo dedicado com aulas gravadas e ao vivo, trilhas por trimestre pós parto e acompanhamento de progresso individual.",
    tag: "Conteúdo",
  },
  {
    icon: Heart,
    title: "Fisioterapia pélvica",
    description:
      "Espaço especializado para acompanhamento pélvico com profissionais, exercícios guiados e agendamento integrado dentro da plataforma.",
    tag: "Saúde",
  },
  {
    icon: Plus,
    title: "A próxima ideia que surgir",
    description:
      "Cada nova demanda que você ou as mães trouxerem entra no ciclo de 30 dias, sem custo adicional. O plano foi desenhado para evoluir junto com o produto.",
    tag: "Sob demanda",
  },
];

export const JornadaSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden relative">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-primary/20 blur-[150px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-24 relative z-10"
      >
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-80">
          ROADMAP DE POSSIBILIDADES
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          Evoluções que a mensalidade <br className="hidden sm:block" />
          já <span className="text-primary text-glow-primary">destrava</span>.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Exemplos reais do que pode entrar no ciclo de 30 dias. Cada demanda é
          priorizada junto com você e entregue dentro do próprio plano de manutenção.
        </p>
      </motion.div>

      <div className="relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {possibilities.map(({ icon: Icon, title, description, tag }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col items-start text-left glass-dark p-8 rounded-[2rem] border border-white/5 transition-colors duration-200 hover:border-primary/30"
            >
              <div className="flex items-center justify-between w-full mb-6">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent ring-1 ring-inset ring-primary/20 flex items-center justify-center shadow-[0_0_20px_-4px_hsl(var(--primary)/0.35)]">
                  <Icon
                    className="w-[22px] h-[22px] text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-[9px] font-bold tracking-widest text-primary/85 uppercase border border-primary/25 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              </div>

              <h3 className="text-lg font-heading font-bold text-foreground mb-3 tracking-tight transition-colors duration-200 group-hover:text-primary">
                {title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
