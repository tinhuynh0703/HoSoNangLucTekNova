export function usePageSeo(title: string, description: string, path: string) {
  const config = useRuntimeConfig();
  const base = String(config.public.siteUrl || "").replace(/\/$/, "");
  const canonical = base ? `${base}${path}` : undefined;
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogLocale: "vi_VN",
    ogUrl: canonical,
    twitterCard: "summary_large_image",
  });
  if (canonical) useHead({ link: [{ rel: "canonical", href: canonical }] });
}
