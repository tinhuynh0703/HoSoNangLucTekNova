# Component inventory

| Component | Role | Routes |
|---|---|---|
| `default.vue` | Header, desktop/mobile navigation, footer, skip link | All |
| `SectionHeading.vue` | Consistent section heading and lead | Main pages |
| `ServiceGrid.vue` | Six data-driven services | Home |
| `ProjectGrid.vue` | Five filters, seven records, native dialog | Projects |
| `LeadForm.vue` | Shared Zod validated form and truthful delivery state | About, services, contact |
| `usePageSeo.ts` | Per-route title, description, OG and optional canonical | All main routes |

The native `<dialog>` provides focus containment and Escape behavior. Service tabs use the ARIA tab pattern with Left/Right/Home/End keyboard handling. Mobile navigation is reactive Vue state.
