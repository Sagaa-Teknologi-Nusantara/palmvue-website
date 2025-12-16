"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                    Ready to secure your seed production?
                </h2>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Join the leading producers using PalmVue to eliminate illegal seeds and automate compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-palmvue-green hover:bg-palmvue-green-dark text-white px-10 h-14 text-lg shadow-xl shadow-palmvue-green/20">
                        Request a Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-10 text-lg">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    )
}
