"use client";

import { useEffect, useState } from "react";

interface PresentHintsProps {
  label: string;
}

const PresentHints = ({ label }: PresentHintsProps) => {
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    const updateFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      setIsPresent(params.get("present") === "1");
    };

    updateFromLocation();
    window.addEventListener("popstate", updateFromLocation);
    window.addEventListener("hashchange", updateFromLocation);

    return () => {
      window.removeEventListener("popstate", updateFromLocation);
      window.removeEventListener("hashchange", updateFromLocation);
    };
  }, []);

  useEffect(() => {
    if (isPresent) {
      document.body.dataset.present = "true";
    } else {
      delete document.body.dataset.present;
    }

    return () => {
      delete document.body.dataset.present;
    };
  }, [isPresent]);

  if (!isPresent) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute -top-4 left-4 rounded-full border border-neon-400/40 bg-night-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neon-300">
      {label}
    </div>
  );
};

export default PresentHints;
