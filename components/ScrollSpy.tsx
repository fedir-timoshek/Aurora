"use client";

import { ReactNode } from "react";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";

interface ScrollSpyProps {
  ids: string[];
  children: (activeId: string | null) => ReactNode;
}

const ScrollSpy = ({ ids, children }: ScrollSpyProps) => {
  const activeId = useScrollSpy(ids);

  return <>{children(activeId)}</>;
};

export default ScrollSpy;
