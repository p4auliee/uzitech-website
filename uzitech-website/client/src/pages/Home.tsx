/* UziTech Home Page — Void Intelligence Design
 * Assembles all sections in order with smooth scroll
 * Dark theme, electric blue/cyan accents, Syne + Outfit fonts
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050508" }}>
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
