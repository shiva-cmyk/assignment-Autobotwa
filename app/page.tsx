// import { BackgroundOrbs } from "@/components/BackgroundOrbs";

import StripeGlobe from "@/components/StripeGlobe";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { PricingContact } from "@/components/PricingContact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <StripeGlobe />
      <Navbar />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <Hero />
        <div className="divider-glow mb-6 mt-4" />
        <Features />
        <Testimonials />
        <PricingContact />
      </main>
      <SiteFooter />
    </div>
  );
}