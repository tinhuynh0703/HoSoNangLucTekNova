# TEKNOVA website rebuild

Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4 rebuild of the four retained TEKNOVA pages. The legacy `.html` files and `nav-router.js` remain in the repository for comparison. The new application uses `app/pages` routes.

## Run locally

Requires Node.js 20.19+ and npm. From the repository root:

```sh
npm install
npm run dev
```

Open the Local URL printed by Nuxt. Available routes: `/`, `/gioi-thieu`, `/linh-vuc-hoat-dong`, `/du-an`, `/lien-he`.

## Checks and build

```sh
npm run typecheck
npm run lint
npm test
npm run test:e2e
npm run build
```

Run `npm run format` to format source files. The Playwright E2E command requires its browser binaries (`npx playwright install chromium`) and a running or automatically launched dev server. See `playwright.config.ts`.

## Deployment

Deploy the output of `npm run build` on a Node/Nitro compatible host. Configure `NUXT_PUBLIC_SITE_URL` to the final origin, including `https://`; this enables canonical links and the XML sitemap. Configure a real lead delivery webhook before offering online lead submission. The webhook must return an HTTP 2xx response only after it has accepted the request. The site continues to offer phone and email links while delivery is unavailable.

Environment variables are listed in `.env.example`. Keep `NUXT_LEAD_WEBHOOK_TOKEN` server-side. Do not put it in a `NUXT_PUBLIC_` variable.

## Content release gate

The old HTML contains inconsistent figures and unverified customer, SLA and personnel claims. The new public copy avoids numerical outcomes and marks project/personnel records as source-only. Before public deployment, resolve the entries in [CONTENT-AUDIT.md](docs/CONTENT-AUDIT.md), confirm contact details, add approved project evidence and product imagery, and configure lead delivery. See [RELEASE-READINESS.md](docs/RELEASE-READINESS.md).
