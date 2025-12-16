"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Monitor, Bot, QrCode } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    {
        id: "mobile",
        title: "Offline-First Mobile App",
        icon: Smartphone,
        color: "bg-emerald-500",
        description: "Designed for remote estates. Field workers can record pollination, harvest, and transport data without internet connectivity. Syncs automatically when back online.",
        image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Mobile+Interface" // Placeholder
    },
    {
        id: "erp",
        title: "Centralized Web ERP",
        icon: Monitor,
        color: "bg-blue-500",
        description: "Command center for management and labs. Monitor production progress, validate batch quality, and generate audit-ready reports in real-time.",
        image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Web+Dashboard"
    },
    {
        id: "ai",
        title: "AI Analytics & Chatbot",
        icon: Bot,
        color: "bg-purple-500",
        description: "Natural language interface for your data. Ask 'Which mother trees produced the highest yield?' or 'Show me certified batches ready for shipment.'",
        image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=AI+Chat+Interface"
    },
    {
        id: "qr",
        title: "QR Traceability",
        icon: QrCode,
        color: "bg-orange-500",
        description: "The backbone of integrity. Unique QR codes tracking every step from flower isolation to final seed packaging. Immutable proof of origin.",
        image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=QR+Workflow"
    },
]

export function Platform() {
    const [activeTab, setActiveTab] = React.useState(features[0].id)

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                        One platform, complete visibility.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Connect field operations, lab validation, and improved compliance in a single vertical stack.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Tabs Navigation */}
                    <div className="flex-1 space-y-4">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className={cn(
                                    "w-full text-left p-6 rounded-xl border transition-all duration-300 group relative overflow-hidden",
                                    activeTab === feature.id
                                        ? "border-palmvue-green bg-emerald-50/30 shadow-md ring-1 ring-emerald-500/20"
                                        : "border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200"
                                )}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                                        activeTab === feature.id ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm"
                                    )}>
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className={cn(
                                            "text-lg font-semibold mb-1 transition-colors",
                                            activeTab === feature.id ? "text-palmvue-green" : "text-slate-900"
                                        )}>
                                            {feature.title}
                                        </h3>
                                        <p className={cn(
                                            "text-sm leading-relaxed transition-colors",
                                            activeTab === feature.id ? "text-slate-700" : "text-slate-500"
                                        )}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Feature Preview */}
                    <div className="flex-1 lg:h-[600px] bg-slate-100 rounded-2xl border border-slate-200 p-2 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {features.map((feature) => (
                                activeTab === feature.id && (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, scale: 0.98, x: 20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.98, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-2 bg-white rounded-xl shadow-inner border border-slate-100 overflow-hidden"
                                    >
                                        {/* Abstract Representation of UI */}
                                        <div className="w-full h-full flex items-center justify-center bg-slate-50">
                                            {/* Placeholder for Screenshot */}
                                            <div className="text-center p-8">
                                                <div className={cn("w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg", feature.color)}>
                                                    <feature.icon className="w-10 h-10 text-white" />
                                                </div>
                                                <h4 className="text-slate-900 font-bold text-xl mb-2">{feature.title} Demo</h4>
                                                <p className="text-slate-500 max-w-sm mx-auto">High-fidelity UI visualization would appear here.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
