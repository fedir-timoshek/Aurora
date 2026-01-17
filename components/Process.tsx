"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import PresentHints from "@/components/PresentHints";
import { FadeUp, RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";

const Process = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="process" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 4: Процес" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-300">Процес</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          {content.process.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-slate-200">{content.process.subtitle}</p>
        <RevealLine className="mt-6 h-px w-24 bg-gradient-to-r from-neon-400/80 to-transparent" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <StaggerContainer className="space-y-6">
            {content.process.steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="rounded-2xl border border-white/10 bg-night-950/70 p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-400/40 bg-night-900 text-sm font-semibold text-neon-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-950/70 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Маршрут</p>
              <div className="mt-6 h-64">
                <svg
                  viewBox="0 0 400 240"
                  className="h-full w-full"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#22c5ff" />
                      <stop offset="100%" stopColor="#2dd78f" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M20 200 C80 160, 120 40, 200 60 C260 80, 280 160, 360 140"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="500"
                    strokeDashoffset={prefersReducedMotion ? 0 : 500}
                    initial={false}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <circle cx="20" cy="200" r="6" fill="#22c5ff" />
                  <circle cx="360" cy="140" r="8" fill="#2dd78f" />
                </svg>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                Візуалізація логіки руху: від стартової точки до фінішу без зайвих відхилень.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Process;
