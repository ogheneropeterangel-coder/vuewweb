# VUEW image assets

Everything in this folder ships with the site locally. No image is loaded
from a third-party host, so nothing can break because an external URL
changed, disappeared or started blocking hotlinks.

## Current assets

| File | Used by | Type |
| --- | --- | --- |
| `hero-workspace.jpg` | Home → hero backdrop (CSS) | Photograph, decorative |
| `about-studio.jpg` | Home → brand introduction, About → story | Photograph |
| `work-aurora-platform.jpg` | Projects → Aurora Platform, project hero | Photograph |
| `work-aurora-detail.jpg` | Project detail → Aurora Platform gallery | Photograph |
| `work-nexus-design-system.jpg` | Projects → Nexus Design System, project hero | Photograph |
| `work-nexus-detail.jpg` | Project detail → Nexus Design System gallery | Photograph |
| `work-pulse-fitness-app.jpg` | Projects → Pulse Fitness App, project hero | Photograph |
| `work-pulse-detail.jpg` | Project detail → Pulse Fitness App gallery | Photograph |
| `insight-modular-design.jpg` | Insights → modular design cover | Photograph |
| `insight-edge-performance.jpg` | Insights → edge performance cover | Photograph |
| `insight-trust.jpg` | Insights → designing for trust cover | Photograph |
| `brand-composition.svg` | Unused, kept as an option | Designed brand artwork |

Every photograph was chosen to match the section it appears in: a night
workspace for the hero, a working studio for the company story, product and
design detail for the case studies, infrastructure for the engineering
insights and mobile product for the app work.

## Sources and licences

All photographs are used under licences that permit commercial use with no
attribution required. Keep this list with the files so any image can be
traced or re-licensed later.

| File | Source | Photographer |
| --- | --- | --- |
| `hero-workspace.jpg` | Unsplash `bWVBCDtTRJI` | Jakub Żerdzicki |
| `about-studio.jpg` | Pexels `5466236` | Antoni Shkraba |
| `work-aurora-platform.jpg` | Pexels `373543` | Pexels / Pixabay contributor |
| `work-aurora-detail.jpg` | Pexels `2881232` | Brett Sayles |
| `work-nexus-design-system.jpg` | Unsplash `4UGmm3WRUoQ` | Compagnons |
| `work-nexus-detail.jpg` | Pexels `33637962` | Pexels contributor |
| `work-pulse-fitness-app.jpg` | Pexels `2818118` | Pexels contributor |
| `work-pulse-detail.jpg` | Unsplash `yEdKzjsYObM` | Milad Fakurian |
| `insight-modular-design.jpg` | Pexels `16131518` | Pexels contributor |
| `insight-edge-performance.jpg` | Unsplash `klWUhr-wPJ8` | imgix |
| `insight-trust.jpg` | Pexels `3850212` | Pexels contributor |

These photographs illustrate each section. They are not captures of VUEW's
own work, so `alt` text describes what the photograph actually shows rather
than claiming it is project output. Replace an image with real project
photography as soon as the work is approved for publication.

## Replacing an image

1. Add the new file to this folder (`.jpg`, `.webp` or `.avif`, ideally
   1600–2400px wide, compressed).
2. Update the matching path in `src/data/work.js`, `src/data/insights.js` or
   `src/data/company.js`.
3. Write `alt` text for screen readers — `alt=""` only for decorative
   artwork such as the hero backdrop.
4. Add the new file to the tables above and delete the file it replaces.

## Direction for real imagery

Keep the treatment consistent with the rest of the site: contemporary
architecture, technology details, creative workspaces, product design and
thoughtful business imagery — with modern African technology contexts where
genuinely relevant. Avoid generic laptop stock photos, unrelated technology
clip-art and AI-generated people.