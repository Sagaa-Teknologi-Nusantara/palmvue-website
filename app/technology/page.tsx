"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Database, Shield, Zap, Lock, Code2, Network } from "lucide-react"

export default function TechnologyPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-6"
                    >
                        Engineered for <span className="text-emerald-600">Reliability</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Built on a modern stack designed for low-connectivity environments, massive scale, and audit-grade security.
                    </motion.p>
                </div>
            </section>

            {/* Architecture Diagram (Abstract) */}
            <section className="py-16 border-y border-slate-100 bg-slate-50/50">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="aspect-[16/9] bg-white rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden flex items-center justify-center">
                        {/* Animated Diagram */}
                        <div className="relative z-10 grid grid-cols-3 gap-12 items-center">
                            {/* Source: Mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-200"
                            >
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                                    <Zap className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-xs font-bold text-slate-700">Mobile Nodes</span>
                            </motion.div>

                            {/* Middle: Sync Layer */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center relative"
                            >
                                <div className="absolute inset-0 border border-dashed border-slate-600 rounded-full animate-[spin_10s_linear_infinite]" />
                                <Network className="w-10 h-10 text-white" />
                                <div className="absolute -bottom-8 text-xs font-bold text-slate-500 text-center w-full">Sync Engine</div>
                            </motion.div>

                            {/* Target: Cloud/Ledger */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col items-center p-4 bg-blue-50 rounded-xl border border-blue-100"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                    <Database className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-xs font-bold text-blue-700">Cloud Ledger</span>
                            </motion.div>
                        </div>

                        {/* Data Particles */}
                        <motion.div
                            className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100/0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <motion.div
                                className="w-2 h-2 bg-emerald-500 rounded-full absolute top-0"
                                animate={{ left: ["20%", "50%", "80%"], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="w-2 h-2 bg-blue-500 rounded-full absolute top-0"
                                animate={{ left: ["80%", "50%", "20%"], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Specs Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Zap className="w-10 h-10 text-amber-500 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Offline-Sync Protocol</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our proprietary conflict-resolution engine ("LeafNode") allows thousands of devices to write data offline and merge changes instantly upon reconnection.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Shield className="w-10 h-10 text-emerald-500 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Immutable Audit Logs</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Every transaction is cryptographically signed and appended to a tamper-evident ledger, ensuring complete traceability for EUDR compliance.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Code2 className="w-10 h-10 text-blue-500 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">API-First Design</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Integrate with existing SAP, Oracle, or Microsoft Dynamics ERPs via our robust GraphQL API. Your data is yours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Lock className="w-5 h-5 text-emerald-400" />
                                <span className="text-slate-300">SOC 2 Type II Compliant (In Progress)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Lock className="w-5 h-5 text-emerald-400" />
                                <span className="text-slate-300">End-to-end Encryption (TLS 1.3 & AES-256)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Lock className="w-5 h-5 text-emerald-400" />
                                <span className="text-slate-300">Role-Based Access Control (RBAC)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center gap-8 opacity-70">
                        {/* Fake Security Badges */}
                        <div className="w-24 h-24 border border-slate-700 rounded-full flex items-center justify-center text-xs text-center font-bold text-slate-500">ISO 27001</div>
                        <div className="w-24 h-24 border border-slate-700 rounded-full flex items-center justify-center text-xs text-center font-bold text-slate-500">GDPR Ready</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
