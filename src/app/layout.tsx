import "./globals.css";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virtec",
  description: "Virtec - Precision measurement and control solutions",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
