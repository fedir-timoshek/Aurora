import { Phone, MessageSquareText } from "lucide-react";
import { content } from "@/lib/content";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 md:hidden">
      <div className="flex w-full max-w-sm gap-3 rounded-full border border-white/10 bg-night-950/90 p-2 shadow-glow">
        <a
          href={`tel:${content.brand.phoneHref}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
        >
          <Phone size={16} aria-hidden="true" />
          Дзвінок
        </a>
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-neon-400/60 bg-neon-500/20 px-4 py-2 text-sm font-semibold text-neon-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
        >
          <MessageSquareText size={16} aria-hidden="true" />
          Розрахунок
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
