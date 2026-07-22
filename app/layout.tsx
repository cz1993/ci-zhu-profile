import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "Ci Zhu — Data + AI Operator",
      template: "%s — Ci Zhu",
    },
    description:
      "Ci Zhu is a data and AI leader building governed platforms, applied AI systems, and open-source tools from Toronto.",
    openGraph: {
      title: "Ci Zhu — Build systems. Ship intelligence.",
      description: "Data + AI operator. Enterprise builder. Open-source founder.",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Ci Zhu — Build systems. Ship intelligence." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ci Zhu — Build systems. Ship intelligence.",
      description: "Data + AI operator. Enterprise builder. Open-source founder.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
