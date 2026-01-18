"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Cog, Sparkles } from "lucide-react";
import {
  ANALYTICS_CAPABILITIES,
  TRACEABILITY_FEATURES,
  WORKFLOW_FEATURES,
} from "../constants/product";
import {
  AuditTrailVisual,
  AIChatbotVisual,
  WorkflowBuilderVisual,
} from "../components/Visuals";

export function Analytics() {
  return (
    <section
      id="analytics"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Highlighted Feature
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Analytics & AI Chatbot
              </h2>
            </div>
          </div>
          <p className="text-lg text-slate-400">
            Turn your operational data into actionable insights. Ask questions
            in plain language and get instant answers.
          </p>
        </div>

        {/* AI Chatbot Visual */}
        <div className="max-w-2xl mx-auto mb-16">
          <AIChatbotVisual />
        </div>

        {/* Analytics Capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
              <Sparkles className="w-4 h-4" />
              Highlighted Feature
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Traceability & Audit
                </h2>
              </div>
            </div>
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Visual */}
          <div className="order-2 lg:order-1 mt-12 lg:mt-0">
            <WorkflowBuilderVisual />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Highlighted Feature
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Cog className="w-7 h-7 text-orange-600" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Configurable Workflows
                </h2>
              </div>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              PalmVue adapts to how you work, not the other way around.
              Configure workflows through the admin panel — no coding required.
            </p>

            <div className="space-y-6">
              {WORKFLOW_FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-orange-600" />
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
        </div>
      </div>
    </section>
  );
}
