"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { EntityCard, EntityData } from "@/components/sections/EntityCardNew";

const TREE_DATA: EntityData = {
  icon: "🌴",
  code: "TRE-001",
  badge: { text: "REGISTERED", variant: "success" },
  fields: [
    { label: "Location", value: "Block A, Row 5" },
    { label: "Variety", value: "Tenera" },
  ],
  workflowSteps: [
    { name: "Registered", status: "completed" },
    { name: "Discovery", status: "current" },
    { name: "Quality Verified", status: "pending" },
  ],
};

const INFLORESCENCE_DATA: EntityData = {
  icon: "🌸",
  code: "INF-001",
  badge: { text: "AUTO-CREATED", variant: "info" },
  fields: [
    { label: "Parent", value: "TRE-001" },
    { label: "Status", value: "Active", highlight: true },
  ],
};

const SEED_DATA: EntityData = {
  icon: "🌱",
  code: "SEED-4521",
  badge: { text: "VERIFIED", variant: "success" },
  fields: [
    { label: "Batch", value: "#2940" },
    { label: "Quantity", value: "500 units" },
  ],
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Abstract Visuals */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Audit-Ready Compliance Standard
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Infrastructure for{" "}
                <span className="text-palmvue-green">trusted</span> palm seed
                production.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                The only end-to-end traceability platform designed for certified
                producers. Track lineage from pollination to shipment, ensuring
                genetic integrity and regulatory compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-palmvue-green hover:bg-palmvue-green-dark text-white px-8 h-12 text-base shadow-lg shadow-palmvue-green/25"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  Run a Pilot
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                  <span>SNI 8211 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                  <span>Offline First</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* End-to-End Visual */}
          <div className="flex-1 w-full relative perspective-[2000px]">
            <motion.div
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative min-h-[500px] flex items-center justify-center -ml-12 lg:ml-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Connected Flow Container */}
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                {/* Connecting Line - Data Stream */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0 p-8"
                  overflow="visible"
                >
                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop
                        offset="50%"
                        stopColor="#10b981"
                        stopOpacity="0.5"
                      />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 50 80 C 150 80, 200 200, 300 280"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 300 280 C 400 360, 450 150, 550 80"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </svg>

                {/* Node 1: Tree (Data Card) */}
                <motion.div
                  className="absolute top-10 left-0 hover:z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <EntityCard
                    data={TREE_DATA}
                    className="transform transition hover:scale-105 duration-300"
                    workflowBaseDelay={0.7}
                  />
                </motion.div>

                {/* Node 2: Inflorescence (Data Card) */}
                <motion.div
                  className="absolute top-[280px] left-1/2 -translate-x-1/2 hover:z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <EntityCard
                    data={INFLORESCENCE_DATA}
                    className="transform transition hover:scale-105 duration-300 -ml-8"
                  />
                </motion.div>

                {/* Node 3: Seed (Data Card) */}
                <motion.div
                  className="absolute top-20 right-0 hover:z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <EntityCard
                    data={SEED_DATA}
                    className="transform transition hover:scale-105 duration-300"
                  />
                </motion.div>

                {/* Floating Data Packets - Abstract Particles only */}
                <motion.div
                  className="absolute top-0 left-32 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] z-30"
                  initial={{ opacity: 0 }}
                  animate={{
                    offsetDistance: "100%",
                    opacity: [0, 1, 1, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath: "path('M 50 80 C 150 80, 200 200, 300 280')",
                  }}
                />
                <motion.div
                  className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)] z-30"
                  initial={{ opacity: 0 }}
                  animate={{
                    offsetDistance: "100%",
                    opacity: [0, 1, 1, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  style={{
                    offsetPath: "path('M 300 280 C 400 360, 450 150, 550 80')",
                  }}
                />
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-12 -right-12 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -z-10 mix-blend-multiply" />
              <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 mix-blend-multiply" />

              {/* Grid Floor */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[50%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black)] -z-20 transform -rotate-x-12 perspective-1000 origin-bottom" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
