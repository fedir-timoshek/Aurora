# MOTION_SPEC

## Принципи
- Ключові анімації через Framer Motion.
- Решта — CSS transitions.
- prefers-reduced-motion вимикає reveal/scroll motion.

## Таймінги
- Reveal: 300-400ms, ease-out.
- Stagger: 100ms між елементами.
- Hover: 200-300ms.

## Реалізація
- Hero: stagger reveal.
- Section reveal: FadeUp.
- Process: path draw (stroke-dashoffset).
- Background: легкий aurora-shift (єдине нескінченне).
