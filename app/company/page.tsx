"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Leaf, Heart, Globe, Users } from "lucide-react"

export default function CompanyPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero */}
            <section className="py-20 lg:py-32 bg-emerald-950 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl font-bold tracking-tight mb-8"
                    >
                        Digitizing the First Mile
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        We founded PalmVue with a simple belief: you cannot fix what you cannot see. By bringing transparency to the seed-to-oil supply chain, we are enabling a sustainable future for the industry.
                    </motion.p>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </section>

            {/* Values */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <Leaf className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Sustainability First</h3>
                        <p className="text-slate-600 text-sm">We only build tools that help the planet.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                            <Heart className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Farmer Centric</h3>
                        <p className="text-slate-600 text-sm">Technology must be usable by the people on the ground.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                            <Globe className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Radical Transparency</h3>
                        <p className="text-slate-600 text-sm">Sunlight is the best disinfectant.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Win-Win-Win</h3>
                        <p className="text-slate-600 text-sm">For the estate, the smallholder, and the environment.</p>
                    </div>
                </div>
            </section>

            {/* Team Placeholder */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Andrei Hansel Z.", role: "CEO", bio: "Ex-Cargill supply chain lead. 15 years in sustainable agriculture." },
                            { name: "Gibran Fasha G.", role: "CTO", bio: "Former Principal Engineer at GoTo. Specialist in distributed systems." },
                            { name: "Auvarifqi P. Diandra", role: "Head of Product", bio: "Ex-Cargill supply chain lead. 15 years in sustainable agriculture." },
                            { name: "Kevin Sebastian T.", role: "Head of Innovation", bio: "Ex-Cargill supply chain lead. 15 years in sustainable agriculture." },
                            { name: "M. Fadhil Abrar", role: "COO", bio: "Ex-Cargill supply chain lead. 15 years in sustainable agriculture." },
                            { name: "Ir. Rasidin Azwar, M.Sc., PhD., APU", role: "Head of Impact", bio: "PhD in Environmental Science. Led certification projects for RSPO." }
                        ].map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 overflow-hidden border-2 border-slate-50 relative group-hover:border-emerald-200 transition-colors">
                                    {/* Mock Avatar Gradient */}
                                    <div className={`w-full h-full bg-gradient-to-br ${i === 0 ? 'from-emerald-200 to-teal-300' : i === 1 ? 'from-blue-200 to-indigo-300' : 'from-orange-200 to-amber-300'}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                                <div className="text-emerald-600 text-sm font-semibold mb-3">{leader.role}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
