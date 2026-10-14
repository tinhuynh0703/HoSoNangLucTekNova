# Release readiness

| Gate | Status |
|---|---|
| Four main Nuxt routes and shared navigation | Implemented; browser E2E passed |
| Service tabs and project filtering/dialog | Implemented; browser E2E passed |
| Two form contexts and honest submission response | Browser E2E passed; delivery webhook pending |
| Legacy URL redirects | Local browser E2E passed; verify on deployment host |
| Contact details | Displayed from legacy source per owner direction |
| Homepage project/client names and claims from `index.html` | Displayed per owner direction, without independent verification |
| About-page team, organization and legal/SLA content | Displayed from `gioithieu.html` per owner direction |
| Services page content from `lichvuc.html` | Source copy, 18 partner names, four pillars, process outputs, SLA and form choices displayed |
| Projects page content from `duan.html` | Seven full project cards, three hero badges, 12 partner entries, trust statistics and contact CTA displayed |
| Privacy and terms content | Missing; links withheld |
| Production origin, favicon, approved visual assets | Pending |
| Lighthouse and Core Web Vitals | Not measured |
| Responsive overflow and automated accessibility | 35 viewport/zoom checks with no overflow; axe-core zero violations on 10 page/viewport combinations |
| Dependency audit | npm reports 14 transitive high/critical advisories; Nuxt/devtools/Nitro dependencies need upstream fixes or approved mitigation before release |

The four requested legacy content passes are complete. Production readiness still depends on the remaining integration, legal-page and deployment checks listed above.
