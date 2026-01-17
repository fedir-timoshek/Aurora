"use client";
import ScrollSpy from "@/components/ScrollSpy";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navIds = content.nav.map((item) => item.id);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-night-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-[0.08em] text-white">
          Аврора Авто
        </a>
        <ScrollSpy ids={navIds}>
          {(activeId) => (
            <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex" aria-label="Основна навігація">
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "relative transition hover:text-neon-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-400",
                    activeId === item.id ? "text-neon-300" : "text-slate-300"
                  )}
                  aria-current={activeId === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </ScrollSpy>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${content.brand.phoneHref}`}
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            {content.hero.secondaryCta}
          </a>
          <a
            href="#quote"
            className="rounded-full border border-neon-400/60 bg-neon-500/20 px-4 py-2 text-sm font-semibold text-neon-200 shadow-glow transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
          >
            {content.hero.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
