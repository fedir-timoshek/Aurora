import Link from "next/link";
import { content } from "@/lib/content";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-night-950 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">{content.brand.legalName}</p>
          <p className="mt-2 text-xs text-slate-500">{content.footer.legal}</p>
        </div>
        <div className="space-y-2 text-xs">
          <p>{content.brand.address}</p>
          <p>{content.brand.phoneDisplay}</p>
          <div className="flex flex-wrap gap-4">
            {content.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neon-200 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>
            © {new Date().getFullYear()} {content.brand.name}. {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
