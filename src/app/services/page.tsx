import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/service-components/ServicesHero";
import DataAcquisitionSection from "@/components/service-components/DataAcquisitionSection";
import TurnkeyContractSection from "@/components/service-components/TurnkeyContractSection";
import InstallationSection from "@/components/service-components/InstallationSection";
import ServicesCardsSection from "@/components/service-components/ServicesCardsSection";
import { generateBaseMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generateBaseMetadata({
  title: "Services | Virtec - Installation, Maintenance & Support",
  description: "Comprehensive services for smart energy and water flow measurement solutions. AMR systems, turnkey contracts, installation, maintenance, training, and more.",
  path: "/services",
  keywords: [
    "flow meter installation",
    "heat meter services",
    "HVAC maintenance",
    "AMR systems",
    "turnkey contracts",
    "flow meter calibration",
    "technical support",
  ],
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Flow Meter and Heat Meter Services",
    description: "Comprehensive installation, maintenance, calibration, and support services for flow meters, heat meters, and HVAC systems.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="relative min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <DataAcquisitionSection />
      <TurnkeyContractSection />
      <InstallationSection />
      <ServicesCardsSection />
      <Footer />
      </div>
    </>
  );
}
