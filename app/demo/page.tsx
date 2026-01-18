"use client";

import { InteractiveDemo } from "./components/InteractiveDemo";
import { RequestDemoSection } from "./components/RequestDemoSection";

export default function DemoPage() {
  return (
    <>
      <InteractiveDemo />
      <RequestDemoSection />
    </>
  );
}
