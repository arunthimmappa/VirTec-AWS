import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailPage from "@/components/product-components/ProductDetailPage";
import { getProductBySlug, getAllProductSlugs } from "@/lib/products";
import { generateBaseMetadata, generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo";

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
  const categoryName = product.category[0] === "flow" ? "Flow Meter" :
                       product.category[0] === "heat" ? "Heat Meter" :
                       product.category[0] === "vsd" ? "Variable Speed Drive" :
                       product.category[0] === "iaq" ? "IAQ Sensor" : "Product";

  return generateBaseMetadata({
    title: `${product.title} - ${product.subtitle} | Virtec`,
    description: product.description,
    path: url,
    image: product.image,
    keywords: [
      product.title,
      product.subtitle,
      categoryName,
      ...product.category.map(cat => cat === "flow" ? "flow meter" : cat === "heat" ? "heat meter" : cat === "vsd" ? "VSD" : cat === "iaq" ? "IAQ sensor" : cat),
      "Virtec products",
      "precision measurement",
    ],
  });
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

  // Build Product Schema for SEO
  const categoryName = product.category[0] === "flow" ? "Flow Meter" :
                       product.category[0] === "heat" ? "Heat Meter" :
                       product.category[0] === "vsd" ? "Variable Speed Drive" :
                       product.category[0] === "iaq" ? "IAQ Sensor" : "Product";

  const productSchema = generateProductSchema({
    name: `${product.title} - ${product.subtitle}`,
    description: product.description,
    image: product.image,
    category: categoryName,
  });

  // Build Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.title, url: `/products/${slug}` },
  ]);

  return (
    <>
      {/* Inject Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
        <ProductDetailPage product={product} />
        <Footer />
      </div>
    </>
  );
}
