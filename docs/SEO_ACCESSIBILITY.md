# SEO_ACCESSIBILITY

## SEO
- Metadata (UA), OpenGraph, Twitter у `app/layout.tsx`.
- Canonical URL: `PLACEHOLDER_URL`.
- JSON-LD LocalBusiness: `app/layout.tsx` через `lib/seo.ts`.
- `app/sitemap.ts`, `app/robots.ts`.
- OG image та icon через route handlers.
- GitHub Pages: basePath та site URL задаються через `NEXT_PUBLIC_*`.

## Доступність
- Skip link до `#main`.
- Навігація з `aria-current` через scrollspy.
- Контрастні focus states.
- ARIA для модалки та форми.
- prefers-reduced-motion через hook та CSS.
