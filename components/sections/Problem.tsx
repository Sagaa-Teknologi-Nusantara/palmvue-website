"use client"

import { motion } from "framer-motion"
import { AlertCircle, FileX, Scale } from "lucide-react"

const problems = [
    {
        icon: FileX,
        title: "Fragmented Processes",
        description: "Manual, paper-based recording across production stages leads to 40% data duplication and high human error rates.",
    },
    {
        icon: AlertCircle,
        title: "Illegal Seed Circulation",
        description: "Without granular traceability, up to 30% of seeds in circulation are illegitimate, compromising yield and genetic integrity.",
    },
    {
        icon: Scale,
        title: "Regulatory Pressure",
        description: "New global standards like EUDR and RSPO require audit-ready proof of origin that legacy ERPs cannot provide.",
    },
]

export function Problem() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4"
                    >
                        The hidden cost of unverified seeds.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        The industry suffers from a critical blind spot between genetic potential and plantation reality.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-slate-100 group-hover:from-palmvue-green group-hover:to-signal-cyan transition-all duration-500 rounded-t-xl" />

                            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                                <problem.icon className="w-6 h-6 text-slate-500 group-hover:text-palmvue-green transition-colors" />
                            </div>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
