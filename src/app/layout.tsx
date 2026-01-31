import "./globals.css";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import { generateBaseMetadata, generateOrganizationSchema, generateWebSiteSchema, SITE_CONFIG } from "@/lib/seo";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...generateBaseMetadata({
    title: `${SITE_CONFIG.shortName} - ${SITE_CONFIG.description}`,
    description: SITE_CONFIG.description,
    path: "/",
  }),
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        className={`${openSans.variable} bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
