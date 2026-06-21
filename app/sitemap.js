export default function sitemap() {
  const base = "https://www.techbyus.com";
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/avail-service", priority: 0.8 },
    { path: "/seo", priority: 0.7 },
    { path: "/terms-and-conditions", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    priority,
  }));
}
