"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "./StepIndicator";
import { CreateEntityStep } from "./CreateEntityStep";
import { CreateWorkflowStep } from "./CreateWorkflowStep";
import { GenerateQRStep } from "./GenerateQRStep";
import { ScanQRStep } from "./ScanQRStep";
import { SubmitWorkflowStep } from "./SubmitWorkflowStep";
import { UpdateStatusStep } from "./UpdateStatusStep";
import { DEMO_STEPS } from "../constants";

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [entityName, setEntityName] = React.useState("Tree A-001");
  const [entityType, setEntityType] = React.useState("tree");

  const handleNext = () => {
    if (currentStep < DEMO_STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setEntityName("Tree A-001");
    setEntityType("tree");
  };

  const currentStepData = DEMO_STEPS.find((s) => s.id === currentStep);

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-linear-to-b from-emerald-50/50 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Interactive Demo
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Experience PalmVue
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Walk through the complete workflow from entity creation to
            supervisor approval.
          </p>
        </motion.div>

        {/* Step Indicator */}
        <div className="mb-12">
          <StepIndicator currentStep={currentStep} />
        </div>

        {/* Step Title */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Step {currentStep}: {currentStepData?.title}
          </h2>
          <p className="text-slate-500">{currentStepData?.description}</p>
        </motion.div>

        {/* Step Content */}
        <div className="mb-4 min-h-[600px] flex items-center">
          <div className="w-full">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CreateEntityStep
                    entityName={entityName}
                    setEntityName={setEntityName}
                    entityType={entityType}
                    setEntityType={setEntityType}
                    onNext={handleNext}
                  />
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CreateWorkflowStep
                    entityName={entityName}
                    entityType={entityType}
                    onNext={handleNext}
                  />
                </motion.div>
              )}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GenerateQRStep
                    entityName={entityName}
                    entityType={entityType}
                    onNext={handleNext}
                  />
                </motion.div>
              )}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ScanQRStep
                    entityName={entityName}
                    entityType={entityType}
                    onNext={handleNext}
                  />
                </motion.div>
              )}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SubmitWorkflowStep
                    entityName={entityName}
                    onNext={handleNext}
                  />
                </motion.div>
              )}
              {currentStep === 6 && (
                <motion.div
                  key="step-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <UpdateStatusStep
                    entityName={entityName}
                    onRestart={handleRestart}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation (hidden on step 6) */}
        {currentStep < 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-4"
          >
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="h-11 px-6 rounded-xl border-slate-200 text-slate-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="h-11 px-6 rounded-xl bg-palmvue-green hover:bg-palmvue-green-dark text-white"
            >
              Skip to Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
