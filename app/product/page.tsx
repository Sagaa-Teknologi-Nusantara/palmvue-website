"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Smartphone, Monitor, Database, ArrowRight, Layers, ShieldCheck } from "lucide-react"

export default function ProductPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero */}
            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-6"
                    >
                        The Operating System for <br />
                        <span className="text-emerald-600">Sustainable Palm Oil</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
                    >
                        Replace fragmented spreadsheets and paper trails with a single, unified platform designed for the field.
                    </motion.p>
                </div>

                {/* Abstract Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white -z-10" />
            </section>

            {/* Feature Deep Dive 1: Mobile */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                            <Smartphone className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Field Operations App</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Empower your workforce with a tool they'll actually use. Our mobile app works 100% offline, syncing implicitly when connectivity is restored.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Offline-first architecture', 'GPS geo-fencing for harvest verification', 'Photo proof for grading'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-12 lg:mt-0 relative">
                        <MobileAppPreview />
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive 2: Web Dashboard */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <DashboardPreview />
                    </div>
                    <div className="order-1 lg:order-2 mt-12 lg:mt-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Monitor className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Command Center</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Monitor yield, quality, and transit in real-time. Our dashboard provides granular visibility from the estate level down to the individual block.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Real-time yield mapping', 'Quality control approval workflows', 'Automated weighbridge integration'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

function MobileAppPreview() {
    return (
        <div className="relative w-[300px] h-[600px] mx-auto bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
            <div className="absolute top-0 w-full h-8 bg-slate-900 z-20 flex justify-center">
                <div className="w-32 h-6 bg-black rounded-b-xl" />
            </div>

            <div className="bg-white h-full w-full pt-10 px-4 pb-8 flex flex-col relative font-sans">
                {/* App Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <div className="text-lg font-bold text-slate-900">Field Tasks</div>
                        <div className="text-xs text-slate-500">Estate A - Block 4</div>
                    </div>
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Task Cards */}
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="text-sm font-medium text-slate-900">Harvest Verify</div>
                                <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-600">Pending</span>
                            </div>
                            <div className="h-2 w-full bg-slate-200 rounded-full mb-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-emerald-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60%" }}
                                    transition={{ delay: 0.5 + (i * 0.2), duration: 1 }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>Batch #{4092 + i}</span>
                                <span>10:4{i} AM</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Action Button */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 right-6 w-14 h-14 bg-emerald-600 rounded-full shadow-lg shadow-emerald-600/30 flex items-center justify-center text-white text-2xl"
                >
                    +
                </motion.div>
            </div>
        </div>
    )
}

function DashboardPreview() {
    return (
        <div className="aspect-video bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative flex flex-col">
            {/* Sidebar & Topbar Mock */}
            <div className="h-12 border-b border-slate-100 flex items-center px-6 bg-slate-50/50 justify-between">
                <div className="flex gap-4 items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded" />
                    <div className="w-24 h-2 bg-slate-200 rounded" />
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-slate-100 rounded-full" />
                </div>
            </div>

            <div className="flex-1 p-6 bg-slate-50/30">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="h-24 bg-white rounded-lg border border-slate-100 p-4 shadow-sm"
                        >
                            <div className="w-8 h-8 bg-blue-50 rounded mb-2" />
                            <div className="w-16 h-2 bg-slate-100 rounded" />
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 h-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="col-span-2 bg-white rounded-lg border border-slate-100 shadow-sm p-4 relative"
                    >
                        <div className="absolute bottom-4 left-4 right-4 h-24 flex items-end justify-between gap-2">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-full bg-blue-500/20 rounded-t-sm"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${Math.random() * 100}%` }}
                                    transition={{ delay: 0.8 + (i * 0.05), duration: 0.5 }}
                                >
                                    <motion.div
                                        className="w-full bg-blue-600 rounded-t-sm"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "60%" }}
                                        transition={{ delay: 1 + (i * 0.05), duration: 0.5 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="col-span-1 bg-white rounded-lg border border-slate-100 shadow-sm p-4 flex items-center justify-center"
                    >
                        <div className="w-24 h-24 rounded-full border-[6px] border-slate-100 border-t-emerald-500 animate-[spin_3s_linear_infinite]" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
