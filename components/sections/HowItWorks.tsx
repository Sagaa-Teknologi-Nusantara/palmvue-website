"use client"

import { motion } from "framer-motion"
import { Sprout, Trees, Archive, Truck } from "lucide-react"

const steps = [
    {
        icon: Sprout,
        title: "Pollination",
        description: "Mother trees are identified and QR-tagged. Pollination details are recorded offline."
    },
    {
        icon: Trees,
        title: "Harvesting",
        description: "Bunches are verified against pollination records before harvesting to ensure legality."
    },
    {
        icon: Archive,
        title: "Processing",
        description: "Seeds are processed in batches with continuous quality checks and lab validation."
    },
    {
        icon: Truck,
        title: "Distribution",
        description: "Certified seeds are packaged with tamper-evident QR codes for customer verification."
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                        Total transparency at every step.
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-slate-100" />

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative bg-white pt-8 md:pt-0"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-6 relative z-10 shadow-sm transition-colors duration-300 hover:border-palmvue-green">
                                        <step.icon className="w-8 h-8 text-slate-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
