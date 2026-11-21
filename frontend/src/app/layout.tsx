import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteTitle = "Massage Therapy by Olivia-Bennett";
const siteDescription =
  "Professional therapeutic massage services and appointment bookings.";

// Vercel provides VERCEL_URL at build time; set NEXT_PUBLIC_SITE_URL for a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/brooke-about-icon.png", type: "image/png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brooke-about-og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/brooke-about-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
