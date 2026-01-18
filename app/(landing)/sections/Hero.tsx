"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TraceabilityVisualization } from "../components/TraceabilityVisualization";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Traceability for{" "}
                <span className="text-palmvue-green">palm seed</span> production
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Replace paper with a single digital platform that provides
                real-time, end-to-end visibility across every step of your
                plantation, ensuring no data is lost and every action is
                traceable.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-palmvue-green hover:bg-palmvue-green-dark text-white px-8 h-12 text-base shadow-lg shadow-palmvue-green/25"
                  >
                    See the Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/product">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-base border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Key Metrics */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                  <span>Full traceability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                  <span>Complete audit trail</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                  <span>Reduced manual rework</span>
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
