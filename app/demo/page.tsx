"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function DemoPage() {
    return (
        <div className="min-h-screen pt-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Limited Access Phase
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-8"
                    >
                        The Future of Palm Oil <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            Launches Q2 2026
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        PalmVue is currently in private beta with select enterprise partners. We are building the infrastructure for the next generation of sustainable agriculture.
                    </motion.p>

                    {/* Waitlist Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full max-w-md bg-white p-2 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row gap-2"
                    >
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder:text-slate-400 outline-none"
                        />
                        <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-12 px-6 shrink-0">
                            Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 text-sm text-slate-400"
                    >
                        Priority access for seed producers and certified estates.
                    </motion.p>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                    >
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Early Access</h3>
                            <p className="text-slate-600 text-sm">Be the first to pilot our offline-first mobile engine.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Founder Support</h3>
                            <p className="text-slate-600 text-sm">Direct line to our engineering team for custom integrations.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Locked Pricing</h3>
                            <p className="text-slate-600 text-sm">Secure legacy pricing for the first 2 years of your contract.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent -z-10 pointer-events-none" />
        </div>
    )
}
