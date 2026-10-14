# Design system

Light enterprise visual system based on the UI/UX review, with darker accessible action colors than the initial palette suggestion.

| Token | Value | Use |
|---|---|---|
| Navy | `#0f172a` | Main headings, footer |
| Blue | `#075e93` | Links, primary actions, emphasis |
| Blue dark | `#064b75` | Hover |
| Ink | `#16243b` | Body text |
| Muted | `#4b5c72` | Secondary text |
| Canvas | `#f8fafc` | Main background |
| Mist | `#ecf4f7` | Section contrast |
| Line | `#d8e2e9` | Borders |

Be Vietnam Pro is loaded with system font fallback. Responsive display and heading sizes use `clamp()`. Sections use `shell` (maximum 1200px) and fluid vertical spacing. Buttons provide hover, focus-visible, active and disabled states; form error and loading states are separate. Reduced-motion users get minimal transition duration. Cards use content-driven height, avoiding text clipping at zoom.

No unverified software screenshot, customer logo or employee portrait is used. The homepage schematic is explicitly labelled as conceptual.
