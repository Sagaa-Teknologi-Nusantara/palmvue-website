"use client";

import { motion } from "framer-motion";
import { FileCheck, WifiOff, Zap, Search } from "lucide-react";

const benefits = [
  {
    icon: FileCheck,
    title: "Eliminate Paper",
    description: "Reduce data entry errors by 90%. No more lost paperwork.",
    stat: "90%",
    statLabel: "Less Errors",
  },
  {
    icon: WifiOff,
    title: "Work Anywhere",
    description: "Offline-first mobile app. No dead zones in the plantation.",
    stat: "0",
    statLabel: "Downtime",
  },
  {
    icon: Search,
    title: "Trace Everything",
    description: "Any seed → source tree in seconds, not hours.",
    stat: "100%",
    statLabel: "Traceability",
  },
  {
    icon: Zap,
    title: "Faster Approvals",
    description: "Remote review. Days become minutes.",
    stat: "10x",
    statLabel: "Faster",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg text-slate-600">
            Transform your operations with measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center group hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <benefit.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-slate-900">
                  {benefit.stat}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {benefit.statLabel}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
