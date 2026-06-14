import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";

export const metadata = {
  title: "TechByus | We build website - you grow your business",
  description: "TechByus builds modern websites, service platforms, and SEO foundations for growing businesses.",
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
