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


## TODO
Make the homelab section live. Right now it's decorative. If you run something like Uptime Kuma, the page can pull your real service status and uptime, so the green dots actually mean something. Recruiters rarely see a portfolio that shows working infrastructure.
Host the site on your homelab instead of GitHub Pages, with a footer like "Served from a box in my basement" showing the real server stats. The site itself becomes proof of your IT skills.
Make the background your actual network. Instead of random dots, draw your real topology: router → switch → NAS → services, labeled when you hover. Same visual, but it's yours.
Write the copy in your own voice. Drop "Hi, my name is" and the numbered labels. The scuba story ("got lost at sea for over an hour on my first ocean dive") is a great hook, so use it more instead of hiding it in a paragraph.
Optional: a terminal you can type in, with commands like whoami, resume and ssh homelab. It fits the IT angle, but it's common enough that it's only worth it if it's done well.