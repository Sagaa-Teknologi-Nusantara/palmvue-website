"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AUDIENCE_DATA } from "../constants/product";

export function Audience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Built for the Palm Industry
          </h2>
          <p className="text-lg text-slate-600">
            PalmVue is purpose-built for palm oil and palm seed operations.
            Every feature designed for your unique challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {AUDIENCE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <item.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="py-24 bg-emerald-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-xl text-emerald-100 mb-10">
          See how PalmVue can bring complete visibility and control to your palm
          seed production.
        </p>
        <Link href="/demo">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-emerald-50 gap-2"
          >
            Try Interactive Demo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
