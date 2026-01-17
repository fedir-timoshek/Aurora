"use client";
import LeadForm from "@/components/LeadForm";
import { content } from "@/lib/content";
import PresentHints from "@/components/PresentHints";
import { FadeUp, RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";

const Contact = () => {
  const mapQuery = encodeURIComponent(content.brand.address);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 9: Контакти" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <FadeUp>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{content.contact.title}</h2>
          </FadeUp>
          <RevealLine className="mt-6 h-px w-24 bg-gradient-to-r from-neon-400/80 to-transparent" />
          <FadeUp>
            <p className="mt-4 text-base text-slate-200">{content.contact.subtitle}</p>
          </FadeUp>
          <StaggerContainer className="mt-8 space-y-4 text-sm text-slate-200">
            <StaggerItem>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Телефон</p>
                <a
                  href={`tel:${content.brand.phoneHref}`}
                  className="mt-2 inline-flex text-base font-semibold text-white transition hover:text-neon-200"
                >
                  {content.brand.phoneDisplay}
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Адреса</p>
                <p className="mt-2 text-base text-slate-200">{content.brand.address}</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-neon-400/60 hover:text-neon-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
                >
                  {content.contact.mapCta}
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeUp>
            <div className="mt-10 rounded-3xl border border-white/10 bg-night-950/70 p-6">
              <h3 className="text-lg font-semibold text-white">{content.contact.formTitle}</h3>
              <p className="mt-2 text-sm text-slate-300">{content.contact.subtitle}</p>
              <LeadForm className="mt-6" />
            </div>
          </FadeUp>
        </div>
        <div className="space-y-4">
          <FadeUp>
            <div className="rounded-3xl border border-white/10 bg-night-950/70 p-6">
              <h3 className="text-lg font-semibold text-white">Карта</h3>
              <p className="mt-2 text-sm text-slate-300">
                Перевірте локацію перед візитом або зустріччю.
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-night-900/60">
                <iframe
                  title="Мапа з локацією"
                  src={mapEmbedUrl}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-night-950/70 p-6 text-sm text-slate-300">
              <p>
                Графік роботи: <span className="text-white">{content.brand.workHours}</span>
              </p>
              <p className="mt-2">
                Email: <span className="text-white">{content.brand.email}</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Contact;
