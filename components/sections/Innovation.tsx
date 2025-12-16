"use client"

import { motion } from "framer-motion"
import { Check, Leaf, WifiOff, Cpu, QrCode } from "lucide-react"

const differentiators = [
    {
        title: "Seed-Level Traceability",
        description: "Most systems stop at the block level. PalmVue tracks individual seed lineage from mother tree to germination.",
        icon: Leaf,
        stat: "100%",
        statLabel: "Genetic Integrity"
    },
    {
        title: "Offline-First Architecture",
        description: "Built for remote plantations. Data is encrypted and stored locally, syncing automatically when connectivity returns.",
        icon: WifiOff,
        stat: "0ms",
        statLabel: "Downtime Latency"
    },
    {
        title: "AI-Native Analytics",
        description: "Vector database integration allows semantic search across millions of production records and historical yield data.",
        icon: Cpu,
        stat: "10x",
        statLabel: "Faster Reporting"
    }
]

export function Innovation() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
                        Built for the <span className="text-emerald-400">future of agriculture</span>.
                    </h2>
                    <p className="text-lg text-slate-400">
                        We reimagined the entire seed production stack to solve problems that generic ERPs ignore.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                                    <item.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-white font-mono">{item.stat}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">{item.statLabel}</div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
