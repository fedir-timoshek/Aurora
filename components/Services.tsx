import Image from "next/image";

import { content } from "@/lib/content";
import { RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const Services = () => {
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const icons = [
    { src: `${assetPrefix}/svg/illus/truck.svg`, alt: "Ілюстрація вантажівки" },
    { src: `${assetPrefix}/svg/illus/box.svg`, alt: "Ілюстрація вантажу" },
    { src: `${assetPrefix}/svg/illus/route.svg`, alt: "Ілюстрація маршруту" },
    { src: `${assetPrefix}/svg/illus/clipboard.svg`, alt: "Ілюстрація контролю процесу" },
    { src: `${assetPrefix}/svg/illus/service.svg`, alt: "Ілюстрація технічного сервісу" }
  ];

  return (
    <section id="services" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 2: Послуги" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <StaggerContainer>
          <StaggerItem>
            <p className="text-xs uppercase tracking-[0.4em] text-neon-300">Послуги</p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              {content.services.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-2xl text-base text-slate-200">
              {content.services.subtitle}
            </p>
          </StaggerItem>
        </StaggerContainer>
        <RevealLine className="mt-8 h-px w-24 bg-gradient-to-r from-neon-400/80 to-transparent" />
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service, index) => {
            const icon = icons[index % icons.length];

            return (
              <StaggerItem key={service.title}>
                <div className="card-sweep group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-night-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:rotate-[0.35deg] hover:border-neon-400/60 hover:shadow-glow focus-within:border-neon-400/60">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 via-transparent to-aurora-400/10 opacity-0 transition group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="sweep-hover h-full w-1/2 bg-gradient-to-r from-transparent via-neon-300/20 to-transparent" />
                  </div>
                  <div className="relative space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neon-400/40 bg-night-900/80 shadow-glow">
                      <Image src={icon.src} alt={icon.alt} width={40} height={40} unoptimized />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-300">{service.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
