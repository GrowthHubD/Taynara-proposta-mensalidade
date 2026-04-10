import { Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const MomentoAtualSection = () => {
  return (
    <section id="momento-atual" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4">
          VISÃO DE ESCALA
        </p>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
          O Custo de Não Automatizar
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          O crescimento de uma clínica de alto nível esbarra no tempo da equipe. Veja a diferença entre a escala humana e a automação inteligente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* O Desafio */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121212] border border-white/5 rounded-3xl p-8 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#1A1515] flex items-center justify-center border border-destructive/20">
              <Target className="w-5 h-5 text-destructive/80" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground tracking-tight">
              O Teto da Escala Manual
            </h3>
          </div>
          <ul className="space-y-6">
            {[
              "O volume de atendimentos da clínica fica limitado ao tempo e energia da equipe de recepção.",
              "Leads gerados no marketing de noite ou fins de semana esfriam esperando o horário comercial.",
              "Agendamentos manuais competem com a atenção que os pacientes presenciais exigem.",
              "Falta de um banco de dados instantâneo sobre a origem de cada paciente para otimizar campanhas."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive/80 flex-shrink-0" />
                <span className="text-sm sm:text-[15px] text-muted-foreground/90 font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* A Solução */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#121212] border border-white/5 rounded-3xl p-8 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#15131A] flex items-center justify-center border border-primary/20">
              <Lightbulb className="w-5 h-5 text-primary/80" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground tracking-tight">
              A Vanguarda Tecnológica
            </h3>
          </div>
          <ul className="space-y-6">
            {[
              "A IA resolve o agendamento em segundos, permitindo escalar os pacientes sem inchar a folha de pagamento.",
              "Atendimento imediato e humanizado 24 horas por dia, 7 dias por semana, convertendo leads na hora do interesse.",
              "O tempo humano da recepção é preservado 100% para o encantamento do paciente no consultório.",
              "Dashboards nativos mostram com exatidão o ROI de cada real investido no tráfego da doutora."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm sm:text-[15px] text-muted-foreground/90 font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
