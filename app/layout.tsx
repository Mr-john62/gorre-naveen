import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://gorre-naveen.vercel.app"),

  title: {
    default: "Gorre Naveen | Creative Director & Video Editor",
    template: "%s | Gorre Naveen",
  },

  description:
    "Portfolio of Gorre Naveen, Creative Director, Video Editor, Brand Strategist and AI Automation Specialist.",

  keywords: [
    "Gorre Naveen",
    "Creative Director",
    "Video Editor",
    "Brand Strategist",
    "YouTube SEO",
    "Content Creator",
    "Portfolio",
    "Next.js Portfolio",
    "AI Automation",
  ],

  authors: [{ name: "Gorre Naveen" }],
  creator: "Gorre Naveen",
  publisher: "Gorre Naveen",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Gorre Naveen | Creative Director & Video Editor",
    description:
      "Creative Director • Video Editor • Brand Strategist • AI Automation Specialist",
    url: "https://gorre-naveen.vercel.app",
    siteName: "Gorre Naveen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gorre Naveen Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gorre Naveen | Creative Director",
    description:
      "Creative Director • Video Editor • Brand Strategist",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}