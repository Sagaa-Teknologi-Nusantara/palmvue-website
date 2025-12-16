import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { Innovation } from "@/components/sections/Innovation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Platform />
      <Innovation />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
}
