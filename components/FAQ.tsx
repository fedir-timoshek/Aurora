"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import PresentHints from "@/components/PresentHints";
import { RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 8: FAQ" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{content.faq.title}</h2>
        <RevealLine className="mt-6 h-px w-20 bg-gradient-to-r from-neon-400/80 to-transparent" />
        <StaggerContainer className="mt-10 space-y-4">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <StaggerItem key={item.question}>
                <div className="rounded-2xl border border-white/10 bg-night-950/70">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-neon-300 transition",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="px-6 pb-4 text-sm text-slate-300">{item.answer}</div>
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

export default FAQ;
