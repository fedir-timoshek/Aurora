import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { content } from "@/lib/content";

export const metadata = {
  title: "Політика обробки персональних даних — Аврора Авто",
  description:
    "Як ТОВ «Аврора Авто» обробляє персональні дані під час звернень через сайт."
};

export default function PrivacyPage() {
  const { privacy } = content.legal;

  return (
    <div className="min-h-screen bg-night-950 text-white">
      <Navbar />
      <main id="main" className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-300">Документи</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{privacy.title}</h1>
        <p className="mt-4 text-base text-slate-300">{privacy.intro}</p>
        <div className="mt-10 space-y-8">
          {privacy.sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-white/10 bg-night-900/60 p-6">
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-neon-300/80" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
