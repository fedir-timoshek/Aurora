"use client";

import { useEffect, useMemo, useState } from "react";

interface ScrollSpyOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollSpy = (sectionIds: string[], options: ScrollSpyOptions = {}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ids = useMemo(() => sectionIds, [sectionIds]);

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: options.rootMargin ?? "-35% 0px -55% 0px",
        threshold: options.threshold ?? [0, 0.25, 0.5, 0.75, 1]
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, options.rootMargin, options.threshold]);

  return activeId;
};
