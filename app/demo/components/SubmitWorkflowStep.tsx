"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Camera,
  MapPin,
  Calendar,
  Check,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoPhoneMockup } from "./DemoPhoneMockup";

interface SubmitWorkflowStepProps {
  entityName: string;
  onNext: () => void;
}

export function SubmitWorkflowStep({
  entityName,
  onNext,
}: SubmitWorkflowStepProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = () => {
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onNext();
      }, 1000);
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
      {/* Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <DemoPhoneMockup>
          <div className="flex-1 flex flex-col bg-white relative">
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-100 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Pollination
                  </h4>
                  <p className="text-xs text-slate-500">
                    {entityName || "Tree A-001"}
                  </p>
                </div>
                <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                  Step 1 of 3
                </span>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 p-4 space-y-4 overflow-auto">
              {/* Date Field */}
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">
                  Date
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-700">Jan 18, 2026</span>
                </div>
              </div>

              {/* Location Field */}
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">
                  Location
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-700">
                    Block A, Row 12
                  </span>
                </div>
              </div>

              {/* Notes Field */}
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">
                  Notes
                </label>
                <div className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-slate-400 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      Healthy inflorescence, optimal conditions for pollination.
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Attachment */}
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">
                  Photo
                </label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-dashed border-slate-200 bg-slate-50">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-slate-700">
                      IMG_2026_0118.jpg
                    </p>
                    <p className="text-xs text-slate-400">Photo attached</p>
                  </div>
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Phone Submit Button with animation */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <motion.div
                animate={{
                  scale: isSubmitting ? [1, 0.98, 1] : 1,
                  backgroundColor: isSubmitted ? "#10b981" : "#047857",
                }}
                transition={{ duration: 0.3 }}
                className="w-full py-3 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2"
                style={{ backgroundColor: isSubmitted ? "#10b981" : "#047857" }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Submitting...
                    </motion.div>
                  ) : isSubmitted ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.4 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                      Submitted!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Step
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Success Overlay on phone */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-emerald-500/10 pointer-events-none flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl"
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DemoPhoneMockup>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 w-full max-w-sm"
      >
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Data Capture
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Submit Workflow Step
          </h3>
          <p className="text-slate-600 mb-6">
            The field worker completes the guided form with all required data.
            Photos and GPS location are automatically captured for complete
            documentation.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-slate-700">
                Auto-timestamps all submissions
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Camera className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-slate-700">
                Visual evidence at each step
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-slate-700">GPS location verification</span>
            </div>
          </div>

          {/* Submit Button - triggers the phone animation */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || isSubmitted}
            className="w-full bg-palmvue-green hover:bg-palmvue-green-dark text-white h-12 rounded-xl font-medium shadow-lg shadow-palmvue-green/25 disabled:opacity-70"
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </motion.div>
              ) : isSubmitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Submitted!
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Form
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
