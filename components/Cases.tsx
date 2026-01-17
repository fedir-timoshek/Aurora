import { content } from "@/lib/content";
import { FadeUp } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const Cases = () => {
  return (
    <section id="cases" className="relative bg-night-950 py-20">
      <PresentHints label="Секція 7: Підхід" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeUp>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{content.cases.title}</h2>
        </FadeUp>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.cases.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-night-900/70 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
