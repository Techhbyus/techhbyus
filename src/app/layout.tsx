import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import GSAPAnimations from "@/components/animation/GSAPAnimations";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techhbyus.com"),
  title: "Techhbyus | We build website - you grow your business",
  description: "Techhbyus builds modern websites, service platforms, and SEO foundations for growing businesses.",
  openGraph: {
    siteName: "Techhbyus",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <GSAPAnimations />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
