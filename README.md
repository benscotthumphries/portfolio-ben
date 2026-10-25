# portfolio-ben

My portfolio site, built with Next.js, Tailwind CSS, and Motion. Live at
[benscotthumphries.github.io/portfolio-ben](https://benscotthumphries.github.io/portfolio-ben).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

## Editing content

All text (bio, resume, skills, homelab, projects) lives in [`app/data.ts`](app/data.ts).
The resume section prints cleanly, so use **Print / Save PDF** on the site to get a PDF copy.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/nextjs.yml`.
