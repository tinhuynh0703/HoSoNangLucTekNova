# Architecture

- Nuxt 4 SSR with file routes in `app/pages` and a shared `app/layouts/default.vue`.
- Content records and navigation live in `app/data/site.ts`; page components consume these records. Seven project records are marked `SOURCE_ONLY`; three team records are marked `NEEDS_VERIFICATION`. Public views use generic descriptions until approved evidence is available.
- Styling uses Tailwind CSS 4 through `@tailwindcss/vite`, semantic color tokens in `app/assets/css/main.css`, and a small number of component classes.
- `LeadForm.vue` uses the shared Zod schema in `shared/lead.ts`. `server/api/leads.post.ts` validates again and forwards to a configured webhook. No local database or mock success path is used.
- Marketing pages render by Nuxt SSR. `usePageSeo` emits route metadata, and Nitro serves `robots.txt` and the configured-origin sitemap. Canonicals are emitted only when `NUXT_PUBLIC_SITE_URL` is set.
- Legacy `.html` files and `nav-router.js` are retained and are not loaded by the Nuxt application. Nitro route rules redirect their historical URLs.

The integration boundary is the lead webhook. The host must supply an authenticated, durable receiver and configure monitoring, spam controls and data retention before launch.
