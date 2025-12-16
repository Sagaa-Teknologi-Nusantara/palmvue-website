"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Monitor, Bot, QrCode, Wifi, WifiOff, Check, BarChart3, PieChart, Factory, Truck } from "lucide-react"
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
                    <div className="flex-1 lg:h-[600px] h-[500px] bg-slate-50/50 rounded-3xl border border-slate-200 p-8 relative overflow-hidden flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {features.map((feature) => (
                                activeTab === feature.id && (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        {feature.id === "mobile" && <MobileAnimation />}
                                        {feature.id === "erp" && <ERPAnimation />}
                                        {feature.id === "ai" && <AIAnimation />}
                                        {feature.id === "qr" && <QRAnimation />}
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

function MobileAnimation() {
    return (
        <div className="relative w-[280px] h-[520px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 h-8 w-full flex justify-center relative z-20">
                <div className="absolute top-0 w-24 h-6 bg-black rounded-b-xl" />
            </div>
            <div className="bg-slate-50 w-full h-full pt-4 px-4 pb-8 flex flex-col relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-slate-800">My Tasks</span>
                    <motion.div
                        animate={{ backgroundColor: ["#ef4444", "#10b981"] }} // Red to Green
                        transition={{ duration: 0.5, delay: 2, times: [0, 1] }}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-100"
                    >
                        <motion.div animate={{ opacity: [1, 0] }} transition={{ delay: 2, duration: 0.1 }}>
                            <WifiOff className="w-3 h-3 text-red-600" />
                        </motion.div>
                        <motion.div className="absolute" animate={{ opacity: [0, 1] }} transition={{ delay: 2, duration: 0.1 }}>
                            <Wifi className="w-3 h-3 text-white" />
                        </motion.div>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            className="text-[10px] font-bold text-red-700"
                        >
                            <motion.span animate={{ display: "none" }} transition={{ delay: 2 }}>OFFLINE</motion.span>
                            <motion.span initial={{ display: "none" }} animate={{ display: "inline", color: "#fff" }} transition={{ delay: 2 }}>ONLINE</motion.span>
                        </motion.span>
                    </motion.div>
                </div>

                {/* List Items */}
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                                    #{i}42
                                </div>
                                <div>
                                    <div className="w-20 h-2 bg-slate-200 rounded mb-1.5" />
                                    <div className="w-12 h-1.5 bg-slate-100 rounded" />
                                </div>
                            </div>
                            {/* Sync Status Icon */}
                            <div className="relative w-5 h-5 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 1, scale: 1 }}
                                    animate={{ opacity: 0, scale: 0.5 }}
                                    transition={{ delay: 2 + (i * 0.2), duration: 0.3 }}
                                    className="absolute"
                                >
                                    <div className="w-4 h-4 border-2 border-slate-300 border-t-emerald-500 rounded-full animate-spin" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.2 + (i * 0.2), type: "spring" }}
                                    className="absolute"
                                >
                                    <Check className="w-4 h-4 text-emerald-500" />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Syncing Message */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-16 left-4 right-4 bg-slate-900 text-white p-3 rounded-lg text-xs font-medium flex items-center justify-between shadow-xl"
                >
                    <span>Connection restored...</span>
                    <span className="text-emerald-400">Syncing</span>
                </motion.div>
            </div>
        </div>
    )
}

function ERPAnimation() {
    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[320px]">
            {/* Top Bar */}
            <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 w-32 h-2 bg-slate-200 rounded-full" />
            </div>

            <div className="flex-1 flex p-4 gap-4 bg-slate-50/30">
                {/* Sidebar */}
                <div className="w-12 flex flex-col gap-3 py-2 items-center border-r border-slate-100/50 pr-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors" />
                    ))}
                </div>

                {/* Dashboard Grid */}
                <div className="flex-1 grid grid-cols-2 gap-3 content-start">
                    {/* Stat Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"
                    >
                        <div className="w-6 h-6 rounded bg-emerald-100 mb-2 flex items-center justify-center">
                            <BarChart3 className="w-3 h-3 text-emerald-600" />
                        </div>
                        <div className="w-12 h-2 bg-slate-100 rounded mb-1" />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="h-1.5 bg-emerald-500 rounded-full mt-2"
                        />
                    </motion.div>

                    {/* Stat Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"
                    >
                        <div className="w-6 h-6 rounded bg-blue-100 mb-2 flex items-center justify-center">
                            <PieChart className="w-3 h-3 text-blue-600" />
                        </div>
                        <div className="w-12 h-2 bg-slate-100 rounded mb-1" />
                        <div className="flex gap-1 mt-2 items-end h-4">
                            {[40, 70, 50, 90, 60].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                                    className="flex-1 bg-blue-500 rounded-sm"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Big Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="col-span-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm h-32 flex items-end justify-between px-2 pb-2 gap-1"
                    >
                        {[30, 45, 35, 60, 55, 75, 50, 80, 70, 90].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 1 + (i * 0.05), duration: 0.4 }}
                                className="w-full bg-slate-800 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function AIAnimation() {
    return (
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[400px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-white">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                    <div className="w-20 h-2 bg-slate-200 rounded mb-1" />
                    <div className="w-12 h-1.5 bg-slate-100 rounded" />
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 bg-slate-50 space-y-4 flex flex-col font-sans">
                {/* User Msg */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="self-end bg-slate-900 text-white text-xs py-2 px-4 rounded-2xl rounded-tr-sm max-w-[80%]"
                >
                    Show yield analysis for Block A
                </motion.div>

                {/* Bot Thinking */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 1.5, duration: 1.5, repeat: 0 }} // Disappear after thinking
                    className="self-start text-xs text-slate-400 pl-2"
                >
                    Thinking...
                </motion.div>

                {/* Bot Response */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 2.8 }}
                    className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm w-full shadow-sm"
                >
                    <div className="mb-2 text-xs text-slate-500 font-medium">Here is the yield data for Block A:</div>
                    <div className="h-24 w-full bg-purple-50 rounded-lg flex items-end justify-between px-2 pb-2 gap-1 border border-purple-100">
                        {[40, 60, 45, 90, 75, 85].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 3 + (i * 0.1), duration: 0.5 }}
                                className="w-full bg-purple-500 rounded-t-sm"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
                <div className="w-full h-8 bg-slate-100 rounded-full" />
            </div>
        </div>
    )
}

function QRAnimation() {
    return (
        <div className="relative flex flex-col items-center">
            {/* QR Code Card */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -40 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="w-40 h-40 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 relative z-20"
            >
                <div className="w-full h-full bg-slate-900 rounded-lg pattern-wavy pattern-slate-800 pattern-bg-white pattern-size-4 pattern-opacity-100 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-white" />
                </div>

                {/* Scanner Line */}
                <motion.div
                    initial={{ top: 0, opacity: 0 }}
                    animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.5, repeat: 1, repeatDelay: 3, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-30"
                />
            </motion.div>

            {/* Result Card (Provenance) */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 10, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="w-64 bg-white/90 backdrop-blur rounded-xl border border-slate-200 shadow-xl p-4 relative z-10 -mt-2"
            >
                <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</div>
                        <div className="text-sm font-semibold text-slate-800">Verified Authentic</div>
                    </div>
                </div>

                <div className="space-y-4 relative">
                    <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-slate-100" />

                    <div className="relative flex gap-3 items-center">
                        <div className="w-7 h-7 bg-white border border-slate-200 rounded-full relative z-10 flex items-center justify-center">
                            <Factory className="w-3 h-3 text-slate-500" />
                        </div>
                        <div className="text-xs text-slate-600">
                            <span className="font-semibold block text-slate-800">Milled at Facility A</span>
                            <span className="text-slate-400">10:42 AM</span>
                        </div>
                    </div>
                    <div className="relative flex gap-3 items-center">
                        <div className="w-7 h-7 bg-white border border-slate-200 rounded-full relative z-10 flex items-center justify-center">
                            <Truck className="w-3 h-3 text-slate-500" />
                        </div>
                        <div className="text-xs text-slate-600">
                            <span className="font-semibold block text-slate-800">In Transit</span>
                            <span className="text-slate-400">Current</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
