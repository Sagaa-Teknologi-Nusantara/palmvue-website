import {
  TreePine,
  GitBranch,
  QrCode,
  ScanLine,
  Send,
  CheckCircle,
  Flower2,
  Wind,
  Leaf,
} from "lucide-react";

export const DEMO_STEPS = [
  {
    id: 1,
    key: "create-entity",
    title: "Create Entity",
    shortTitle: "Entity",
    description: "Register a new entity in the system with a unique identifier",
    icon: TreePine,
  },
  {
    id: 2,
    key: "create-workflow",
    title: "Create Workflow",
    shortTitle: "Workflow",
    description: "Define the process steps for tracking this entity",
    icon: GitBranch,
  },
  {
    id: 3,
    key: "generate-qr",
    title: "Generate QR",
    shortTitle: "QR Code",
    description: "Generate a unique QR code for field identification",
    icon: QrCode,
  },
  {
    id: 4,
    key: "scan-qr",
    title: "Scan QR",
    shortTitle: "Scan",
    description: "Field worker scans the QR code to access the entity",
    icon: ScanLine,
  },
  {
    id: 5,
    key: "submit-workflow",
    title: "Submit Data",
    shortTitle: "Submit",
    description: "Complete the workflow step and submit field data",
    icon: Send,
  },
  {
    id: 6,
    key: "update-status",
    title: "Approve",
    shortTitle: "Approve",
    description: "Supervisor reviews and approves the submission",
    icon: CheckCircle,
  },
] as const;

export const ENTITY_TYPES = [
  {
    id: "tree",
    label: "Tree",
    defaultName: "Tree A-001",
    icon: TreePine,
    color: "emerald",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-500",
    ringColor: "ring-emerald-500/20",
  },
  {
    id: "inflorescence",
    label: "Inflorescence",
    defaultName: "Inflorescence B-001",
    icon: Flower2,
    color: "amber",
    bgColor: "bg-amber-100",
    textColor: "text-amber-600",
    borderColor: "border-amber-500",
    ringColor: "ring-amber-500/20",
  },
  {
    id: "pollen",
    label: "Pollen",
    defaultName: "Pollen C-001",
    icon: Wind,
    color: "blue",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    borderColor: "border-blue-500",
    ringColor: "ring-blue-500/20",
  },
  {
    id: "seed",
    label: "Seed",
    defaultName: "Seed D-001",
    icon: Leaf,
    color: "orange",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    borderColor: "border-orange-500",
    ringColor: "ring-orange-500/20",
  },
] as const;

// Workflow steps specific to each entity type
export const WORKFLOW_STEPS_BY_ENTITY = {
  tree: [
    {
      id: 1,
      name: "Pollination",
      description: "Record pollination details and date",
      icon: "🌸",
    },
    {
      id: 2,
      name: "Quality Check",
      description: "Verify health and readiness",
      icon: "✓",
    },
    {
      id: 3,
      name: "Harvest",
      description: "Record harvest date and yield data",
      icon: "🌾",
    },
  ],
  inflorescence: [
    {
      id: 1,
      name: "Isolation",
      description: "Bag inflorescence for controlled pollination",
      icon: "🛡️",
    },
    {
      id: 2,
      name: "Pollination",
      description: "Apply pollen and record details",
      icon: "🌸",
    },
    {
      id: 3,
      name: "Bunch Harvest",
      description: "Harvest mature bunch for processing",
      icon: "📦",
    },
  ],
  pollen: [
    {
      id: 1,
      name: "Collection",
      description: "Collect pollen from male inflorescence",
      icon: "🧪",
    },
    {
      id: 2,
      name: "Processing",
      description: "Dry and prepare pollen for storage",
      icon: "⚗️",
    },
    {
      id: 3,
      name: "Storage",
      description: "Store in controlled environment",
      icon: "❄️",
    },
  ],
  seed: [
    {
      id: 1,
      name: "Germination",
      description: "Monitor seed germination process",
      icon: "🌱",
    },
    {
      id: 2,
      name: "Nursery",
      description: "Track seedling development",
      icon: "🪴",
    },
    {
      id: 3,
      name: "Dispatch",
      description: "Prepare for field planting",
      icon: "🚚",
    },
  ],
} as const;

export type DemoStep = (typeof DEMO_STEPS)[number];
export type EntityType = (typeof ENTITY_TYPES)[number];
export type WorkflowStep = {
  id: number;
  name: string;
  description: string;
  icon: string;
};
