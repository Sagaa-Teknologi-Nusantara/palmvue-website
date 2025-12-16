"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sprout, Factory, Building2, Check } from "lucide-react"

export default function SolutionPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
                    >
                        Solutions for Every Stakeholder
                    </motion.h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Whether you produce seeds, manage estates, or process oil, PalmVue unifies your data chain.
                    </p>
                </div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
                {/* Segment 1: Seed Producers */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 bg-emerald-50 p-8 rounded-3xl">
                        <Sprout className="w-12 h-12 text-emerald-600 mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">For Seed Producers</h3>
                        <p className="text-slate-600 mb-6">Validate genetic purity and prevent counterfeit seeds.</p>
                        <ul className="space-y-3">
                            {['QR tagging for every batch', 'Genetic lab integration', 'Anti-counterfeit verification'].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm font-medium text-slate-700">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-8">
                        <SeedLifecycle />
                    </div>
                </div>

                {/* Segment 2: Estates */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <HarvestAnalytics />
                    </div>
                    <div className="lg:col-span-4 bg-blue-50 p-8 rounded-3xl order-1 lg:order-2">
                        <Building2 className="w-12 h-12 text-blue-600 mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">For Estates</h3>
                        <p className="text-slate-600 mb-6">Maximize yield and ensure fair worker compensation.</p>
                        <ul className="space-y-3">
                            {['Digital harvester grading', 'Block-level yield history', 'Payroll integration'].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm font-medium text-slate-700">
                                    <Check className="w-5 h-5 text-blue-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Segment 3: Mills */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 bg-orange-50 p-8 rounded-3xl">
                        <Factory className="w-12 h-12 text-orange-600 mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">For Mills</h3>
                        <p className="text-slate-600 mb-6">Ensure 100% traceability for regulatory compliance (EUDR).</p>
                        <ul className="space-y-3">
                            {['Supply shed mapping', 'Deforestation monitoring', 'Automated FFB grading'].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm font-medium text-slate-700">
                                    <Check className="w-5 h-5 text-orange-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-8">
                        <SupplyShedMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

function SeedLifecycle() {
    return (
        <div className="bg-slate-50 border border-slate-100 rounded-3xl h-full p-8 flex items-center justify-center min-h-[300px] overflow-hidden relative">
            <div className="flex items-center gap-8 relative z-10 text-center">
                {/* Step 1 */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center mb-3">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-4 h-4 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase">Pollination</span>
                </motion.div>
                {/* Arrow */}
                <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} transition={{ delay: 0.5, duration: 0.5 }} className="h-0.5 bg-slate-300" />

                {/* Step 2 */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center mb-3">
                        <Sprout className="w-8 h-8 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase">Growth</span>
                </motion.div>
                {/* Arrow */}
                <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} transition={{ delay: 1, duration: 0.5 }} className="h-0.5 bg-slate-300" />

                {/* Step 3 */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center mb-3">
                        <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase">Certified</span>
                </motion.div>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
    )
}

function HarvestAnalytics() {
    return (
        <div className="bg-slate-50 border border-slate-100 rounded-3xl h-full p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="flex justify-between items-end h-40 gap-4">
                    {[45, 78, 56, 90, 67, 88].map((value, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end gap-2 group">
                            <div className="text-center text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{value}%</div>
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${value}%` }}
                                transition={{ delay: i * 0.1, type: "spring", bounce: 0 }}
                                className="w-full bg-blue-500/20 rounded-t-lg relative hover:bg-blue-500/30 transition-colors"
                            >
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${value * 0.7}%` }}
                                    transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                    className="absolute bottom-0 w-full bg-blue-600 rounded-t-lg"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 border-t border-slate-100 pt-3 flex justify-between text-xs text-slate-500 font-medium uppercase">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                </div>
            </div>
        </div>
    )
}

function SupplyShedMap() {
    return (
        <div className="bg-slate-900 rounded-3xl h-full p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden group">
            {/* Map Placeholder Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Map Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Central Hub (Mill) */}
            <div className="relative z-10 w-24 h-24 rounded-full border-4 border-orange-500/50 flex items-center justify-center bg-slate-900/80 backdrop-blur">
                <Factory className="w-10 h-10 text-orange-500" />
                <div className="absolute -inset-4 border border-orange-500/20 rounded-full animate-ping" />
            </div>

            {/* Satellites (Estates) */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    style={{
                        transform: `rotate(${deg}deg) translate(120px) rotate(-${deg}deg)`
                    }}
                >
                    <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    {/* Connection Line */}
                    <svg className="absolute top-1/2 left-1/2 w-[120px] h-[2px] -z-10 overflow-visible" style={{ transform: `translate(-120px, -1px) rotate(${deg}deg)`, transformOrigin: "right center" }}>
                        <motion.line
                            x1="0" y1="0" x2="120" y2="0"
                            stroke="url(#gradient)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    )
}
