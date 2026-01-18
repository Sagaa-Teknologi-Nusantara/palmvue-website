"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface WorkflowStep {
  name: string;
  status: "completed" | "current" | "pending";
}

export interface EntityData {
  icon: string;
  code?: string;
  badge?: {
    text: string;
    variant?: "success" | "info" | "pending" | "current";
    pulse?: boolean;
  };
  liveBadge?: {
    text: string;
    pulse?: boolean;
  };
  fields?: { label: string; value: string; highlight?: boolean }[];
  progress?: number;
  workflowSteps?: WorkflowStep[];
}

const StatusBadge = ({
  variant = "info",
  text,
  pulse = false,
}: {
  variant?: "success" | "info" | "pending" | "current";
  text: string;
  pulse?: boolean;
}) => {
  const styles = {
    success: "bg-green-100 text-green-700 border-green-200",
    info: "bg-blue-100 text-blue-700 border-blue-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    current: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <div
      className={cn(
        "px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border flex items-center gap-1.5",
        styles[variant]
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {text}
    </div>
  );
};

const WorkflowSteps = ({
  steps,
  baseDelay = 0.3,
}: {
  steps: WorkflowStep[];
  baseDelay?: number;
}) => (
  <div className="mt-3 space-y-1.5">
    {steps.map((step, i) => (
      <motion.div
        key={step.name}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: baseDelay + i * 0.1 }}
        className="flex items-center gap-2 text-[10px]"
      >
        <div
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            step.status === "completed" && "bg-green-500",
            step.status === "current" && "bg-green-500 ring-2 ring-green-200",
            step.status === "pending" && "bg-slate-300"
          )}
        />
        <span
          className={cn(
            step.status === "completed" &&
              "text-slate-500 line-through decoration-slate-300",
            step.status === "current" && "text-slate-900 font-bold",
            step.status === "pending" && "text-slate-400"
          )}
        >
          {step.name}
        </span>
      </motion.div>
    ))}
  </div>
);

export function EntityCard({
  data,
  className,
  workflowBaseDelay,
}: {
  data: EntityData;
  className?: string;
  workflowBaseDelay?: number;
}) {
  return (
    <div
      className={cn(
        "bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[200px]",
        className
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-base">
          {data.icon}
        </div>
        {data.badge && (
          <StatusBadge
            text={data.badge.text}
            variant={data.badge.variant}
            pulse={data.badge.pulse}
          />
        )}
        {data.liveBadge && (
          <StatusBadge
            text={data.liveBadge.text}
            pulse={data.liveBadge.pulse}
            variant="current"
          />
        )}
      </div>

      <div className="space-y-1.5">
        {data.code && (
          <div className="text-[10px] font-mono text-slate-400 mb-2">
            {data.code}
          </div>
        )}

        {data.fields?.map((field, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline text-[10px]"
          >
            <span className="text-slate-500">{field.label}</span>
            <span
              className={cn(
                "font-medium",
                field.highlight
                  ? "text-emerald-600 font-bold"
                  : "text-slate-900"
              )}
            >
              {field.value}
            </span>
          </div>
        ))}

        {data.progress !== undefined && (
          <div className="h-1 bg-slate-100 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${data.progress}%` }}
            />
          </div>
        )}

        {data.workflowSteps && (
          <WorkflowSteps
            steps={data.workflowSteps}
            baseDelay={workflowBaseDelay}
          />
        )}
      </div>
    </div>
  );
}
