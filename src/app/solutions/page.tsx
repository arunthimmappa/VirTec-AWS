import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solution-components/SolutionsHero";
import SolutionsList from "@/components/solution-components/SolutionsList";
import { generateBaseMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generateBaseMetadata({
  title: "Solutions | Virtec - District Energy, HVAC & Water Utilities",
  description: "Comprehensive solutions for district energy, HVAC optimization, water utilities, and industrial IoT applications. Advanced flow measurement, intelligent control systems, and data analytics for energy efficiency.",
  path: "/solutions",
  keywords: [
    "district energy solutions",
    "HVAC optimization",
    "water utility solutions",
    "industrial IoT",
    "energy management",
    "flow measurement solutions",
    "smart building solutions",
  ],
});

export default function SolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative min-h-screen bg-white">
      <Navbar />
      <SolutionsHero />
      <SolutionsList />
      <Footer />
      </div>
    </>
  );
}
