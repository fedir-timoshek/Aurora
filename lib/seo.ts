import { content } from "@/lib/content";

export const getLocalBusinessJsonLd = () => {
  const brand = content.brand;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.legalName,
    url: brand.url,
    telephone: brand.phoneDisplay,
    areaServed: ["Kyiv, Ukraine", "Ukraine"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Голосіївський проспект, 130/57",
      addressLocality: "Київ",
      addressCountry: "UA",
      postalCode: "03127"
    }
  };
};
