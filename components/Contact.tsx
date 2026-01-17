"use client";

import { useState } from "react";
import LeadForm from "@/components/LeadForm";
import { content } from "@/lib/content";
import PresentHints from "@/components/PresentHints";

const Contact = () => {
  const [showMap, setShowMap] = useState(false);
  const mapQuery = encodeURIComponent(content.brand.address);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 9: Контакти" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{content.contact.title}</h2>
          <p className="mt-4 text-base text-slate-200">{content.contact.subtitle}</p>
          <div className="mt-8 space-y-4 text-sm text-slate-200">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Телефон</p>
              <a
                href={`tel:${content.brand.phoneHref}`}
                className="mt-2 inline-flex text-base font-semibold text-white transition hover:text-neon-200"
              >
                {content.brand.phoneDisplay}
              </a>
            </div>
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
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-night-950/70 p-6">
            <h3 className="text-lg font-semibold text-white">{content.contact.formTitle}</h3>
            <p className="mt-2 text-sm text-slate-300">
              {content.contact.subtitle}
            </p>
            <LeadForm className="mt-6" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-night-950/70 p-6">
            <h3 className="text-lg font-semibold text-white">Карта</h3>
            <p className="mt-2 text-sm text-slate-300">
              Перевірте локацію перед візитом або зустріччю.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-night-900/60">
              {showMap ? (
                <iframe
                  title="Мапа з локацією"
                  src={mapEmbedUrl}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-4 text-center text-sm text-slate-300">
                  <p>Карта завантажується за запитом.</p>
                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="rounded-full border border-neon-400/60 bg-neon-500/20 px-4 py-2 text-sm font-semibold text-neon-200 transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
                  >
                    {content.contact.showMap}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-night-950/70 p-6 text-sm text-slate-300">
            <p>
              Графік роботи: <span className="text-white">{content.brand.workHours}</span>
            </p>
            <p className="mt-2">
              Email: <span className="text-white">{content.brand.email}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
