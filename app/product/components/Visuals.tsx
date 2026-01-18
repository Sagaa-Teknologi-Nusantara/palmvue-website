"use client";

import { motion } from "framer-motion";
import {
  WifiOff,
  QrCode,
  Shield,
  Bot,
  Send,
  BarChart3,
  GripVertical,
  Plus,
  Check,
} from "lucide-react";
import { AUDIT_ENTRIES } from "../constants/product";

export function MobileAppVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-[280px] mx-auto"
    >
      <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
        <div className="bg-white rounded-4xl overflow-hidden">
          {/* Status Bar */}
          <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-xs text-slate-500">
            <span>9:41</span>
            <div className="flex gap-1">
              <WifiOff className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium">Offline</span>
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-slate-900">
                  Field Tasks
                </div>
                <div className="text-sm text-slate-500">Block A-12</div>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <QrCode className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            {/* Task Cards */}
            {["Pollination Check", "Harvest Record", "Quality Grade"].map(
              (task, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-slate-900">{task}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${i === 0 ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"}`}
                    >
                      {i === 0 ? "Active" : "Pending"}
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{
                        width: i === 0 ? "60%" : i === 1 ? "30%" : "0%",
                      }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function DashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
    >
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg" />
          <div className="w-24 h-2 bg-slate-200 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-slate-100 rounded-full" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 bg-slate-50/50">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {["Trees", "Pollen", "Seeds", "Pending"].map((label, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 border border-slate-100"
            >
              <div className="text-2xl font-bold text-slate-900">
                {[1247, 89, 3421, 12][i]}
              </div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Table Preview */}
        <div className="bg-white rounded-lg border border-slate-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
            <span className="font-medium text-slate-900">
              Recent Submissions
            </span>
            <div className="w-20 h-2 bg-slate-100 rounded" />
          </div>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="px-4 py-3 border-b border-slate-50 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-50 rounded" />
                <div className="w-32 h-2 bg-slate-100 rounded" />
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${i === 2 ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
              >
                {i === 2 ? "Pending" : "Approved"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function AuditTrailVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
          <Shield className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <div className="font-semibold text-slate-900">Audit Trail</div>
          <div className="text-sm text-slate-500">
            Immutable record of all actions
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {AUDIT_ENTRIES.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              {index < AUDIT_ENTRIES.length - 1 && (
                <div className="w-0.5 h-full bg-slate-200 mt-1" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-slate-900">
                    {entry.action}
                  </span>
                  <div className="text-sm text-slate-500">
                    {entry.user} • {entry.entity}
                  </div>
                </div>
                <span className="text-xs text-slate-400">{entry.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function AIChatbotVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div className="bg-slate-900 px-4 py-3 flex items-center gap-3 border-b border-slate-700">
        <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
          <Bot className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">PalmVue AI</div>
          <div className="text-xs text-slate-400">
            Ask anything about your data
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-4 min-h-[280px]">
        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-end"
        >
          <div className="bg-cyan-600 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[80%] text-sm">
            How many seeds were produced last month?
          </div>
        </motion.div>

        {/* AI Response */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
            <Bot className="w-3 h-3 text-cyan-400" />
          </div>
          <div className="bg-slate-700/50 text-slate-200 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
            <p className="text-sm mb-3">Based on your production data:</p>
            <div className="bg-slate-800 rounded-lg p-3 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-slate-400">December 2025</span>
              </div>
              <div className="text-2xl font-bold text-white">3,421 seeds</div>
              <div className="text-xs text-emerald-400">
                ↑ 12% from November
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Block A-12 was the top producer with 892 seeds.
            </p>
          </div>
        </motion.div>

        {/* User Follow-up */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-end"
        >
          <div className="bg-cyan-600 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[80%] text-sm">
            Which trees need health verification?
          </div>
        </motion.div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="bg-slate-700/50 rounded-xl px-4 py-3 flex items-center gap-3 border border-slate-600">
          <input
            type="text"
            placeholder="Ask about your data..."
            className="bg-transparent text-sm text-slate-300 placeholder:text-slate-500 flex-1 outline-none"
            disabled
          />
          <button className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function WorkflowBuilderVisual() {
  const steps = [
    {
      name: "Isolate Inflorescence",
      status: "complete",
      color: "bg-emerald-500",
    },
    { name: "Collect Pollen", status: "complete", color: "bg-emerald-500" },
    { name: "Grade Quality", status: "current", color: "bg-orange-500" },
    { name: "Submit for Approval", status: "pending", color: "bg-slate-300" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
            <GripVertical className="w-3 h-3 text-orange-600" />
          </div>
          <span className="text-sm font-medium text-slate-900">
            Workflow Builder
          </span>
        </div>
        <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
          No Code
        </span>
      </div>

      {/* Workflow Steps */}
      <div className="p-4">
        <div className="text-xs text-slate-500 mb-3">Pollination Process</div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                step.status === "current"
                  ? "border-orange-200 bg-orange-50"
                  : "border-slate-100 bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <GripVertical className="w-4 h-4 text-slate-300 cursor-grab" />
                <div
                  className={`w-5 h-5 ${step.color} rounded-full flex items-center justify-center`}
                >
                  {step.status === "complete" ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : step.status === "current" ? (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  ) : (
                    <div className="w-2 h-2 bg-slate-100 rounded-full" />
                  )}
                </div>
              </div>
              <span
                className={`text-sm ${step.status === "pending" ? "text-slate-400" : "text-slate-700"}`}
              >
                {step.name}
              </span>
              <div className="ml-auto text-xs text-slate-400">
                Step {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Step Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-full mt-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm text-slate-400 flex items-center justify-center gap-2 hover:border-orange-300 hover:text-orange-500 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Step
        </motion.button>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 px-4 py-3 border-t border-slate-200">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>4 steps configured</span>
          <span className="text-emerald-600">✓ Auto-saved</span>
        </div>
      </div>
    </motion.div>
  );
}
