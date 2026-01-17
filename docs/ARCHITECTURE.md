# ARCHITECTURE

## App Router
- `app/layout.tsx`: metadata, шрифти, JSON-LD.
- `app/page.tsx`: композиція секцій.
- `app/api/lead/route.ts`: прийом ліда.
- `next.config.ts`: static export, basePath для GitHub Pages.

## Компоненти
- Server components за замовчуванням.
- Client: модалка, форма, FAQ accordion, scrollspy, process path.

## Структура
- `components/`: секції та UI.
- `lib/`: контент, утиліти, schema.
- `public/svg`: локальні SVG.
- `docs/`: проектна документація.

## Межі client/server
- Framer Motion та RHF у клієнтських компонентах.
- Статичні секції в серверних компонентах.

## GitHub Pages
- Використовується `output: export` та `NEXT_PUBLIC_BASE_PATH`.
- `/api/lead` доступний лише на повному сервері; для Pages діє mailto fallback або зовнішній endpoint.
- У CI API routes тимчасово прибираються перед static build.
