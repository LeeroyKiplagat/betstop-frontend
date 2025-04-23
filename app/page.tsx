import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ProvidersSection } from "@/components/landing/providers-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ProvidersSection />
      </main>
      <Footer />
    </div>
  );
}
