export default defineEventHandler((event) => {
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  const base = String(useRuntimeConfig(event).public.siteUrl || "").replace(
    /\/$/,
    "",
  );
  return `User-agent: *\nAllow: /\n${base ? `Sitemap: ${base}/sitemap.xml\n` : ""}`;
});
