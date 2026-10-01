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

## Custom domain

The site is served at:

```text
https://www.theinfinitesports.com/
```

`astro.config.mjs` sets `site` to that URL (no `base`), and `public/CNAME`
contains `www.theinfinitesports.com`.

DNS (GoDaddy → Manage DNS), with any “Parked” `A` record, the default
`www → @` `CNAME`, and domain forwarding removed:

| Type  | Name | Value                  |
| ----- | ---- | ---------------------- |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | steven-zhc.github.io   |

Then set **Settings → Pages → Custom domain** to `www.theinfinitesports.com`
and enable **Enforce HTTPS** once the certificate is issued.

## Launch content

Update `src/pages/index.astro` with the real Google Form URL, campus address,
schedule, email, phone number, and coach details before making the site public.
