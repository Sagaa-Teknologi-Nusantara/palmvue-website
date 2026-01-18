"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Clock,
  User,
  TreePine,
  Calendar,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface UpdateStatusStepProps {
  entityName: string;
  onRestart: () => void;
}

export function UpdateStatusStep({
  entityName,
  onRestart,
}: UpdateStatusStepProps) {
  const [isApproving, setIsApproving] = React.useState(false);
  const [isApproved, setIsApproved] = React.useState(false);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsApproving(true), 1000);
    const timer2 = setTimeout(() => {
      setIsApproving(false);
      setIsApproved(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full max-w-lg"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="ml-4 text-xs text-slate-500 font-medium">
              PalmVue Dashboard — Pending Approvals
            </div>
          </div>

          {/* Submission Card */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Recent Submission</h3>
              <span className="text-xs text-slate-400">Just now</span>
            </div>

            <motion.div
              animate={{
                boxShadow: isApproved
                  ? "0 0 0 2px rgba(16, 185, 129, 0.2), 0 10px 40px -10px rgba(16, 185, 129, 0.3)"
                  : "0 4px 20px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="rounded-xl border border-slate-200 p-5 transition-all"
            >
              {/* Entity Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <TreePine className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">
                    {entityName || "Tree A-001"}
                  </h4>
                  <p className="text-sm text-slate-500">
                    Pollination Step Completed
                  </p>
                </div>

                {/* Status Badge */}
                <AnimatePresence mode="wait">
                  {!isApproving && !isApproved && (
                    <motion.div
                      key="pending"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium"
                    >
                      <Clock className="w-4 h-4" />
                      Pending
                    </motion.div>
                  )}
                  {isApproving && (
                    <motion.div
                      key="approving"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                    >
                      <div className="w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
                      Reviewing...
                    </motion.div>
                  )}
                  {isApproved && (
                    <motion.div
                      key="approved"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approved
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submission Details */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg mb-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Submitted By</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-700">Field Worker</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-700">Jan 18, 2026</span>
                  </div>
                </div>
              </div>

              {/* Approval Info */}
              <AnimatePresence>
                {isApproved && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pt-4 border-t border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Approved by Supervisor
                        </p>
                        <p className="text-xs text-slate-500">
                          Just now • Remote approval
                        </p>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="ml-auto"
                      >
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 w-full max-w-sm"
      >
        <div className="text-center lg:text-left">
          <AnimatePresence mode="wait">
            {!isApproved ? (
              <motion.div
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium mb-4">
                  <Clock className="w-4 h-4" />
                  Awaiting Review
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Supervisor Review
                </h3>
                <p className="text-slate-600">
                  The submission is now visible to supervisors for review and
                  approval. No need to wait for physical site visits.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="approved"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  Complete!
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Workflow Approved! 🎉
                </h3>
                <p className="text-slate-600 mb-8">
                  The pollination step has been approved and recorded in the
                  immutable audit trail. Full traceability from tree to seed.
                </p>

                <div className="space-y-4">
                  <Button
                    onClick={onRestart}
                    variant="outline"
                    className="w-full h-12 rounded-xl border-slate-200 text-slate-700"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Demo Again
                  </Button>
                  <Button
                    className="w-full bg-palmvue-green hover:bg-palmvue-green-dark text-white h-12 rounded-xl font-medium shadow-lg shadow-palmvue-green/25"
                    onClick={() => {
                      document
                        .getElementById("request-demo")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Request Full Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
