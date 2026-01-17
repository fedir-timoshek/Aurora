import { CheckCircle2 } from "lucide-react";
import { content } from "@/lib/content";
import { FadeUp } from "@/components/Motion";
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
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.valueProps.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-night-900/60 p-5"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-neon-300" aria-hidden="true" />
              <p className="text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
