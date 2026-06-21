import { Hero } from '@/components/sections/Hero';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { SystemSection } from '@/components/sections/SystemSection';
import { RoutineSection } from '@/components/sections/RoutineSection';
import { ScienceSection } from '@/components/sections/ScienceSection';
import { CompareSection } from '@/components/sections/CompareSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { WaitlistSection } from '@/components/sections/WaitlistSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <SystemSection />
      <RoutineSection />
      <ScienceSection />
      <CompareSection />
      <PricingSection />
      <WaitlistSection />
    </main>
  );
}
