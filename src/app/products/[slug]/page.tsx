import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailPage from "@/components/product-components/ProductDetailPage";
import { getProductBySlug, getAllProductSlugs } from "@/lib/products";

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
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Virtec",
    };
  }

  const url = `/products/${slug}`;

  return {
    title: `${product.title} - ${product.subtitle} | Virtec`,
    description: product.description,
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  // Build FAQ Schema for SEO
  const faqSchema = product.faqs && product.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
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
      {/* Inject FAQ Schema for SEO */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="relative min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <Navbar />
        <ProductDetailPage product={product} />
        <Footer />
      </div>
    </>
  );
}
