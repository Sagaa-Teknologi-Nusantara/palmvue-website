"use client";

import * as React from "react";

interface DemoPhoneMockupProps {
  children: React.ReactNode;
}

export function DemoPhoneMockup({ children }: DemoPhoneMockupProps) {
  return (
    <div className="relative w-[280px] h-[520px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden flex flex-col">
      {/* Notch */}
      <div className="bg-slate-900 h-8 w-full flex justify-center relative z-20 shrink-0">
        <div className="absolute top-0 w-24 h-6 bg-black rounded-b-xl" />
      </div>
      {/* Screen Content - calculated height to account for notch */}
      <div
        className="bg-slate-50 flex-1 flex flex-col overflow-hidden"
        style={{ height: "calc(100% - 2rem)" }}
      >
        {children}
      </div>
    </div>
  );
}
