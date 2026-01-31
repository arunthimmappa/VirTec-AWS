import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionDetailPage from "@/components/solution-components/SolutionDetailPage";
import { getSolutionBySlug, getAllSolutionSlugs } from "@/lib/solutions";
import { generateBaseMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";

interface PageParams {
  slug: string;
}

interface GenerateMetadataProps {
  params: Promise<PageParams>;
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Virtec",
    };
  }

  const url = `/solutions/${slug}`;

  return generateBaseMetadata({
    title: `${solution.title} - ${solution.subtitle} | Virtec`,
    description: solution.description,
    path: url,
    keywords: [
      solution.title,
      solution.subtitle,
      ...(solution.applications || []),
      "Virtec solutions",
      "energy management",
      "flow measurement solutions",
    ],
  });
}

export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return notFound();
  }

  // Build Service Schema for SEO
  const serviceSchema = generateServiceSchema({
    name: `${solution.title} - ${solution.subtitle}`,
    description: solution.description,
  });

  // Build Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: solution.title, url: `/solutions/${slug}` },
  ]);

  // Build FAQ Schema if available
  const faqSchema = solution.faqs && solution.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Inject Service Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Inject Breadcrumb Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Inject FAQ Schema for SEO */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="relative min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <Navbar />
        <SolutionDetailPage solution={solution} />
        <Footer />
      </div>
    </>
  );
}
