"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { content } from "@/lib/content";

const QuoteModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncWithHash = () => {
      setOpen(window.location.hash === "#quote");
    };

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);

    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const closeModal = () => {
    setOpen(false);
    if (window.location.hash === "#quote") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-night-950 p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-night-900/80 p-2 text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
          aria-label="Закрити модальне вікно"
        >
          <X size={18} />
        </button>
        <h2 id="quote-title" className="text-2xl font-semibold text-white">
          {content.contact.formTitle}
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Опишіть задачу — ми підготуємо пропозицію та зв&apos;яжемося з вами.
        </p>
        <div className="mt-6">
          <LeadForm variant="modal" />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
