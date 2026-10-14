# UI and interaction QA

Current source implementation: responsive shell, content-height cards, mobile menu, focus-visible, skip link, reduced motion, labelled forms, keyboard tabs, native project dialog.

Playwright visual check completed across all five routes at 360, 390, 768, 1024, 1440 and 1920px. No unintended horizontal overflow was found. A 390px viewport with the root font enlarged to 200% also had no horizontal overflow. Full-page screenshots are in `qa/` for home, about, services and projects at 390px and 1440px. Visual inspection found consistent spacing, hierarchy and responsive stacking. The conceptual homepage graphic is labelled.

Automated axe-core WCAG 2 A/AA, 2.1 AA and 2.2 AA checks on all five routes at 390px and 1440px returned zero violations after contrast corrections. This is an automated result, not a complete manual WCAG certification.

Verification matrix:

| Viewport | Home | About | Services | Projects | Contact | Zoom 200% |
|---|---|---|---|---|---|---|
| 360px | Checked | Checked | Checked | Checked | Checked | — |
| 390px | Checked | Checked | Checked | Checked | Checked | Checked |
| 768px | Checked | Checked | Checked | Checked | Checked | — |
| 1024px | Checked | Checked | Checked | Checked | Checked | — |
| 1440px | Checked | Checked | Checked | Checked | Checked | — |
| 1920px | Checked | Checked | Checked | Checked | Checked | — |

Manual screen reader and Lighthouse scoring remain unmeasured. No scores are claimed without measurement.
