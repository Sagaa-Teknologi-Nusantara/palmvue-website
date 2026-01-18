"use client";

import { motion } from "framer-motion";
import { WifiOff, QrCode, Shield } from "lucide-react";
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
