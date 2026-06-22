export default function robots() {
  const base = "https://www.techhbyus.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
