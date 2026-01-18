"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { QrCode, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ENTITY_TYPES } from "../constants";

interface GenerateQRStepProps {
  entityName: string;
  entityType: string;
  onNext: () => void;
}

export function GenerateQRStep({
  entityName,
  entityType,
  onNext,
}: GenerateQRStepProps) {
  const [isGenerated, setIsGenerated] = React.useState(false);

  const currentEntityType =
    ENTITY_TYPES.find((t) => t.id === entityType) || ENTITY_TYPES[0];
  const EntityIcon = currentEntityType.icon;

  // Deterministic QR pattern (64 cells)
  const qrPattern = [
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
    1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0,
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsGenerated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {/* QR Code Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative">
          {/* QR Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 w-72"
          >
            {/* QR Code */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="relative mb-6"
            >
              <div className="w-48 h-48 mx-auto bg-slate-900 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                {/* QR Pattern */}
                <div className="grid grid-cols-8 gap-1 w-full h-full">
                  {qrPattern.map((isWhite, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isWhite ? 1 : 0.2 }}
                      transition={{ delay: 0.5 + i * 0.01 }}
                      className="bg-white rounded-sm"
                    />
                  ))}
                </div>

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 ${currentEntityType.bgColor} rounded-lg flex items-center justify-center border-2 border-white`}
                  >
                    <EntityIcon
                      className={`w-6 h-6 ${currentEntityType.textColor}`}
                    />
                  </div>
                </div>

                {/* Scanner Effect */}
                <motion.div
                  initial={{ top: 0 }}
                  animate={{ top: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: 2,
                    ease: "linear",
                    delay: 0.8,
                  }}
                  className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                />
              </div>
            </motion.div>

            {/* Entity Info */}
            <div className="text-center">
              <h4 className="font-bold text-slate-900 text-lg mb-1">
                {entityName || currentEntityType.defaultName}
              </h4>
              <p className="text-sm text-slate-500 mb-4">
                {currentEntityType.label} • ID: PV-2026-001
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isGenerated ? 1 : 0,
                  y: isGenerated ? 0 : 10,
                }}
                transition={{ delay: 1 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="text-slate-600 border-slate-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download QR
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
            className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full blur-2xl -z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-2xl -z-10"
          />
        </div>
      </motion.div>

      {/* Description Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex-1 w-full max-w-md"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">QR Code Generated</h3>
              <p className="text-sm text-slate-500">Ready for field use</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-600">1</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">
                  Print & Attach
                </h4>
                <p className="text-xs text-slate-500">
                  Print the QR code and attach it to the physical{" "}
                  {currentEntityType.label.toLowerCase()}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-600">2</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">
                  Scan in Field
                </h4>
                <p className="text-xs text-slate-500">
                  Field workers scan to access entity and submit data
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-600">3</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">
                  Complete Traceability
                </h4>
                <p className="text-xs text-slate-500">
                  Every scan is recorded for full audit trail
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={onNext}
            className="w-full bg-palmvue-green hover:bg-palmvue-green-dark text-white h-12 rounded-xl font-medium shadow-lg shadow-palmvue-green/25"
          >
            Continue to Field Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
