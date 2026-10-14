# Legacy migration matrix

All four HTML files, `nav-router.js`, and the UI/UX review were previously inventoried. The sequential content pass has now reviewed and updated `index.html`, `gioithieu.html`, `lichvuc.html` and `duan.html`. The HTML sources are retained unchanged. Per the owner's direction, their source claims appear in Vue without independent verification.

| Legacy file | Existing section / behavior | New route | New component or data | Migration status | Verification status |
|---|---|---|---|---|---|
| `index.html` | Header: logo, six nav targets, PDF, consultation, user icon | All routes | `default.vue`, `navigation`, `public/teknova-profile.pdf` | Nav and CTA active; PDF restored from historical Git asset; decorative user icon omitted | PDF SOURCE_ONLY |
| `index.html` | Hero: company positioning, badges, dashboard/product labels and workflow | `/` | Home hero | Source copy, numbers and technical claims displayed | SOURCE_ONLY / NEEDS_VERIFICATION provenance |
| `index.html` | Four-item statistic bar | `/` | `homeStats` | All four values and descriptions displayed | NEEDS_VERIFICATION provenance |
| `index.html` | Partner marquee | `/` | `homePartners` | All 20 names and descriptions displayed in a continuous horizontal marquee; duplicate track hidden from assistive technology | NEEDS_VERIFICATION provenance |
| `index.html` | Six service cards | `/` | `ServiceGrid.vue`, `services` | Source titles, details and badges restored | SOURCE_ONLY / NEEDS_VERIFICATION provenance |
| `index.html` | Featured EMR/medical and digital solutions | `/` | `solutions` | Grouped into five clear solution records | Capabilities SOURCE_ONLY |
| `index.html` | Five featured project cards, consultation card and all-project CTA | `/`, `/du-an` | `homeFeaturedProjects`, home grid | All five source descriptions, customer names and outcomes displayed; CTA links active | NEEDS_VERIFICATION provenance |
| `index.html` | Company values, vision, mission, team pointer | `/`, `/gioi-thieu` | Home about section, about page | Source philosophy, experience numbers and leadership quote displayed on homepage | SOURCE_ONLY / NEEDS_VERIFICATION provenance |
| `index.html` | Final consultation CTA and hotline | `/`, `/lien-he` | Home CTA, contact page | Both contact route and direct phone link active | Contact SOURCE_ONLY |
| `index.html` | Footer with service links, contact, terms/privacy placeholders | All routes | `default.vue` | Service/contact links and legal labels migrated; legal labels remain plain text without destination pages | Legal content MISSING |
| `gioithieu.html` | Story hero, four quantitative badges, PDF and consultation | `/gioi-thieu` | About hero, `aboutStats` | Source headline, introduction, metrics and working CTAs displayed | SOURCE_ONLY / NEEDS_VERIFICATION provenance |
| `gioithieu.html` | Vision, mission, “Chữ TÍN” philosophy | `/gioi-thieu` | About value sections | Full wording and three card taglines restored | SOURCE_ONLY |
| `gioithieu.html` | Organization chart: board, directorate, four departments and eight units | `/gioi-thieu#so-do-to-chuc` | `departments`, about organization section | Roles, descriptions, English labels and subunits displayed | SOURCE_ONLY |
| `gioithieu.html` | Three employee profiles, advisor panel and illustrative portraits | `/gioi-thieu#doi-ngu` | `teamProfiles`, about team section | Names, roles, years, biographies, skills and advisor copy displayed; source image URLs use a visual fallback when unavailable | NEEDS_VERIFICATION / DEMO_ONLY provenance |
| `gioithieu.html` | Legal/contact details, company hours and legal/SLA labels | `/gioi-thieu` | `company`, about contact section | Source wording displayed with `tel:`/`mailto:` links | SOURCE_ONLY / NEEDS_VERIFICATION provenance |
| `gioithieu.html` | Contact form with four interest choices and 24-hour response copy | `/gioi-thieu` | `LeadForm.vue`, `/api/leads` | Source options/copy restored; validation and real delivery response retained | Delivery MISSING until configured |
| `lichvuc.html` | Hero and four quantitative badges | `/linh-vuc-hoat-dong` | `serviceStats`, services hero | Source positioning and all four figures displayed | NEEDS_VERIFICATION provenance |
| `lichvuc.html` | Partner marquee | `/linh-vuc-hoat-dong` | `servicePartners` | All 18 unique names displayed in two continuous marquee rows, with 50+ statement; duplicate tracks hidden from assistive technology | NEEDS_VERIFICATION provenance |
| `lichvuc.html` | Four interactive pillars, technical subtopics and CTAs | `/linh-vuc-hoat-dong` | `servicePillars`, accessible tabs | Source badges, codes, descriptions, feature details, architectures, technology labels and figures displayed | SOURCE_ONLY / NEEDS_VERIFICATION provenance |
| `lichvuc.html` | Four-step process and outputs | `/linh-vuc-hoat-dong` | `serviceProcess` | Full descriptions and four output labels displayed | SOURCE_ONLY |
| `lichvuc.html` | Four-row SLA table | `/linh-vuc-hoat-dong` | `serviceSla` | All source levels, standards and handling statements displayed | NEEDS_VERIFICATION provenance |
| `lichvuc.html` | Solution consultation copy and form | `/linh-vuc-hoat-dong` | `LeadForm.vue`, `/api/leads` | Source CTA, benefits, five interest choices, required work email and conditional success copy displayed | Delivery MISSING until configured |
| `duan.html` | Project hero and three numerical badges | `/du-an` | `projectStats`, projects hero | Source headline, description, counts and supporting labels displayed | NEEDS_VERIFICATION provenance |
| `duan.html` | Five category filter buttons | `/du-an` | `projectFilters`, `ProjectGrid.vue` | Source labels migrated to reactive filtering | Verified functional |
| `duan.html` | Seven project cards and modal detail | `/du-an` | `projects`, `projectModalDetails`, `ProjectGrid.vue` | All seven source names, periods, descriptions, metrics, technology labels, actions and common modal details displayed | Customers/results NEEDS_VERIFICATION provenance |
| `duan.html` | Partner/customer marquee and trust-stat strip | `/du-an` | `projectPartners`, `projectTrustStats` | All 12 unique name/detail pairs and three quantitative badges displayed | NEEDS_VERIFICATION provenance |
| `duan.html` | Contact CTA and hotline | `/du-an`, `/lien-he` | Projects CTA and shared contact data | Source wording, contact route and direct phone link active | Contact SOURCE_ONLY |
| `nav-router.js` | `data-path` mapping, hash scrolling, active nav | All routes | Nuxt file routing, `NuxtLink`, IDs | Replaced; old script not loaded | Verified in source, browser QA pending |
| All HTML | Tailwind CDN, inline `onclick`, duplicate headers/footers, Google-hosted imagery, Kaspersky injection | All routes | Nuxt components, compiled CSS | Removed from new app | Asset rights and approved branding pending |

## Interaction inventory

- Header/footer links: four main routes, team anchor, contact, hotline, service links. The old PDF, legal and user-avatar links had no valid destination.
- Home CTAs: projects, historical profile PDF, consultation, hotline. Destinations resolve to Nuxt routes, the PDF or `tel:`.
- About contact form: name, phone, interest, summary. New shared form adds optional email/organization.
- Services: four tabs, pillar-specific CTAs, consultation form. Keyboard tab behavior is implemented.
- Projects: five filters, seven open buttons, close/Escape, similar-project CTA. Native dialog supplies modal focus handling.

## Legacy implementation findings

The legacy pages embed Tailwind from CDN, large inline config/style blocks, third-party fonts/icons, remote Google-hosted images and a Kaspersky-injected script. They repeat layout and contact content. Navigation uses DOM queries and rewrites `href` on load; the about form displays success without transmission; the services form uses an inline handler; projects filter and modal use global functions. Several images have no proven rights or may be generated illustrations. The redesign uses textual and CSS visuals pending approved assets.
