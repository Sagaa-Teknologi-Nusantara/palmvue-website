"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanLine, Check, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoPhoneMockup } from "./DemoPhoneMockup";
import { ENTITY_TYPES } from "../constants";

interface ScanQRStepProps {
  entityName: string;
  entityType: string;
  onNext: () => void;
}

export function ScanQRStep({
  entityName,
  entityType,
  onNext,
}: ScanQRStepProps) {
  const [phase, setPhase] = React.useState<"scanning" | "found" | "ready">(
    "scanning",
  );

  const currentEntityType =
    ENTITY_TYPES.find((t) => t.id === entityType) || ENTITY_TYPES[0];
  const EntityIcon = currentEntityType.icon;

  React.useEffect(() => {
    // Only animate the scanning phases, don't auto-continue
    const timer1 = setTimeout(() => setPhase("found"), 2000);
    const timer2 = setTimeout(() => setPhase("ready"), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full max-w-sm order-2 lg:order-1"
      >
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Field Worker View
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {phase === "ready" ? "Entity Found!" : "Scanning QR Code"}
          </h3>
          <p className="text-slate-600 mb-6">
            {phase === "ready"
              ? `${entityName || currentEntityType.defaultName} has been identified. The worker can now access all pending workflow steps and submit data.`
              : `The field worker opens the PalmVue app and scans the QR code attached to the ${currentEntityType.label.toLowerCase()}. The app instantly retrieves all entity information and pending workflow steps.`}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-slate-700">
                Works offline - no internet required
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-slate-700">
                Instant entity identification
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-slate-700">
                Shows pending workflow steps
              </span>
            </div>
          </div>

          {/* Continue Button - only show when ready */}
          <AnimatePresence>
            {phase === "ready" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  onClick={onNext}
                  className="w-full bg-palmvue-green hover:bg-palmvue-green-dark text-white h-12 rounded-xl font-medium shadow-lg shadow-palmvue-green/25"
                >
                  Continue to Submit Data
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="order-1 lg:order-2"
      >
        <DemoPhoneMockup>
          {/* Header */}
          <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 shrink-0">
            <ScanLine className="w-5 h-5 text-palmvue-green" />
            <span className="text-sm font-semibold text-slate-800">
              Scan Entity
            </span>
          </div>

          {/* Camera View */}
          <div className="flex-1 bg-slate-900 relative min-h-0">
            {/* Viewfinder */}
            <div className="absolute inset-6 border-2 border-white/30 rounded-2xl">
              {/* Corner Markers */}
              <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-lg" />
              <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr-lg" />
              <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl-lg" />
              <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-lg" />
            </div>

            {/* QR Code Target */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-white rounded-lg p-1.5 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded grid grid-cols-5 gap-0.5 p-1">
                  {[
                    1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1,
                    0, 1, 0, 1, 0,
                  ].map((isWhite, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${isWhite ? "bg-white" : "bg-slate-900"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Scanner Line */}
            {phase === "scanning" && (
              <motion.div
                initial={{ top: "10%" }}
                animate={{ top: "80%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-6 right-6 h-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
              />
            )}

            {/* Found Overlay */}
            <AnimatePresence>
              {phase !== "scanning" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center"
                  >
                    <Check className="w-7 h-7 text-white" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Panel - Entity Found */}
          <AnimatePresence>
            {phase === "ready" && (
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="bg-white rounded-t-2xl p-4 shadow-2xl border-t border-slate-100 shrink-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${currentEntityType.bgColor} flex items-center justify-center`}
                  >
                    <EntityIcon
                      className={`w-5 h-5 ${currentEntityType.textColor}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm truncate">
                      {entityName || currentEntityType.defaultName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {currentEntityType.label}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
                    <MapPin className="w-3 h-3" />
                    <span>Block A</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DemoPhoneMockup>
      </motion.div>
    </div>
  );
}
