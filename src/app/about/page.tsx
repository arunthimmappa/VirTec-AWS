import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about-components/AboutHero";
import CompanyStorySection from "@/components/about-components/CompanyStorySection";
import VisionMissionSection from "@/components/about-components/VisionMissionSection";
import CertificationsSection from "@/components/about-components/CertificationsSection";
import PartnersMarketsSection from "@/components/about-components/PartnersMarketsSection";
import TeamSection from "@/components/about-components/TeamSection";

export const metadata: Metadata = {
  title: "About Us | Virtec",
  description: "Learn about Virtec Instruments Inc., a global leader in Heat and Flow Management Solutions for HVAC and Water applications. Discover our vision, mission, and commitment to excellence.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <CompanyStorySection />
      <VisionMissionSection />
      <CertificationsSection />
      <PartnersMarketsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
