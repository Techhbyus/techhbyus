import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";

export const metadata = {
  metadataBase: new URL("https://www.techbyus.com"),
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
    <html lang="en">
      <body>
        <ScrollReveal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
