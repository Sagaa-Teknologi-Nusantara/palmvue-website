"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TraceabilityVisualization } from "../components/TraceabilityVisualization";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Audit-Ready Compliance Standard
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Infrastructure for{" "}
                <span className="text-palmvue-green">trusted</span> palm seed
                production.
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                The only end-to-end traceability platform designed for certified
                producers. Track lineage from pollination to shipment, ensuring
                genetic integrity and regulatory compliance.
              </p>

              {/* CTAs */}
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

              {/* Trust Indicators */}
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

          {/* Visual */}
          <TraceabilityVisualization />
        </div>
      </div>
    </section>
  );
}
