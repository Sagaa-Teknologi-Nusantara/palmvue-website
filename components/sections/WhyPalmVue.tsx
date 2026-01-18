"use client";

import { motion } from "framer-motion";
import { Leaf, WifiOff, Bot } from "lucide-react";

const differentiators = [
  {
    icon: Leaf,
    title: "Built for Palm",
    description:
      "Not a generic ERP. Every feature designed specifically for palm seed operations.",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description:
      "Your field teams can work anywhere, even in remote areas without connectivity.",
  },
  {
    icon: Bot,
    title: "AI-Powered Insights",
    description:
      "Ask questions in plain language and get instant answers from your data.",
  },
];

export function WhyPalmVue() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-emerald-400">PalmVue</span>?
          </h2>
          <p className="text-lg text-slate-400">
            We built the platform that palm operations deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl text-center"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
