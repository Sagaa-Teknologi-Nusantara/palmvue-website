"use client";

import { motion } from "framer-motion";
import { Settings, Smartphone, CheckCircle, Search } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Configure",
    description: "Admins set up workflows and processes in the dashboard.",
    platform: "Web Dashboard",
  },
  {
    icon: Smartphone,
    title: "Capture",
    description: "Field workers scan and submit data via mobile app.",
    platform: "Mobile App",
  },
  {
    icon: CheckCircle,
    title: "Approve",
    description: "Supervisors review and approve submissions remotely.",
    platform: "Web Dashboard",
  },
  {
    icon: Search,
    title: "Trace",
    description: "Generate audit reports and trace any entity instantly.",
    platform: "Web Dashboard",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            A simple 4-step workflow from configuration to complete
            traceability.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-emerald-100" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-slate-50 pt-8 md:pt-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-emerald-100 flex items-center justify-center mb-6 relative z-10 shadow-sm">
                    <step.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                    {step.platform}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
