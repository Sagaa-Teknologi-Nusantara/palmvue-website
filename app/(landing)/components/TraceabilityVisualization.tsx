"use client";

import { motion } from "framer-motion";
import { EntityCard } from "./EntityCard";
import {
  TREE_DATA,
  INFLORESCENCE_DATA,
  SEED_DATA,
  FLOW_PATHS,
} from "../constants/hero";

export function TraceabilityVisualization() {
  return (
    <div className="flex-1 w-full relative perspective-[2000px]">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Floor */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[50%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom,transparent,black)] origin-bottom -rotate-x-12" />

        {/* Decorative Blurs */}
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, rotateX: 20, y: 50 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative min-h-[500px] flex items-center justify-center -ml-12 lg:ml-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Flow Container */}
        <div className="relative w-full aspect-4/3 max-w-lg mx-auto">
          {/* Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none p-8"
            overflow="visible"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={FLOW_PATHS.first}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.path
              d={FLOW_PATHS.second}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </svg>

          {/* Entity Cards */}
          <motion.div
            className="absolute top-10 left-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <EntityCard
              data={TREE_DATA}
              className="transition hover:scale-105 duration-300"
              workflowBaseDelay={0.7}
            />
          </motion.div>

          <motion.div
            className="absolute top-[280px] left-1/2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <EntityCard
              data={INFLORESCENCE_DATA}
              className="transition hover:scale-105 duration-300 -ml-8"
            />
          </motion.div>

          <motion.div
            className="absolute top-20 right-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <EntityCard
              data={SEED_DATA}
              className="transition hover:scale-105 duration-300"
            />
          </motion.div>

          {/* Floating Data Packets */}
          <motion.div
            className="absolute top-0 left-32 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
            initial={{ opacity: 0 }}
            animate={{
              offsetDistance: "100%",
              opacity: [0, 1, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ offsetPath: `path('${FLOW_PATHS.first}')` }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
            initial={{ opacity: 0 }}
            animate={{
              offsetDistance: "100%",
              opacity: [0, 1, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{ offsetPath: `path('${FLOW_PATHS.second}')` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
