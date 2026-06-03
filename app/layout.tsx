import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hritik Raj — Backend Engineer",
  description:
    "Backend Developer specializing in Java, Spring Boot, Microservices, and System Design. Active open-source contributor to NASA JPF, Linux Foundation, and SW360.",
  keywords: [
    "Hritik Raj",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Microservices",
    "Open Source",
    "NASA JPF",
    "Linux Foundation",
    "AKGEC",
  ],
  openGraph: {
    title: "Hritik Raj — Backend Engineer",
    description:
      "Backend Developer specializing in Java, Spring Boot & Microservices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${garamond.variable} ${inter.variable} bg-obsidian text-parchment antialiased overflow-x-hidden`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
