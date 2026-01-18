"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEMO_STEPS } from "../constants";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connecting Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200" />
        <motion.div
          className="absolute top-5 left-0 h-0.5 bg-palmvue-green"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep - 1) / (DEMO_STEPS.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />

        {DEMO_STEPS.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const StepIcon = step.icon;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: isCurrent ? 1.1 : 1 }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300",
                  isCompleted && "bg-palmvue-green text-white",
                  isCurrent &&
                    "bg-palmvue-green text-white shadow-lg shadow-palmvue-green/30",
                  !isCompleted &&
                    !isCurrent &&
                    "bg-white border-2 border-slate-200 text-slate-400"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <StepIcon className="w-5 h-5" />
                )}
              </motion.div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium transition-colors",
                  isCurrent ? "text-palmvue-green" : "text-slate-500"
                )}
              >
                {step.shortTitle}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile View - Simplified */}
      <div className="md:hidden flex items-center justify-center gap-2">
        {DEMO_STEPS.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <motion.div
              key={step.id}
              initial={{ scale: 0.8 }}
              animate={{ scale: isCurrent ? 1.2 : 1 }}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                isCompleted && "bg-palmvue-green",
                isCurrent && "bg-palmvue-green",
                !isCompleted && !isCurrent && "bg-slate-300"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
