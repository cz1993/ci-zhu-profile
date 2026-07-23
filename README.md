# Ci Zhu — Data + AI Operator

The source for Ci Zhu's interactive personal profile: a portfolio of enterprise
data delivery, AI engineering, open-source work, and applied academic training.

**Live site:** [ci-zhu.com](https://ci-zhu.com)

`cz1993.com` remains active as a permanent, path-preserving redirect so existing
links continue to work while traffic and analytics converge on the canonical
domain.

## Highlights

- Audience-aware profile views for recruiters, builders, and founders
- Enterprise outcomes and a decade of Data + AI delivery
- Multi-agent systems and production agent-skill engineering
- MirrorArc open-source project and live demo
- University of Waterloo and Smith School of Business education
- Responsive layouts, accessible navigation, and reduced-motion support

## Stack

- React 19 and Next.js App Router APIs
- [vinext](https://github.com/cloudflare/vinext) and Vite
- Cloudflare Workers
- TypeScript and CSS

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

The local site runs at the URL printed by vinext, normally
`http://localhost:3001`.

## Validation

```bash
npm run check
npm test
```

## Deployment

Authenticate Wrangler with the target Cloudflare account, then deploy:

```bash
npx wrangler login
npm run deploy
```

The Worker configuration is committed in `wrangler.jsonc`. `ci-zhu.com` is the
canonical production domain; its `www` hostname and the legacy `cz1993.com`
hostnames redirect to it before rendering.

## Content management

Most profile content is centralized in `content/site.ts`. Page structure and
interactions live in `app/profile-shell.tsx`, with the visual system in
`app/globals.css`.

## License

All rights reserved. The source is public for portfolio review and learning;
reuse of Ci Zhu's personal content, portrait, or institutional branding is not
granted.
