"use client";

import { motion } from "framer-motion";
import { FileX, AlertTriangle, ClipboardList } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Lost Records",
    description:
      "Critical data gets lost, duplicated, or damaged. Finding historical records takes hours, not seconds.",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent Quality",
    description:
      "Different teams, different methods. Quality suffers and certifications are at risk.",
  },
  {
    icon: ClipboardList,
    title: "Audit Nightmares",
    description:
      "When regulators ask for proof, you scramble for days instead of seconds.",
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-lg text-slate-600">
            Palm seed operations face unique challenges that generic software
            can&apos;t solve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
