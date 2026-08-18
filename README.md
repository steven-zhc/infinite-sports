# Infinite Sports

Static website for Infinite Sports, built with Astro and deployed with GitHub
Pages. It introduces the volleyball, basketball, and core training programs,
campus, coaching team, gallery, and enrollment contact information.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Astro prints the local preview URL after startup.

## Production build

```bash
npm run build
npm test
```

The deployable static website is written to `dist/`.

## GitHub Pages

Pushing `main` runs `.github/workflows/deploy.yml`. In the GitHub repository,
open **Settings → Pages** and choose **GitHub Actions** as the publishing source.

The default project URL is:

```text
https://steven-zhc.github.io/infinite-sports/
```

## Custom domain

When the final hostname is known:

1. Set `site` in `astro.config.mjs` to the full custom-domain URL.
2. Remove the `base` option from `astro.config.mjs`.
3. Add `public/CNAME` containing only the hostname.
4. Configure the same hostname in **GitHub → Settings → Pages** and add the
   DNS records GitHub provides.

## Launch content

Update `src/pages/index.astro` with the real Google Form URL, campus address,
schedule, email, phone number, and coach details before making the site public.
