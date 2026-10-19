# Portfolio

Ziya Mammadov’s personal website, built with Next.js, React, TypeScript, and Tailwind CSS. Blog posts are Markdown files with support for mathematical notation and highlighted code.

## Make it yours

1. Fork this repository using the **Fork** button on GitHub.
2. Clone your fork, replacing `YOUR_USERNAME` below with your GitHub username:

   ```sh
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   npm install
   npm run dev
   ```

3. Open [localhost:3000](http://localhost:3000).
4. Replace the personal information, links, and projects in `src/data/resume.tsx`. Update the site URL there too.
5. Replace the profile photo and other personal assets in `public/`. Add your own writing in `content/` and remove posts you do not want to include.
6. Update the author biography in `src/app/blog/[slug]/page.tsx` and review the remaining pages for personal references.

Blog posts use the `.mdx` extension and Markdown content. For example:

```md
---
title: "Your article title"
publishedAt: "2026-10-19"
summary: "A short description of your article."
category: "Mathematics"
tags: ["Logic"]
---

Your article goes here.
```

## Publish

Run `npm run build` to check the production build. Import your fork into Vercel and use the detected Next.js settings to deploy it. Set your own domain and site URL before sharing.

This site includes Vercel Analytics; review that integration for your own deployment. Keep the existing license notices when reusing the code; see [LICENSE](LICENSE). Replace personal writing, photographs, and organisation logos with your own material.
