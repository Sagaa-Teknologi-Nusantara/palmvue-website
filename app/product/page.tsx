import { Hero } from "./sections/Hero";
import { DigitalTracking, MobileApp, WebDashboard } from "./sections/Features";
import { Analytics, Traceability, Workflows } from "./sections/Highlights";
import { Audience, CallToAction } from "./sections/CallToAction";

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Hero />
      <DigitalTracking />
      <MobileApp />
      <WebDashboard />
      <Analytics />
      <Traceability />
      <Workflows />
      <Audience />
      <CallToAction />
    </div>
  );
}
