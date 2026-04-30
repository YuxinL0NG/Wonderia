import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      {/* AboutSection added in upcoming steps */}
    </main>
  );
}
