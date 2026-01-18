"use client";

import * as React from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { GitBranch, Check, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  WORKFLOW_STEPS_BY_ENTITY,
  ENTITY_TYPES,
  type WorkflowStep,
} from "../constants";

interface CreateWorkflowStepProps {
  entityName: string;
  entityType: string;
  onNext: () => void;
}

export function CreateWorkflowStep({
  entityName,
  entityType,
  onNext,
}: CreateWorkflowStepProps) {
  const [isAssigning, setIsAssigning] = React.useState(false);
  const [isAssigned, setIsAssigned] = React.useState(false);

  // Get initial workflow steps based on entity type
  const initialSteps =
    WORKFLOW_STEPS_BY_ENTITY[
      entityType as keyof typeof WORKFLOW_STEPS_BY_ENTITY
    ] || WORKFLOW_STEPS_BY_ENTITY.tree;
  const [workflowSteps, setWorkflowSteps] = React.useState<WorkflowStep[]>([
    ...initialSteps,
  ]);

  // Reset steps when entity type changes
  React.useEffect(() => {
    const steps =
      WORKFLOW_STEPS_BY_ENTITY[
        entityType as keyof typeof WORKFLOW_STEPS_BY_ENTITY
      ] || WORKFLOW_STEPS_BY_ENTITY.tree;
    setWorkflowSteps([...steps]);
  }, [entityType]);

  const currentEntityType =
    ENTITY_TYPES.find((t) => t.id === entityType) || ENTITY_TYPES[0];
  const EntityIcon = currentEntityType.icon;

  const handleAssign = () => {
    setIsAssigning(true);
    setTimeout(() => {
      setIsAssigning(false);
      setIsAssigned(true);
      setTimeout(() => {
        onNext();
      }, 800);
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {/* Workflow Builder Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full max-w-md"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Workflow Template</h3>
              <p className="text-sm text-slate-500">
                For {currentEntityType.label}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-4 ml-1">
            💡 Drag to reorder steps
          </p>

          {/* Reorderable Workflow Steps */}
          <Reorder.Group
            axis="y"
            values={workflowSteps}
            onReorder={setWorkflowSteps}
            className="space-y-3 mb-8"
          >
            {workflowSteps.map((step, index) => (
              <Reorder.Item
                key={step.id}
                value={step}
                className="cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileDrag={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)",
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-slate-200 transition-colors"
                >
                  <div className="text-slate-300 group-hover:text-slate-400 transition-colors">
                    <GripVertical className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-lg shadow-sm">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 text-sm">
                      {step.name}
                    </h4>
                    <p className="text-xs text-slate-500">{step.description}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              </Reorder.Item>
            ))}
          </Reorder.Group>

          {/* Assign Button */}
          <Button
            onClick={handleAssign}
            disabled={isAssigning || isAssigned}
            className="w-full bg-palmvue-green hover:bg-palmvue-green-dark text-white h-12 rounded-xl font-medium shadow-lg shadow-palmvue-green/25"
          >
            <AnimatePresence mode="wait">
              {isAssigning ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Assigning...
                </motion.div>
              ) : isAssigned ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Assigned!
                </motion.div>
              ) : (
                <motion.span
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Assign to {entityName || "Entity"}
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>

      {/* Visual Connection */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative">
          {/* Entity + Workflow Visualization */}
          <div className="flex flex-col items-center gap-4">
            {/* Entity Card */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-48 bg-white rounded-xl border border-slate-200 p-4 shadow-lg flex items-center gap-3"
            >
              <div
                className={`w-10 h-10 rounded-lg ${currentEntityType.bgColor} flex items-center justify-center`}
              >
                <EntityIcon
                  className={`w-5 h-5 ${currentEntityType.textColor}`}
                />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">
                  {entityName}
                </h4>
                <p className="text-xs text-slate-400">
                  {currentEntityType.label}
                </p>
              </div>
            </motion.div>

            {/* Connector */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 30 }}
              transition={{ delay: 0.3 }}
              className="w-0.5 bg-slate-200"
            />

            {/* Workflow Steps */}
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="w-48 bg-white rounded-xl border border-slate-200 p-4 shadow-lg flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      {step.name}
                    </h4>
                    <p className="text-xs text-slate-400">Step {index + 1}</p>
                  </div>

                  {/* Check mark when assigned */}
                  <AnimatePresence>
                    {isAssigned && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="ml-auto w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Connector Arrow */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 20 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="w-0.5 bg-slate-200"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
