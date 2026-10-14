# Content audit and publication status

Status definitions: **CONFIRMED** = supported by a reliable approved source; **SOURCE_ONLY** = stated in legacy HTML only; **NEEDS_VERIFICATION** = conflicting, material or legal/contractual claim; **DEMO_ONLY** = illustrative material; **MISSING** = not supplied. Per the owner's direction, the home, about, services and projects pages display the claims from all four legacy HTML files without an evidence review. These statuses describe source provenance, not a publication filter.

| Claim/content | Evidence found | Status | Treatment in new site |
|---|---|---|---|
| Company legal name, address, phone, Gmail, hours | Repeated legacy HTML | SOURCE_ONLY | Displayed from source without verification per owner direction |
| `contact@teknova.com.vn` | UI/UX report recommendation only | NEEDS_VERIFICATION | Not used; legacy Gmail retained |
| “Now or Never” | Hero/footer/about HTML | SOURCE_ONLY | Displayed in homepage hero |
| Vision, mission, “Chữ TÍN”, “Thực người · Thực việc · Thực giá trị” | About and home HTML | SOURCE_ONLY | Homepage wording restored from `index.html` |
| Six service groups, four technology pillars, four-step process | Home/services HTML | SOURCE_ONLY | Full source descriptions and process outputs displayed on home/services pages |
| EMR, electronic prescriptions, Zalo OA/HIS, population data, cashless payment | HTML | SOURCE_ONLY | Source solution areas and technical detail displayed |
| Seven named projects and named customers | Projects HTML | NEEDS_VERIFICATION | All seven project names, customers, source descriptions and results displayed on `/du-an`; five named homepage cards use `index.html` wording |
| Partner/customer names and “50+ organizations” | Home/services/projects marquees | NEEDS_VERIFICATION | All 20 home name/detail pairs, 18 services names and 12 projects name/detail pairs displayed; external logos not reproduced |
| 15+ years, 50+ projects, 20+ experts, 100% satisfaction | Home HTML | NEEDS_VERIFICATION | Displayed on homepage as in `index.html` |
| 10–20 years team experience; individual years | Home/about HTML | NEEDS_VERIFICATION | Experience claims and three individual values displayed on home/about pages |
| 10+ core years, 40+ public/health projects, 100% SLA, 24/7 support | About HTML | NEEDS_VERIFICATION | Four quantitative badges displayed on about page |
| 38+ software systems, 07 major projects, 06+ health partners and other project outcomes | Projects HTML | NEEDS_VERIFICATION | Source badges and seven project-specific metrics displayed on `/du-an` |
| 100% medical compliance, 99.98%/99.9% uptime, 15-minute response, 24/7 support | Home/services HTML | NEEDS_VERIFICATION | All source figures and the services SLA table displayed |
| ISO 27001, security level 3, exact legal/technical conformity | Home/services HTML | NEEDS_VERIFICATION | Source badges, technical copy and standards displayed on home/services pages |
| Three people named in team cards, roles, biographies and skill labels | About HTML | NEEDS_VERIFICATION | Full source profiles displayed on about page |
| Remote team portraits | Google-hosted images with descriptive generation prompts | DEMO_ONLY | Source URLs retained; initial browser check could not load them, so profile cards show an initial-letter fallback on image error |
| Advisory council, legal capacity, absolute security and 24-hour response statements | About HTML | NEEDS_VERIFICATION | Source wording displayed on about page; form reports success only after actual API acceptance |
| Hero dashboard numbers, “Live v4.8”, Cloud Core product name and healthcare workflow in `index.html` | Legacy homepage illustration | DEMO_ONLY | Product labels, metrics and workflow displayed on homepage |
| Dashboard statistics and product screenshot in UI/UX report mockup | Review mockup | DEMO_ONLY | Not used |
| Conceptual system graphic in new homepage | Built in CSS as explanation | DEMO_ONLY | Retained as homepage visual |
| Profile PDF | `index.html` linked to `#`; historical Git asset `src/assets/HOSONANGLUC.pdf` exists | SOURCE_ONLY | Historical PDF restored at `public/teknova-profile.pdf` and linked from homepage |
| Privacy and terms wording | Legacy placeholder links only | MISSING | Labels shown as plain text; no destination pages supplied |
| Lead delivery backend | None supplied | MISSING | Endpoint contract implemented, returns 503 without receiver |
| Approved case study evidence, screenshots and logo permissions | None supplied | MISSING | Legacy text published per owner direction; third-party logos not reused |

No `CONFIRMED` business claim is asserted here because the provided sources are legacy site files and a design report, not independent approval records. The owner requested publication of the reviewed legacy source content without verification.
