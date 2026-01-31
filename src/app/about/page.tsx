import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about-components/AboutHero";
import CompanyStorySection from "@/components/about-components/CompanyStorySection";
import VisionMissionSection from "@/components/about-components/VisionMissionSection";
import CertificationsSection from "@/components/about-components/CertificationsSection";
import PartnersMarketsSection from "@/components/about-components/PartnersMarketsSection";
import TeamSection from "@/components/about-components/TeamSection";
import { generateBaseMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generateBaseMetadata({
  title: "About Us | Virtec Instruments Inc.",
  description: "Learn about Virtec Instruments Inc., a global leader in Heat and Flow Management Solutions for HVAC and Water applications. Discover our vision, mission, and commitment to excellence.",
  path: "/about",
  keywords: [
    "Virtec Instruments",
    "about Virtec",
    "flow meter manufacturer",
    "heat meter company",
    "HVAC solutions provider",
    "water measurement solutions",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
    </>
  );
}
