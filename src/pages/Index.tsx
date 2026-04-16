import {
  HeroSection,
  MarqueeTicker,
  EcossistemaSection,
  FeatureTabsSection,
  JornadaSection,
  PrecosSection,
  CTASection,
} from "@/modules/proposta";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <MarqueeTicker />
      <EcossistemaSection />
      <FeatureTabsSection />
      <JornadaSection />
      <MarqueeTicker reverse />
      <PrecosSection />
      <CTASection />
    </main>
  );
};

export default Index;
