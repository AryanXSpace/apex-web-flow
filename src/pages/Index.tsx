
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSlider from "@/components/PortfolioSlider";
import FeaturesSection from "@/components/FeaturesSection";
import HeroDesignSection from "@/components/HeroDesignSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FixedCTA from "@/components/FixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PortfolioSlider />
      <FeaturesSection />
      <HeroDesignSection />
      <ServicesSection />
      <Footer />
      <FixedCTA />
    </div>
  );
};

export default Index;
