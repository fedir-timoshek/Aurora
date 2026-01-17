import Image from "next/image";
import { content } from "@/lib/content";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const Hero = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="top" className="relative overflow-hidden bg-night-950">
      <PresentHints label="Секція 1: Hero" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `url(${basePath}/svg/aurora-veil.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-aurora-grid opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 animate-aurora-shift opacity-70" aria-hidden="true" />
      <div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-neon-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-aurora-400/20 blur-3xl" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${basePath}/svg/mesh.svg)`,
          backgroundSize: "640px 360px",
          backgroundPosition: "center"
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-20 md:flex-row md:items-center md:pt-28">
        <div className="flex-1">
          <StaggerContainer>
            <StaggerItem>
              <p className="text-xs uppercase tracking-[0.4em] text-neon-300">
                Логістика та автосервіс
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-xl text-base text-slate-200 md:text-lg">
                {content.hero.subtitle}
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="rounded-full border border-neon-400/70 bg-neon-500/30 px-6 py-3 text-sm font-semibold text-neon-100 shadow-glow transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
                >
                  {content.hero.primaryCta}
                </a>
                <a
                  href={`tel:${content.brand.phoneHref}`}
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon-300 hover:text-neon-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
                >
                  {content.hero.secondaryCta}
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeUp>
            <p className="mt-10 max-w-xl text-sm text-slate-300">{content.hero.note}</p>
          </FadeUp>
        </div>
        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900/60 p-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-neon-500/10" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl border border-neon-400/40 bg-night-800 p-2 shadow-glow">
                  <Image src="/svg/truck.svg" alt="Іконка вантажівки" width={32} height={32} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Стратегічна логістика</p>
                  <p className="text-lg font-semibold text-white">Маршрут під ваші задачі</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-night-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neon-300">Фокус</p>
                <p className="mt-2 text-sm text-slate-200">
                  Контрольований процес, чиста комунікація, технічна готовність транспорту.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-night-900/80 px-4 py-3">
                <span className="text-sm text-slate-300">Географія</span>
                <span className="text-sm font-semibold text-white">Київ • Україна</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 animate-float-slow rounded-full border border-neon-400/40 bg-neon-500/20 blur-xl md:block" />
        </div>
      </div>
      <Image
        src="/svg/cityline.svg"
        alt="Силует нічного міста"
        width={1400}
        height={240}
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-80"
        priority
      />
    </section>
  );
};

export default Hero;
