import Navbar from "@/components/Navbar";
import WelcomeBanner from "@/components/WelcomeBanner";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import VisionSection from "@/components/VisionSection";
import SettingTrendsSection from "@/components/SettingTrendsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <WelcomeBanner />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <VisionSection />
      <SettingTrendsSection />
      <SolutionsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
