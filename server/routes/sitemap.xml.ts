export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig(event).public.siteUrl || "").replace(
    /\/$/,
    "",
  );
  if (!base)
    throw createError({
      statusCode: 404,
      statusMessage: "Set NUXT_PUBLIC_SITE_URL to enable the sitemap.",
    });
  setHeader(event, "content-type", "application/xml; charset=utf-8");
  const paths = [
    "/",
    "/gioi-thieu",
    "/linh-vuc-hoat-dong",
    "/du-an",
    "/lien-he",
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${base}${path}</loc></url>`).join("")}</urlset>`;
});
