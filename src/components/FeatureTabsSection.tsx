import { Check, CalendarCheck, Clock, MessageSquare, Bot, User } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  {
    label: "Agendamento IA",
    icon: CalendarCheck,
    title: "Pacientes na Agenda sem Esforço",
    desc: "A inteligência artificial gerencia as marcações, qualifica o interesse e insere a consulta direto na agenda da clínica. Sua recepcionista só acompanha os resultados.",
    items: [
      "Integração com Calendário",
      "Qualificação de Especialidade",
      "Triagem 24 horas por dia",
      "Redução de tempo administrativo",
    ],
    mockup: (
      <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden relative group">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] text-muted-foreground font-mono italic">ia.clinica/agendamento</span>
          </div>
        </div>

        <div className="p-6 space-y-4 bg-black/20">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3 justify-end"
            >
              <div className="bg-primary/80 px-4 py-2.5 rounded-2xl rounded-tr-none shadow-glow">
                <p className="text-sm text-white font-medium">Gostaria de marcar uma consulta, vocês têm vaga para amanhã de tarde?</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-white/50" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="glass px-4 py-2.5 rounded-2xl rounded-tl-none">
                <p className="text-sm text-foreground/90 leading-relaxed font-light">Olá! Temos um horário amanhã às 15:30. Já deixei pré-reservado, posso confirmar para o senhor?</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
            {[
              { val: "24/7", label: "Disponível" },
              { val: "< 1m", label: "Resposta" },
              { val: "100%", label: "Agendado" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-primary/10 transition-colors duration-500">
                <div className="text-xl font-bold text-primary">{stat.val}</div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Follow-up & Lembretes",
    icon: Clock,
    title: "Combate Ativo contra Faltas",
    desc: "Mais do que só agendar, a IA avisa os pacientes sobre as consultas, pede confirmação e recupera ativamente o contato de pacientes que pararam de responder.",
    items: [
      "Mensagens de confirmação",
      "Redução drástica de no-shows",
      "Recuperação de contatos perdidos",
      "Tom de voz humano e empático",
    ],
    mockup: (
      <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden relative group">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
           <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/30"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] text-muted-foreground font-mono italic">ia.clinica/lembretes</span>
          </div>
        </div>

        <div className="p-6 space-y-5 bg-black/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Automações Ativas</span>
              <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-[10px] text-green-400 font-bold tracking-tight">RODANDO</span>
              </div>
            </div>

            {[
              { num: "Confirm. Consulta (Hoje)", status: "Excelente", h: "98%", w: "w-[98%]" },
              { num: "Reengajamento Diário", status: "Aquecendo", h: "45%", w: "w-[45%]" },
            ].map((chip, i) => (
              <div key={i} className="glass p-4 rounded-2xl space-y-2">
                <div className="flex justify-between items-end">
                  <div className="text-xs font-mono text-foreground/70">{chip.num}</div>
                  <div className="text-xs font-bold text-primary">{chip.h}</div>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: chip.h }}
                    transition={{ duration: 1, delay: 0.5 + i*0.2 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
             <div className="glass p-4 rounded-2xl text-center">
               <div className="text-2xl font-bold text-primary tracking-tight">-75%</div>
               <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Faltas (No-Show)</div>
             </div>
             <div className="glass p-4 rounded-2xl text-center">
               <div className="text-2xl font-bold text-primary tracking-tight">+30%</div>
               <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Retenção</div>
             </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Visibilidade Integrada",
    icon: MessageSquare,
    title: "Métricas na Palma da Mão",
    desc: "Acesse dashboards dedicados tanto para o time de marketing (controle de leads gerados) quanto para a doutora/clínica (fluxo de pacientes).",
    items: [
      "Painel de performance do MKT",
      "Visão de agendamentos da Doutora",
      "Geração de relatórios diários",
      "Insights para aumento de taxa de conversão",
    ],
    mockup: (
      <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden relative group">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/30"></div>
          </div>
          <div className="flex-1 text-center font-mono text-[10px] text-muted-foreground italic">ia.clinica/dashboard</div>
        </div>

        <div className="p-6 space-y-4 bg-black/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Visão Médica Diária</span>
            <div className="px-3 py-1 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold border border-primary/30">HOJE</div>
          </div>

          <div className="space-y-4">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="glass p-4 rounded-2xl border-l-2 border-l-primary"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-primary uppercase">Consultas Agendadas pela IA</span>
                <span className="text-[9px] text-muted-foreground font-mono">Total</span>
              </div>
              <p className="text-3xl text-foreground font-bold tracking-tight">8</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="glass p-4 rounded-2xl opacity-80"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-muted-foreground uppercase">Confirmações</span>
                <span className="text-[9px] text-muted-foreground font-mono">Via Chat</span>
              </div>
              <p className="text-xl text-foreground/80 font-semibold tracking-tight">6 Confirmados</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
             <div className="glass p-4 rounded-2xl text-center flex flex-col justify-center gap-1">
               <div className="text-xl font-bold text-primary tracking-tight">45</div>
               <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Leads SMS/Ads</div>
             </div>
             <div className="glass p-4 rounded-2xl text-center flex flex-col justify-center gap-1">
               <div className="text-xl font-bold text-primary tracking-tight">&gt;20%</div>
               <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Tx Conversão Méd.</div>
             </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const FeatureTabsSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto space-y-32 sm:space-y-48">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`grid md:grid-cols-2 gap-12 sm:gap-24 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
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
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary/80">
                {tab.label}
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              {tab.title}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              {tab.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {tab.items.map((item, j) => (
                <div key={j} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80 font-light group-hover:text-foreground transition-colors">{item}</span>
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
              <div className="relative">
                {tab.mockup}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};
