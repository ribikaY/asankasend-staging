import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import LazySection from "@/components/shared/LazySection";

const FloatingOrb = dynamic(() => import("@/components/shared/FloatingOrb"));
const WhyUs = dynamic(() => import("@/components/sections/WhyUs"));
const Features = dynamic(() => import("@/components/sections/Features"));
const Download = dynamic(() => import("@/components/sections/Download"));
const WhereItWorks = dynamic(() => import("@/components/sections/WhereItWorks"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const Footer = dynamic(() => import("@/components/shared/Footer"));

export default function Home() {
  return (
    <main className="font-sans overflow-hidden relative z-10">
      <div className="bioluminescent-bg" />
      <LazySection minHeight="0" rootMargin="0px">
        <FloatingOrb />
      </LazySection>
      <Hero />
      <LazySection minHeight="500px">
        <WhyUs />
      </LazySection>
      <LazySection minHeight="600px">
        <Features />
      </LazySection>
      <LazySection minHeight="400px">
        <Download />
      </LazySection>
      <LazySection minHeight="400px">
        <WhereItWorks />
      </LazySection>
      <LazySection minHeight="300px">
        <FAQ />
      </LazySection>
      <LazySection minHeight="500px">
        <HowItWorks />
      </LazySection>
      <LazySection minHeight="300px">
        <Footer />
      </LazySection>
    </main>
  );
}
