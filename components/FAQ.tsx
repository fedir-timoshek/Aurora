"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import PresentHints from "@/components/PresentHints";
import { RevealLine, StaggerContainer, StaggerItem } from "@/components/Motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-night-900 py-20">
      <PresentHints label="Секція 8: FAQ" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{content.faq.title}</h2>
        <RevealLine className="mt-4 h-px w-28 bg-gradient-to-r from-neon-400/90 via-neon-300/50 to-transparent" />
        <StaggerContainer className="mt-6 space-y-4">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <StaggerItem key={item.question}>
                <div className="rounded-2xl border border-white/10 bg-night-950/70">
                  <button
                    type="button"
                    id={questionId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
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
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    className={cn(
                      "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                      isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
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
