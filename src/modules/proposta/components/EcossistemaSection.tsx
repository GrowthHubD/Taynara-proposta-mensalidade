import {
  ShieldCheck,
  Rocket,
  LineChart,
  Headphones,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Sistema sempre ativo",
    desc: "Monitoramento, infraestrutura e correções para que o Materna Forte não pare. As suas mães encontram a plataforma no ar quando precisarem.",
  },
  {
    icon: Rocket,
    title: "Novas funcionalidades",
    desc: "Toda nova demanda entra no backlog priorizado com prazo de até 30 dias para entrega em produção.",
  },
  {
    icon: LineChart,
    title: "Dashboard em tempo real",
    desc: "Acompanhamento direto do banco de dados com insights sobre crescimento, engajamento e retenção das mães ativas.",
  },
  {
    icon: Headphones,
    title: "Suporte em horário comercial",
    desc: "Canal direto para dúvidas técnicas, ajustes rápidos e acompanhamento. Resposta garantida no mesmo dia útil.",
  },
  {
    icon: Sparkles,
    title: "Atualizações contínuas",
    desc: "Melhorias no produto guiadas pelo feedback real das mães que usam o Materna Forte no dia a dia.",
  },
  {
    icon: GitBranch,
    title: "Evolução estratégica",
    desc: "Roadmap de crescimento construído junto com você. Decisões orientadas por dado, não por achismo.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const EcossistemaSection = () => {
  return (
    <section id="escopo" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-24"
      >
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-80">
          O QUE ESTÁ INCLUÍDO
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          Uma parceria que mantém <br className="hidden sm:block" />
          o <span className="text-primary">Materna Forte vivo</span>.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          A mensalidade cobre toda a estrutura de continuidade, evolução e suporte.
          Sem surpresas no orçamento e sem depender de demandas emergenciais.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative rounded-[1.5rem] glass p-8 transition-colors duration-200 hover-beam"
          >
            <div className="relative mb-7 flex items-center">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent ring-1 ring-inset ring-primary/20 flex items-center justify-center shadow-[0_0_20px_-4px_hsl(var(--primary)/0.35)]">
                <pillar.icon
                  className="w-[22px] h-[22px] text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <div className="absolute left-16 top-1/2 -translate-y-1/2 h-px w-10 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-tight">
              {pillar.title}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/85 transition-colors duration-200">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
