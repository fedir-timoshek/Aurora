import { Truck, Route, Package, ClipboardList, Wrench } from "lucide-react";
import { content } from "@/lib/content";
import { StaggerContainer, StaggerItem } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const icons = [Truck, Package, Route, ClipboardList, Wrench];

const Services = () => {
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-night-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:rotate-[0.35deg] hover:border-neon-400/60 hover:shadow-glow focus-within:border-neon-400/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 via-transparent to-aurora-400/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-400/40 bg-night-900 text-neon-300">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-slate-300">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
