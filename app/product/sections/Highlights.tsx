"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Cog, MessageSquare } from "lucide-react";
import {
  AI_QUERY_EXAMPLES,
  ANALYTICS_CAPABILITIES,
  TRACEABILITY_FEATURES,
  WORKFLOW_FEATURES,
} from "../constants/product";
import { AuditTrailVisual } from "../components/Visuals";

export function Analytics() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            ✨ Highlighted Feature
          </div>
          <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bot className="w-7 h-7 text-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Analytics & AI Chatbot
          </h2>
          <p className="text-lg text-slate-400">
            Turn your operational data into actionable insights. Ask questions
            in plain language and get instant answers.
          </p>
        </div>

        {/* AI Query Examples */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {AI_QUERY_EXAMPLES.map((query, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-slate-300 italic">&quot;{query}&quot;</p>
            </motion.div>
          ))}
        </div>

        {/* Analytics Capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANALYTICS_CAPABILITIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Traceability() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              ✨ Highlighted Feature
            </div>
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Traceability & Audit Trail
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Every action is permanently recorded with who did it, when, and
              what changed. Meet EUDR, RSPO, and certification requirements with
              confidence.
            </p>

            <div className="space-y-6">
              {TRACEABILITY_FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <AuditTrailVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Workflows() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-6">
            ✨ Highlighted Feature
          </div>
          <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Cog className="w-7 h-7 text-orange-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Configurable Workflows
          </h2>
          <p className="text-lg text-slate-600">
            PalmVue adapts to how you work, not the other way around. Configure
            workflows through the admin panel — no coding required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_FEATURES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
