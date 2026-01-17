# CHANGELOG

All notable changes to this project will be documented in this file.

## [0.2.10] - 2026-01-17
### Changed
- Додано фактичний графік роботи у контенті та документації.

## [0.2.9] - 2026-01-17
### Fixed
- Замінено `<img>` на `next/image` в ключових блоках для чистого lint у CI.

## [0.2.8] - 2026-01-17
### Fixed
- Оптимізовано hero: декоративний cityline не впливає на доступність і не блокує завантаження.
- FAQ: збільшена висота для відкритих відповідей.
- Додано фокус-стили для мобільних CTA.
### Changed
- Легка поліровка текстів у `lib/content.ts`.
- QA/Release чекліст і README оновлено.

## [0.2.7] - 2026-01-17
### Fixed
- Прибрано зайві SVG-файли та невикористану утиліту.

## [0.2.6] - 2026-01-17
### Added
- Додано `package-lock.json` для стабільних CI-збірок.

## [0.2.5] - 2026-01-17
### Fixed
- Оновлено Next.js та eslint-config-next до 14.2.8.

## [0.2.4] - 2026-01-17
### Fixed
- FAQ: відповіді приховані за замовчуванням, додано aria-controls.

## [0.2.3] - 2026-01-17
### Fixed
- FAQ: вирівняні відступи та посилено акцентну лінію під заголовком.

## [0.2.2] - 2026-01-17
### Added
- Scroll animations: stagger reveals для карток і лінії-акценти під заголовками.

## [0.2.1] - 2026-01-17
### Added
- Анімований екран завантаження з вантажівкою.
- Сторінка 404 у стилі бренду.

## [0.2.0] - 2026-01-17
### Added
- Преміальна sweep-анімація для hero та карток сервісів.

## [0.1.9] - 2026-01-17
### Fixed
- Контактна карта тепер завантажується автоматично.
- Cityline у hero більше не перекриває текст.

## [0.1.8] - 2026-01-17
### Added
- Набір локальних SVG-ілюстрацій для сервісів і автосервісу.

## [0.1.7] - 2026-01-17
### Added
- Локальні SVG-ілюстрації для hero (aurora veil, cityline, mesh).

## [0.1.6] - 2026-01-17
### Fixed
- Static export: прибрано `useSearchParams` з PresentHints.
- SEO: додано `metadataBase` для коректного OG/Twitter.
- OG image: сумісний градієнт для `@vercel/og`.

## [0.1.5] - 2026-01-17
### Fixed
- Lint: екранування апострофа в тексті модалки.
- TS: додано `.next/types` до `tsconfig.json` для стабільного lint у CI.

## [0.1.4] - 2026-01-17
### Fixed
- GitHub Actions lint: замінено `next.config.ts` на `next.config.mjs`.

## [0.1.3] - 2026-01-17
### Fixed
- GitHub Actions build: fallback to npm install when lockfile is missing.

## [0.1.2] - 2026-01-17
### Added
- `.gitignore` for Git cleanup.

## [0.1.1] - 2026-01-17
### Added
- GitHub Pages deployment workflow with static export.
- Base path and site URL configuration for Pages.
- Mailto fallback for form on static hosting.

## [0.1.0] - 2026-01-17
### Added
- Initial landing page with sections, modal form, and API route.
- SEO metadata, sitemap, robots, and JSON-LD.
- Documentation set in `docs/`.
