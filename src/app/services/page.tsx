import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/service-components/ServicesHero";
import DataAcquisitionSection from "@/components/service-components/DataAcquisitionSection";
import TurnkeyContractSection from "@/components/service-components/TurnkeyContractSection";
import InstallationSection from "@/components/service-components/InstallationSection";
import ServicesCardsSection from "@/components/service-components/ServicesCardsSection";

export const metadata: Metadata = {
  title: "Services | Virtec",
  description: "Comprehensive services for smart energy and water flow measurement solutions. AMR systems, turnkey contracts, installation, maintenance, training, and more.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <DataAcquisitionSection />
      <TurnkeyContractSection />
      <InstallationSection />
      <ServicesCardsSection />
      <Footer />
    </div>
  );
}
