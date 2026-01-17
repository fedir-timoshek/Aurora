import { CheckCircle2 } from "lucide-react";
import { content } from "@/lib/content";
import { FadeUp, RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const ValueProps = () => {
  return (
    <section id="value" className="relative bg-night-950 py-20">
      <PresentHints label="Секція 3: Переваги" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeUp>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            {content.valueProps.title}
          </h2>
        </FadeUp>
        <RevealLine className="mt-6 h-px w-20 bg-gradient-to-r from-neon-400/80 to-transparent" />
        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2">
          {content.valueProps.items.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-night-900/60 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 text-neon-300" aria-hidden="true" />
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValueProps;
