# Аврора Авто — Landing

Односторінковий сайт на Next.js (App Router) з TailwindCSS, Framer Motion та формою заявок.

## Запуск

```bash
npm install
npm run dev
```

Після `npm install` рекомендовано закоммітити `package-lock.json` для стабільних CI-збірок.

## Скрипти

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run format`
- `npm run check`

## Контент

Увесь текст і PLACEHOLDER-и зберігаються у `lib/content.ts`.

## ENV

Див. `.env.example` для опційних інтеграцій `/api/lead`.

## GitHub Pages (безкоштовний деплой)

1. Запуште репозиторій у GitHub.
2. Увімкніть Pages для гілки `main` через GitHub Actions.
3. Workflow `.github/workflows/deploy.yml` збудує статичний експорт у `out/`.

Для Pages автоматично встановлюються:
- `NEXT_PUBLIC_BASE_PATH`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_DEPLOY_TARGET=github-pages`

Якщо потрібна форма на Pages, налаштуйте `NEXT_PUBLIC_FORM_ENDPOINT` у GitHub Secrets або залиште mailto fallback.

## Перевірка перед релізом

```bash
npm run check
```
