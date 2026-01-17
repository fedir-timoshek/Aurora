# CLIENT_EDIT_GUIDE

## Де змінювати контент
- Основний файл: `lib/content.ts`
- PLACEHOLDER-и:
  - `PLACEHOLDER_URL`
  - `PLACEHOLDER_WORK_HOURS`
  - `PLACEHOLDER_EMAIL`
  - `PLACEHOLDER_PRICE`

## Що змінювати
- Назва компанії, адреса, телефон: `content.brand`
- Тексти секцій: `content.hero`, `content.services`, тощо
- FAQ, сценарії, теги: відповідні блоки в `content`

## SEO
- Title/description задані в `app/layout.tsx` (українською).
- Canonical URL береться з `content.brand.url`.

## Інтеграції форми
- Налаштування через `.env`:
  - `EMAIL_TO`
  - `TELEGRAM_BOT_TOKEN`
  - `TELEGRAM_CHAT_ID`
  - `CRM_ENDPOINT`

## GitHub Pages
- `NEXT_PUBLIC_SITE_URL` може автоматично встановлюватися в CI або вручну.
- `NEXT_PUBLIC_BASE_PATH` потрібен для репозиторіїв типу `owner/repo`.
- `NEXT_PUBLIC_FORM_ENDPOINT` дозволяє надсилати форму на зовнішній endpoint.
- Якщо endpoint не заданий, для Pages використовується mailto на `content.brand.email`.
