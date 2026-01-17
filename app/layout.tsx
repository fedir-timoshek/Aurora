import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";
import { content } from "@/lib/content";
import { getLocalBusinessJsonLd } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Аврора Авто — вантажні перевезення та автосервіс у Києві",
  description:
    "ТОВ «Аврора Авто» організовує вантажні перевезення, переїзди та супутні транспортні послуги. Логістика й автосервіс у Києві та Україні.",
  alternates: {
    canonical: content.brand.url
  },
  openGraph: {
    title: "Аврора Авто — вантажні перевезення та автосервіс",
    description:
      "Логістика, переїзди та автосервіс для бізнесу й приватних клієнтів. Київ, Україна.",
    url: content.brand.url,
    siteName: content.brand.name,
    locale: "uk_UA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Аврора Авто — вантажні перевезення та автосервіс",
    description:
      "Логістика, переїзди та автосервіс для бізнесу й приватних клієнтів. Київ, Україна."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="uk" className={manrope.variable}>
      <body className={manrope.className}>
        <a href="#main" className="skip-link">
          Перейти до контенту
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
