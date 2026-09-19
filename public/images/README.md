# VUEW image assets

Everything in this folder ships with the site locally. No image is loaded
from a third-party host, so nothing can break because an external URL
changed, disappeared or started blocking hotlinks.

## Current assets

| File | Used by | Type |
| --- | --- | --- |
| `brand-composition.svg` | Home → brand introduction, About → story | Designed brand artwork |
| `placeholder-website.svg` | Projects → placeholder 01, project gallery | Structural placeholder |
| `placeholder-interface.svg` | Projects → placeholder 02, project gallery | Structural placeholder |
| `placeholder-mobile.svg` | Projects → placeholder 03 | Structural placeholder |

`brand-composition.svg` is designed brand artwork rather than a photograph:
it can stay if it fits the direction, or be swapped for real photography.

## Replacing the project placeholders

The three `placeholder-*.svg` files exist so the projects experience can be
built and reviewed before real case studies are published. When a project is
approved for release:

1. Add the real image to this folder (`.jpg`, `.webp` or `.avif`, ideally
   1600–2400px wide, compressed).
2. Update the `image` and `imageAlt` fields for that entry in
   `src/data/work.js`.
3. Set `isPlaceholder: false` on the entry and replace the placeholder copy.
4. Delete the unused placeholder file.

## Direction for real imagery

Keep the treatment consistent with the rest of the site: contemporary
architecture, technology details, creative workspaces, product design and
thoughtful business imagery — with modern African technology contexts where
genuinely relevant. Avoid generic laptop stock photos, unrelated technology
clip-art and AI-generated people.

## Requirements for any image added here

- Appropriate rights or licence for commercial use.
- A descriptive `alt` value written for screen readers, not for search
  engines. Use `alt=""` only for purely decorative artwork.
- Sensible aspect ratios — the layout uses `16:9` (wide), `4:3` (photo),
  `3:4` (tall) and `1:1` (square) frames.
- Compression before committing, so the cinematic feel never costs load time.
