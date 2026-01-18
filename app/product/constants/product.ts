import {
  QrCode,
  Layers,
  Database,
  ListChecks,
  WifiOff,
  Camera,
  Settings,
  CheckCircle,
  Users,
  BarChart3,
  TrendingUp,
  FileText,
  Shield,
  Clock,
  FileCheck,
  GripVertical,
  FormInput,
  Building2,
  Factory,
  FlaskConical,
  Globe2,
  TreeDeciduous,
  Flower2,
  CircleDot,
  Sprout,
  type LucideIcon,
} from "lucide-react";

// Types
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LineageItem {
  icon: LucideIcon;
  label: string;
  color: string;
}

// Digital Tracking Section
export const LINEAGE_FLOW: LineageItem[] = [
  { icon: TreeDeciduous, label: "Tree", color: "bg-green-500" },
  { icon: Flower2, label: "Inflorescence", color: "bg-pink-500" },
  { icon: CircleDot, label: "Pollen", color: "bg-yellow-500" },
  { icon: Sprout, label: "Seed", color: "bg-emerald-500" },
];

export const TRACKING_FEATURES: FeatureItem[] = [
  {
    icon: QrCode,
    title: "Unique Codes & Barcodes",
    description:
      "Every entity has a scannable identity — track thousands with precision and speed.",
  },
  {
    icon: Layers,
    title: "Parent-Child Lineage",
    description:
      "Know exactly which tree produced which pollen and which seed — complete genetic history.",
  },
  {
    icon: Database,
    title: "Rich Metadata",
    description:
      "Capture location, variety, quality metrics, and custom fields for every entity.",
  },
];

// Mobile App Section
export const MOBILE_FEATURES: FeatureItem[] = [
  {
    icon: QrCode,
    title: "Barcode Scanning",
    description: "Instantly identify any entity in the field with a quick scan",
  },
  {
    icon: ListChecks,
    title: "Guided Workflows",
    description:
      "Step-by-step processes ensure workers know exactly what to do",
  },
  {
    icon: WifiOff,
    title: "Offline Data Capture",
    description:
      "Works without internet — data syncs automatically when connected",
  },
  {
    icon: Camera,
    title: "Photo Attachments",
    description:
      "Capture visual evidence at each workflow step for quality control",
  },
];

// Web Dashboard Section
export const DASHBOARD_FEATURES: FeatureItem[] = [
  {
    icon: Database,
    title: "Entity Management",
    description: "Create and organize trees, pollen batches, seeds, and more",
  },
  {
    icon: Settings,
    title: "Workflow Configuration",
    description: "Define custom processes without writing any code",
  },
  {
    icon: CheckCircle,
    title: "Approval Workflows",
    description: "Review and approve field submissions remotely from anywhere",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Role-based access control — decide who can access what",
  },
];

// AI Chatbot Section
export const AI_QUERY_EXAMPLES: string[] = [
  "How many seeds were produced last month?",
  "Which trees have the highest pollen yield this quarter?",
  "Show me all pending health verifications.",
  "What's the average time from pollination to harvest?",
];

export const ANALYTICS_CAPABILITIES: FeatureItem[] = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "See what's happening across all sites",
  },
  {
    icon: TrendingUp,
    title: "Production Metrics",
    description: "Track yields, quality rates, processing times",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Spot patterns and optimize operations",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Generate compliance reports instantly",
  },
];

// Traceability Section
export const TRACEABILITY_FEATURES: FeatureItem[] = [
  {
    icon: Layers,
    title: "Complete Lineage",
    description: "Trace any seed back to its source tree in seconds, not hours",
  },
  {
    icon: Shield,
    title: "Append-Only Logs",
    description:
      "Records can never be deleted or modified — immutable audit trail",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Meet EUDR, RSPO, and global certification requirements",
  },
  {
    icon: Clock,
    title: "Instant Audits",
    description: "Generate traceability reports in seconds, not days",
  },
];

// Configurable Workflows Section
export const WORKFLOW_FEATURES: FeatureItem[] = [
  {
    icon: Layers,
    title: "Custom Entity Types",
    description:
      "Define exactly what you need: Tree, Inflorescence, Pollen, Seed, Shipment, and more",
  },
  {
    icon: GripVertical,
    title: "Flexible Workflows",
    description:
      "Create step-by-step processes that match your actual operations",
  },
  {
    icon: FormInput,
    title: "Dynamic Forms",
    description:
      "Capture exactly the data needed at each step with custom fields",
  },
  {
    icon: Settings,
    title: "No Coding Required",
    description:
      "Update workflows through the admin panel as your processes evolve",
  },
];

// Audience Section
export const AUDIENCE_DATA: FeatureItem[] = [
  {
    icon: Building2,
    title: "Palm Oil Plantations",
    description:
      "Track breeding programs, pollination, and seed production with complete visibility from nursery to harvest.",
  },
  {
    icon: Factory,
    title: "Palm Seed Producers",
    description:
      "Full traceability from seed to delivery, supporting premium pricing and global certifications.",
  },
  {
    icon: FlaskConical,
    title: "Plantation Research Teams",
    description:
      "Manage experimental protocols, approvals, and data collection efficiently with structured workflows.",
  },
  {
    icon: Globe2,
    title: "Multi-Site Operations",
    description:
      "Standardize operations across multiple estates and sites to improve overall yield and quality.",
  },
];

// Audit Trail Visual Data
export const AUDIT_ENTRIES = [
  {
    time: "10:42 AM",
    user: "Ahmad R.",
    action: "Completed pollination",
    entity: "Tree #1247",
  },
  {
    time: "10:38 AM",
    user: "System",
    action: "Auto-synced offline data",
    entity: "Batch #89",
  },
  {
    time: "10:15 AM",
    user: "Siti M.",
    action: "Approved harvest grade",
    entity: "Block A-12",
  },
  {
    time: "09:55 AM",
    user: "Budi K.",
    action: "Uploaded photo proof",
    entity: "Seed #3421",
  },
];
