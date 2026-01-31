import type { Metadata } from "next";

/**
 * Site-wide SEO constants
 */
export const SITE_CONFIG = {
  name: "Virtec Instruments Inc.",
  shortName: "Virtec",
  description: "Precision measurement and control solutions for HVAC, water utilities, and industrial applications. Flow meters, heat meters, VSDs, and IAQ sensors.",
  url: "https://virtec.us",
  ogImage: "/virtec-logo.png", // Default OG image
  keywords: [
    "flow meters",
    "heat meters",
    "VSD",
    "variable speed drives",
    "HVAC",
    "water utilities",
    "ultrasonic flow meter",
    "electromagnetic flow meter",
    "IAQ sensors",
    "indoor air quality",
    "district energy",
    "water measurement",
    "thermal energy measurement",
  ],
};

/**
 * Generate full URL from a path
 */
export function getAbsoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate default Open Graph image URL
 */
export function getOgImageUrl(imagePath?: string): string {
  if (imagePath) {
    return getAbsoluteUrl(imagePath);
  }
  return getAbsoluteUrl(SITE_CONFIG.ogImage);
}

/**
 * Generate base metadata with Open Graph and Twitter Cards
 */
export function generateBaseMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
  noindex = false,
  nofollow = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  const url = getAbsoluteUrl(path);
  const ogImage = getOgImageUrl(image);

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords || SITE_CONFIG.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return metadata;
}

/**
 * Generate Organization structured data (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: getAbsoluteUrl("/virtec-logo.png"),
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@virtec.us",
      contactType: "Sales",
    },
  };
}

/**
 * Generate WebSite structured data (JSON-LD) with site search
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList structured data (JSON-LD)
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.url),
    })),
  };
}

/**
 * Generate Product structured data (JSON-LD)
 */
export function generateProductSchema({
  name,
  description,
  image,
  brand = SITE_CONFIG.name,
  category,
  offers,
}: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  category?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
  };

  if (image) {
    schema.image = getAbsoluteUrl(image);
  }

  if (category) {
    schema.category = category;
  }

  if (offers) {
    schema.offers = {
      "@type": "Offer",
      ...offers,
    };
  }

  return schema;
}

/**
 * Generate Service structured data (JSON-LD)
 */
export function generateServiceSchema({
  name,
  description,
  provider = SITE_CONFIG.name,
  areaServed = "Worldwide",
}: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
  };
}
