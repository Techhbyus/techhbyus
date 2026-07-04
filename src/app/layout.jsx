import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GSAPAnimations from "./components/GSAPAnimations";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.techhbyus.com"),
  title: "TechByus | We build website - you grow your business",
  description: "TechByus builds modern websites, service platforms, and SEO foundations for growing businesses.",
  openGraph: {
    siteName: "TechByus",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
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
