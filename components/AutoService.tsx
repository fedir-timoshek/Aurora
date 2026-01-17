import { content } from "@/lib/content";
import { FadeUp } from "@/components/Motion";
import PresentHints from "@/components/PresentHints";

const AutoService = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="autoservice" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 6: Автосервіс" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <FadeUp>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              {content.autoservice.title}
            </h2>
          </FadeUp>
          <p className="text-base text-slate-200">{content.autoservice.description}</p>
          <a
            href="#quote"
            className="inline-flex w-fit items-center rounded-full border border-neon-400/60 bg-neon-500/20 px-5 py-2 text-sm font-semibold text-neon-200 shadow-glow transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
          >
            {content.autoservice.cta}
          </a>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-950/70 p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-500/10 via-transparent to-aurora-400/10" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neon-400/40 bg-night-900/80 shadow-glow">
                <img
                  src={`${basePath}/svg/illus/service.svg`}
                  alt="Ілюстрація сервісу"
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="text-sm text-slate-300">Додатковий сервіс</p>
                <p className="text-lg font-semibold text-white">Підтримка автопарку</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              Робимо акцент на технічну готовність транспорту та швидку реакцію на запити.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoService;
