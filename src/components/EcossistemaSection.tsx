import {
  Clock,
  CalendarCheck,
  RotateCcw,
  BellRing,
  PieChart,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    desc: "A clínica nunca fecha digitalmente. Respostas instantâneas, empáticas e humanizadas a qualquer hora do dia ou da noite.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Automático",
    desc: "A IA qualifica o paciente e realiza o agendamento diretamente na agenda da doutora, sem intervenção manual.",
  },
  {
    icon: RotateCcw,
    title: "Follow-up Ativo",
    desc: "Reengaja automaticamente leads que pararam de responder, recuperando pacientes que seriam perdidos.",
  },
  {
    icon: BellRing,
    title: "Lembretes Inteligentes",
    desc: "Reduza o no-show enviando lembretes automáticos e confirmando a presença dos pacientes via WhatsApp.",
  },
  {
    icon: PieChart,
    title: "Dashboard do Marketing",
    desc: "Acompanhamento em tempo real do volume de leads gerados, taxas de resposta e ROI detalhado nas conversões.",
  },
  {
    icon: Activity,
    title: "Dashboard da Clínica",
    desc: "Uma visão panorâmica para a doutora: gestão de pacientes, status operacional e previsibilidade de agenda.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const EcossistemaSection = () => {
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
          INFRAESTRUTURA COMPLETA
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          Ecossistema de Alta Fidelização
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          Nossa tecnologia gerencia todo o fluxo do paciente — da primeira mensagem à porta do consultório.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative rounded-[1.5rem] glass p-8 hover:bg-white/[0.08] transition-all duration-500 hover:shadow-premium"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-tight">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light group-hover:text-foreground/80 transition-colors">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
