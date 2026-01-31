import { Metadata } from "next";
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
import { generateBaseMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generateBaseMetadata({
  title: "Virtec - Precision Flow Meters, Heat Meters & HVAC Solutions",
  description: "Leading manufacturer of precision flow meters, heat meters, VSDs, and IAQ sensors for HVAC, water utilities, and industrial applications. Discover our comprehensive range of measurement and control solutions.",
  path: "/",
  keywords: [
    "flow meters",
    "heat meters",
    "VSD variable speed drives",
    "HVAC solutions",
    "ultrasonic flow meter",
    "electromagnetic flow meter",
    "water measurement",
    "thermal energy measurement",
    "IAQ sensors",
    "district energy",
    "HVAC optimization",
  ],
});

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
    </>
  );
}
