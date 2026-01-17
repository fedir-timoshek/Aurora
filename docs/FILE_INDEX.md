# FILE_INDEX

## app/
- `app/layout.tsx` — шрифти, metadata, JSON-LD.
- `app/page.tsx` — композиція секцій.
- `app/globals.css` — глобальні стилі.
- `app/loading.tsx` — екран завантаження.
- `app/not-found.tsx` — сторінка 404.
- `app/api/lead/route.ts` — endpoint заявок.
- `app/sitemap.ts` — sitemap generator.
- `app/robots.ts` — robots generator.
- `app/opengraph-image.tsx` — OG image.
- `app/icon.tsx` — favicon.

## config
- `next.config.mjs` — static export, basePath, images.
- `.github/workflows/deploy.yml` — GitHub Pages deploy.
- `.env.example` — приклад змінних середовища.
- `.gitignore` — виключення для Git.
- `package-lock.json` — зафіксовані залежності.

## components/
- `components/Navbar.tsx` — sticky header + scrollspy.
- `components/Hero.tsx` — hero секція.
- `components/Services.tsx` — послуги.
- `components/ValueProps.tsx` — переваги.
- `components/Process.tsx` — процес + SVG.
- `components/UseCases.tsx` — сценарії.
- `components/AutoService.tsx` — автосервіс.
- `components/Cases.tsx` — підхід.
- `components/FAQ.tsx` — accordion.
- `components/Contact.tsx` — контакти + форма + карта.
- `components/Footer.tsx` — футер.
- `components/QuoteModal.tsx` — модалка.
- `components/MobileCTA.tsx` — мобільні CTA.
- `components/PresentHints.tsx` — підказки презентації.
- `components/Motion.tsx` — framer wrappers.
- `components/ScrollSpy.tsx` — scrollspy helper.
- `components/LeadForm.tsx` — форма ліда.

## lib/
- `lib/content.ts` — весь контент і PLACEHOLDER-и.
- `lib/seo.ts` — JSON-LD builder.
- `lib/utils.ts` — утиліти.
- `lib/formSchema.ts` — Zod schema.
- `lib/hooks/useScrollSpy.ts` — hook scrollspy.
- `lib/hooks/usePrefersReducedMotion.ts` — hook prefers-reduced-motion.

## public/
- `public/svg/aurora-veil.svg` — фонова aurora-ілюстрація.
- `public/svg/cityline.svg` — силует міста.
- `public/svg/mesh.svg` — сітка з точок.
- `public/svg/illus/truck.svg` — ілюстрація вантажівки.
- `public/svg/illus/box.svg` — ілюстрація вантажу.
- `public/svg/illus/route.svg` — ілюстрація маршруту.
- `public/svg/illus/clipboard.svg` — ілюстрація контролю.
- `public/svg/illus/service.svg` — ілюстрація сервісу.
- `public/.nojekyll` — вимикає Jekyll для GitHub Pages.
