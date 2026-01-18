"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Database,
  ArrowRight,
  QrCode,
  TreeDeciduous,
  Flower2,
  CircleDot,
  Sprout,
  WifiOff,
  Camera,
  ListChecks,
  Users,
  Settings,
  CheckCircle,
  Bot,
  BarChart3,
  TrendingUp,
  FileText,
  Shield,
  Clock,
  FileCheck,
  Layers,
  GripVertical,
  FormInput,
  Cog,
  Building2,
  Factory,
  FlaskConical,
  Globe2,
  MessageSquare,
} from "lucide-react";

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
          >
            <Database className="w-4 h-4" />
            Deep Dive into PalmVue
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Discover the Complete
            <br />
            <span className="text-emerald-600">PalmVue Platform</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
          >
            Explore every capability that makes PalmVue the most comprehensive
            digital operations platform for palm seed production.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
              >
                Try Interactive Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white -z-10" />
      </section>

      {/* Complete Digital Tracking */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <QrCode className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Complete Digital Tracking
            </h2>
            <p className="text-lg text-slate-600">
              Every tree, inflorescence, pollen batch, and seed gets a unique
              digital identity. Scan a barcode in the field, and instantly see
              the complete history and lineage.
            </p>
          </div>

          {/* Lineage Flow Visualization */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
              {[
                { icon: TreeDeciduous, label: "Tree", color: "bg-green-500" },
                { icon: Flower2, label: "Inflorescence", color: "bg-pink-500" },
                { icon: CircleDot, label: "Pollen", color: "bg-yellow-500" },
                { icon: Sprout, label: "Seed", color: "bg-emerald-500" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="mt-2 text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-slate-300 hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Mobile App for Field Workers
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Your field teams don&apos;t need perfect internet to do their jobs.
                PalmVue&apos;s mobile app works seamlessly offline and syncs when
                connectivity returns.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: QrCode,
                    title: "Barcode Scanning",
                    description:
                      "Instantly identify any entity in the field with a quick scan",
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
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/demo">
                <Button
                  variant="outline"
                  className="gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  See It In Action
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 lg:mt-0">
              <MobileAppVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Web Dashboard Deep Dive */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 mt-12 lg:mt-0">
              <DashboardVisual />
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-purple-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Web Dashboard for Managers
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                A powerful command center for plantation managers and
                administrators. Full control over entities, workflows,
                approvals, and users.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: Database,
                    title: "Entity Management",
                    description:
                      "Create and organize trees, pollen batches, seeds, and more",
                  },
                  {
                    icon: Settings,
                    title: "Workflow Configuration",
                    description:
                      "Define custom processes without writing any code",
                  },
                  {
                    icon: CheckCircle,
                    title: "Approval Workflows",
                    description:
                      "Review and approve field submissions remotely from anywhere",
                  },
                  {
                    icon: Users,
                    title: "User Management",
                    description:
                      "Role-based access control — decide who can access what",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/demo">
                <Button
                  variant="outline"
                  className="gap-2 border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  See It In Action
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & AI Chatbot */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              ✨ Highlighted Feature
            </div>
            <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-7 h-7 text-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Analytics & AI Chatbot
            </h2>
            <p className="text-lg text-slate-400">
              Turn your operational data into actionable insights. Ask questions
              in plain language and get instant answers.
            </p>
          </div>

          {/* AI Query Examples */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              "How many seeds were produced last month?",
              "Which trees have the highest pollen yield this quarter?",
              "Show me all pending health verifications.",
              "What's the average time from pollination to harvest?",
            ].map((query, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-slate-300 italic">&quot;{query}&quot;</p>
              </motion.div>
            ))}
          </div>

          {/* Analytics Capabilities */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability & Audit Trail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
                ✨ Highlighted Feature
              </div>
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Traceability & Audit Trail
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Every action is permanently recorded with who did it, when, and
                what changed. Meet EUDR, RSPO, and certification requirements
                with confidence.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Layers,
                    title: "Complete Lineage",
                    description:
                      "Trace any seed back to its source tree in seconds, not hours",
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
                    description:
                      "Meet EUDR, RSPO, and global certification requirements",
                  },
                  {
                    icon: Clock,
                    title: "Instant Audits",
                    description:
                      "Generate traceability reports in seconds, not days",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <AuditTrailVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Configurable Workflows */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-6">
              ✨ Highlighted Feature
            </div>
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cog className="w-7 h-7 text-orange-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Configurable Workflows
            </h2>
            <p className="text-lg text-slate-600">
              PalmVue adapts to how you work, not the other way around.
              Configure workflows through the admin panel — no coding required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is PalmVue For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Built for the Palm Industry
            </h2>
            <p className="text-lg text-slate-600">
              PalmVue is purpose-built for palm oil and palm seed operations.
              Every feature designed for your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            See how PalmVue can bring complete visibility and control to your
            palm seed production.
          </p>
          <Link href="/demo">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 gap-2"
            >
              Try Interactive Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Static Visual Components

function MobileAppVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-[280px] mx-auto"
    >
      <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-xs text-slate-500">
            <span>9:41</span>
            <div className="flex gap-1">
              <WifiOff className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium">Offline</span>
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-slate-900">
                  Field Tasks
                </div>
                <div className="text-sm text-slate-500">Block A-12</div>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <QrCode className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            {/* Task Cards */}
            {["Pollination Check", "Harvest Record", "Quality Grade"].map(
              (task, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-slate-900">{task}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${i === 0 ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"}`}
                    >
                      {i === 0 ? "Active" : "Pending"}
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{
                        width: i === 0 ? "60%" : i === 1 ? "30%" : "0%",
                      }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
    >
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg" />
          <div className="w-24 h-2 bg-slate-200 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-slate-100 rounded-full" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 bg-slate-50/50">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {["Trees", "Pollen", "Seeds", "Pending"].map((label, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 border border-slate-100"
            >
              <div className="text-2xl font-bold text-slate-900">
                {[1247, 89, 3421, 12][i]}
              </div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Table Preview */}
        <div className="bg-white rounded-lg border border-slate-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
            <span className="font-medium text-slate-900">
              Recent Submissions
            </span>
            <div className="w-20 h-2 bg-slate-100 rounded" />
          </div>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="px-4 py-3 border-b border-slate-50 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-50 rounded" />
                <div className="w-32 h-2 bg-slate-100 rounded" />
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${i === 2 ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
              >
                {i === 2 ? "Pending" : "Approved"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AuditTrailVisual() {
  const auditEntries = [
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
          <Shield className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <div className="font-semibold text-slate-900">Audit Trail</div>
          <div className="text-sm text-slate-500">
            Immutable record of all actions
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {auditEntries.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              {index < auditEntries.length - 1 && (
                <div className="w-0.5 h-full bg-slate-200 mt-1" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-slate-900">
                    {entry.action}
                  </span>
                  <div className="text-sm text-slate-500">
                    {entry.user} • {entry.entity}
                  </div>
                </div>
                <span className="text-xs text-slate-400">{entry.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
