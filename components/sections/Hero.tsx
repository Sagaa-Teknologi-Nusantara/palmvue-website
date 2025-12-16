"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Abstract Visuals */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Audit-Ready Compliance Standard
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Infrastructure for <span className="text-palmvue-green">trusted</span> palm seed production.
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                                The only end-to-end traceability platform designed for certified producers. Track lineage from pollination to shipment, ensuring genetic integrity and regulatory compliance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-palmvue-green hover:bg-palmvue-green-dark text-white px-8 h-12 text-base shadow-lg shadow-palmvue-green/25">
                                    Request a Demo
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="lg" className="h-12 px-8 text-base border-slate-200 text-slate-700 hover:bg-slate-50">
                                    Run a Pilot
                                </Button>
                            </div>

                            <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                                    <span>SNI 8211 Compliant</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-palmvue-green" />
                                    <span>Offline First</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Abstract Visual / Dashboard Preview */}
                    <div className="flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Glass Card Placeholder for Dashboard UI */}
                            <div className="relative rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[4/3]">
                                {/* Mock UI Header */}
                                <div className="absolute top-0 w-full h-12 border-b border-slate-100 flex items-center px-4 gap-2 bg-white/50">
                                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                                </div>

                                {/* Mock UI Content */}
                                <div className="p-8 pt-16 space-y-6">
                                    {/* Stats Row */}
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-24 rounded-lg bg-slate-50 border border-slate-100 p-4">
                                            <div className="w-8 h-8 rounded bg-emerald-100 mb-3" />
                                            <div className="w-16 h-2 bg-slate-200 rounded mb-2" />
                                            <div className="w-10 h-2 bg-slate-100 rounded" />
                                        </div>
                                        <div className="w-1/3 h-24 rounded-lg bg-slate-50 border border-slate-100 p-4">
                                            <div className="w-8 h-8 rounded bg-blue-100 mb-3" />
                                            <div className="w-16 h-2 bg-slate-200 rounded mb-2" />
                                            <div className="w-10 h-2 bg-slate-100 rounded" />
                                        </div>
                                        <div className="w-1/3 h-24 rounded-lg bg-slate-50 border border-slate-100 p-4">
                                            <div className="w-8 h-8 rounded bg-purple-100 mb-3" />
                                            <div className="w-16 h-2 bg-slate-200 rounded mb-2" />
                                            <div className="w-10 h-2 bg-slate-100 rounded" />
                                        </div>
                                    </div>

                                    {/* Graph Area */}
                                    <div className="h-40 w-full rounded-lg bg-slate-50 border border-slate-100 relative overflow-hidden">
                                        <svg className="absolute bottom-0 left-0 w-full h-32 text-emerald-100 fill-current" viewBox="0 0 100 40" preserveAspectRatio="none">
                                            <path d="M0 40 L0 30 C 20 20, 40 35, 60 25 C 80 15, 100 30, 100 10 L 100 40 Z" />
                                        </svg>
                                        <svg className="absolute bottom-0 left-0 w-full h-32 text-emerald-500 fill-none stroke-current stroke-2" viewBox="0 0 100 40" preserveAspectRatio="none">
                                            <path d="M0 30 C 20 20, 40 35, 60 25 C 80 15, 100 30, 100 10" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
