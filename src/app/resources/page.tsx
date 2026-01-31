import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resource-components/ResourcesHero";
import ResourcesAccordion from "@/components/resource-components/ResourcesAccordion";
import { generateBaseMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generateBaseMetadata({
  title: "Resources & Documentation | Virtec",
  description: "Access product catalogs, user manuals, technical drawings, and reference documents for Virtec flow meters, heat meters, VSDs, and IAQ sensors.",
  path: "/resources",
  keywords: [
    "flow meter manuals",
    "heat meter documentation",
    "VSD user guides",
    "technical specifications",
    "product catalogs",
    "installation guides",
  ],
});

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative min-h-screen bg-white">
      <Navbar />
      <ResourcesHero />
      <ResourcesAccordion />
      <Footer />
      </div>
    </>
  );
}
