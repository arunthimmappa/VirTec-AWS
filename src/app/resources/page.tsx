import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resource-components/ResourcesHero";
import ResourcesAccordion from "@/components/resource-components/ResourcesAccordion";

export const metadata: Metadata = {
  title: "Resources & Documentation | Virtec",
  description: "Access product catalogs, user manuals, technical drawings, and reference documents for Virtec flow meters, heat meters, VSDs, and IAQ sensors.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <ResourcesHero />
      <ResourcesAccordion />
      <Footer />
    </div>
  );
}
