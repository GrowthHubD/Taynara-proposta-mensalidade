import { Check, LineChart, Rocket } from "lucide-react";
import { motion } from "framer-motion";

type Tab = {
  label: string;
  icon: typeof LineChart;
  title: string;
  desc: string;
  items: string[];
  mockup: JSX.Element;
};

const MockupFrame = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden relative">
    <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.04] backdrop-blur-md">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
      </div>
      <div className="flex-1 text-center">
        <span className="text-[10px] text-foreground/60 font-mono">{slug}</span>
      </div>
    </div>
    <div className="p-6 space-y-4 bg-black/20">{children}</div>
  </div>
);

const DashboardMockup = () => (
  <MockupFrame slug="materna-forte/dashboard">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-bold text-foreground/60 tracking-widest uppercase">
        Visão Geral · Mães Ativas
      </span>
      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] text-primary font-bold tracking-tight">TEMPO REAL</span>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="glass p-4 rounded-2xl border-l-2 border-l-primary"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
          Mães ativas hoje
        </span>
        <span className="text-[9px] text-foreground/60 font-mono">últimas 24h</span>
      </div>
      <p className="text-3xl text-foreground font-bold tracking-tight">248</p>
    </motion.div>

    {[
      { label: "Engajamento semanal", value: "86%" },
      { label: "Retenção 30 dias", value: "72%" },
    ].map((row, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 + i * 0.15 }}
        className="glass p-4 rounded-2xl space-y-2"
      >
        <div className="flex justify-between items-end">
          <div className="text-xs text-foreground/70">{row.label}</div>
          <div className="text-xs font-bold text-primary">{row.value}</div>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: row.value }}
            transition={{ duration: 1, delay: 0.7 + i * 0.2 }}
            className="h-full bg-primary"
          />
        </div>
      </motion.div>
    ))}

    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
      {[
        { val: "+32", label: "Novos cadastros / 7d" },
        { val: "18", label: "Aulas acessadas / dia" },
        { val: "94%", label: "Uptime do sistema" },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="text-center p-3 rounded-2xl bg-white/5 border border-white/5"
        >
          <div className="text-xl font-bold text-primary">{stat.val}</div>
          <div className="text-[9px] text-foreground/60 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </MockupFrame>
);

const RoadmapMockup = () => {
  const steps = [
    { day: "Dia 1 ao 5", label: "Discovery & priorização", status: "done" },
    { day: "Dia 6 ao 20", label: "Desenvolvimento & revisões", status: "active" },
    { day: "Dia 21 ao 27", label: "Testes & homologação", status: "idle" },
    { day: "Dia 28 ao 30", label: "Deploy em produção", status: "idle" },
  ] as const;

  return (
    <MockupFrame slug="materna-forte/nova-funcionalidade">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-foreground/60 tracking-widest uppercase">
          Ciclo de entrega · 30 dias
        </span>
        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] text-primary font-bold tracking-tight">EM CURSO</span>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className={`glass p-4 rounded-2xl flex items-center gap-4 ${
              step.status === "active" ? "border-primary/40" : "border-white/5"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${
                step.status === "done"
                  ? "bg-primary/20 border-primary/40"
                  : step.status === "active"
                  ? "bg-primary/10 border-primary/50 animate-pulse-glow"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {step.status === "done" ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <span className="text-[10px] text-foreground/70 font-bold">{i + 1}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold tracking-widest text-primary uppercase">
                {step.day}
              </div>
              <div className="text-sm text-foreground/85 mt-0.5">{step.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
        <div className="glass p-4 rounded-2xl text-center">
          <div className="text-2xl font-bold text-primary tracking-tight">30 dias</div>
          <div className="text-[9px] text-foreground/60 uppercase font-bold tracking-widest">
            Prazo máximo
          </div>
        </div>
        <div className="glass p-4 rounded-2xl text-center">
          <div className="text-2xl font-bold text-primary tracking-tight">Backlog</div>
          <div className="text-[9px] text-foreground/60 uppercase font-bold tracking-widest">
            Priorizado com você
          </div>
        </div>
      </div>
    </MockupFrame>
  );
};

const tabs: Tab[] = [
  {
    label: "Dashboard em tempo real",
    icon: LineChart,
    title: "O pulso do Materna Forte na palma da sua mão.",
    desc: "Um painel dedicado conectado direto ao banco de dados. Veja quem está ativa, como está o engajamento com o conteúdo e onde estão as oportunidades de crescimento, sem depender de relatórios manuais.",
    items: [
      "Mães ativas em tempo real",
      "Engajamento e retenção",
      "Novos cadastros por período",
      "Insights automáticos de crescimento",
    ],
    mockup: <DashboardMockup />,
  },
  {
    label: "Novas funcionalidades sob demanda",
    icon: Rocket,
    title: "Da ideia ao ar em até 30 dias.",
    desc: "Toda demanda de nova funcionalidade, seja módulo de aulas, fisioterapia pélvica, treinos em grupo ou qualquer outra, entra no ciclo de entrega com prazo claro. Nada fica parado esperando orçamento avulso.",
    items: [
      "Backlog priorizado junto com você",
      "Discovery, dev, QA e deploy",
      "Prazo máximo de 30 dias",
      "Entregas contínuas, sem custos extras",
    ],
    mockup: <RoadmapMockup />,
  },
];

export const FeatureTabsSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto space-y-32 sm:space-y-48">
      {tabs.map((tab, i) => (
        <div key={i} className="grid md:grid-cols-2 gap-12 sm:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={i % 2 === 1 ? "md:order-2" : ""}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center border border-primary/30">
                <tab.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">
                {tab.label}
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              {tab.title}
            </h3>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed mb-10">
              {tab.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {tab.items.map((item, j) => (
                <div key={j} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-primary/15 group-hover:border-primary/50">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80 transition-colors duration-200 group-hover:text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={i % 2 === 1 ? "md:order-1" : ""}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: "var(--gradient-glow)", filter: "blur(60px)" }}
              />
              <div className="relative">{tab.mockup}</div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};
