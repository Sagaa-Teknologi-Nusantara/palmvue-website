"use client"

import { motion } from "framer-motion"
import { Cog, CheckCircle2, Plus, Smartphone, List, ArrowRight } from "lucide-react"

export function WorkflowEngine() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-slate-100/50 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                                <Cog className="w-4 h-4" />
                                Dynamic Workflow Engine
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                                One Platform. <br />
                                <span className="text-palmvue-green">Infinite Processes.</span>
                            </h2>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Most platforms force you to change your operations to fit their software. PalmVue adapts to you.
                                Our engine allows you to define workflows as data, ensuring you can meet unique SOPs and certification requirements without writing a single line of code.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Entity-Driven Execution", desc: "Workflows trigger automatically when you create a Tree, Flower, or Batch." },
                                    { title: "Immutable Audit Trails", desc: "Every step, form submission, and approval is versioned and locked for compliance." },
                                    { title: "Schema-Based Forms", desc: "Field interfaces are generated dynamically from your JSON definitions." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side: Configuration Sync Animation */}
                    <div className="order-1 lg:order-2 relative w-full perspective-[2000px]">
                        <motion.div
                            initial={{ opacity: 0, rotateY: -5, scale: 0.95 }}
                            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl bg-white border border-slate-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-center gap-12 overflow-hidden"
                        >
                            {/* Content Wrapper to ensure fit */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16 scale-90 sm:scale-100">
                                {/* 1. The Config Panel (Source) */}
                                <div className="w-64 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-xl p-6 relative z-10 hidden sm:block transform transition hover:scale-105 duration-300">
                                    <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                                        <div className="p-1.5 bg-slate-200 rounded text-slate-500">
                                            <List className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 tracking-tight">Workflow Rules</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="group flex items-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                            <div className="w-24 h-2 bg-slate-100 rounded group-hover:bg-slate-200 transition-colors" />
                                        </div>
                                        <div className="group flex items-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                            <div className="w-32 h-2 bg-slate-100 rounded group-hover:bg-slate-200 transition-colors" />
                                        </div>
                                        {/* Animated New Rule */}
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            whileInView={{ opacity: 1, height: "auto", marginTop: 16 }}
                                            transition={{ delay: 1, duration: 0.5 }}
                                            className="bg-emerald-50/80 rounded-lg border border-emerald-200 flex items-center p-3 overflow-hidden shadow-sm"
                                        >
                                            <div className="p-1 bg-emerald-200/50 rounded-full mr-3">
                                                <Plus className="w-3 h-3 text-emerald-700" />
                                            </div>
                                            <span className="text-sm text-emerald-800 font-semibold">Add Photo Proof</span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Arrow Connection */}
                                <div className="hidden sm:flex flex-col items-center justify-center text-slate-300 relative z-10">
                                    <ArrowRight className="w-10 h-10 text-slate-200 animate-[pulse_3s_ease-in-out_infinite]" strokeWidth={2} />
                                </div>

                                {/* 2. The Mobile App (Target) */}
                                <div className="w-[260px] shrink-0 bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden relative z-10">
                                    {/* Mobile Header */}
                                    <div className="bg-white h-12 w-full flex justify-between items-center px-6 relative z-20 border-b border-slate-50">
                                        <div className="text-[12px] font-semibold text-slate-900">9:41</div>
                                        {/* Simple Camera Dot */}
                                        <div className="w-16 h-4 bg-slate-100 rounded-full absolute left-1/2 -translate-x-1/2 top-4" />
                                        <div className="flex gap-1">
                                            <div className="w-4 h-2 bg-slate-800 rounded-[2px]" />
                                        </div>
                                    </div>

                                    {/* Mobile Screen */}
                                    <div className="bg-white h-[480px] w-full p-5 space-y-5 relative">
                                        <div className="space-y-2">
                                            <div className="w-16 h-2.5 bg-slate-100 rounded-full" />
                                            <div className="w-full h-10 bg-slate-50 border border-slate-200 rounded-lg" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="w-24 h-2.5 bg-slate-100 rounded-full" />
                                            <div className="w-full h-10 bg-slate-50 border border-slate-200 rounded-lg" />
                                        </div>

                                        {/* Animated New Input */}
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, height: "auto", scale: 1 }}
                                            transition={{ delay: 1.2, duration: 0.5, type: "spring", bounce: 0.3 }}
                                            className="space-y-2 overflow-hidden origin-top"
                                        >
                                            <div className="w-24 h-2.5 bg-emerald-100 rounded-full" />
                                            <div className="w-full h-32 bg-emerald-50/50 border-2 border-dashed border-emerald-300/50 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-emerald-50 transition-colors">
                                                <div className="p-2.5 bg-white rounded-full shadow-sm">
                                                    <Smartphone className="w-5 h-5 text-emerald-500" />
                                                </div>
                                                <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">Upload Photo</span>
                                            </div>
                                        </motion.div>

                                        {/* Link to Action */}
                                        <div className="absolute bottom-6 left-5 right-5">
                                            <div className="h-10 w-full bg-slate-900 rounded-lg shadow-lg shadow-slate-900/10 flex items-center justify-center">
                                                <span className="text-white text-xs font-semibold">Submit Batch</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Blobs */}
                            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-70" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-70" />
                        </motion.div>
                    </div>

                </div>
            </div >
        </section >
    )
}
