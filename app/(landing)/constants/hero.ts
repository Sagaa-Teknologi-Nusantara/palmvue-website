import { EntityData } from "@/app/(landing)/components/EntityCard";

export const TREE_DATA: EntityData = {
  icon: "🌴",
  code: "TRE-001",
  badge: { text: "REGISTERED", variant: "success" },
  fields: [
    { label: "Location", value: "Block A, Row 5" },
    { label: "Variety", value: "Tenera" },
  ],
  workflowSteps: [
    { name: "Registered", status: "completed" },
    { name: "Discovery", status: "current" },
    { name: "Quality Verified", status: "pending" },
  ],
};

export const INFLORESCENCE_DATA: EntityData = {
  icon: "🌸",
  code: "INF-001",
  badge: { text: "AUTO-CREATED", variant: "info" },
  fields: [
    { label: "Parent", value: "TRE-001" },
    { label: "Status", value: "Active", highlight: true },
  ],
};

export const SEED_DATA: EntityData = {
  icon: "🌱",
  code: "SEED-4521",
  badge: { text: "VERIFIED", variant: "success" },
  fields: [
    { label: "Batch", value: "#2940" },
    { label: "Quantity", value: "500 units" },
  ],
};

// SVG path definitions for the flow connectors
export const FLOW_PATHS = {
  first: "M 50 80 C 150 80, 200 200, 300 280",
  second: "M 300 280 C 400 360, 450 150, 550 80",
} as const;
