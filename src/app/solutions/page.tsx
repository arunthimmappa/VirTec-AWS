import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solution-components/SolutionsHero";
import SolutionsList from "@/components/solution-components/SolutionsList";

export const metadata: Metadata = {
  title: "Solutions | Virtec",
  description: "Comprehensive solutions for district energy, HVAC optimization, water utilities, and industrial IoT applications. Advanced flow measurement, intelligent control systems, and data analytics.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <SolutionsHero />
      <SolutionsList />
      <Footer />
    </div>
  );
}
