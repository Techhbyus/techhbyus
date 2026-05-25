import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InteractionObserver from "./components/InteractionObserver";

export const metadata = {
  title: "TechByus | We build website - you grow your business",
  description: "TechByus builds modern websites, service platforms, and SEO foundations for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <InteractionObserver />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
