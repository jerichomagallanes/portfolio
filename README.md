# jericho-portfolio

Personal portfolio of Jericho Isaac Magallanes, a Filipino software engineer based in Osaka building native apps for iOS and Android.

Bilingual (English at `/`, Japanese at `/ja/`), fully static, with dark mode that follows the device setting and a manual toggle.

## Tech stack

- [Astro](https://astro.build) with strict TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens defined in a CSS `@theme` block
- Self-hosted fonts via [Fontsource](https://fontsource.org) (Bricolage Grotesque, Figtree, IBM Plex Mono, Noto Sans JP)
- No client-side framework; the small amount of interactivity (theme toggle, photo lightbox, scroll reveals) is vanilla TypeScript

## Getting started

Requires Node.js 22 or later.

```sh
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Scripts

| Command              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `npm run dev`        | Start the dev server                                 |
| `npm run build`      | Build the static site into `dist/`                   |
| `npm run preview`    | Preview the production build locally                 |
| `npm run check`      | Type-check with `astro check`                        |
| `npm run format`     | Format with Prettier                                 |
| `npm run screenshot` | Capture desktop and mobile screenshots (dev tooling) |

## Project structure

```
src/
├── pages/          index.astro (EN) and ja/index.astro (JA)
├── layouts/        Base.astro: head, fonts, theme bootstrap
├── components/     One component per section, plus Photo and Lightbox
├── data/           Typed content: bio, experience, socials, photos
├── i18n/           UI strings for both languages
└── styles/         global.css: design tokens, themes, motion
```

All copy lives in `src/data/` and `src/i18n/ui.ts`; components contain no hardcoded text. Adding a photo: `node scripts/photo.mjs <file>` resizes it, strips metadata, and writes it to `public/photos/` under an anonymized name.

## Deployment

`npm run build` outputs a fully static site to `dist/`, deployable to any static host (Vercel, Cloudflare Pages, Netlify, GitHub Pages).

---

© Jericho Isaac Magallanes
