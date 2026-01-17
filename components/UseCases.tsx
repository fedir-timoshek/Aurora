import { content } from "@/lib/content";
import { FadeUp, RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const UseCases = () => {
  return (
    <section id="use-cases" className="relative bg-night-950 py-20">
      <PresentHints label="Секція 5: Сценарії" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeUp>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            {content.useCases.title}
          </h2>
        </FadeUp>
        <RevealLine className="mt-6 h-px w-24 bg-gradient-to-r from-neon-400/80 to-transparent" />
        <StaggerContainer className="mt-8 flex flex-wrap gap-3">
          {content.useCases.tags.map((tag) => (
            <StaggerItem key={tag}>
              <span className="rounded-full border border-white/10 bg-night-900/70 px-4 py-2 text-sm text-slate-200">
                {tag}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default UseCases;
