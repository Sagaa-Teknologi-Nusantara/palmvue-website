"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ENTITY_TYPES } from "../constants";

interface CreateEntityStepProps {
  entityName: string;
  setEntityName: (name: string) => void;
  entityType: string;
  setEntityType: (type: string) => void;
  onNext: () => void;
}

export function CreateEntityStep({
  entityName,
  setEntityName,
  entityType,
  setEntityType,
  onNext,
}: CreateEntityStepProps) {
  const [isCreating, setIsCreating] = React.useState(false);
  const [isCreated, setIsCreated] = React.useState(false);

  const currentEntityType =
    ENTITY_TYPES.find((t) => t.id === entityType) || ENTITY_TYPES[0];
  const EntityIcon = currentEntityType.icon;

  const handleTypeChange = (typeId: string) => {
    setEntityType(typeId);
    const newType = ENTITY_TYPES.find((t) => t.id === typeId);
    if (newType) {
      setEntityName(newType.defaultName);
    }
  };

  const handleCreate = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
      setIsCreated(true);
      setTimeout(() => {
        onNext();
      }, 800);
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {/* Form Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full max-w-md"
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                currentEntityType.bgColor,
              )}
            >
              <EntityIcon
                className={cn("w-5 h-5", currentEntityType.textColor)}
              />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">New Entity</h3>
              <p className="text-sm text-slate-500">Register in the system</p>
            </div>
          </div>

          {/* Entity Type Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Entity Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ENTITY_TYPES.map((type) => {
                const TypeIcon = type.icon;
                const isSelected = entityType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTypeChange(type.id)}
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center gap-2",
                      isSelected
                        ? `${type.borderColor} ${type.bgColor} ${type.textColor} ring-2 ${type.ringColor}`
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                    )}
                  >
                    <TypeIcon
                      className={cn(
                        "w-4 h-4",
                        isSelected ? type.textColor : "text-slate-400",
                      )}
                    />
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Entity Name Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Entity Name
            </label>
            <input
              type="text"
              value={entityName}
              onChange={(e) => setEntityName(e.target.value)}
              placeholder={currentEntityType.defaultName}
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 outline-none transition-all",
                `focus:ring-2 focus:${currentEntityType.ringColor} focus:${currentEntityType.borderColor}`,
              )}
            />
          </div>

          {/* Create Button */}
          <Button
            onClick={handleCreate}
            disabled={!entityName || isCreating || isCreated}
            className="w-full bg-palmvue-green hover:bg-palmvue-green-dark text-white h-12 rounded-xl font-medium shadow-lg shadow-palmvue-green/25"
          >
            <AnimatePresence mode="wait">
              {isCreating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating...
                </motion.div>
              ) : isCreated ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Created!
                </motion.div>
              ) : (
                <motion.span
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Create Entity
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>

      {/* Visual Preview */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative">
          {/* Entity Card Preview */}
          <motion.div
            key={entityType}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: isCreated ? [1, 1.05, 1] : 1,
              boxShadow: isCreated
                ? "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.5 }}
            className="w-64 bg-white rounded-2xl border border-slate-200 p-6 shadow-xl"
          >
            <div
              className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto",
                currentEntityType.bgColor,
              )}
            >
              <EntityIcon
                className={cn("w-8 h-8", currentEntityType.textColor)}
              />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-slate-900 text-lg mb-1">
                {entityName || currentEntityType.defaultName}
              </h4>
              <p className="text-sm text-slate-500">
                {currentEntityType.label}
              </p>
            </div>

            <AnimatePresence>
              {isCreated && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-slate-100"
                >
                  <div className="flex items-center justify-center gap-2 text-emerald-600 text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Registered in System
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Success Pulse */}
          <AnimatePresence>
            {isCreated && (
              <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 rounded-2xl border-2 border-emerald-500"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
