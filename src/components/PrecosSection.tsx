import { Check } from "lucide-react";
import { motion } from "framer-motion";

const fase1Items = [
  "Acesso a Plataforma de Atendimento",
  "Integração do WhatsApp e Agenda",
  "Treinamento da IA para a sua Clínica",
  "Criação de Dashboards Personalizados",
  "Teste e validação do fluxo do Paciente",
];

const fase2Items = [
  "Manutenção dos Servidores e APIs",
  "Atualizações contínuas do sistema",
  "Melhorias contínuas na base de dados",
  "Suporte e acompanhamento 24h pela equipe",
  "Dashboard e Métricas sempre online",
];

export const PrecosSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-24"
      >
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">
          PROPOSTA COMERCIAL
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          Estrutura de Investimento
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Fase 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark p-8 sm:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
        >
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60 mb-8">
            PAGAMENTO ÚNICO
          </div>
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Implementação (Setup)
          </h3>
          <p className="text-base text-muted-foreground mb-10 font-light leading-relaxed">
            Engenharia, parametrização e entrega final da sua infraestrutura inteligênte.
          </p>

          <div className="mb-10">
            <div className="text-5xl font-heading font-bold text-foreground tracking-tighter">
              R$ 3.800
            </div>
            <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mt-2">Investimento Único</div>
          </div>

          <div className="space-y-8">
            <div className="h-px bg-white/10 w-full" />
            <ul className="space-y-4">
              {fase1Items.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-foreground/70 font-light hover:text-foreground transition-colors duration-300">
                  <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-[11px] text-primary/80 bg-primary/5 rounded-2xl p-4 border border-primary/10 font-medium">
              Apenas um pagamento para construir toda a inteligência da sua clínica.
            </div>
          </div>
        </motion.div>

        {/* Fase 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 sm:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden group shadow-premium"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-8">
              MENSALIDADE
            </div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4 tracking-tight">
              Manutenção Mensal
            </h3>
            <p className="text-base text-muted-foreground mb-10 font-light leading-relaxed">
              O plano mensal mantém toda a operação estável, atualizada e com melhorias contínuas.
            </p>

            <div className="mb-10">
               <div className="text-5xl font-heading font-bold text-foreground tracking-tighter">
                  R$ 800
                  <span className="text-lg font-normal text-muted-foreground ml-1">/mês</span>
                </div>
                <div className="text-[10px] font-bold tracking-widest text-primary uppercase mt-2">Recorrência Mensal</div>
            </div>

            <div className="space-y-8">
              <div className="h-px bg-primary/10 w-full" />

              <ul className="space-y-4">
                {fase2Items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-foreground/70 font-light hover:text-foreground transition-colors duration-300">
                    <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 bg-primary/10">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="text-[10px] text-muted-foreground/60 p-4 border border-white/5 rounded-2xl italic leading-relaxed">
                *O valor de manutenção assegura que os seus servidores não parem, garantindo segurança total dos dados dos pacientes.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
