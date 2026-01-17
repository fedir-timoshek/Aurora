import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MobileCTA from "@/components/MobileCTA";

const Services = dynamic(() => import("@/components/Services"));
const ValueProps = dynamic(() => import("@/components/ValueProps"));
const Process = dynamic(() => import("@/components/Process"));
const UseCases = dynamic(() => import("@/components/UseCases"));
const AutoService = dynamic(() => import("@/components/AutoService"));
const Cases = dynamic(() => import("@/components/Cases"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-night-950">
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Services />
        <ValueProps />
        <Process />
        <UseCases />
        <AutoService />
        <Cases />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <QuoteModal />
      <MobileCTA />
    </div>
  );
}
