import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  contractLabel: string;
  priceMonthly: number;
  contractMonths: number;
  descriptor: string;
  highlight?: boolean;
  badge?: string;
  ctaLabel: string;
  note: string;
};

const BASE_PRICE = 500;

const plans: Plan[] = [
  {
    contractLabel: "Sem fidelidade",
    priceMonthly: 500,
    contractMonths: 1,
    descriptor:
      "Ideal para começar sem compromisso de prazo. Você pode migrar para um plano com desconto quando quiser.",
    ctaLabel: "Quero começar sem contrato",
    note: "Cancelamento livre a qualquer momento, com aviso prévio de 30 dias.",
  },
  {
    contractLabel: "Contrato 3 meses",
    priceMonthly: 450,
    contractMonths: 3,
    descriptor: "Um trimestre de continuidade com o preço mensal reduzido.",
    ctaLabel: "Assinar plano trimestral",
    note: "Pagamento mensal · compromisso de 3 meses.",
  },
  {
    contractLabel: "Contrato 6 meses",
    priceMonthly: 400,
    contractMonths: 6,
    descriptor: "Melhor custo benefício. Ideal para planejar o roadmap do semestre.",
    highlight: true,
    badge: "Melhor valor",
    ctaLabel: "Assinar plano semestral",
    note: "Pagamento mensal · compromisso de 6 meses.",
  },
];

const includedEverywhere = [
  "Sistema sempre ativo",
  "Novas funcionalidades em até 30 dias",
  "Dashboard em tempo real",
  "Suporte em horário comercial",
  "Atualizações contínuas por feedback",
];

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 0 });

export const PrecosSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-80">
          PLANOS DE MANUTENÇÃO
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          Escolha a <span className="text-gradient-primary">continuidade</span>
          <br className="hidden sm:block" /> que combina com você.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Todos os planos cobrem exatamente o mesmo escopo de manutenção.
          O contrato mais longo reduz o preço mensal e recompensa quem planeja com a gente.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 sm:mb-16"
      >
        <div className="glass rounded-[2rem] p-6 sm:p-8 border border-white/10">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4 text-center sm:text-left">
            INCLUSO EM TODOS OS PLANOS
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {includedEverywhere.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((plan, i) => {
          const totalSavings = (BASE_PRICE - plan.priceMonthly) * plan.contractMonths;
          const hasSavings = totalSavings > 0;

          return (
            <motion.article
              key={plan.contractLabel}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-[2rem] p-8 transition-colors duration-200 ${
                plan.highlight
                  ? "glass border border-primary/40 shadow-premium hover:border-primary/60"
                  : "glass-dark border border-white/5 hover:border-primary/30"
              }`}
              style={
                plan.highlight
                  ? {
                      backgroundImage:
                        "radial-gradient(ellipse at top right, hsl(var(--primary) / 0.14) 0%, transparent 60%)",
                    }
                  : undefined
              }
            >
              {plan.highlight && plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-glow">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="relative flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-[10px] font-bold tracking-[0.25em] uppercase ${
                      plan.highlight ? "text-primary" : "text-foreground/60"
                    }`}
                  >
                    {plan.contractLabel}
                  </span>
                </div>

                <div className="mb-3 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-foreground/60 mr-1">R$</span>
                  <span className="text-5xl sm:text-6xl font-heading font-bold text-foreground tracking-tighter">
                    {plan.priceMonthly}
                  </span>
                  <span className="text-base font-normal text-foreground/60 ml-1">/mês</span>
                </div>

                {hasSavings ? (
                  <div className="mb-6 inline-flex self-start items-baseline gap-2 rounded-full bg-primary/10 border border-primary/25 px-3 py-1.5">
                    <span className="text-xs font-bold text-primary tracking-wide">
                      Você economiza R$ {formatBRL(totalSavings)}
                    </span>
                    <span className="text-[10px] text-foreground/60">
                      em {plan.contractMonths} meses
                    </span>
                  </div>
                ) : (
                  <div className="mb-6 inline-flex self-start items-center rounded-full border border-white/10 px-3 py-1.5">
                    <span className="text-xs text-foreground/60 tracking-wide">
                      Preço base de referência
                    </span>
                  </div>
                )}

                <p className="text-sm text-foreground/75 leading-relaxed mb-8">
                  {plan.descriptor}
                </p>

                <div className="mt-auto space-y-4">
                  <button
                    type="button"
                    className={`group/btn relative w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-4 min-h-[48px] rounded-full transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground shadow-glow hover:bg-primary-glow"
                        : "bg-white/5 text-foreground border border-white/10 hover:bg-primary/15 hover:border-primary/40"
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>

                  <p className="text-[11px] text-foreground/55 leading-relaxed text-center">
                    {plan.note}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-[12px] text-foreground/55 text-center max-w-2xl mx-auto mt-12 leading-relaxed"
      >
        Valores mensais · pagamento via boleto, Pix ou cartão. Emissão de nota fiscal
        garantida em todos os planos. Este plano é exclusivo para a manutenção contínua
        do Materna Forte.
      </motion.p>
    </section>
  );
};
