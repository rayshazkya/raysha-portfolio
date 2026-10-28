import type { Metadata } from "next";
import {
  Fraunces,
  Plus_Jakarta_Sans,
  Caveat,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayshatazkiya.vercel.app"),
  title: "Raysha Tazkiya Rahim — Creative Portfolio | UI/UX, Web & Data Science",
  description:
    "Personal portfolio of Raysha Tazkiya Rahim (Kiya), an Informatics undergraduate at Universitas Syiah Kuala (USK) with hands-on experience in UI/UX design, full-stack web development, data science & NLP, and digital content creation.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  keywords: [
    "Raysha Tazkiya Rahim",
    "Kiya Portfolio",
    "Universitas Syiah Kuala",
    "Informatics USK",
    "HMIF USK KOMINKRAF",
    "UI/UX Designer Banda Aceh",
    "Full-Stack Web Developer Indonesia",
    "QGIS Spatial Data Analyst",
    "SICADU Diskominfotik Banda Aceh",
    "FoodWaste",
    "SOMASI",
    "Civitas Quest",
  ],
  authors: [{ name: "Raysha Tazkiya Rahim" }],
  openGraph: {
    title: "Raysha Tazkiya Rahim — Creative & Software Portfolio",
    description:
      "Informatics Undergraduate at Universitas Syiah Kuala — UI/UX Design, Full-Stack Web Development, Spatial Data Analysis (QGIS) & Digital Content Creation.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raysha Tazkiya Rahim Creative Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raysha Tazkiya Rahim — Creative & Software Portfolio",
    description:
      "Informatics Undergraduate at Universitas Syiah Kuala — UI/UX Design, Full-Stack Web Development, Spatial Data Analysis (QGIS) & Digital Content Creation.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakarta.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased selection:bg-blush selection:text-rose-berry relative">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
