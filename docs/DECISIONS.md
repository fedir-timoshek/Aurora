# DECISIONS

## ADR-001: App Router + TailwindCSS
- Date: 2026-01-17
- Status: Accepted
- Context: Потрібен сучасний SSR фреймворк з гарною продуктивністю.
- Decision: Використано Next.js 14 App Router та TailwindCSS.
- Consequences: Статичний рендеринг, швидкі сторінки, просте керування стилями.

## ADR-002: Контент у `lib/content.ts`
- Date: 2026-01-17
- Status: Accepted
- Context: Заборонені вигадані факти, потрібні PLACEHOLDER-и.
- Decision: Весь контент та PLACEHOLDER-и винесено в один файл.
- Consequences: Просте редагування без пошуку по коду.

## ADR-003: Відкриття модалки через `#quote`
- Date: 2026-01-17
- Status: Accepted
- Context: CTA має відкривати модалку без зайвого клієнтського JS.
- Decision: Використано hash-навігацію з прослуховуванням `hashchange`.
- Consequences: CTA працює навіть без додаткового контексту стану.

## ADR-004: GitHub Pages як безкоштовний деплой
- Date: 2026-01-17
- Status: Accepted
- Context: Потрібен безкоштовний хостинг без серверного середовища.
- Decision: Використано Next.js static export (`output: export`) з basePath та GitHub Actions.
- Consequences: `/api/lead` не доступний у Pages, тому додано mailto fallback або зовнішній endpoint.

## ADR-005: npm audit без force-оновлень
- Date: 2026-01-18
- Status: Accepted
- Context: `npm audit fix --force` піднімає Next/Eslint-config до несумісних major-версій.
- Decision: Не використовуємо `--force`, фіксуємо вразливості без breaking, додаємо `npm run audit:prod`.
- Consequences: Частина dev-уразливостей може залишатися до безпечного апдейту Next/ESLint.
