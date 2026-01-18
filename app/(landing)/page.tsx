import { Hero } from "@/app/(landing)/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyPalmVue } from "@/components/sections/WhyPalmVue";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Benefits />
      <HowItWorks />
      <WhyPalmVue />
      <CallToAction />
      <Footer />
    </main>
  );
}
