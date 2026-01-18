# QA_REPORT

## Перевірки
- npm install: PASS (локально)
- npm run dev: NOT_RUN
- npm run check: PASS (lint, typecheck, build)
- Форма та /api/lead: NOT_RUN
- prefers-reduced-motion: NOT_RUN
- 404 та loading: NOT_RUN

## Нотатки
- `npm audit` показує 3 high у dev-залежностях (eslint plugin). Безпечний шлях: не використовувати `npm audit fix --force`.
- Для продакшн-перевірки використовуйте `npm run audit:prod`.
- Для GitHub Pages використовуйте workflow `Deploy to GitHub Pages`.
