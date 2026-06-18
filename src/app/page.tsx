import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/Faq/FaqSection";
import { Pricing } from "@/components/sections/Pricing/Pricing";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { features } from "@/lib/data/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {features.map((feature) => (
          <FeatureSection key={feature.id} feature={feature} />
        ))}
        <CtaBand />
        <FaqSection />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
